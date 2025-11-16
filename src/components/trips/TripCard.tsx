import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Calendar, Users, Star } from "lucide-react";
import { useState } from "react";

interface TripCardProps {
  id: string;
  title: string;
  destination: string;
  image: string;
  duration: string;
  price: number;
  rating: number;
  reviewCount: number;
  maxParticipants: number;
  activities: string[];
  agencyName: string;
}

const TripCard = ({
  id,
  title,
  destination,
  image,
  duration,
  price,
  rating,
  reviewCount,
  maxParticipants,
  activities,
  agencyName,
}: TripCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <Link to={`/trips/${id}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
          <Button
            size="icon"
            variant="secondary"
            className="absolute top-3 right-3 h-9 w-9 rounded-full shadow-md"
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? "fill-destructive text-destructive" : ""}`} />
          </Button>
        </div>
      </Link>

      <CardContent className="p-4">
        <Link to={`/trips/${id}`}>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
            <MapPin className="h-4 w-4" />
            <span>{destination}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-3">
            {activities.slice(0, 2).map((activity) => (
              <Badge key={activity} variant="secondary" className="text-xs">
                {activity}
              </Badge>
            ))}
            {activities.length > 2 && (
              <Badge variant="secondary" className="text-xs">
                +{activities.length - 2}
              </Badge>
            )}
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>Up to {maxParticipants}</span>
            </div>
          </div>

          <div className="flex items-center gap-1 mb-3">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-semibold">{rating.toFixed(1)}</span>
            <span className="text-sm text-muted-foreground">({reviewCount} reviews)</span>
          </div>
        </Link>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">From</p>
          <p className="text-2xl font-bold text-primary">${price}</p>
        </div>
        <Button asChild>
          <Link to={`/trips/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TripCard;
