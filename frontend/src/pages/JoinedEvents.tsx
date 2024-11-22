import React, {useState, useEffect} from 'react';
import { Calendar, MapPin, Users, X } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';

const joinedEvents = [
  {
    id: 1,
    title: "Tech Meetup 2024",
    host: "Sarah Parker",
    date: "Mar 28, 2024",
    location: "Innovation Hub",
    attendees: 45,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
  },
  {
    id: 2,
    title: "Local Music Festival",
    host: "Mike Johnson",
    date: "Apr 15, 2024",
    location: "Central Park",
    attendees: 120,
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
  }
];
interface Event {
  id: number;
  title: string;
  host: string;
  date: string;
  location: string;
  attendees: number;
  image: string;
}

export default function JoinedEvents() {

  const [joinedEvents, setJoinedEvents] = useState<Event[]>([]); // State to store events
  const [loading, setLoading] = useState<boolean>(true); // State for loading status
  const [error, setError] = useState<string | null>(null);

  // Fetch events on component mount
  useEffect(() => {
    const fetchJoinedEvents = async () => {
      try {
        const response = await fetch('http://localhost:4000/joinedEvents', {
          method: 'GET',
          headers: {
            'Authorization': `${localStorage.getItem('token')}`, // Assuming token is stored in localStorage
          },
        });

        const data = await response.json();
        
        if (response.ok) {
          setJoinedEvents(data.events); // Assuming the response contains an 'events' field
        } else {
          setError(data.message || 'Failed to fetch events.');
        }
      } catch (err) {
        setError('Something went wrong. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchJoinedEvents();
  }, []);

  const handleLeaveEvent = async (eventId: number) => {
    try {
      const response = await fetch(`http://localhost:4000/leaveEvent/${eventId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      const data = await response.json();
      
      if (response.ok) {
        // Optionally, remove the event from the local state (or re-fetch events)
        setJoinedEvents((prevEvents) => prevEvents.filter(event => event.id !== eventId));
      } else {
        alert(data.message || 'Failed to leave event.');
      }
    } catch (error) {
      console.error('Error leaving event:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }


  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Your Joined Events</h1>
        <div className="space-y-6">
          {joinedEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="flex">
                <div className="w-48 h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                      <p className="text-gray-600 mb-3">Hosted by {event.host}</p>
                    </div>
                    <button
                      onClick={() => handleLeaveEvent(event.id)}
                      className="text-red-600 hover:text-red-700 transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-primary-500" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-primary-500" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-primary-500" />
                      {event.attendees} attending
                    </div>
                  </div>
                  <button
                    onClick={() => handleLeaveEvent(event.id)}
                    className="mt-4 px-4 py-2 text-red-600 border border-red-600 rounded-full hover:bg-red-50 transition-colors"
                  >
                    Leave Event
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}