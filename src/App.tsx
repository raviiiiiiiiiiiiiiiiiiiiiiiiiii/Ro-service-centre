/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BrandPage from './pages/BrandPage';
import PolicyPage from './pages/PolicyPage';
import NotFoundPage from './pages/NotFoundPage';
import { brandData } from './data/brands';
import { policyData } from './data/policies';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Brand Pages */}
          <Route path="lg-service" element={<BrandPage data={brandData['lg']} />} />
          <Route path="aquaguard-service" element={<BrandPage data={brandData['aquaguard']} />} />
          <Route path="kent-service" element={<BrandPage data={brandData['kent']} />} />
          <Route path="pureit-service" element={<BrandPage data={brandData['pureit']} />} />
          <Route path="aosmith-service" element={<BrandPage data={brandData['aosmith']} />} />
          
          {/* Policy Pages */}
          <Route path="privacy-policy" element={<PolicyPage data={policyData['privacy-policy']} />} />
          <Route path="terms-and-conditions" element={<PolicyPage data={policyData['terms-and-conditions']} />} />
          <Route path="cancellation-refund-policy" element={<PolicyPage data={policyData['cancellation-refund-policy']} />} />
          <Route path="disclaimer" element={<PolicyPage data={policyData['disclaimer']} />} />
          <Route path="cookie-policy" element={<PolicyPage data={policyData['cookie-policy']} />} />
          
          {/* Catch-all 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
