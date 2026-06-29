import type { Metadata } from 'next';
import './globals.css';
import './site-final.css';

export const metadata: Metadata = {
  title: 'Ivan Rozinko — Critical Systems Engineering Leader',
  description:
    'Critical Systems / Platform / Reliability Engineering Leader across software, firmware, cloud, QA strategy, fintech/Web3 risk, AI readiness and regulated delivery.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
