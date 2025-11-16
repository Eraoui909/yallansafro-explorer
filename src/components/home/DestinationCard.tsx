import { Link } from "react-router-dom";

interface DestinationCardProps {
  name: string;
  country: string;
  travelers: string;
  image: string;
  slug: string;
}

const DestinationCard = ({ name, country, travelers, image, slug }: DestinationCardProps) => {
  return (
    <Link to={`/destinations/${slug}`} className="group relative overflow-hidden rounded-2xl aspect-[4/3] block">
      <img
        src={image}
        alt={`${name}, ${country}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-1">{name}, {country}</h3>
        <p className="text-sm text-white/80">{travelers}</p>
      </div>
    </Link>
  );
};

export default DestinationCard;
