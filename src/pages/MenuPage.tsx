import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { OrderModal } from '../components/OrderModal';

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
  const [previousSection, setPreviousSection] = useState('appetizers');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

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

  const handleSectionChange = (sectionId: string) => {
    if (sectionId !== 'all') {
      setPreviousSection(activeSection);
    }
    setActiveSection(sectionId);
  };

  const handleCompleteMenuToggle = () => {
    if (activeSection === 'all') {
      // Going back to previous section
      setActiveSection(previousSection);
    } else {
      // Going to complete menu view
      setPreviousSection(activeSection);
      setActiveSection('all');
    }
  };

  // Check if scrolling is needed and update arrow visibility
  const checkScrollButtons = React.useCallback(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const canScrollLeft = container.scrollLeft > 0;
      const canScrollRight = container.scrollLeft < (container.scrollWidth - container.clientWidth);
      
      setShowLeftArrow(canScrollLeft);
      setShowRightArrow(canScrollRight);
    }
  }, []);

  // Handle scroll navigation
  const scrollCategories = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Set up scroll event listener and initial check
  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollButtons();
      container.addEventListener('scroll', checkScrollButtons);
      
      // Check on resize
      const handleResize = () => {
        setTimeout(checkScrollButtons, 100);
      };
      window.addEventListener('resize', handleResize);
      
      return () => {
        container.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [checkScrollButtons]);
  return (
    <div className="pt-16 min-h-screen parchment-bg">
      <OrderModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
      />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-20">
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
          <div className="relative z-10 menu-fade-in">
            <div className="flex justify-center items-center mb-6">
              <div className="hidden sm:block w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <div className="mx-4 text-yellow-400 text-2xl">✦</div>
              <div className="hidden sm:block w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            </div>
            
            <h1 className="menu-title-elegant text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 relative">
              <span className="menu-glow-text">Our Menu</span>
            </h1>
            
            {/* Decorative Underline */}
            <div className="flex justify-center items-center mb-8">
              <div className="w-8 h-px bg-yellow-400 opacity-60"></div>
              <div className="mx-4 w-40 h-0.5 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 rounded-full shadow-lg"></div>
              <div className="w-8 h-px bg-yellow-400 opacity-60"></div>
            </div>
            
            <p className="menu-subtitle-elegant text-xl md:text-2xl lg:text-3xl text-yellow-200 italic font-light leading-relaxed max-w-4xl mx-auto">
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
      <div className="category-nav-elegant sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center py-6 relative">
            {/* Left Arrow */}
            {showLeftArrow && (
              <button
                onClick={() => scrollCategories('left')}
                className="absolute left-0 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm border border-amber-200 rounded-full flex items-center justify-center text-amber-800 hover:bg-amber-50 hover:border-amber-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Scroll categories left"
              >
                <ChevronLeft size={20} />
              </button>
            )}
            
            {/* Categories Container */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto space-x-8 scrollbar-hide px-16 mx-auto"
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {menuSections.map((section, index) => (
                <button
                  key={sectionIds[index]}
                  onClick={() => handleSectionChange(sectionIds[index])}
                  className={`category-button-elegant whitespace-nowrap px-6 py-3 rounded-full font-medium transition-all duration-300 flex-shrink-0 ${
                    activeSection === sectionIds[index]
                      ? 'bg-gradient-to-r from-amber-700 to-amber-800 text-white shadow-lg active'
                      : 'text-amber-800 hover:bg-amber-50'
                  } ${activeSection === sectionIds[index] ? 'active' : ''}`}
                >
                  {section.title}
                </button>
              ))}
            </div>
            
            {/* Right Arrow */}
            {showRightArrow && (
              <button
                onClick={() => scrollCategories('right')}
                className="absolute right-0 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm border border-amber-200 rounded-full flex items-center justify-center text-amber-800 hover:bg-amber-50 hover:border-amber-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Scroll categories right"
              >
                <ChevronRight size={20} />
              </button>
            )}
          </div>
          
          {/* Mobile Dropdown Navigation - Hidden on desktop */}
          <div className="md:hidden py-6">
            <div className="relative">
              <select
                value={activeSection}
                onChange={(e) => {
                  handleSectionChange(e.target.value);
                  // Smooth scroll to section if not 'all'
                  if (e.target.value !== 'all') {
                    const element = document.getElementById(e.target.value);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }
                }}
                className="w-full appearance-none bg-white/95 backdrop-blur-sm border-2 border-amber-700 rounded-xl px-6 py-4 pr-12 text-amber-800 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 menu-title-elegant"
              >
                <option value="all">View Complete Menu</option>
                {menuSections.map((section, index) => (
                  <option key={sectionIds[index]} value={sectionIds[index]}>
                    {section.title}
                  </option>
                ))}
              </select>
              {/* Custom dropdown arrow */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown className="h-6 w-6 text-amber-800" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {menuSections.map((section, index) => (
          <section 
            key={sectionIds[index]}
            id={sectionIds[index]}
            className={`mb-20 menu-fade-in-delayed ${activeSection !== sectionIds[index] ? 'hidden' : ''}`}
          >
            <div className="elegant-separator">
              <div className="elegant-separator-ornament">
                <h2 className="menu-title-elegant text-3xl md:text-4xl font-bold text-amber-900 tracking-wide">
                  {section.title}
                </h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {section.items.map((item) => (
                <div key={item.id} className="premium-menu-card rounded-2xl overflow-hidden menu-item-fade">
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="menu-title-elegant text-2xl font-bold text-amber-900 leading-tight mb-2">{item.name}</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {item.isVegetarian && (
                            <span className="dietary-badge-elegant dietary-badge-vegetarian">Vegetarian</span>
                          )}
                          {item.isSpicy && (
                            <span className="dietary-badge-elegant dietary-badge-spicy">Spicy</span>
                          )}
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <span className="elegant-price">{item.price}</span>
                      </div>
                    </div>
                    
                    <p className="menu-description-elegant mb-6 leading-relaxed text-base">{item.description}</p>
                    
                    {/* Elegant divider */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent mb-6"></div>
                    
                    {/* Image Placeholder with elegant styling */}
                    <div className="w-full h-32 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl mb-6 flex items-center justify-center border border-amber-200">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-amber-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-amber-700 text-xl">📸</span>
                        </div>
                        <span className="menu-description-elegant text-sm font-medium">Photo Coming Soon</span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => setIsOrderModalOpen(true)}
                      className="order-button-elegant w-full text-white py-4 px-6 rounded-xl font-bold text-base shadow-lg"
                    >
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
      <div className="hidden lg:block text-center pb-16">
        <button
          onClick={handleCompleteMenuToggle}
          className={`px-12 py-4 rounded-xl font-semibold transition-all duration-300 menu-title-elegant ${
            activeSection === 'all'
              ? 'bg-gradient-to-r from-amber-700 to-amber-800 text-white shadow-lg'
              : 'border-2 border-amber-700 text-amber-800 hover:bg-gradient-to-r hover:from-amber-700 hover:to-amber-800 hover:text-white'
          }`}
        >
          {activeSection === 'all' ? 'Back to Categories' : 'View Complete Menu'}
        </button>
      </div>

      {/* All Sections View */}
      {activeSection === 'all' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {menuSections.map((section, index) => (
            <section key={`all-${sectionIds[index]}`} className="mb-20 menu-fade-in">
              <div className="elegant-separator">
                <div className="elegant-separator-ornament">
                  <h2 className="menu-title-elegant text-3xl font-bold text-amber-900 tracking-wide">
                    {section.title}
                  </h2>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {section.items.map((item) => (
                  <div key={`all-${item.id}`} className="premium-menu-card rounded-xl overflow-hidden menu-item-fade">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="menu-title-elegant text-lg font-bold text-amber-900 leading-tight mb-2">{item.name}</h3>
                        </div>
                        <span className="elegant-price text-lg ml-2">{item.price}</span>
                      </div>
                      
                      <p className="menu-description-elegant text-sm mb-4 leading-relaxed">{item.description}</p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex flex-wrap gap-1">
                          {item.isVegetarian && (
                            <span className="dietary-badge-elegant dietary-badge-vegetarian text-xs">Veg</span>
                          )}
                          {item.isSpicy && (
                            <span className="dietary-badge-elegant dietary-badge-spicy text-xs">Spicy</span>
                          )}
                        </div>
                        <button 
                          onClick={() => setIsOrderModalOpen(true)}
                          className="order-button-elegant text-white py-2 px-4 rounded-lg text-sm font-bold shadow-md"
                        >
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