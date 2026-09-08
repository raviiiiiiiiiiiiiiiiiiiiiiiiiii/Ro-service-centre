import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Troubleshooting from '@/components/Troubleshooting';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Troubleshooting />
      <Testimonials />
      <FAQ />
    </>
  );
}
