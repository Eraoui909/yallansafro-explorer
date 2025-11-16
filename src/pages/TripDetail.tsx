import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MapPin, Calendar, Users, Clock, Heart, Share2, CheckCircle2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const TripDetail = () => {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock data - in real app, fetch based on id
  const trip = {
    id: id,
    title: "Sahara Desert Adventure",
    destination: "Morocco",
    rating: 4.8,
    reviewCount: 142,
    price: 1299,
    duration: "7 days / 6 nights",
    maxParticipants: 12,
    difficulty: "Moderate",
    activities: ["Camel Trekking", "Camping", "Cultural Tours", "Star Gazing"],
    images: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1519995451813-39e29e054914?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1495562569060-2eec283d3391?w=1200&h=800&fit=crop",
    ],
    description: "Experience the magic of the Sahara Desert with our carefully curated adventure tour. Journey through Morocco's most stunning landscapes, sleep under the stars in traditional Berber camps, and immerse yourself in the rich culture of the desert.",
    highlights: [
      "Camel trek through golden sand dunes",
      "Overnight stay in authentic Berber camps",
      "Traditional Moroccan cuisine and mint tea ceremonies",
      "Visit ancient kasbahs and palm oases",
      "Stunning sunrise and sunset views",
      "Cultural exchange with nomadic families",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Marrakech", description: "Meet your guide and transfer to hotel. Evening orientation and welcome dinner." },
      { day: 2, title: "Marrakech to Dades Valley", description: "Drive through the High Atlas Mountains, visit Ait Benhaddou kasbah." },
      { day: 3, title: "Dades to Merzouga", description: "Journey to the edge of the Sahara, camel trek at sunset." },
      { day: 4, title: "Sahara Desert Experience", description: "Full day exploring dunes, visit nomadic families, evening music performance." },
      { day: 5, title: "Merzouga to Todra Gorge", description: "Sunrise camel ride, drive to Todra Gorge for hiking." },
      { day: 6, title: "Return to Marrakech", description: "Scenic drive back, stop at local markets and cooperatives." },
      { day: 7, title: "Departure", description: "Morning at leisure, transfer to airport." },
    ],
    included: [
      "All transportation in comfortable vehicles",
      "6 nights accommodation (hotels and desert camps)",
      "All meals as specified in itinerary",
      "Professional English-speaking guide",
      "Camel trekking experience",
      "All entrance fees and activities",
    ],
    agency: {
      name: "Desert Dreams Travel",
      rating: 4.9,
      trips: 48,
      avatar: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=200&h=200&fit=crop",
    },
  };

  const reviews = [
    {
      id: 1,
      author: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      rating: 5,
      date: "2 weeks ago",
      comment: "Absolutely incredible experience! The desert was breathtaking and our guide was knowledgeable and friendly.",
    },
    {
      id: 2,
      author: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      rating: 5,
      date: "1 month ago",
      comment: "Best trip of my life! The accommodations were comfortable and the food was amazing.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Image Gallery */}
        <div className="container py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-[500px]">
            <div className="md:col-span-2 md:row-span-2">
              <img
                src={trip.images[0]}
                alt={trip.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {trip.images.slice(1).map((img, idx) => (
              <div key={idx} className="md:col-span-2">
                <img
                  src={img}
                  alt={`${trip.title} ${idx + 2}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="container pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-4xl font-bold mb-2">{trip.title}</h1>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{trip.destination}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="font-semibold">{trip.rating}</span>
                        <span>({trip.reviewCount} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setIsFavorite(!isFavorite)}
                    >
                      <Heart className={`h-5 w-5 ${isFavorite ? "fill-destructive text-destructive" : ""}`} />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {trip.activities.map((activity) => (
                    <Badge key={activity} variant="secondary">
                      {activity}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground mb-1">Duration</p>
                    <p className="font-semibold">{trip.duration}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground mb-1">Group Size</p>
                    <p className="font-semibold">Up to {trip.maxParticipants}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground mb-1">Difficulty</p>
                    <p className="font-semibold">{trip.difficulty}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Star className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground mb-1">Rating</p>
                    <p className="font-semibold">{trip.rating}/5.0</p>
                  </CardContent>
                </Card>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="overview">
                <TabsList className="w-full justify-start">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="included">What's Included</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6 mt-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">About This Trip</h3>
                    <p className="text-muted-foreground leading-relaxed">{trip.description}</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Highlights</h3>
                    <ul className="space-y-2">
                      {trip.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="itinerary" className="mt-6">
                  <h3 className="text-2xl font-semibold mb-6">Day by Day</h3>
                  <div className="space-y-6">
                    {trip.itinerary.map((day) => (
                      <div key={day.day} className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                          {day.day}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1">{day.title}</h4>
                          <p className="text-muted-foreground">{day.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="included" className="mt-6">
                  <h3 className="text-2xl font-semibold mb-6">What's Included</h3>
                  <ul className="space-y-3">
                    {trip.included.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-semibold">Guest Reviews</h3>
                      <Button>Write a Review</Button>
                    </div>

                    {reviews.map((review) => (
                      <Card key={review.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <Avatar>
                              <AvatarImage src={review.avatar} />
                              <AvatarFallback>{review.author[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <div>
                                  <p className="font-semibold">{review.author}</p>
                                  <p className="text-sm text-muted-foreground">{review.date}</p>
                                </div>
                                <div className="flex items-center gap-1">
                                  {Array.from({ length: review.rating }).map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                                  ))}
                                </div>
                              </div>
                              <p className="text-muted-foreground">{review.comment}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              {/* Agency Info */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={trip.agency.avatar} />
                      <AvatarFallback>{trip.agency.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{trip.agency.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-accent text-accent" />
                          <span>{trip.agency.rating} rating</span>
                        </div>
                        <span>{trip.agency.trips} trips</span>
                      </div>
                    </div>
                    <Button variant="outline" asChild>
                      <Link to={`/agencies/${trip.agency.name}`}>View Profile</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">From</p>
                    <p className="text-4xl font-bold text-primary">${trip.price}</p>
                    <p className="text-sm text-muted-foreground">per person</p>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Select Date</label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Travelers</label>
                      <input
                        type="number"
                        min="1"
                        max={trip.maxParticipants}
                        defaultValue="1"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    Book Now
                  </Button>

                  <Button className="w-full" variant="outline">
                    Contact Agency
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Free cancellation up to 48 hours before departure
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TripDetail;
