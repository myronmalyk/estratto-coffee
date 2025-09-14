"use client";

import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MenuHighlights } from "@/components/MenuHighlights";
import { HoursLocation } from "@/components/HoursLocation";
import { CommunitySocial } from "@/components/CommunitySocial"; 
import { Contact, Footer } from "@/components/Contact";



export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Add Google Fonts */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" 
        rel="stylesheet" 
      />
      
      <Hero />
      <About />
      <MenuHighlights />
      <HoursLocation />
      <CommunitySocial />
      <Contact />
      <Footer />
    </div>
  );
}