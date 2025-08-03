import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16 min-h-screen bg-amber-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Visit Us</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-yellow-200">
            We'd love to welcome you to our restaurant family
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-red-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md border border-yellow-200">
                  <div className="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-yellow-300" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-900 text-lg">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-sm text-gray-500">Call for reservations or takeout orders</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md border border-yellow-200">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-900 text-lg">Email</h3>
                    <p className="text-gray-600">info@azaadcuisine.com</p>
                    <p className="text-sm text-gray-500">Questions, feedback, or catering inquiries</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md border border-yellow-200">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-900 text-lg">Address</h3>
                    <p className="text-gray-600">123 Main Street<br />City, State 12345</p>
                    <p className="text-sm text-gray-500">Easy parking available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md border border-yellow-200">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-900 text-lg">Hours</h3>
                    <div className="text-gray-600">
                      <p>Monday - Thursday: 11:00 AM - 9:30 PM</p>
                      <p>Friday - Saturday: 11:00 AM - 10:30 PM</p>
                      <p>Sunday: 12:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Partners */}
              <div className="mt-8 p-6 bg-white rounded-lg shadow-md border border-yellow-200">
                <h3 className="text-xl font-semibold text-red-900 mb-4">Order for Delivery</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg text-center transition-colors duration-200">
                    <div className="font-medium text-gray-700">Uber Eats</div>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg text-center transition-colors duration-200">
                    <div className="font-medium text-gray-700">DoorDash</div>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg text-center transition-colors duration-200">
                    <div className="font-medium text-gray-700">Grubhub</div>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg text-center transition-colors duration-200">
                    <div className="font-medium text-gray-700">Postmates</div>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-red-900 mb-8">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md border border-yellow-200">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200 resize-none"
                    placeholder="Tell us about your inquiry, special requests, or feedback..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-900 to-red-800 text-white py-3 px-6 rounded-lg font-semibold hover:from-red-800 hover:to-red-700 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-900 text-center mb-8">Find Us</h2>
          <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg shadow-lg flex items-center justify-center border border-yellow-200">
            <div className="text-center text-gray-500">
              <div className="w-24 h-24 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <MapPin size={40} className="text-gray-600" />
              </div>
              <p className="font-medium text-lg">Google Maps Integration</p>
              <p className="text-sm">Replace with embedded Google Maps</p>
              <p className="text-sm mt-2">123 Main Street, City, State 12345</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};