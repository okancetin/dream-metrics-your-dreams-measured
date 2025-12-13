import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <article 
      className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border card-glow transition-all duration-500 hover:scale-105 hover:border-primary/50"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:animate-pulse-glow transition-all duration-300">
          <span className="text-primary text-2xl">{icon}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-foreground mb-3">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
};

export default FeatureCard;
