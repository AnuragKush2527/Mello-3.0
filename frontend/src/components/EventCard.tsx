import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  attendees: number;
  category: string;
}

export default function EventCard({
  id,
  title,
  date,
  time,
  location,
  image,
  attendees,
  category,
}: EventCardProps) {
  return (
    <Link to={`/events/${id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
            {category}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
          <div className="space-y-2">
            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{date}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-4 w-4 mr-2" />
              <span>{time}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="h-4 w-4 mr-2" />
              <span>{attendees} attending</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}