import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureBar from "@/components/FeatureBar";
import About from "@/components/About";
import Advantages from "@/components/Advantages";
import Programs from "@/components/Programs";
import PPDB from "@/components/PPDB";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { school } from "@/config/school";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "School",
    name: school.name,
    slogan: school.tagline,
    description: school.seo.description,
    email: school.contact.email,
    telephone: school.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: school.address.street,
      addressLocality: school.address.city,
      addressRegion: school.address.province,
      postalCode: school.address.postalCode,
      addressCountry: "ID",
    },
  };

  return (
    <>
      <Navbar />
      <main id="konten">
        <Hero />
        <FeatureBar />
        <About />
        <Advantages />
        <Programs />
        <PPDB />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Reveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
