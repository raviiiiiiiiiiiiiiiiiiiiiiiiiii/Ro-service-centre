import type { Metadata } from 'next';
import { brandData } from '@/data/brands';
import BrandView from '@/components/BrandView';

const brand = brandData.lg;

export const metadata: Metadata = {
  title: brand.title,
  description: brand.description,
};

export default function LGServicePage() {
  return <BrandView data={brand} />;
}
