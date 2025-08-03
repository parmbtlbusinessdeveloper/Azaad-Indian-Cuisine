import React from 'react';
import { X, Phone, Globe, Truck } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform animate-slideUp">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-red-900 to-red-800 text-white p-6 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-yellow-300 transition-colors duration-200 p-1"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Order from Azaad</h2>
            <p className="text-yellow-200 text-sm">Choose your preferred ordering method</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Call Now Button */}
          <button
            onClick={() => {
              // Placeholder - will be updated with actual phone number
              alert('Call (555) 123-4567 to place your order');
              onClose();
            }}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white p-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-3"
          >
            <Phone size={24} />
            <span>📞 Call Now</span>
          </button>

          {/* Order Online Button */}
          <button
            onClick={() => {
              // Placeholder - will be updated with Toast ordering link
              alert('Online ordering coming soon! Please call or use delivery apps.');
              onClose();
            }}
            className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white p-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-3"
          >
            <Globe size={24} />
            <span>🧾 Order Online</span>
          </button>

          {/* Order for Delivery Button */}
          <button
            onClick={() => {
              // Placeholder - will be updated with delivery platform links
              alert('Delivery available through Uber Eats, DoorDash, and Grubhub!');
              onClose();
            }}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white p-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-3"
          >
            <Truck size={24} />
            <span>🚗 Order for Delivery</span>
          </button>
        </div>

        {/* Footer */}
        <div className="bg-amber-50 p-4 rounded-b-2xl text-center">
          <p className="text-sm text-gray-600">
            Questions? Call us at <span className="font-semibold text-red-900">(555) 123-4567</span>
          </p>
        </div>
      </div>
    </div>
  );
};