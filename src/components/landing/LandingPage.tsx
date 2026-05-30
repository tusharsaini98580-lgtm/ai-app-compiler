import Navbar from "./Navbar";
import Hero from "./Hero";
import FloatingBlobs from "./FloatingBlobs";
import Stats from "./Stats";
import Features from "./Features";
import DemoPreview from "./DemoPreview";
import HowItWorks from "./HowItWorks";
import AIControlCenter from "./AIControlCenter";
import CTA from "./CTA";
import Footer from "./Footer";
import CursorGlow from "./CursorGlow";
import TrustedBy from "./TrustedBy";
import PageWrapper from "./PageWrapper";


export default function LandingPage() {

 return (

  <PageWrapper>

    <main className="relative overflow-hidden min-h-screen text-white"
    >
    

        <CursorGlow />

      <FloatingBlobs />

      <Navbar />

      <Hero />

      <TrustedBy />

      <Stats />

      <Features />

      <HowItWorks />

      <DemoPreview />

      <AIControlCenter />

      <CTA />

      <Footer />

    </main>
    </PageWrapper>
  );
}