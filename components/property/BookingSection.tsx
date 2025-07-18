import React, { useState } from 'react';

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const calculateTotal = () => {
    const nights = calculateNights();
    return nights * price;
  };

  const handleReserve = () => {
    if (!checkIn || !checkOut) {
      alert('Please select check-in and check-out dates');
      return;
    }
    alert('Booking request submitted!');
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200">
      <div className="flex items-baseline space-x-2 mb-4">
        <h3 className="text-2xl font-bold">${price}</h3>
        <span className="text-gray-600">/ night</span>
      </div>

      {/* Date Pickers */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check-in
          </label>
          <input 
            type="date" 
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check-out
          </label>
          <input 
            type="date" 
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min={checkIn || new Date().toISOString().split('T')[0]}
          />
        </div>
      </div>

      {/* Price Breakdown */}
      {checkIn && checkOut && (
        <div className="border-t border-gray-200 pt-4 mb-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>${price} × {calculateNights()} nights</span>
              <span>${calculateTotal()}</span>
            </div>
            <div className="flex justify-between">
              <span>Service fee</span>
              <span>${Math.round(calculateTotal() * 0.12)}</span>
            </div>
            <div className="border-t border-gray-200 pt-2 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${calculateTotal() + Math.round(calculateTotal() * 0.12)}</span>
            </div>
          </div>
        </div>
      )}

      {/* Reserve Button */}
      <button 
        onClick={handleReserve}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Reserve now
      </button>

      {/* Additional Info */}
      <p className="text-center text-sm text-gray-500 mt-4">
        You won&apos;t be charged yet
      </p>
    </div>
  );
};

export default BookingSection; 