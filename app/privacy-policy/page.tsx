import type { Metadata } from 'next';
import { policyData } from '@/data/policies';
import PolicyView from '@/components/PolicyView';

const policy = policyData['privacy-policy'];

export const metadata: Metadata = {
  title: `${policy.title} | RO Service Centre Online`,
  description: 'Privacy Policy and data protection guidelines for RO Service Centre Online Bangalore.',
};

export default function PrivacyPolicyPage() {
  return <PolicyView data={policy} />;
}
