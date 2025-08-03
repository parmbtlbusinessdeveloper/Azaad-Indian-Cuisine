import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Award } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-red-800 to-orange-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(255, 215, 0, 0.1) 35px,
              rgba(255, 215, 0, 0.1) 70px
            )`
          }}></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="mb-4 flex justify-center">
              <img 
                src="/2025-07-25 - Edited.png" 
                alt="Azaad Indian Cuisine" 
                className="h-24 md:h-32 w-auto"
              />
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-yellow-200 font-medium">
              Authentic Punjabi Flavors • Traditional Recipes • Modern Experience
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
            Experience the rich heritage of Punjab through our carefully crafted dishes, 
            prepared with traditional spices and techniques passed down through generations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-red-900 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Order Now
            </button>
            <Link 
              to="/menu"
              className="border-2 border-yellow-300 text-yellow-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 hover:text-red-900 transition-all duration-300 flex items-center space-x-2"
            >
              <span>View Our Menu</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-900 mb-4">Why Choose Azaad?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-yellow-300" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-red-900 mb-2">Authentic Recipes</h3>
              <p className="text-gray-600 leading-relaxed">
                Traditional Punjabi recipes handed down through generations, 
                using authentic spices imported directly from India.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-red-900 mb-2">Fresh Daily</h3>
              <p className="text-gray-600 leading-relaxed">
                All dishes prepared fresh daily with the finest ingredients. 
                No preservatives, just pure, wholesome flavors.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-red-900 mb-2">Award Winning</h3>
              <p className="text-gray-600 leading-relaxed">
                Recognized for excellence in authentic Indian cuisine and 
                outstanding service in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Introduction */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-red-900 mb-6">
                A Taste of Punjab in Every Bite
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mb-6"></div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Welcome to Azaad Indian Cuisine, where the vibrant flavors of Punjab come alive. 
                Our family-owned restaurant brings you the most authentic Indian dining experience, 
                featuring traditional tandoor cooking, aromatic biryanis, and rich curries that 
                have been perfected over generations.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                From our signature butter chicken to our handcrafted naan bread, every dish 
                tells a story of cultural heritage and culinary artistry. We use only the 
                finest ingredients and traditional cooking methods to ensure an unforgettable 
                dining experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/menu"
                  className="bg-red-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition-all duration-200 text-center"
                >
                  Explore Our Menu
                </Link>
                <Link 
                  to="/gallery"
                  className="border-2 border-red-900 text-red-900 px-6 py-3 rounded-lg font-semibold hover:bg-red-900 hover:text-white transition-all duration-200 text-center"
                >
                  View Gallery
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-24 h-24 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">🍛</span>
                  </div>
                  <p className="font-medium">Restaurant Image Placeholder</p>
                  <p className="text-sm">Replace with actual restaurant photo</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-900 to-red-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for an Authentic Punjabi Experience?
          </h2>
          <p className="text-xl text-yellow-200 mb-8">
            Join us for lunch or dinner and discover why we're the community's 
            favorite destination for Indian cuisine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-red-900 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105">
              Order for Delivery
            </button>
            <Link 
              to="/contact"
              className="border-2 border-yellow-300 text-yellow-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 hover:text-red-900 transition-all duration-300"
            >
              Make a Reservation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};