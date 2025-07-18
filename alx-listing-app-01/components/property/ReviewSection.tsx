import React from 'react';
import { ReviewProps } from '@/interfaces/index';
import Image from 'next/image';

const ReviewSection: React.FC<{ reviews: ReviewProps[] }> = ({ reviews }) => {
  const renderStars = (rating: number) => {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Reviews</h2>
        <span className="text-gray-600">{reviews.length} reviews</span>
      </div>
      
      {reviews.map((review) => (
        <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
          <div className="flex items-start space-x-4">
            <div className="relative w-12 h-12">
              <Image 
                src={review.avatar} 
                alt={review.name} 
                fill
                className="rounded-full object-cover"
                sizes="48px"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold text-gray-900">{review.name}</h3>
                <span className="text-yellow-500">{renderStars(review.rating)}</span>
              </div>
              <p className="text-sm text-gray-500 mb-3">{formatDate(review.date)}</p>
              <p className="text-gray-700 leading-relaxed">{review.comment}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection; 