'use client';

import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  subtitle?: string;
}

export default function FAQAccordion({
  faqs,
  subtitle = 'Everything you need to know about our RO repair & maintenance services in Bangalore.',
}: FAQAccordionProps) {
  // First item open by default matching screenshot
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="space-y-6 pt-4 pb-2" id="faqs">
      {/* Header matching screenshot */}
      <div className="text-center space-y-2 max-w-2xl mx-auto px-4">
        <h2 className="text-[#1a62d6] font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight">
          Frequently Asked Questions
        </h2>
        {subtitle && (
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Accordion Cards List */}
      <div className="space-y-3.5 sm:space-y-4 max-w-3xl mx-auto px-2 sm:px-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const cleanQ = faq.q.replace(/^Q\.\s*/i, '');
          const cleanA = faq.a.replace(/^A\.\s*/i, '');

          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:border-blue-200 transition-all duration-200 overflow-hidden"
            >
              {/* Question Clickable Header */}
              <button
                type="button"
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left p-4 sm:p-5 md:p-6 flex items-center justify-between gap-4 cursor-pointer select-none group"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-gray-900 text-base sm:text-[17px] leading-snug group-hover:text-[#1a62d6] transition-colors">
                  {cleanQ}
                </span>
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-50/90 text-[#1859c2] flex items-center justify-center shrink-0 transition-transform group-hover:bg-blue-100">
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>

              {/* Expandable Answer */}
              {isOpen && (
                <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-3 sm:pt-4">
                    {cleanA}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
