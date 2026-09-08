import type { Metadata } from 'next';
import { policyData } from '@/data/policies';
import PolicyView from '@/components/PolicyView';

const policy = policyData['disclaimer'];

export const metadata: Metadata = {
  title: `${policy.title} | RO Service Centre Online`,
  description: 'Independent service provider disclaimer and brand trademark notice for RO Service Centre Online.',
};

export default function DisclaimerPage() {
  return <PolicyView data={policy} />;
}
