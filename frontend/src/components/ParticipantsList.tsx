import React from 'react';
import { User, MessageCircle, X } from 'lucide-react';

interface Participant {
  id: number;
  name: string;
  image: string;
  joinedDate: string;
}

interface Props {
  eventId: number;
  onClose: () => void;
}

const participants: Participant[] = [
  {
    id: 1,
    name: "Sarah Parker",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    joinedDate: "Mar 15, 2024"
  },
  {
    id: 2,
    name: "Mike Johnson",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    joinedDate: "Mar 16, 2024"
  },
  {
    id: 3,
    name: "Emma Wilson",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    joinedDate: "Mar 17, 2024"
  }
];

export default function ParticipantsList({ eventId, onClose }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Event Participants</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
        {participants.map((participant) => (
          <div
            key={participant.id}
            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="flex items-center space-x-3">
              <img
                src={participant.image}
                alt={participant.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium">{participant.name}</h3>
                <p className="text-sm text-gray-500">Joined {participant.joinedDate}</p>
              </div>
            </div>
            <button className="p-2 text-primary-600 hover:bg-primary-50 rounded-full transition-colors">
              <MessageCircle className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>Total Participants</span>
          <span className="font-medium">{participants.length}</span>
        </div>
      </div>
    </div>
  );
}