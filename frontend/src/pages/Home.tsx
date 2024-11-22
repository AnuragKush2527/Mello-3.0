import React from 'react';
import { Music, Coffee, Book, Gamepad, Palette, Bike, Heart, Users, MapPin } from 'lucide-react';
import EventCard from '../components/EventCard';
import CategoryCard from '../components/CategoryCard';

const categories = [
  { icon: <Music className="h-6 w-6" />, title: 'Music', count: 42, slug: 'music' },
  { icon: <Coffee className="h-6 w-6" />, title: 'Social', count: 38, slug: 'social' },
  { icon: <Book className="h-6 w-6" />, title: 'Education', count: 25, slug: 'education' },
  { icon: <Gamepad className="h-6 w-6" />, title: 'Gaming', count: 31, slug: 'gaming' },
  { icon: <Palette className="h-6 w-6" />, title: 'Arts', count: 28, slug: 'arts' },
  { icon: <Bike className="h-6 w-6" />, title: 'Sports', count: 35, slug: 'sports' },
  { icon: <Heart className="h-6 w-6" />, title: 'Wellness', count: 22, slug: 'wellness' },
  { icon: <Users className="h-6 w-6" />, title: 'Networking', count: 29, slug: 'networking' },
];

const featuredEvents = [
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
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-purple-700 text-white py-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94"
            alt="Hero background"
            className="w-full h-full object-cover opacity-35"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Connect in Real Life,<br />Not Just Online
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover local events and meet like-minded people in your community.
            Break free from screens and create genuine connections.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/Login"
              className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Find Events
            </a>
            <a
              href="/Login "
              className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-500 transition-colors"
            >
              Host Event
            </a>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.slug} {...category} />
          ))}
        </div>
      </div>

      {/* Featured Events Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Events Near You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/events"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
            >
              View All Events
            </a>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          How Mellow Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-purple-100 rounded-full p-6 inline-block mb-4">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
            <p className="text-gray-600">
              Sign up and tell us about your interests to find the perfect events and groups.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-full p-6 inline-block mb-4">
              <MapPin className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Discover Events</h3>
            <p className="text-gray-600">
              Browse events within 5km of your location and join the ones you like.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-full p-6 inline-block mb-4">
              <Heart className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Make Connections</h3>
            <p className="text-gray-600">
              Meet people in real life, participate in activities, and build lasting friendships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}