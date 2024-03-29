// pages/index.tsx
import Link from 'next/link';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import ContentSection from '../components/ContentSection/ContentSection';

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <ContentSection />
      <Footer />
    </div>
  );
}