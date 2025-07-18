export interface PropertyProps {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  address: {
    city: string;
    country: string;
    street: string;
  };
  category: string[];
  amenities: string[];
  host: {
    name: string;
    avatar: string;
    description: string;
  };
  reviews: ReviewProps[];
  whatWeOffer: string[];
}

export interface ReviewProps {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
} 