import React, { useState } from 'react';
import { Search, UserPlus, UserCheck, X } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';

const pendingRequests = [
  {
    id: 1,
    name: "Emma Wilson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    mutualEvents: 3
  },
  {
    id: 2,
    name: "Alex Thompson",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    mutualEvents: 2
  }
];

const suggestedBuddies = [
  {
    id: 3,
    name: "Sarah Parker",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    interests: ["Music", "Arts"],
    mutualEvents: 4
  },
  {
    id: 4,
    name: "John Davis",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    interests: ["Technology", "Gaming"],
    mutualEvents: 1
  }
];

export default function MyBuddies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showPendingRequests, setShowPendingRequests] = useState(false);

  return (
    <DashboardLayout>
      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">My Buddies</h1>
          <button
            onClick={() => setShowPendingRequests(!showPendingRequests)}
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
          >
            <UserCheck className="h-5 w-5" />
            Pending Requests ({pendingRequests.length})
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search buddies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        </div>

        {/* Pending Requests */}
        {showPendingRequests && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Pending Requests</h2>
            <div className="grid gap-4">
              {pendingRequests.map((request) => (
                <div
                  key={request.id}
                  className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={request.image}
                      alt={request.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium">{request.name}</h3>
                      <p className="text-sm text-gray-500">
                        {request.mutualEvents} mutual events
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-primary-600 hover:bg-primary-50 rounded-full transition-colors">
                      <UserCheck className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors">
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Suggested Buddies */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Suggested Buddies</h2>
          <div className="grid gap-4">
            {suggestedBuddies.map((buddy) => (
              <div
                key={buddy.id}
                className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={buddy.image}
                    alt={buddy.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
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
                </div>
                <button className="flex items-center gap-2 px-4 py-2 text-primary-600 border border-primary-600 rounded-full hover:bg-primary-50 transition-colors">
                  <UserPlus className="h-5 w-5" />
                  Add Buddy
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}