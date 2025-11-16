import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plane, Menu, User, Heart } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Plane className="h-6 w-6 text-primary" />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            YallaNsafro
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/trips" className="text-sm font-medium hover:text-primary transition-colors">
            Explore Trips
          </Link>
          <Link to="/travel-builder" className="text-sm font-medium hover:text-primary transition-colors">
            Build Your Trip
          </Link>
          <Link to="/agencies" className="text-sm font-medium hover:text-primary transition-colors">
            Agencies
          </Link>
          <Link to="/guides" className="text-sm font-medium hover:text-primary transition-colors">
            Guides
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <Button variant="ghost" size="icon" asChild>
                <Link to="/favorites">
                  <Heart className="h-5 w-5" />
                </Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button variant="ghost" asChild className="hidden md:inline-flex">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </>
          )}
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
