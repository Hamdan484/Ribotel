
import { useTheme } from "../Context/Theme_context";
import HeroSection from "../Components/Hero_section";
import Services from "../Components/Services";
import WhyChooseUs from "../Components/WhyChooseUs";
import HowItWorks from "../Components/HowItWorks";
import WhoWeServe from "../Components/WhoWeServe";
import CTA from "../Components/CTA";


export default function Home() {
  const { isDark } = useTheme();

 

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <Services />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Who We Serve Section */}
      <WhoWeServe />

      {/* CTA Section */}
      <CTA />

    </div>
  );
}
