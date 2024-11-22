import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DashboardLayout from '../components/DashboardLayout';
import EventPost from '../components/EventPost';
import SuggestedBuddies from '../components/SuggestedBuddies';
import { PlusCircle, Bell } from 'lucide-react';

interface Event {
  id: string;
  name: string;
  host: string;
  date: string;
  time?: string;
  location: string;
  attendees: number;
  category: string;
  image: string;
  description: string;
}

export default function Dashboard() {
  const navigate = useNavigate();
  const [eventsFeed, setEventsFeed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch events from the backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:4000/events', {
          headers: {
            Authorization: `${localStorage.getItem('token')}`
          }
        }); // Adjust the URL if needed
        const events = response.data.events.map((event: Event) => ({
          ...event,
          id: event.id, // Map `_id` to `id`
        }));
        setEventsFeed(events);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to load events. Please try again later.');
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Events Feed Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Create Event Button */}
          <button
            onClick={() => navigate('/create-event')}
            className="w-full bg-white rounded-lg shadow p-4 flex items-center justify-center space-x-2 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
          >
            <PlusCircle className="h-6 w-6 text-primary-600" />
            <span className="text-lg font-medium text-gray-700">Create New Event</span>
          </button>

          {/* Events Feed */}
          {loading ? (
            <p>Loading events...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : eventsFeed.length > 0 ? (
            eventsFeed.map((event: Event) => <EventPost key={event.id} {...event} />)
          ) : (
            <p>No events found.</p>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Community Chats */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Community Chats</h2>
              <Bell className="h-5 w-5 text-gray-500" />
            </div>
            {/* Add your Community Chats logic here */}
          </div>

          {/* Suggested Buddies */}
          <SuggestedBuddies />
        </div>
      </div>
    </DashboardLayout>
  );
}
