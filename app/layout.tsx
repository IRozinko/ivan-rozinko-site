import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ivan Rozinko — Critical Systems Engineering Leader',
  description:
    'Software, firmware, cloud, platform reliability, QA strategy, fintech/Web3 risk and regulated systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
