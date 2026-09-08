import type { Metadata } from 'next';
import { policyData } from '@/data/policies';
import PolicyView from '@/components/PolicyView';

const policy = policyData['terms-and-conditions'];

export const metadata: Metadata = {
  title: `${policy.title} | RO Service Centre Online`,
  description: 'Terms and Conditions for booking water purifier service with RO Service Centre Online Bangalore.',
};

export default function TermsAndConditionsPage() {
  return <PolicyView data={policy} />;
}
