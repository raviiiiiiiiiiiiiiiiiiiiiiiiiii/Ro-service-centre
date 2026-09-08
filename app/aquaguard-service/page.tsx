import type { Metadata } from 'next';
import { brandData } from '@/data/brands';
import BrandView from '@/components/BrandView';

const brand = brandData.aquaguard;

export const metadata: Metadata = {
  title: brand.title,
  description: brand.description,
};

export default function AquaguardServicePage() {
  return <BrandView data={brand} />;
}
