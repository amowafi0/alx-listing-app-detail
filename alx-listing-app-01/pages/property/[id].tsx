import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  
  // Find property by name (since we're using name as the ID in the URL)
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Property not found</h1>
        <p className="text-gray-600">The property you&apos;re looking for doesn&apos;t exist.</p>
        <button 
          onClick={() => router.push('/')}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go back home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PropertyDetail property={property} />
    </div>
  );
} 