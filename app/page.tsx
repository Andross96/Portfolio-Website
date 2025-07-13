'use client';
import Profile from '@/components/sections/profile/profile';

import { MobileNavbar } from '@/components/header/navbar/mobile-navbar';
import ScrollToTop from '@/components/scroll-to-top';
import Navbar from '@/components/header/navbar/navbar';
import Skills from '@/components/sections/skills/skills';
import Projects from '@/components/sections/projects/projects';
import Contact from '@/components/sections/contact/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <header>
        <div className="md:hidden fixed bottom-0 left-0 z-50 p-3 pl-2">
          <MobileNavbar />
        </div>
        <div className="hidden md:inline fixed top-0 left-0 pt-3 p-2 z-50">
          <Navbar />
        </div>
      </header>

      <Profile />

      <Projects />

      <Skills />

      <Contact />

      <Footer />

      <ScrollToTop />
    </>
  );
}
