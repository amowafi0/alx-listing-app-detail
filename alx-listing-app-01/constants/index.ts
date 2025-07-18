import { PropertyProps } from "@/interfaces/index";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: "1",
    name: "Luxury Beachfront Villa",
    description: "Experience the ultimate beachfront luxury in this stunning villa with panoramic ocean views. This spacious property features modern amenities, private beach access, and world-class service.",
    price: 450,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop"
    ],
    address: {
      city: "Maldives",
      country: "Maldives",
      street: "Beach Road, Overwater Villa 12"
    },
    category: ["Beachfront", "Luxury", "Ocean View", "Private Pool"],
    amenities: ["WiFi", "Air Conditioning", "Kitchen", "Pool", "Beach Access", "Spa", "Gym", "Restaurant"],
    host: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      description: "Professional host with 5+ years of experience in luxury hospitality. Dedicated to providing exceptional guest experiences."
    },
    reviews: [
      {
        id: "1",
        name: "Michael Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        comment: "Absolutely stunning property! The views are breathtaking and the service was impeccable. Highly recommend!",
        date: "2024-01-15"
      },
      {
        id: "2",
        name: "Emma Wilson",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        rating: 4,
        comment: "Beautiful villa with amazing amenities. The private pool was perfect for our family vacation.",
        date: "2024-01-10"
      },
      {
        id: "3",
        name: "David Brown",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        comment: "Exceeded all expectations. The location is perfect and the host was incredibly helpful throughout our stay.",
        date: "2024-01-05"
      }
    ],
    whatWeOffer: [
      "Private beach access",
      "Infinity pool with ocean views",
      "Full-service spa and wellness center",
      "Gourmet dining options",
      "Water sports equipment",
      "24/7 concierge service",
      "Airport transfer service",
      "Daily housekeeping"
    ]
  },
  {
    id: "2",
    name: "Mountain Retreat Cabin",
    description: "Escape to this cozy mountain cabin surrounded by pristine forests and stunning mountain views. Perfect for nature lovers and those seeking tranquility.",
    price: 180,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1464822759844-d150baec0134?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
    ],
    address: {
      city: "Aspen",
      country: "USA",
      street: "Mountain View Drive, Cabin 7"
    },
    category: ["Mountain View", "Cabin", "Nature", "Secluded"],
    amenities: ["WiFi", "Fireplace", "Kitchen", "Deck", "Hiking Trails", "Hot Tub", "BBQ Grill"],
    host: {
      name: "John Smith",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      description: "Local mountain guide and outdoor enthusiast. Passionate about sharing the beauty of the mountains with guests."
    },
    reviews: [
      {
        id: "4",
        name: "Lisa Anderson",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        comment: "Perfect mountain getaway! The cabin was cozy and the views were absolutely stunning. Will definitely return!",
        date: "2024-01-12"
      },
      {
        id: "5",
        name: "Robert Taylor",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
        rating: 4,
        comment: "Great location for hiking and outdoor activities. The cabin had everything we needed for a comfortable stay.",
        date: "2024-01-08"
      }
    ],
    whatWeOffer: [
      "Private hiking trails",
      "Mountain biking routes",
      "Wildlife viewing opportunities",
      "Stargazing deck",
      "Local guide services",
      "Firewood provided",
      "Emergency contact system",
      "Weather updates"
    ]
  }
]; 