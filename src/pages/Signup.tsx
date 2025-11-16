import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Plane, User, Building2, MapPin } from "lucide-react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "traveler",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 font-bold text-2xl mb-2">
            <Plane className="h-8 w-8 text-primary" />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              YallaNsafro
            </span>
          </Link>
          <p className="text-muted-foreground">Create your account and start exploring</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Choose your account type and fill in your details</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-3">
                <Label>I want to join as:</Label>
                <RadioGroup
                  value={formData.role}
                  onValueChange={(value) => setFormData({ ...formData, role: value })}
                >
                  <div className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:bg-muted/50">
                    <RadioGroupItem value="traveler" id="traveler" />
                    <Label htmlFor="traveler" className="flex items-center gap-2 cursor-pointer flex-1">
                      <User className="h-4 w-4" />
                      <div>
                        <p className="font-medium">Traveler</p>
                        <p className="text-xs text-muted-foreground">Discover and book amazing trips</p>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:bg-muted/50">
                    <RadioGroupItem value="agency" id="agency" />
                    <Label htmlFor="agency" className="flex items-center gap-2 cursor-pointer flex-1">
                      <Building2 className="h-4 w-4" />
                      <div>
                        <p className="font-medium">Travel Agency</p>
                        <p className="text-xs text-muted-foreground">Offer and manage trips</p>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:bg-muted/50">
                    <RadioGroupItem value="guide" id="guide" />
                    <Label htmlFor="guide" className="flex items-center gap-2 cursor-pointer flex-1">
                      <MapPin className="h-4 w-4" />
                      <div>
                        <p className="font-medium">Tour Guide</p>
                        <p className="text-xs text-muted-foreground">Share your expertise and earn</p>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </form>

            <div className="mt-6">
              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary font-medium hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
