import type { Metadata } from 'next';
import { policyData } from '@/data/policies';
import PolicyView from '@/components/PolicyView';

const policy = policyData['cookie-policy'];

export const metadata: Metadata = {
  title: `${policy.title} | RO Service Centre Online`,
  description: 'Cookie policy and technical privacy information for RO Service Centre Online.',
};

export default function CookiePolicyPage() {
  return <PolicyView data={policy} />;
}
