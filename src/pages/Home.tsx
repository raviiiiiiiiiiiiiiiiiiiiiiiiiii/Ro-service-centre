import { 
  Hero, 
  Services, 
  WhyChooseUs, 
  Troubleshooting, 
  Testimonials, 
  FAQ, 
  CTABanner 
} from '../components/Sections';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Troubleshooting />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  );
}
