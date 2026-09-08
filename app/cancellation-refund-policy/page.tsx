import type { Metadata } from 'next';
import { policyData } from '@/data/policies';
import PolicyView from '@/components/PolicyView';

const policy = policyData['cancellation-refund-policy'];

export const metadata: Metadata = {
  title: `${policy.title} | RO Service Centre Online`,
  description: 'Cancellation and Refund Policy for services by RO Service Centre Online Bangalore.',
};

export default function CancellationRefundPolicyPage() {
  return <PolicyView data={policy} />;
}
