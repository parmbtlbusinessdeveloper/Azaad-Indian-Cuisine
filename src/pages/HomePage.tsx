import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Award, Play } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-950 via-red-900 to-amber-800">
        {/* Traditional Punjabi Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.3) 2px, transparent 2px),
              radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.3) 2px, transparent 2px),
              radial-gradient(circle at 40% 60%, rgba(255, 215, 0, 0.2) 1px, transparent 1px),
              radial-gradient(circle at 60% 40%, rgba(255, 215, 0, 0.2) 1px, transparent 1px),
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 30px,
                rgba(255, 215, 0, 0.1) 30px,
                rgba(255, 215, 0, 0.1) 60px
              )
            `,
            backgroundSize: '40px 40px, 40px 40px, 20px 20px, 20px 20px, 80px 80px'
          }}></div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Left Column - Text Content (Desktop) */}
            <div className="text-white space-y-8 fade-in">
              <div className="space-y-6">
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-wider">
                  <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
                    Authentic Indian
                  </span>
                  <span className="block text-white mt-3">
                    Cuisine
                  </span>
                </h1>
                
                <div className="relative">
                  <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-lg"></div>
                  <div className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full animate-pulse opacity-75"></div>
                </div>
                
                <p className="font-display text-xl md:text-2xl lg:text-3xl text-yellow-200 font-medium leading-relaxed italic tracking-wide">
                  Bold flavors. Warm hospitality.<br />
                  A culinary journey worth sharing.
                </p>
              </div>
              
              <p className="font-sans text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl font-light tracking-wide">
                Experience the rich heritage of Punjab through our carefully crafted dishes, 
                prepared with traditional spices and techniques passed down through generations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://www.toasttab.com/azaad-indian-cuisine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans bg-gradient-to-r from-yellow-500 to-orange-500 text-red-900 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  Order Now
                </a>
                <Link 
                  to="/menu"
                  className="font-sans border-2 border-yellow-300 text-yellow-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 hover:text-red-900 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>View Menu</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            {/* Right Column - Video Section (Desktop) */}
            <div className="flex flex-col items-center space-y-6 fade-in">
              {/* Video Placeholder */}
              <div className="relative w-full max-w-lg">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border-4 border-yellow-400/20">
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-yellow-500/90 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-yellow-400 transition-colors duration-300 cursor-pointer">
                        <Play size={32} className="text-red-900 ml-1" />
                      </div>
                      <p className="font-serif text-lg font-semibold">Kitchen in Action</p>
                      <p className="font-sans text-sm text-gray-300">See our chefs at work</p>
                    </div>
                  </div>
                  {/* Decorative overlay suggesting video content */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full" style={{
                      backgroundImage: `
                        linear-gradient(45deg, transparent 40%, rgba(255, 215, 0, 0.1) 50%, transparent 60%),
                        radial-gradient(circle at 30% 70%, rgba(255, 107, 53, 0.2) 20%, transparent 40%)
                      `
                    }}></div>
                  </div>
                </div>
                
                {/* Decorative elements around video */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-yellow-400 rounded-full opacity-80"></div>
                <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-orange-500 rounded-full opacity-80"></div>
              </div>
              
              {/* Watch Button */}
              <a 
                href="/gallery"
                className="font-sans bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center space-x-2"
              >
                <Play size={18} />
                <span>Watch Our Kitchen in Action</span>
              </a>
            </div>
          </div>
          
          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col items-center min-h-screen py-12 space-y-8">
            {/* Video Section - Top on Mobile */}
            <div className="w-full max-w-sm fade-in">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border-4 border-yellow-400/20">
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-yellow-500/90 rounded-full flex items-center justify-center mx-auto mb-3 hover:bg-yellow-400 transition-colors duration-300 cursor-pointer">
                        <Play size={24} className="text-red-900 ml-1" />
                      </div>
                      <p className="font-serif text-base font-semibold">Kitchen in Action</p>
                      <p className="font-sans text-xs text-gray-300">See our chefs at work</p>
                    </div>
                  </div>
                  {/* Decorative overlay */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full" style={{
                      backgroundImage: `
                        linear-gradient(45deg, transparent 40%, rgba(255, 215, 0, 0.1) 50%, transparent 60%),
                        radial-gradient(circle at 30% 70%, rgba(255, 107, 53, 0.2) 20%, transparent 40%)
                      `
                    }}></div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-80"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-orange-500 rounded-full opacity-80"></div>
              </div>
            </div>
            
            {/* Text Content - Centered on Mobile */}
            <div className="text-white text-center space-y-6 fade-in px-4">
              <div className="space-y-4">
                <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight tracking-wider">
                  <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
                    Authentic Indian
                  </span>
                  <span className="block text-white mt-2">
                    Cuisine
                  </span>
                </h1>
                
                {/* Glowing animated underline */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-lg"></div>
                    <div className="absolute top-0 left-0 w-24 h-1 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full animate-pulse opacity-75"></div>
                  </div>
                </div>
                
                <p className="font-display text-lg sm:text-xl text-yellow-200 font-medium leading-relaxed italic max-w-sm mx-auto tracking-wide">
                  Bold flavors. Warm hospitality.<br />
                  A culinary journey worth sharing.
                </p>
              </div>
              
              <p className="font-sans text-base text-gray-200 leading-relaxed max-w-md mx-auto font-light tracking-wide">
                Experience the rich heritage of Punjab through our carefully crafted dishes, 
                prepared with traditional spices and techniques passed down through generations.
              </p>
            </div>
            
            {/* Action Buttons - Mobile */}
            <div className="flex flex-col space-y-4 w-full max-w-sm px-4 fade-in">
              <Link 
                to="/menu"
                className="font-sans bg-gradient-to-r from-yellow-500 to-orange-500 text-red-900 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg text-center hover:shadow-yellow-500/25"
              >
                View Menu
              </Link>
              <a 
                href="https://www.toasttab.com/azaad-indian-cuisine"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans border-2 border-yellow-300 text-yellow-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 hover:text-red-900 transition-all duration-300 text-center"
              >
                Order Now
              </a>
            </div>
            
            {/* Watch Button - Mobile */}
            <Link 
              to="/gallery"
              className="font-sans bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center space-x-2 fade-in"
            >
              <Play size={16} />
              <span>Watch Our Kitchen in Action</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Menu Anchor */}
      <div id="menu" className="absolute"></div>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-white via-amber-50/30 to-white relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full punjabi-pattern-enhanced"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-red-900 mb-6 tracking-wider relative group">
                Why Choose Azaad?
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </h2>
            </div>
            <div className="flex justify-center items-center space-x-4 mb-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-500"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-float"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-500 to-transparent"></div>
            </div>
            <p className="font-display text-xl text-red-800 italic tracking-wide max-w-2xl mx-auto">
              Discover the authentic flavors that set us apart
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-8 rounded-xl bg-white/80 backdrop-blur-sm border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-yellow-300" size={32} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-red-900 mb-4 tracking-wide group-hover:text-red-800 transition-colors">
                Authentic Recipes
              </h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-4"></div>
              <p className="font-sans text-gray-700 leading-relaxed tracking-wide">
                Traditional Punjabi recipes handed down through generations, 
                using authentic spices imported directly from India.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-white/80 backdrop-blur-sm border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-red-900 mb-4 tracking-wide group-hover:text-red-800 transition-colors">
                Fresh Daily
              </h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-4"></div>
              <p className="font-sans text-gray-700 leading-relaxed tracking-wide">
                All dishes prepared fresh daily with the finest ingredients. 
                No preservatives, just pure, wholesome flavors.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-white/80 backdrop-blur-sm border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-red-900 mb-4 tracking-wide group-hover:text-red-800 transition-colors">
                Award Winning
              </h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-4"></div>
              <p className="font-sans text-gray-700 leading-relaxed tracking-wide">
                Recognized for excellence in authentic Indian cuisine and 
                outstanding service in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Introduction */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50/50 to-red-50/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-400/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-yellow-500 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-500 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8">
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-red-900 mb-6 tracking-wider leading-tight">
                  A Taste of Punjab in Every Bite
                </h2>
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-transparent rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="font-sans text-gray-700 text-lg leading-relaxed font-light tracking-wide">
                  Welcome to <span className="font-display font-semibold text-red-900 italic">Azaad Indian Cuisine</span>, where the vibrant flavors of Punjab come alive. 
                  Our family-owned restaurant brings you the most authentic Indian dining experience, 
                  featuring traditional tandoor cooking, aromatic biryanis, and rich curries that 
                  have been perfected over generations.
                </p>
                
                <div className="border-l-4 border-yellow-400 pl-6 py-2 bg-white/50 rounded-r-lg">
                  <p className="font-display text-lg text-red-800 italic tracking-wide">
                    "Every dish tells a story of cultural heritage and culinary artistry"
                  </p>
                </div>
                
                <p className="font-sans text-gray-700 text-lg leading-relaxed font-light tracking-wide">
                  From our signature butter chicken to our handcrafted naan bread, every dish 
                  is prepared with only the finest ingredients and traditional cooking methods 
                  to ensure an unforgettable dining experience.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link 
                  to="/menu"
                  className="font-sans bg-gradient-to-r from-red-900 to-red-800 text-white px-8 py-4 rounded-full font-semibold hover:from-red-800 hover:to-red-700 transition-all duration-300 text-center transform hover:scale-105 shadow-lg hover:shadow-xl tracking-wide"
                >
                  Explore Our Menu
                </Link>
                <Link 
                  to="/gallery"
                  className="font-sans border-2 border-red-900 text-red-900 px-8 py-4 rounded-full font-semibold hover:bg-red-900 hover:text-white transition-all duration-300 text-center tracking-wide"
                >
                  View Gallery
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center text-gray-500">
                  <div className="w-24 h-24 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">🍛</span>
                  </div>
                  <p className="font-display font-medium text-lg">Restaurant Image</p>
                  <p className="font-sans text-sm">Premium dining experience</p>
                </div>
              </div>
              {/* Enhanced decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-80 animate-float" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute top-1/2 -left-3 w-6 h-6 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
                A Taste of Punjab in Every Bite
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mb-8"></div>
              <p className="font-sans text-gray-700 text-lg leading-relaxed mb-6 font-light">
                Welcome to Azaad Indian Cuisine, where the vibrant flavors of Punjab come alive. 
                Our family-owned restaurant brings you the most authentic Indian dining experience, 
                featuring traditional tandoor cooking, aromatic biryanis, and rich curries that 
                have been perfected over generations.
              </p>
              <p className="font-sans text-gray-700 text-lg leading-relaxed mb-8 font-light">
                From our signature butter chicken to our handcrafted naan bread, every dish 
                tells a story of cultural heritage and culinary artistry. We use only the 
                finest ingredients and traditional cooking methods to ensure an unforgettable 
                dining experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/menu"
                  className="font-sans bg-red-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition-all duration-200 text-center"
                >
                  Explore Our Menu
                </Link>
                <Link 
                  to="/gallery"
                  className="font-sans border-2 border-red-900 text-red-900 px-6 py-3 rounded-lg font-semibold hover:bg-red-900 hover:text-white transition-all duration-200 text-center"
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
                  <p className="font-sans font-medium">Restaurant Image Placeholder</p>
                  <p className="font-sans text-sm">Replace with actual restaurant photo</p>
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
      <section className="py-20 bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full punjabi-pattern-enhanced"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-wider">
              Ready for an Authentic Punjabi Experience?
            </h2>
            <div className="flex justify-center items-center space-x-4 mb-6">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-yellow-300"></div>
              <div className="w-4 h-4 bg-yellow-300 rounded-full animate-pulse"></div>
              <div className="w-20 h-0.5 bg-gradient-to-r from-yellow-300 to-transparent"></div>
            </div>
          </div>
          
          <p className="font-display text-xl md:text-2xl text-yellow-200 mb-10 italic tracking-wide leading-relaxed">
            Join us for lunch or dinner and discover why we're the community's 
            favorite destination for Indian cuisine.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://www.toasttab.com/azaad-indian-cuisine"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans bg-gradient-to-r from-yellow-500 to-orange-500 text-red-900 px-10 py-5 rounded-full font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl tracking-wide"
            >
              Order for Delivery
            </a>
            <Link 
              to="/contact"
              className="font-sans border-2 border-yellow-300 text-yellow-300 px-10 py-5 rounded-full font-semibold text-lg hover:bg-yellow-300 hover:text-red-900 transition-all duration-300 tracking-wide"
            >
              Make a Reservation
            </Link>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-900 to-red-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready for an Authentic Punjabi Experience?
          </h2>
          <p className="font-serif text-xl md:text-2xl text-yellow-200 mb-8 italic">
            Join us for lunch or dinner and discover why we're the community's 
            favorite destination for Indian cuisine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.toasttab.com/azaad-indian-cuisine"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans bg-gradient-to-r from-yellow-500 to-orange-500 text-red-900 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
            >
              Order for Delivery
            </a>
            <Link 
              to="/contact"
              className="font-sans border-2 border-yellow-300 text-yellow-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 hover:text-red-900 transition-all duration-300"
            >
              Make a Reservation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};