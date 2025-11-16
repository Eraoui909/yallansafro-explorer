import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, DollarSign, Sparkles, Send } from "lucide-react";

const TravelBuilder = () => {
  const [step, setStep] = useState(1);
  const [customTrip, setCustomTrip] = useState({
    destination: "",
    duration: "",
    budget: "",
    travelers: "",
    activities: [] as string[],
    preferences: "",
  });

  const activities = [
    "Adventure Sports",
    "Cultural Tours",
    "Beach Relaxation",
    "Mountain Hiking",
    "City Exploration",
    "Wildlife Safari",
    "Photography",
    "Food & Wine",
    "Water Sports",
    "Historical Sites",
  ];

  const handleActivityToggle = (activity: string) => {
    setCustomTrip((prev) => ({
      ...prev,
      activities: prev.activities.includes(activity)
        ? prev.activities.filter((a) => a !== activity)
        : [...prev.activities, activity],
    }));
  };

  const handleSubmit = () => {
    console.log("Custom trip request:", customTrip);
    // Here you would send the request to agencies
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Build Your Dream Trip</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us what you're looking for, and we'll connect you with agencies who can create the perfect itinerary
            </p>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle>Trip Details</CardTitle>
                <Badge variant="secondary">Step {step} of 3</Badge>
              </div>
              <CardDescription>
                Fill in your preferences and receive custom proposals from travel agencies
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {step === 1 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="destination">Where do you want to go?</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="destination"
                        placeholder="e.g., Morocco, Greece, Japan..."
                        className="pl-10"
                        value={customTrip.destination}
                        onChange={(e) =>
                          setCustomTrip({ ...customTrip, destination: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="duration">Trip Duration</Label>
                      <Select
                        value={customTrip.duration}
                        onValueChange={(value) =>
                          setCustomTrip({ ...customTrip, duration: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3-5">3-5 days</SelectItem>
                          <SelectItem value="6-9">6-9 days</SelectItem>
                          <SelectItem value="10-14">10-14 days</SelectItem>
                          <SelectItem value="15+">15+ days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="travelers">Number of Travelers</Label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="travelers"
                          type="number"
                          min="1"
                          placeholder="How many people?"
                          className="pl-10"
                          value={customTrip.travelers}
                          onChange={(e) =>
                            setCustomTrip({ ...customTrip, travelers: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget per Person (USD)</Label>
                    <Select
                      value={customTrip.budget}
                      onValueChange={(value) =>
                        setCustomTrip({ ...customTrip, budget: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                        <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                        <SelectItem value="2000-3500">$2,000 - $3,500</SelectItem>
                        <SelectItem value="3500+">$3,500+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button onClick={() => setStep(2)} className="w-full">
                    Continue
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="space-y-3">
                    <Label>What activities interest you?</Label>
                    <p className="text-sm text-muted-foreground">Select all that apply</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {activities.map((activity) => (
                        <div
                          key={activity}
                          className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:bg-muted/50"
                          onClick={() => handleActivityToggle(activity)}
                        >
                          <Checkbox
                            id={activity}
                            checked={customTrip.activities.includes(activity)}
                          />
                          <label
                            htmlFor={activity}
                            className="text-sm cursor-pointer flex-1"
                          >
                            {activity}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                      Back
                    </Button>
                    <Button onClick={() => setStep(3)} className="flex-1">
                      Continue
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="preferences">Additional Preferences</Label>
                    <Textarea
                      id="preferences"
                      placeholder="Tell us more about what makes your perfect trip... (e.g., dietary requirements, accommodation preferences, pace of travel, must-see attractions)"
                      rows={6}
                      value={customTrip.preferences}
                      onChange={(e) =>
                        setCustomTrip({ ...customTrip, preferences: e.target.value })
                      }
                    />
                  </div>

                  <Card className="bg-muted/30">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">Your Trip Summary</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Destination:</span>
                          <span className="font-medium">{customTrip.destination || "Not specified"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="font-medium">{customTrip.duration || "Not specified"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Travelers:</span>
                          <span className="font-medium">{customTrip.travelers || "Not specified"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Budget:</span>
                          <span className="font-medium">{customTrip.budget || "Not specified"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Activities:</span>
                          <span className="font-medium">
                            {customTrip.activities.length > 0
                              ? `${customTrip.activities.length} selected`
                              : "None"}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                      Back
                    </Button>
                    <Button onClick={handleSubmit} className="flex-1">
                      <Send className="mr-2 h-4 w-4" />
                      Send to Agencies
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="mt-8 bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">What happens next?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">1.</span>
                  <span>Your request will be sent to verified travel agencies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">2.</span>
                  <span>Agencies will create custom proposals based on your preferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">3.</span>
                  <span>You'll receive proposals within 24-48 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">4.</span>
                  <span>Compare offers and choose the perfect trip for you</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TravelBuilder;
