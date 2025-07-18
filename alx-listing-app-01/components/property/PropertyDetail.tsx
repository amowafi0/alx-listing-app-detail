import React, { useState } from 'react';
import { PropertyProps } from "@/interfaces/index";
import BookingSection from './BookingSection';
import ReviewSection from './ReviewSection';
import Image from 'next/image';

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState('what-we-offer');

  const renderStars = (rating: number) => {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  };

  const tabs = [
    { id: 'what-we-offer', label: 'What we offer' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'about-host', label: 'About host' }
  ];

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-900">{property.name}</h1>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-yellow-500 text-lg">{renderStars(property.rating)}</span>
          <span className="text-gray-600">{property.rating} • {property.address.city}, {property.address.country}</span>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-4 gap-2 mb-8">
        <div className="col-span-2 row-span-2 relative h-96">
          <Image 
            src={property.images[0]} 
            alt={property.name} 
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
          />
        </div>
        {property.images.slice(1, 5).map((image, index) => (
          <div key={index} className="relative h-48">
            <Image 
              src={image} 
              alt={`${property.name} ${index + 2}`} 
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>

      {/* Main Content and Booking Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2">
          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="min-h-96">
            {activeTab === 'what-we-offer' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">What this place offers</h2>
                <div className="grid grid-cols-2 gap-4">
                  {property.whatWeOffer.map((offer, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{offer}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <ReviewSection reviews={property.reviews} />
            )}

            {activeTab === 'about-host' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">About the host</h2>
                <div className="flex items-start space-x-4">
                  <div className="relative w-16 h-16">
                    <Image 
                      src={property.host.avatar} 
                      alt={property.host.name} 
                      fill
                      className="rounded-full object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{property.host.name}</h3>
                    <p className="text-gray-600 mt-2">{property.host.description}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Booking Section */}
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <BookingSection price={property.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail; 