import React from 'react';
import { UserPlus } from 'lucide-react';

interface Buddy {
  id: number;
  name: string;
  image: string;
  interests: string[];
  mutualEvents: number;
}

const suggestedBuddies: Buddy[] = [
  {
    id: 1,
    name: "Paarth Bajpai",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    interests: ["Music", "Arts"],
    mutualEvents: 3
  },
  {
    id: 2,
    name: "Parth Awasthi",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    interests: ["Technology", "Gaming"],
    mutualEvents: 2
  }
];

export default function SuggestedBuddies() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">Suggested Buddies</h2>
      <div className="space-y-4">
        {suggestedBuddies.map((buddy) => (
          <div
            key={buddy.id}
            className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <img
              src={buddy.image}
              alt={buddy.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="font-medium">{buddy.name}</h3>
              <p className="text-sm text-gray-500">
                {buddy.mutualEvents} mutual events
              </p>
              <div className="flex flex-wrap gap-1 mt-1">
                {buddy.interests.map((interest) => (
                  <span
                    key={interest}
                    className="text-xs bg-primary-100 text-primary-600 px-2 py-0.5 rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            <button className="text-primary-600 hover:text-primary-700">
              <UserPlus className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}