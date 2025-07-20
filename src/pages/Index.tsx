import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Domains from "@/components/Domains";
import FeaturedSection from "@/components/FeaturedSection";
import Stats from "@/components/Stats";
import Initiatives from "@/components/Initiatives";
import EventsActivities from "@/components/EventsActivities";
import CallToAction from "@/components/CallToAction";
import ConnectSection from "@/components/ConnectSection";
import ContactSection from "@/components/ContactSection";
import Vision from "@/components/Vision";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Domains />
      <FeaturedSection />
      <Stats />
      <Initiatives />
      <EventsActivities />
      <CallToAction />
      <ConnectSection />
      <Vision />
      <ContactSection />
    </div>
  );
};

export default Index;
