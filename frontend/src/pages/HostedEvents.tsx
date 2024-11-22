import React, { useState } from 'react';
import { Calendar, MapPin, Users, Edit, Trash2 } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';
import ParticipantsList from '../components/ParticipantsList';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  attendees: number;
  image: string;
  description: string;
}

const hostedEvents: Event[] = [
  {
    id: 1,
    title: "Tech Meetup 2024",
    date: "Mar 28, 2024",
    location: "Innovation Hub",
    attendees: 45,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    description: "A gathering of tech enthusiasts to discuss latest trends and innovations."
  },
  {
    id: 2,
    title: "Local Music Festival",
    date: "Apr 15, 2024",
    location: "Central Park",
    attendees: 120,
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
    description: "An evening of live music performances from local artists."
  }
];

export default function HostedEvents() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const handleDeleteEvent = (eventId: number) => {
    // Handle delete event logic
    console.log('Deleting event:', eventId);
  };

  const handleUpdateEvent = (eventId: number) => {
    // Handle update event logic
    console.log('Updating event:', eventId);
  };

  return (
    <DashboardLayout>
      <div className="grid grid-cols-3 gap-6 p-6">
        {/* Events List */}
        <div className="col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Your Hosted Events</h1>
            <button
              onClick={() => window.location.href = '/create-event'}
              className="px-4 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
            >
              Create New Event
            </button>
          </div>
          <div className="space-y-6">
            {hostedEvents.map((event) => (
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
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-gray-600 mb-4">{event.description}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleUpdateEvent(event.id)}
                          className="p-2 text-primary-600 hover:bg-primary-50 rounded-full transition-colors"
                        >
                          <Edit className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteEvent(event.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
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
                      onClick={() => setSelectedEvent(event.id)}
                      className="mt-4 px-4 py-2 text-primary-600 border border-primary-600 rounded-full hover:bg-primary-50 transition-colors"
                    >
                      View Participants
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Participants List */}
        <div>
          {selectedEvent && (
            <ParticipantsList
              eventId={selectedEvent}
              onClose={() => setSelectedEvent(null)}
            />
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}