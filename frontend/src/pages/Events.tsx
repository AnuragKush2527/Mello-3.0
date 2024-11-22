import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import EventCard from '../components/EventCard';

const events = [
  {
    id: '1',
    title: 'Local Music Festival',
    date: 'Mar 15, 2024',
    time: '6:00 PM',
    location: 'Central Park',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3',
    attendees: 128,
    category: 'Music',
  },
  {
    id: '2',
    title: 'Coffee & Code',
    date: 'Mar 18, 2024',
    time: '10:00 AM',
    location: 'Tech Hub Café',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
    attendees: 45,
    category: 'Social',
  },
  {
    id: '3',
    title: 'Art Workshop',
    date: 'Mar 20, 2024',
    time: '2:00 PM',
    location: 'Creative Studio',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b',
    attendees: 32,
    category: 'Arts',
  },
  {
    id: '4',
    title: 'Yoga in the Park',
    date: 'Mar 22, 2024',
    time: '8:00 AM',
    location: 'Riverside Park',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
    attendees: 20,
    category: 'Wellness',
  }
];

export default function Events() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Discover Events</h1>
        <div className="flex w-full md:w-auto gap-4">
          <div className="relative flex-grow md:flex-grow-0">
            <input
              type="text"
              placeholder="Search events..."
              className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50">
            <Filter className="h-5 w-5" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
}