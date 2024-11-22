import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Calendar, Clock, MapPin, Users, X } from 'lucide-react';
import axios from 'axios'; // Import axios

const categories = [
  'Music', 'Social', 'Education', 'Gaming', 'Arts',
  'Sports', 'Wellness', 'Networking', 'Technology'
];

export default function CreateEvent() {
  const navigate = useNavigate();
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    time: '',
    category: '',
    maxAttendees: '',
    location: ''
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= 5242880) { // Limit to 5MB
      setCoverImage(file);
    } else {
      setErrorMessage('File is too large. Max file size is 5MB.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPopupVisible(true);
    if (!formData.name || !formData.description || !formData.date || !formData.time || !formData.category || !formData.location || !formData.maxAttendees) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }
  
    // Construct the event data
    const eventData = new FormData();
    if (coverImage) {
      eventData.append('image', coverImage);
    }
    eventData.append('name', formData.name);
    eventData.append('description', formData.description);
    eventData.append('date', formData.date);
    eventData.append('time', formData.time);
    eventData.append('category', formData.category);
    eventData.append('maxAttendees', formData.maxAttendees);
    eventData.append('location', formData.location);
  
    try {
      // Make the API request to create the event
      const response = await axios.post('http://localhost:4000/hostEvent', eventData, {
        headers: {
          'Content-Type': 'multipart/form-data', // This is necessary for sending form data
          Authorization: `${localStorage.getItem('token')}` // Assuming you're using JWT for auth
        }
      });
  
      if (response.data.success) {
        navigate('/dashboard'); // Redirect to dashboard on success
      } else {
        setErrorMessage(response.data.message); // Show error message
      }

    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage('File is too large. Max file size is 5MB.');
      } else {
        setErrorMessage('Error creating event, please try again.');
      }
    }
  };
  
  const handlePopupClose = () => {
    setIsPopupVisible(false);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">Create New Event</h1>
              <button
                onClick={() => navigate('/dashboard')}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} action="/hostEvent" method="POST" encType='multipart/form-data' className="p-6 space-y-6">
            {/* Cover Image Upload */}
            <div className="relative">
              <div className={`h-64 rounded-lg border-2 border-dashed border-gray-300 
                ${coverImage ? 'bg-gray-100' : 'bg-gray-50'} 
                flex items-center justify-center transition-all duration-300 hover:border-primary-500`}>
                {coverImage ? (
                  <img
                    src={URL.createObjectURL(coverImage)}
                    alt="Event cover"
                    className="h-full w-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-500">Click to upload event cover image</p>
                  </div>
                )}
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </div>

            {/* Event Details */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Event Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Give your event a catchy name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Tell people what your event is about"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Where will the event take place?"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category.toLowerCase()}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Max Attendees</label>
                  <input
                    type="number"
                    name="maxAttendees"
                    value={formData.maxAttendees}
                    onChange={handleChange}
                    min="1"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Maximum number of attendees"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>


      {/* Popup Modal */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6 text-center">
            <h2 className="text-lg font-bold text-gray-900">Congratulations!</h2>
            <p className="text-sm text-gray-600 mt-2">Your event is now live.</p>
            <button
              onClick={handlePopupClose}
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Okay
            </button>
          </div>
        </div>
      )}


    </div>
  );
}
