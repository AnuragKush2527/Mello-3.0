import React from 'react';
import { Users, MapPin, Heart, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      <div className="relative bg-purple-700 text-white py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205"
            alt="About Mellow"
            className="w-full h-full object-cover opacity-35"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Mellow</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're on a mission to bring people together in meaningful ways through local events and community gatherings.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-purple-600 ">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Mellow was born from a simple observation: despite being more connected than ever online, people were feeling increasingly isolated in real life.
            </p>
            <p className="text-gray-600">
              We created Mellow to bridge this gap, providing a platform where meaningful connections happen in person, not just through screens. Our focus is on creating genuine human connections through shared experiences and interests.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-purple-50 p-6 rounded-lg text-center ">
              <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">1000+</div>
              <div className="text-gray-600">Events Hosted</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
              <div className="text-gray-600">Communities</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">30+</div>
              <div className="text-gray-600">Cities</div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-600">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-6 inline-block mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-600">Community First</h3>
              <p className="text-gray-600">Building strong, inclusive communities where everyone belongs.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-6 inline-block mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-600">Local Focus</h3>
              <p className="text-gray-600 ">Emphasizing local connections and experiences in your community.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-6 inline-block mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-600">Genuine Connections</h3>
              <p className="text-gray-600">Fostering authentic relationships through shared experiences.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-6 inline-block mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-600">Trust & Safety</h3>
              <p className="text-gray-600">Ensuring a safe and trusted environment for all members.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}