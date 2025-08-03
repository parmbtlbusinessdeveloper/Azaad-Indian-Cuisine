import React from 'react';
import { Heart, Users, Award, Clock } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-amber-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-yellow-200">
            Our story of bringing authentic Punjab flavors to your table
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-red-900 mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mb-6"></div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Azaad Indian Cuisine was born from a deep love for authentic Punjabi cooking and 
                a desire to share the rich culinary heritage of Punjab with our local community. 
                Founded by the Singh family in 2018, our restaurant represents generations of 
                traditional cooking knowledge passed down through our family.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The word "Azaad" means "free" in Punjabi, reflecting our commitment to cooking 
                without compromise - using only the finest ingredients, traditional methods, and 
                time-honored recipes that have been perfected over decades. We believe that food 
                is not just nourishment, but a celebration of culture, family, and community.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Every spice is carefully selected, every dish is prepared with love, and every 
                meal is served with the warmth and hospitality that Punjab is famous for. When 
                you dine with us, you're not just enjoying a meal - you're experiencing a piece 
                of our heritage.
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center">
                  <Heart className="text-yellow-300" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-red-900">Made with Love</p>
                  <p className="text-gray-600">Every dish prepared with care and tradition</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-24 h-24 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👨‍🍳</span>
                  </div>
                  <p className="font-medium">Chef/Family Photo</p>
                  <p className="text-sm">Replace with actual restaurant photo</p>
                </div>
              </div>
              {/* Decorative border */}
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-yellow-400 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-900 mb-4">Our Mission & Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to preserving and sharing the authentic flavors of Punjab 
              while building lasting connections within our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-yellow-300" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-red-900 mb-3">Community First</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in building strong relationships with our customers and 
                contributing positively to our local community through authentic food and service.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-red-900 mb-3">Quality Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We never compromise on quality - from sourcing the finest ingredients to 
                maintaining traditional cooking methods that preserve authentic flavors.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-red-900 mb-3">Time-Honored Tradition</h3>
              <p className="text-gray-600 leading-relaxed">
                Our recipes and techniques have been refined over generations, ensuring 
                that every dish represents the true essence of Punjabi cuisine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Mission */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-red-900 mb-6">
            Bringing Punjab to Your Table
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-8"></div>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At Azaad Indian Cuisine, we are more than just a restaurant - we are cultural 
            ambassadors dedicated to sharing the warmth, hospitality, and incredible flavors 
            that define Punjabi cuisine. Our mission is to create a bridge between the rich 
            traditions of Punjab and the diverse community we proudly serve.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Every meal we serve is an invitation to experience the soul of Punjab - from the 
            robust flavors of our tandoor-grilled specialties to the comforting warmth of our 
            home-style curries. We believe that sharing a meal is sharing culture, and we're 
            honored to be part of your culinary journey.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-md border-2 border-yellow-200">
            <blockquote className="text-xl italic text-red-900 font-medium">
              "Food is our language of love, and every dish we serve carries the blessings 
              and traditions of our ancestors."
            </blockquote>
            <p className="text-gray-600 mt-4">- The Singh Family, Owners</p>
          </div>
        </div>
      </section>
    </div>
  );
};