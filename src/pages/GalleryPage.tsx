import React from 'react';
import { OrderModal } from '../components/OrderModal';

export const GalleryPage: React.FC = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = React.useState(false);

  const galleryItems = [
    {
      id: 1,
      title: 'Butter Chicken',
      category: 'Main Dishes',
      description: 'Our signature creamy butter chicken'
    },
    {
      id: 2,
      title: 'Tandoor Naan',
      category: 'Breads',
      description: 'Fresh-baked naan from our tandoor oven'
    },
    {
      id: 3,
      title: 'Restaurant Interior',
      category: 'Ambiance',
      description: 'Warm and inviting dining atmosphere'
    },
    {
      id: 4,
      title: 'Biryani Platter',
      category: 'Rice Dishes',
      description: 'Aromatic basmati rice with tender meat'
    },
    {
      id: 5,
      title: 'Vegetarian Thali',
      category: 'Vegetarian',
      description: 'Complete vegetarian meal platter'
    },
    {
      id: 6,
      title: 'Tandoor Kitchen',
      category: 'Kitchen',
      description: 'Our traditional tandoor oven in action'
    },
    {
      id: 7,
      title: 'Appetizer Platter',
      category: 'Appetizers',
      description: 'Mixed appetizers perfect for sharing'
    },
    {
      id: 8,
      title: 'Dining Area',
      category: 'Ambiance',
      description: 'Comfortable seating with traditional decor'
    },
    {
      id: 9,
      title: 'Dessert Selection',
      category: 'Desserts',
      description: 'Traditional Indian sweets and desserts'
    },
    {
      id: 10,
      title: 'Spice Collection',
      category: 'Ingredients',
      description: 'Authentic spices from India'
    },
    {
      id: 11,
      title: 'Chef Preparing',
      category: 'Kitchen',
      description: 'Our skilled chefs at work'
    },
    {
      id: 12,
      title: 'Lamb Curry',
      category: 'Main Dishes',
      description: 'Tender lamb in rich, spiced curry'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-amber-50">
      <OrderModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
      />
      
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
              <span className="menu-glow-text">Gallery</span>
            </h1>
            
            {/* Decorative Underline */}
            <div className="flex justify-center items-center mb-8">
              <div className="w-8 h-px bg-yellow-400 opacity-60"></div>
              <div className="mx-3 w-32 h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 rounded-full shadow-lg"></div>
              <div className="w-8 h-px bg-yellow-400 opacity-60"></div>
            </div>
            
            <p className="premium-menu-subtitle text-xl md:text-2xl lg:text-3xl text-yellow-200 italic font-light leading-relaxed max-w-4xl mx-auto">
              A visual journey through our authentic Punjabi cuisine and warm atmosphere
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

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-yellow-200"
              >
                {/* Image Placeholder */}
                <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center text-gray-500">
                    <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-2xl">📸</span>
                    </div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm">Photo placeholder</p>
                  </div>
                  {/* Decorative overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-red-900">{item.title}</h3>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-900 to-red-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Taste What You See
          </h2>
          <p className="text-xl text-yellow-200 mb-8">
            Every dish is prepared fresh with the same care and attention to detail you see here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsOrderModalOpen(true)}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-red-900 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
            >
              Order Now
            </button>
            <a 
              href="https://maps.app.goo.gl/jYHkSCiCiqm9XhKR7"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-yellow-300 text-yellow-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 hover:text-red-900 transition-all duration-300"
            >
              Location
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};