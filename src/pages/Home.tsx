import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar, Users, Shield, Award, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";
import TripCard from "@/components/trips/TripCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Home = () => {
  const featuredTrips = [
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
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          </div>

          <div className="container relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              Discover Your Next Adventure
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Connect with the best travel agencies and guides to create unforgettable experiences
            </p>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-2xl p-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2 px-4 py-2 border rounded-lg">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Where to?"
                    className="border-0 p-0 focus-visible:ring-0"
                  />
                </div>
                <div className="flex items-center gap-2 px-4 py-2 border rounded-lg">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="When?"
                    type="date"
                    className="border-0 p-0 focus-visible:ring-0"
                  />
                </div>
                <div className="flex items-center gap-2 px-4 py-2 border rounded-lg">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Travelers"
                    type="number"
                    min="1"
                    className="border-0 p-0 focus-visible:ring-0"
                  />
                </div>
                <Button size="lg" className="w-full h-full">
                  <Search className="mr-2 h-5 w-5" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Trips */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Trips</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Handpicked adventures from our most trusted travel partners
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredTrips.map((trip) => (
                <TripCard key={trip.id} {...trip} />
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" variant="outline" asChild>
                <Link to="/trips">Explore All Trips</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose YallaNsafro</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your trusted platform for discovering and booking amazing travel experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Verified Partners</h3>
                <p className="text-muted-foreground">
                  All agencies and guides are thoroughly vetted and verified for your safety
                </p>
              </div>

              <div className="text-center p-6">
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Best Price Guarantee</h3>
                <p className="text-muted-foreground">
                  Compare options and get the best deals on your dream adventures
                </p>
              </div>

              <div className="text-center p-6">
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <HeartHandshake className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Our dedicated team is always here to help with any questions or concerns
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of travelers who have discovered their perfect adventure with YallaNsafro
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/signup">Sign Up Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/travel-builder">Build Custom Trip</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
