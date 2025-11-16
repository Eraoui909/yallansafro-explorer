import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TripCard from "@/components/trips/TripCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";

const Trips = () => {
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const trips = [
    {
      id: "1",
      title: "Sahara Desert Adventure",
      destination: "Morocco",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
      duration: "7 days",
      price: 1299,
      rating: 4.8,
      reviewCount: 142,
      maxParticipants: 12,
      activities: ["Camel Trekking", "Camping", "Cultural Tours"],
      agencyName: "Desert Dreams Travel",
    },
    {
      id: "2",
      title: "Mediterranean Coastal Tour",
      destination: "Greece",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop",
      duration: "10 days",
      price: 2199,
      rating: 4.9,
      reviewCount: 89,
      maxParticipants: 15,
      activities: ["Island Hopping", "Sailing", "Wine Tasting"],
      agencyName: "Aegean Adventures",
    },
    {
      id: "3",
      title: "Alpine Hiking Experience",
      destination: "Switzerland",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      duration: "5 days",
      price: 1599,
      rating: 4.7,
      reviewCount: 67,
      maxParticipants: 10,
      activities: ["Hiking", "Mountain Views", "Local Cuisine"],
      agencyName: "Alpine Explorers",
    },
    {
      id: "4",
      title: "Tokyo to Kyoto Cultural Journey",
      destination: "Japan",
      image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&h=600&fit=crop",
      duration: "12 days",
      price: 3299,
      rating: 4.9,
      reviewCount: 156,
      maxParticipants: 8,
      activities: ["Temple Tours", "Tea Ceremony", "Sushi Making"],
      agencyName: "Rising Sun Travel",
    },
    {
      id: "5",
      title: "Amazon Rainforest Expedition",
      destination: "Brazil",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=600&fit=crop",
      duration: "8 days",
      price: 1899,
      rating: 4.6,
      reviewCount: 94,
      maxParticipants: 10,
      activities: ["Wildlife Spotting", "Jungle Trekking", "River Cruise"],
      agencyName: "Wild Amazon Tours",
    },
    {
      id: "6",
      title: "Northern Lights Iceland",
      destination: "Iceland",
      image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800&h=600&fit=crop",
      duration: "6 days",
      price: 2499,
      rating: 4.8,
      reviewCount: 178,
      maxParticipants: 12,
      activities: ["Aurora Viewing", "Hot Springs", "Glacier Hiking"],
      agencyName: "Nordic Adventures",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Explore Trips</h1>
            <p className="text-lg text-muted-foreground">
              Discover amazing adventures around the world
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-20 space-y-6 p-6 border rounded-lg bg-card">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-lg">Filters</h2>
                  <Button variant="ghost" size="sm">Clear All</Button>
                </div>

                {/* Search */}
                <div className="space-y-2">
                  <Label>Search</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search trips..." className="pl-10" />
                  </div>
                </div>

                {/* Price Range */}
                <div className="space-y-4">
                  <Label>Price Range</Label>
                  <Slider
                    min={0}
                    max={5000}
                    step={100}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="w-full"
                  />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Destinations */}
                <div className="space-y-3">
                  <Label>Destinations</Label>
                  <div className="space-y-2">
                    {["Morocco", "Greece", "Switzerland", "Japan", "Brazil", "Iceland"].map((dest) => (
                      <div key={dest} className="flex items-center space-x-2">
                        <Checkbox id={dest} />
                        <label htmlFor={dest} className="text-sm cursor-pointer">
                          {dest}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activities */}
                <div className="space-y-3">
                  <Label>Activities</Label>
                  <div className="space-y-2">
                    {["Hiking", "Cultural Tours", "Water Sports", "Wildlife", "Adventure"].map((activity) => (
                      <div key={activity} className="flex items-center space-x-2">
                        <Checkbox id={activity} />
                        <label htmlFor={activity} className="text-sm cursor-pointer">
                          {activity}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Duration */}
                <div className="space-y-2">
                  <Label>Duration</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any duration</SelectItem>
                      <SelectItem value="1-3">1-3 days</SelectItem>
                      <SelectItem value="4-7">4-7 days</SelectItem>
                      <SelectItem value="8-14">8-14 days</SelectItem>
                      <SelectItem value="15+">15+ days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </aside>

            {/* Trip Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">{trips.length} trips found</p>
                <Select defaultValue="popular">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="duration">Duration</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {trips.map((trip) => (
                  <TripCard key={trip.id} {...trip} />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center gap-2">
                <Button variant="outline">Previous</Button>
                <Button variant="outline">1</Button>
                <Button>2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Trips;
