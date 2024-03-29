// pages/index.tsx
import Link from 'next/link';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Hero from '../components/Hero/Hero';

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <Link href="/recipes">
        Go to recipes
      </Link>
    </div>
  );
}