import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import InfraMap from "@/components/InfraMap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <hr className="border-line" />
      <About />
      <hr className="border-line" />
      <Skills />
      <hr className="border-line" />
      <Experience />
      <hr className="border-line" />
      <Projects />
      <hr className="border-line" />
      <InfraMap />
      <hr className="border-line" />
      <Contact />
      <Footer />
    </main>
  );
}
