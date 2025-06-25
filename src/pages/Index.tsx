
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import AIJourneySection from "@/components/AIJourneySection";
import GeneralAudienceTrack from "@/components/GeneralAudienceTrack";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <Header />
        <SocialLinks />
        <AIJourneySection />
        <GeneralAudienceTrack />
      </div>
    </div>
  );
};

export default Index;
