'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Testimonials() {
  const reviews = [
    { name: "Suresh Kumar", area: "Whitefield", product: "Kent Grand Plus", text: "My Kent RO started leaking from the bottom connectors. The technician arrived within 40 minutes of calling 08050291180, fixed the leak, and replaced the sediment filter cleanly. Very transparent pricing!" },
    { name: "Ananya Sharma", area: "Koramangala 4th Block", product: "Aquaguard Active Copper", text: "Courteous and skilled technician. Tested our water TDS before and after service (dropped from 580 to 42 PPM). Great communication, no hidden fees, and excellent water taste." },
    { name: "Praveen Reddy", area: "HSR Layout Sector 1", product: "Pureit Ultima RO", text: "Got my Pureit GKK kit replaced on a Sunday morning. The team arranged a technician in under an hour. Quick job, genuine sealed parts, and digital receipt provided." },
    { name: "Vikram Singh", area: "Indiranagar", product: "AO Smith Z8", text: "Excellent and prompt service! They fixed my AO Smith display error within hours. The technician was extremely knowledgeable and carried the right tools." },
    { name: "Nisha Patel", area: "Electronic City", product: "LG PuriCare", text: "Booked an installation for my LG RO after shifting here. Very neat drill work and they ensured no pipes were hanging loose. I am very satisfied with their work." },
    { name: "Rahul Deshmukh", area: "Bellandur", product: "Kent Supreme", text: "The RO was completely dead due to power fluctuation. The technician quickly replaced the SMPS adaptor and verified everything. Quick and honest service." },
    { name: "Meera Krishnan", area: "Jayanagar", product: "Aquaguard Biotron", text: "Our AMC expired and I contacted them for a general service. Very affordable compared to the brand's direct service and they use fully authentic parts." },
    { name: "Syed Ahmed", area: "Hebbal", product: "Pureit Classic", text: "Fastest RO service in Bangalore! Booked at 11 AM and my filter was replaced by 12:30 PM. Good job team RO Service Centre Online." },
    { name: "Pooja Rao", area: "Marathahalli", product: "AO Smith Z9", text: "The hot water dispenser stopped working. Found their number online and gave them a call. They fixed the heating coil issue the same day." },
    { name: "Anil Kumar", area: "BTM Layout", product: "Kent Pearl", text: "I have been using their AMC service for 3 years now. Very punctual and they maintain a proper service log. Highly recommended for peace of mind." },
    { name: "Sneha V", area: "JP Nagar", product: "Havells Max", text: "Had a severe leakage issue that was flooding my kitchen counter. They responded to my emergency call immediately. A lifesaver!" },
    { name: "Karthik N", area: "Malleshwaram", product: "Aquaguard Enhance", text: "Clear pricing, no upsell gimmicks. The technician explained why the membrane was choked and showed me the blockages before replacing it." },
    { name: "Deepa R", area: "Yelahanka", product: "LG True RO", text: "Good behavior and they cleaned up the area after replacing the carbon filters. Water tastes absolutely perfect now. 5 stars from me." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsToShow(3);
      else if (window.innerWidth >= 768) setItemsToShow(2);
      else setItemsToShow(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(reviews.length / itemsToShow));
  };

  const prevSlide = () => {
    const totalPages = Math.ceil(reviews.length / itemsToShow);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-spacing-3xl bg-surface-container-low overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-spacing-2xl gap-spacing-md">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              What Our Bangalore Customers Say
            </h2>
          </div>
          <div className="flex items-center justify-end gap-spacing-md w-full md:w-auto">
            <div className="flex flex-col items-end text-right">
              <div className="flex text-amber-500 text-lg">★★★★★</div>
              <span className="font-label-md text-label-md text-on-surface font-bold">4.9 / 5 Overall Rating</span>
              <span className="text-body-sm font-body-sm text-on-surface-variant">(1,420+ Verified Reviews)</span>
            </div>
            <div className="hidden md:flex items-center gap-spacing-xs">
              <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors focus:outline-none" aria-label="Previous review">
                <ChevronLeft size={20} />
              </button>
              <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors focus:outline-none" aria-label="Next review">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="flex overflow-x-hidden snap-x snap-mandatory hide-scrollbar">
            <div 
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, idx) => (
                <div key={idx} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-spacing-sm snap-start">
                  <div className="bg-surface-container-lowest p-spacing-lg rounded-2xl shadow-sm h-full flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div className="space-y-spacing-sm mb-spacing-md">
                      <div className="flex text-amber-500">★★★★★</div>
                      <p className="font-body-md text-body-md text-on-surface leading-relaxed italic line-clamp-5">
                        &ldquo;{review.text}&rdquo;
                      </p>
                    </div>
                    <div className="pt-spacing-md border-t border-surface-container flex items-center gap-spacing-sm">
                      <div className="w-10 h-10 rounded-full bg-surface-container text-primary flex items-center justify-center font-bold text-label-md shrink-0">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="min-w-0">
                        <div className="font-label-md text-label-md text-on-surface font-semibold truncate">{review.name}</div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant text-[12px] truncate">{review.area} · {review.product}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Controls */}
          <div className="flex md:hidden items-center justify-center gap-spacing-md mt-spacing-xl">
            <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface focus:outline-none hover:bg-surface-container-high" aria-label="Previous review">
              <ChevronLeft size={20} />
            </button>
            <div className="font-label-sm text-label-sm text-on-surface-variant">
              {currentIndex + 1} / {Math.ceil(reviews.length / itemsToShow)}
            </div>
            <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface focus:outline-none hover:bg-surface-container-high" aria-label="Next review">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
