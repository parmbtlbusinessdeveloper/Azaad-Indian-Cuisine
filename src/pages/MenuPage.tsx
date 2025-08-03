import React, { useState } from 'react';

interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  emoji: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

export const MenuPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('appetizers');

  const menuSections: MenuSection[] = [
    {
      title: 'Appetizers',
      items: [
        {
          id: 'samosa',
          name: 'Vegetable Samosa',
          price: '$6.99',
          description: 'Crispy pastries filled with spiced potatoes, peas, and herbs',
          emoji: '🥟',
          isVegetarian: true
        },
        {
          id: 'pakora',
          name: 'Mixed Vegetable Pakora',
          price: '$8.99',
          description: 'Fresh vegetables dipped in chickpea batter and deep-fried',
          emoji: '🧄',
          isVegetarian: true
        },
        {
          id: 'chicken_tikka',
          name: 'Chicken Tikka',
          price: '$12.99',
          description: 'Tender chicken marinated in yogurt and spices, grilled in tandoor',
          emoji: '🍗',
          isSpicy: true
        },
        {
          id: 'seekh_kebab',
          name: 'Seekh Kebab',
          price: '$13.99',
          description: 'Spiced ground lamb skewers grilled to perfection',
          emoji: '🍢',
          isSpicy: true
        }
      ]
    },
    {
      title: 'Chicken Entrées',
      items: [
        {
          id: 'butter_chicken',
          name: 'Butter Chicken',
          price: '$16.99',
          description: 'Tender chicken in creamy tomato-based curry with butter and cream',
          emoji: '🍛'
        },
        {
          id: 'chicken_tikka_masala',
          name: 'Chicken Tikka Masala',
          price: '$17.99',
          description: 'Grilled chicken in rich, spiced tomato curry sauce',
          emoji: '🍲',
          isSpicy: true
        },
        {
          id: 'chicken_curry',
          name: 'Traditional Chicken Curry',
          price: '$15.99',
          description: 'Classic home-style chicken curry with onions, ginger, and spices',
          emoji: '🍗',
          isSpicy: true
        },
        {
          id: 'chicken_vindaloo',
          name: 'Chicken Vindaloo',
          price: '$17.99',
          description: 'Fiery chicken curry with potatoes in tangy, spiced sauce',
          emoji: '🌶️',
          isSpicy: true
        }
      ]
    },
    {
      title: 'Lamb Entrées',
      items: [
        {
          id: 'lamb_curry',
          name: 'Lamb Curry',
          price: '$19.99',
          description: 'Tender lamb pieces in traditional spiced curry sauce',
          emoji: '🐑',
          isSpicy: true
        },
        {
          id: 'lamb_biryani',
          name: 'Lamb Biryani',
          price: '$21.99',
          description: 'Aromatic basmati rice layered with spiced lamb and herbs',
          emoji: '🍚'
        },
        {
          id: 'lamb_vindaloo',
          name: 'Lamb Vindaloo',
          price: '$20.99',
          description: 'Spicy lamb curry with potatoes in tangy sauce',
          emoji: '🌶️',
          isSpicy: true
        }
      ]
    },
    {
      title: 'Seafood',
      items: [
        {
          id: 'fish_curry',
          name: 'Fish Curry',
          price: '$18.99',
          description: 'Fresh fish in coconut-based curry with curry leaves',
          emoji: '🐟',
          isSpicy: true
        },
        {
          id: 'shrimp_masala',
          name: 'Shrimp Masala',
          price: '$19.99',
          description: 'Jumbo shrimp in rich, spiced tomato-onion gravy',
          emoji: '🦐',
          isSpicy: true
        }
      ]
    },
    {
      title: 'Vegetarian Dishes',
      items: [
        {
          id: 'dal_makhani',
          name: 'Dal Makhani',
          price: '$13.99',
          description: 'Creamy black lentils slow-cooked with butter and cream',
          emoji: '🫘',
          isVegetarian: true
        },
        {
          id: 'palak_paneer',
          name: 'Palak Paneer',
          price: '$14.99',
          description: 'Fresh cottage cheese in creamy spinach curry',
          emoji: '🧀',
          isVegetarian: true
        },
        {
          id: 'chana_masala',
          name: 'Chana Masala',
          price: '$12.99',
          description: 'Chickpeas in spiced tomato-onion curry',
          emoji: '🫛',
          isVegetarian: true,
          isSpicy: true
        },
        {
          id: 'aloo_gobi',
          name: 'Aloo Gobi',
          price: '$13.99',
          description: 'Cauliflower and potatoes with turmeric and spices',
          emoji: '🥔',
          isVegetarian: true
        }
      ]
    },
    {
      title: 'Biryani & Rice',
      items: [
        {
          id: 'chicken_biryani',
          name: 'Chicken Biryani',
          price: '$18.99',
          description: 'Fragrant basmati rice layered with spiced chicken',
          emoji: '🍚'
        },
        {
          id: 'vegetable_biryani',
          name: 'Vegetable Biryani',
          price: '$15.99',
          description: 'Aromatic rice with mixed vegetables and saffron',
          emoji: '🥕',
          isVegetarian: true
        },
        {
          id: 'jeera_rice',
          name: 'Jeera Rice',
          price: '$4.99',
          description: 'Basmati rice flavored with cumin seeds',
          emoji: '🍚',
          isVegetarian: true
        }
      ]
    },
    {
      title: 'Indian Breads',
      items: [
        {
          id: 'naan',
          name: 'Plain Naan',
          price: '$3.99',
          description: 'Fresh-baked traditional Indian bread from tandoor',
          emoji: '🫓',
          isVegetarian: true
        },
        {
          id: 'garlic_naan',
          name: 'Garlic Naan',
          price: '$4.99',
          description: 'Naan topped with fresh garlic and cilantro',
          emoji: '🧄',
          isVegetarian: true
        },
        {
          id: 'roti',
          name: 'Chapati Roti',
          price: '$2.99',
          description: 'Whole wheat flatbread cooked on griddle',
          emoji: '🫓',
          isVegetarian: true
        },
        {
          id: 'paratha',
          name: 'Aloo Paratha',
          price: '$5.99',
          description: 'Stuffed flatbread with spiced potato filling',
          emoji: '🥔',
          isVegetarian: true
        }
      ]
    },
    {
      title: 'Sides',
      items: [
        {
          id: 'raita',
          name: 'Cucumber Raita',
          price: '$3.99',
          description: 'Cool yogurt with cucumber, mint, and cumin',
          emoji: '🥒',
          isVegetarian: true
        },
        {
          id: 'pickle',
          name: 'Mixed Pickle',
          price: '$2.99',
          description: 'Spicy Indian pickle with mixed vegetables',
          emoji: '🥒',
          isVegetarian: true,
          isSpicy: true
        }
      ]
    },
    {
      title: 'Beverages',
      items: [
        {
          id: 'lassi',
          name: 'Mango Lassi',
          price: '$4.99',
          description: 'Creamy yogurt drink with fresh mango',
          emoji: '🥭',
          isVegetarian: true
        },
        {
          id: 'chai',
          name: 'Masala Chai',
          price: '$3.99',
          description: 'Traditional Indian spiced tea with milk',
          emoji: '🫖',
          isVegetarian: true
        }
      ]
    },
    {
      title: 'Desserts',
      items: [
        {
          id: 'gulab_jamun',
          name: 'Gulab Jamun',
          price: '$5.99',
          description: 'Soft milk dumplings in sweet rose syrup',
          emoji: '🍯',
          isVegetarian: true
        },
        {
          id: 'kulfi',
          name: 'Kulfi',
          price: '$4.99',
          description: 'Traditional Indian ice cream with cardamom and pistachios',
          emoji: '🍨',
          isVegetarian: true
        }
      ]
    }
  ];

  const sectionIds = ['appetizers', 'chicken', 'lamb', 'seafood', 'vegetarian', 'biryani', 'breads', 'sides', 'beverages', 'desserts'];

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
              <span className="menu-glow-text">Our Menu</span>
            </h1>
            
            {/* Decorative Underline */}
            <div className="flex justify-center items-center mb-8">
              <div className="w-8 h-px bg-yellow-400 opacity-60"></div>
              <div className="mx-3 w-32 h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 rounded-full shadow-lg"></div>
              <div className="w-8 h-px bg-yellow-400 opacity-60"></div>
            </div>
            
            <p className="premium-menu-subtitle text-xl md:text-2xl lg:text-3xl text-yellow-200 italic font-light leading-relaxed max-w-4xl mx-auto">
            Authentic Punjabi dishes prepared with traditional recipes and finest ingredients
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

      {/* Menu Navigation */}
      <div className="bg-white border-b-2 border-yellow-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-6 scrollbar-hide">
            {menuSections.map((section, index) => (
              <button
                key={sectionIds[index]}
                onClick={() => setActiveSection(sectionIds[index])}
                className={`whitespace-nowrap px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeSection === sectionIds[index]
                    ? 'bg-red-900 text-white'
                    : 'text-red-900 hover:bg-red-100'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {menuSections.map((section, index) => (
          <section 
            key={sectionIds[index]}
            id={sectionIds[index]}
            className={`mb-16 ${activeSection !== sectionIds[index] ? 'hidden' : ''}`}
          >
            <h2 className="text-3xl font-bold text-red-900 mb-8 text-center">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.items.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-yellow-200">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{item.emoji}</span>
                        <h3 className="text-xl font-semibold text-red-900">{item.name}</h3>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-xl font-bold text-orange-600">{item.price}</span>
                        <div className="flex space-x-1 mt-1">
                          {item.isVegetarian && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Vegetarian</span>
                          )}
                          {item.isSpicy && (
                            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Spicy</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                    
                    {/* Image Placeholder */}
                    <div className="w-full h-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Photo Coming Soon</span>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-red-900 to-red-800 text-white py-2 px-4 rounded-lg font-semibold hover:from-red-800 hover:to-red-700 transition-all duration-200 transform hover:scale-105">
                      Order Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Show All Sections Button */}
      <div className="text-center pb-12">
        <button
          onClick={() => setActiveSection('all')}
          className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
            activeSection === 'all'
              ? 'bg-red-900 text-white'
              : 'border-2 border-red-900 text-red-900 hover:bg-red-900 hover:text-white'
          }`}
        >
          View Complete Menu
        </button>
      </div>

      {/* All Sections View */}
      {activeSection === 'all' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {menuSections.map((section, index) => (
            <section key={`all-${sectionIds[index]}`} className="mb-16">
              <h2 className="text-3xl font-bold text-red-900 mb-8 text-center border-b-2 border-yellow-400 pb-4">
                {section.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item) => (
                  <div key={`all-${item.id}`} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-yellow-200">
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl">{item.emoji}</span>
                          <h3 className="text-lg font-semibold text-red-900">{item.name}</h3>
                        </div>
                        <span className="text-lg font-bold text-orange-600">{item.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-1">
                          {item.isVegetarian && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Veg</span>
                          )}
                          {item.isSpicy && (
                            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Spicy</span>
                          )}
                        </div>
                        <button className="bg-red-900 text-white py-1 px-3 rounded text-sm font-medium hover:bg-red-800 transition-colors duration-200">
                          Order
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
};