import { Header } from './components/landing/Header';
import { Hero } from './components/landing/Hero';
import { Features } from './components/landing/Features';
import { Services } from './components/landing/Services';
import { Banner } from './components/landing/Banner';
import { Showcase } from './components/landing/Showcase2';
import { ServiceCards } from './components/landing/ServiceCards';
import { PromoBanner } from './components/landing/PromoBanner';
import { ContactForm } from './components/landing/ContactForm';
import { PartnershipSection } from './components/landing/PartnershipSection';
import { ToolsSection } from './components/landing/ToolsSection';
import { ContentWithCardSection } from './components/landing/ContentWithCardSection';
import { Testimonials } from './components/landing/Testimonials';
import { FAQ } from './components/landing/FAQ';
import { Footer } from './components/landing/Footer';
import {HeroSection} from './components/landing/HeroSection';
import { StorySection } from './components/landing/StorySection';
import GallerySection from './components/landing/GallerySection';
import { FeatureShowcase } from './components/landing/FeatureShowcase';
import { AdjustableBackground } from './components/ui/AdjustableBackground';


export default function Home() {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch">
      <Header />
      
      <main>
        <Hero />
        
        <div className="relative">
          <AdjustableBackground
            imagePath="/line-5.svg"
            position="absolute"
            opacity={1}
            top="30%"
            left="-8%"
            width="100%"
            height="100%"
            scale={1.1}
            zIndex={0}
          />
          <div className="relative z-10">
            <Features />
            <Services />
            <Banner />
          </div>
        </div>
        
        <Showcase />
        <ServiceCards />
        <PromoBanner />
        <ContactForm />

        
        {/* Container for Gallery and FeatureShowcase with shared background */}
        <div className="relative">
          {/* Background positioned behind both sections */}
          <AdjustableBackground 
            position="absolute"
            opacity={10}
            top="24%"
            left="2%"
            width="100%"
            height="100%"
            scale={1.2}
            zIndex={0}
          />
          
          {/* Content sections with higher z-index */}
          <div className="relative z-10">
            <PartnershipSection />
            <GallerySection />
            <FeatureShowcase />
            <Testimonials />
          </div>
        </div>
        

        <ToolsSection />
        <ContentWithCardSection />
        <StorySection />
        <FAQ />
        <HeroSection />
      </main>
      
      <Footer />
    </div>
  );
}
