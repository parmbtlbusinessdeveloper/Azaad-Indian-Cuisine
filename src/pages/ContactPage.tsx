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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(255, 215, 0, 0.3) 2px, transparent 2px),
                radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.3) 2px, transparent 2px),
                radial-gradient(circle at 40% 80%, rgba(255, 215, 0, 0.2) 1px, transparent 1px),
                radial-gradient(circle at 60% 20%, rgba(255, 215, 0, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px, 60px 60px, 30px 30px, 30px 30px'
            }}></div>
          </div>
          
          {/* Ornamental Top Flourish */}
          <div className="relative z-10 menu-header-animation">
            <div className="flex justify-center items-center mb-6">
              <div className="hidden sm:block w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <div className="mx-4 text-yellow-400 text-2xl">✦</div>
              <div className="hidden sm:block w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            </div>
            
            <h1 className="premium-menu-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 relative">
              <span className="menu-glow-text">Visit Us</span>
            </h1>
            
            {/* Decorative Underline */}
            <div className="flex justify-center items-center mb-8">
              <div className="w-8 h-px bg-yellow-400 opacity-60"></div>
              <div className="mx-3 w-32 h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 rounded-full shadow-lg"></div>
              <div className="w-8 h-px bg-yellow-400 opacity-60"></div>
            </div>
            
            <p className="premium-menu-subtitle text-xl md:text-2xl lg:text-3xl text-yellow-200 italic font-light leading-relaxed max-w-4xl mx-auto">
              We'd love to welcome you to our restaurant family
            </p>
            
            {/* Ornamental Bottom Flourish */}
            <div className="flex justify-center items-center mt-8">
              <div className="text-yellow-400 text-lg opacity-70">❋</div>
              <div className="mx-6 w-24 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <div className="text-yellow-400 text-xl">✧</div>
              <div className="mx-6 w-24 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <div className="text-yellow-400 text-lg opacity-70">❋</div>
            </div>
          </div>
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
                    <p className="text-gray-600">
                      <a href="tel:+19512998307" className="hover:text-red-700 transition-colors">(951) 299-8307</a>
                    </p>
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
                    <p className="text-gray-600">4290 Riverwalk Pkwy Ste 306<br />Riverside, CA 92505</p>
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
                      <p className="font-medium mb-1">Sunday - Saturday</p>
                      <p>Lunch: 11:00 AM - 3:30 PM</p>
                      <p>Dinner: 4:30 PM - 9:30 PM</p>
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
      <section id="map" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-900 text-center mb-8">Find Us</h2>
          <div className="w-full rounded-lg shadow-lg overflow-hidden border border-yellow-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.3908511606046!2d-117.49667212274821!3d33.905338873212834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcb7a79b440e8b%3A0x668fcd79ec6e1c78!2sAzaad%20Indian%20cuisine!5e0!3m2!1sen!2sus!4v1754224164283!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Azaad Indian Cuisine Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};