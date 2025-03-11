"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Specialties from "@/components/Specialties";
import Testimonials from "@/components/Testimonials";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Amenities />
      <Rooms />
      <Specialties />
      <Menu />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}