import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

const ServiceCard = ({ icon: Icon, title, description, bgColor, iconColor }: ServiceCardProps) => {
  return (
    <div className={`${bgColor} rounded-2xl p-8 transition-all hover:shadow-lg hover:-translate-y-1`}>
      <div className={`${iconColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
        <Icon className="h-7 w-7 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
