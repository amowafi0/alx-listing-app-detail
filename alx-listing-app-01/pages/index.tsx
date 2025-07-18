import { Geist, Geist_Mono } from "next/font/google";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const renderStars = (rating: number) => {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  };

  return (
    <div className={`${geistSans.className} ${geistMono.className} min-h-screen bg-gray-50`}>
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-900">ALX Listing App</h1>
          <p className="text-gray-600 mt-2">Discover amazing properties around the world</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property) => (
            <Link 
              key={property.id} 
              href={`/property/${encodeURIComponent(property.name)}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{property.name}</h2>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-yellow-500">{renderStars(property.rating)}</span>
                  <span className="text-gray-600">{property.rating}</span>
                </div>
                <p className="text-gray-600 mb-2">{property.address.city}, {property.address.country}</p>
                <p className="text-gray-900 font-semibold">${property.price} / night</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-6 py-8 text-center text-gray-600">
          <p>&copy; 2024 ALX Listing App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
