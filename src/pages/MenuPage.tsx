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
          description: 'Golden, flaky pastries lovingly filled with aromatic spiced potatoes, garden-fresh peas, and fragrant herbs, deep-fried to perfection',
          isVegetarian: true
        },
        {
          id: 'pakora',
          name: 'Mixed Vegetable Pakora',
          price: '$8.99',
          description: 'Seasonal vegetables delicately coated in our signature spiced chickpea batter and fried until golden and crispy',
          isVegetarian: true
        },
        {
          id: 'chicken_tikka',
          name: 'Chicken Tikka',
          price: '$12.99',
          description: 'Succulent pieces of chicken marinated overnight in yogurt and traditional spices, then grilled to smoky perfection in our clay tandoor',
          isSpicy: true
        },
        {
          id: 'seekh_kebab',
          name: 'Seekh Kebab',
          price: '$13.99',
          description: 'Hand-rolled skewers of premium ground lamb infused with aromatic spices and fresh herbs, charcoal-grilled for an authentic smoky flavor',
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
          description: 'Our signature dish featuring tender tandoor-grilled chicken simmered in a velvety tomato-based curry enriched with butter, cream, and aromatic spices'
        },
        {
          id: 'chicken_tikka_masala',
          name: 'Chicken Tikka Masala',
          price: '$17.99',
          description: 'Charcoal-grilled chicken tikka pieces nestled in a rich, creamy tomato curry sauce with onions, bell peppers, and traditional masala spices',
          isSpicy: true
        },
        {
          id: 'chicken_curry',
          name: 'Traditional Chicken Curry',
          price: '$15.99',
          description: 'A time-honored family recipe featuring tender chicken slow-cooked with caramelized onions, fresh ginger, garlic, and our secret blend of Punjabi spices',
          isSpicy: true
        },
        {
          id: 'chicken_vindaloo',
          name: 'Chicken Vindaloo',
          price: '$17.99',
          description: 'A bold and fiery curry featuring tender chicken and potatoes simmered in a tangy, intensely spiced sauce with vinegar and red chilies',
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
          description: 'Premium cuts of lamb slow-braised until fork-tender in a robust curry sauce infused with traditional Punjabi spices and fresh herbs',
          isSpicy: true
        },
        {
          id: 'lamb_biryani',
          name: 'Lamb Biryani',
          price: '$21.99',
          description: 'Fragrant long-grain basmati rice layered with tender spiced lamb, caramelized onions, saffron, and fresh mint, slow-cooked to aromatic perfection'
        },
        {
          id: 'lamb_vindaloo',
          name: 'Lamb Vindaloo',
          price: '$20.99',
          description: 'Tender lamb and potatoes braised in a fiery, tangy curry sauce with vinegar, red chilies, and aromatic spices for the adventurous palate',
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
          description: 'Fresh catch of the day gently simmered in a fragrant coconut-based curry with curry leaves, mustard seeds, and South Indian spices',
          isSpicy: true
        },
        {
          id: 'shrimp_masala',
          name: 'Shrimp Masala',
          price: '$19.99',
          description: 'Plump jumbo shrimp sautéed and simmered in a rich, aromatic tomato-onion gravy with bell peppers and traditional masala spices',
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
          description: 'Premium black lentils and kidney beans slow-simmered overnight with butter, cream, and aromatic spices for an incredibly rich and creamy texture',
          isVegetarian: true
        },
        {
          id: 'palak_paneer',
          name: 'Palak Paneer',
          price: '$14.99',
          description: 'Cubes of fresh house-made cottage cheese nestled in a velvety spinach curry enriched with cream, garlic, and traditional spices',
          isVegetarian: true
        },
        {
          id: 'chana_masala',
          name: 'Chana Masala',
          price: '$12.99',
          description: 'Tender chickpeas simmered in a robust tomato-onion curry with ginger, garlic, and a medley of aromatic spices, finished with fresh cilantro',
          isVegetarian: true,
          isSpicy: true
        },
        {
          id: 'aloo_gobi',
          name: 'Aloo Gobi',
          price: '$13.99',
          description: 'Fresh cauliflower florets and tender potatoes dry-sautéed with turmeric, cumin, coriander, and traditional Punjabi spices',
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
          description: 'Aromatic long-grain basmati rice layered with marinated chicken, caramelized onions, saffron, and fresh herbs, slow-cooked in a sealed pot'
        },
        {
          id: 'vegetable_biryani',
          name: 'Vegetable Biryani',
          price: '$15.99',
          description: 'Fragrant basmati rice layered with seasonal vegetables, paneer, nuts, and raisins, delicately spiced and garnished with saffron and fresh mint',
          isVegetarian: true
        },
        {
          id: 'jeera_rice',
          name: 'Jeera Rice',
          price: '$4.99',
          description: 'Fluffy basmati rice tempered with whole cumin seeds, ghee, and bay leaves for a simple yet aromatic accompaniment',
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
          description: 'Soft, pillowy leavened bread baked fresh in our traditional clay tandoor oven, brushed with ghee and served warm',
          isVegetarian: true
        },
        {
          id: 'garlic_naan',
          name: 'Garlic Naan',
          price: '$4.99',
          description: 'Our signature naan topped with minced fresh garlic, cilantro, and a touch of butter, baked to golden perfection in the tandoor',
          isVegetarian: true
        },
        {
          id: 'roti',
          name: 'Chapati Roti',
          price: '$2.99',
          description: 'Traditional unleavened whole wheat flatbread cooked on a hot griddle until soft and slightly charred, a healthy staple of Indian cuisine',
          isVegetarian: true
        },
        {
          id: 'paratha',
          name: 'Aloo Paratha',
          price: '$5.99',
          description: 'Flaky, layered whole wheat bread stuffed with seasoned mashed potatoes, onions, and spices, cooked on a griddle with ghee',
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
          description: 'Refreshing yogurt-based side dish with diced cucumber, fresh mint, roasted cumin, and a hint of black salt for cooling relief',
          isVegetarian: true
        },
        {
          id: 'pickle',
          name: 'Mixed Pickle',
          price: '$2.99',
          description: 'Traditional Indian pickle featuring mixed vegetables and fruits preserved in mustard oil with aromatic spices and red chilies',
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
          description: 'Smooth and creamy yogurt-based drink blended with sweet mango pulp, a touch of cardamom, and garnished with pistachios',
          isVegetarian: true
        },
        {
          id: 'chai',
          name: 'Masala Chai',
          price: '$3.99',
          description: 'Aromatic black tea simmered with whole spices including cardamom, cinnamon, ginger, and cloves, served with steamed milk and sugar',
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
          description: 'Soft, spongy milk dumplings made from khoya, gently fried and soaked in fragrant rose-cardamom syrup, served warm',
          isVegetarian: true
        },
        {
          id: 'kulfi',
          name: 'Kulfi',
          price: '$4.99',
          description: 'Rich, dense traditional Indian ice cream made with reduced milk, cardamom, and saffron, garnished with chopped pistachios and almonds',
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
    <div className="pt-16 min-h-screen vintage-parchment-bg">
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
            
            <h1 className="vintage-menu-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 relative">
              <span className="menu-glow-text">Our Menu</span>
            </h1>
            
            {/* Decorative Underline */}
            <div className="flex justify-center items-center mb-8">
              <div className="w-8 h-px bg-yellow-400 opacity-60"></div>
              <div className="mx-4 w-40 h-0.5 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 rounded-full shadow-lg"></div>
              <div className="w-8 h-px bg-yellow-400 opacity-60"></div>
            </div>
            
            <p className="vintage-menu-subtitle text-xl md:text-2xl lg:text-3xl text-yellow-200 italic font-light leading-relaxed max-w-4xl mx-auto">
              <p className="premium-menu-subtitle text-xl md:text-2xl lg:text-3xl text-yellow-200 italic font-light leading-relaxed max-w-4xl mx-auto">
              Authentic Punjabi flavors with traditional recipes passed down through generations. Family-owned restaurant bringing the flavors of Punjab to your table.
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
      <div className="vintage-category-nav sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center py-6 relative">
            {/* Left Arrow */}
            {showLeftArrow && (
              <button
                onClick={() => scrollCategories('left')}
                className="absolute left-0 z-10 w-14 h-14 bg-white/95 backdrop-blur-md border-2 border-amber-300 rounded-full flex items-center justify-center text-amber-900 hover:bg-amber-50 hover:border-amber-400 transition-all duration-400 shadow-xl hover:shadow-2xl hover:scale-105"
                aria-label="Scroll categories left"
              >
                <ChevronLeft size={24} />
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
                  className={`vintage-category-button whitespace-nowrap px-8 py-4 rounded-full font-semibold transition-all duration-400 flex-shrink-0 ${
                    activeSection === sectionIds[index]
                      ? 'bg-gradient-to-r from-amber-800 to-amber-900 text-white shadow-xl active'
                      : 'text-amber-900 hover:bg-amber-50 hover:shadow-lg'
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
                className="absolute right-0 z-10 w-14 h-14 bg-white/95 backdrop-blur-md border-2 border-amber-300 rounded-full flex items-center justify-center text-amber-900 hover:bg-amber-50 hover:border-amber-400 transition-all duration-400 shadow-xl hover:shadow-2xl hover:scale-105"
                aria-label="Scroll categories right"
              >
                <ChevronRight size={24} />
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
                className="vintage-dropdown w-full appearance-none rounded-xl px-6 py-4 pr-12 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-400"
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
                <ChevronDown className="h-6 w-6 text-amber-900" />
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
            <div className="vintage-separator vintage-motif">
              <div className="vintage-separator-ornament">
                <h2 className="vintage-menu-title text-3xl md:text-4xl font-bold text-amber-900 tracking-wide">
                  {section.title}
                </h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {section.items.map((item) => (
                <div key={item.id} className="vintage-menu-card rounded-2xl overflow-hidden menu-item-fade vintage-motif">
                  <div className="p-8 relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="vintage-menu-title text-2xl font-bold text-amber-900 leading-tight mb-3">{item.name}</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {item.isVegetarian && (
                            <span className="vintage-dietary-badge vintage-dietary-badge-vegetarian">Vegetarian</span>
                          )}
                          {item.isSpicy && (
                            <span className="vintage-dietary-badge vintage-dietary-badge-spicy">Spicy</span>
                          )}
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <span className="vintage-price">{item.price}</span>
                      </div>
                    </div>
                    
                    <p className="vintage-menu-description mb-6 leading-relaxed text-base">{item.description}</p>
                    
                    {/* Vintage ornamental divider */}
                    <div className="relative mb-6">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-amber-300 rounded-full"></div>
                    </div>
                    
                    {/* Image Placeholder with vintage styling */}
                    <div className="vintage-image-placeholder w-full h-32 rounded-xl mb-6 flex items-center justify-center relative">
                      <div className="text-center">
                        <div className="vintage-image-icon w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-xl">📷</span>
                        </div>
                        <span className="vintage-menu-description text-sm font-medium">Artisanal Photo Coming Soon</span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => setIsOrderModalOpen(true)}
                      className="vintage-order-button w-full text-white py-4 px-6 rounded-xl font-bold text-base"
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
          className={`px-12 py-4 rounded-xl font-semibold transition-all duration-400 vintage-menu-title ${
            activeSection === 'all'
              ? 'bg-gradient-to-r from-amber-800 to-amber-900 text-white shadow-xl'
              : 'border-2 border-amber-800 text-amber-900 hover:bg-gradient-to-r hover:from-amber-800 hover:to-amber-900 hover:text-white hover:shadow-xl'
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
              <div className="vintage-separator vintage-motif">
                <div className="vintage-separator-ornament">
                  <h2 className="vintage-menu-title text-3xl font-bold text-amber-900 tracking-wide">
                    {section.title}
                  </h2>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {section.items.map((item) => (
                  <div key={`all-${item.id}`} className="vintage-menu-card rounded-xl overflow-hidden menu-item-fade vintage-motif">
                    <div className="p-6 relative z-10">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="vintage-menu-title text-lg font-bold text-amber-900 leading-tight mb-2">{item.name}</h3>
                        </div>
                        <span className="vintage-price text-lg ml-2">{item.price}</span>
                      </div>
                      
                      <p className="vintage-menu-description text-sm mb-4 leading-relaxed">{item.description}</p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex flex-wrap gap-1">
                          {item.isVegetarian && (
                            <span className="vintage-dietary-badge vintage-dietary-badge-vegetarian text-xs">Veg</span>
                          )}
                          {item.isSpicy && (
                            <span className="vintage-dietary-badge vintage-dietary-badge-spicy text-xs">Spicy</span>
                          )}
                        </div>
                        <button 
                          onClick={() => setIsOrderModalOpen(true)}
                          className="vintage-order-button text-white py-2 px-4 rounded-lg text-sm font-bold"
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