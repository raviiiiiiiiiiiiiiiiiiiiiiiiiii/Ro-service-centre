import type { Metadata } from 'next';
import { brandData } from '@/data/brands';
import BrandView from '@/components/BrandView';

const brand = brandData.kent;

export const metadata: Metadata = {
  title: brand.title,
  description: brand.description,
};

export default function KentServicePage() {
  return <BrandView data={brand} />;
}
