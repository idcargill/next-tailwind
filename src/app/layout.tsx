import '../../styles/global.css';
import { Metadata } from 'next';

export const metaData: Metadata = {
  title: 'Nextjs | Tailwind',
  description: 'Nextjs 14 appRouter',
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
