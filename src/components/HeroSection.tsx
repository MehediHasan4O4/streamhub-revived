import { Play, Tv } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm font-medium">Premium Streaming Experience</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Stream Your{" "}
          <span className="text-gradient">Favorite</span>
          <br />
          <span className="text-gradient">Content</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover thousands of movies, TV shows, live sports, and premium channels. 
          Stream anywhere, anytime with crystal clear quality.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="glow-effect bg-primary hover:bg-primary-glow text-primary-foreground px-8">
            <Play className="w-5 h-5 mr-2 fill-current" />
            Start Watching Free
          </Button>
          
          <Button size="lg" variant="outline" className="border-muted-foreground text-foreground hover:bg-surface">
            <Tv className="w-5 h-5 mr-2" />
            Browse Channels
          </Button>
        </div>
      </div>
    </section>
  );
};