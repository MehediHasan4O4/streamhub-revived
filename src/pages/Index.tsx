import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { TrendingSection } from "@/components/TrendingSection";
import { Footer } from "@/components/Footer";
import { ResponsiveLayout } from "@/components/ResponsiveLayout";

const Index = () => {
  return (
    <ResponsiveLayout>
      <HeroSection />
      <StatsSection />
      <CategoriesSection />
      <TrendingSection />
      <Footer />
    </ResponsiveLayout>
  );
};

export default Index;
