import { UMKMDetailForm } from "@/components/umkm-detail-form";

export default function UMKMDetailPage({ params }: { params: { id: string } }) {
  if (!params?.id) {
    throw new Error("Invalid params: ID is missing.");
  }

  const umkmData = {
    id: params.id,
    name: "Sample UMKM",
    description: "This is a sample UMKM description.",
    location: "123 Main St, City, Country",
    coordinates: { lat: -6.2088, lng: 106.8456 },
    phoneNumber: "+62 123 4567 890",
    openingHours: "09:00",
    closingHours: "18:00",
    image: "/placeholder.svg",
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">UMKM Details</h1>
      {/* Kirimkan umkmData sebagai props ke Client Component */}
      <UMKMDetailForm umkmData={umkmData} />
    </div>
  );
}
