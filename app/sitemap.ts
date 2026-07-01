import type { MetadataRoute } from 'next';

const baseUrl = 'https://ivan-rozinko.vercel.app';

const routes = [
  '/',
  '/about',
  '/services',
  '/services/critical-systems-risk-audit',
  '/case-studies',
  '/case-studies/fintech-fee-service-payment-risk',
  '/case-studies/qa-strategy-cloud-microservices',
  '/case-studies/platform-reliability-cicd-control',
  '/case-studies/firmware-to-software-systems-thinking',
  '/case-studies/regulated-it-audit-ready-delivery',
  '/cv',
  '/northbridge',
  '/ua',
  '/ua/about',
  '/ua/services',
  '/ua/services/critical-systems-risk-audit',
  '/ua/case-studies',
  '/ua/cv',
  '/ua/northbridge',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
