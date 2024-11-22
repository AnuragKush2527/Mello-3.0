import React from 'react';
import { Users, MessageCircle, Calendar } from 'lucide-react';

const groups = [
  {
    id: '1',
    name: 'Tech Enthusiasts',
    members: 234,
    description: 'A community of technology lovers sharing knowledge and experiences.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998',
    category: 'Technology'
  },
  {
    id: '2',
    name: 'Outdoor Adventures',
    members: 156,
    description: 'Join us for hiking, camping, and outdoor activities.',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b',
    category: 'Sports'
  },
  {
    id: '3',
    name: 'Art & Culture',
    members: 189,
    description: 'Explore local art scenes and cultural events together.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f',
    category: 'Arts'
  }
];

export default function Groups() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Join Groups</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {groups.map((group) => (
          <div key={group.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 relative">
              <img
                src={group.image}
                alt={group.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                {group.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{group.name}</h3>
              <p className="text-gray-600 mb-4">{group.description}</p>
              <div className="flex items-center justify-between text-gray-500 mb-4">
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{group.members} members</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>2 events/month</span>
                </div>
              </div>
              <button className="w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Join Group
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}