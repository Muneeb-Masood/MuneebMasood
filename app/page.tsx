import { MotionConfig } from 'framer-motion';
import { siteConfig } from '@/config/site.config';
import { Nav } from '@/components/ui/Nav';
import { Footer } from '@/components/ui/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { Certifications } from '@/components/sections/Certifications';
import { Contact } from '@/components/sections/Contact';

// Map each toggle key to its section. Only enabled ones render, in nav order.
const registry = {
  about: About,
  skills: Skills,
  experience: Experience,
  projects: Projects,
  education: Education,
  certifications: Certifications,
  contact: Contact,
} as const;

export default function Home() {
  const sections = siteConfig.navOrder.filter((key) => siteConfig.sections[key]);

  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        {sections.map((key) => {
          const SectionComponent = registry[key];
          return <SectionComponent key={key} />;
        })}
      </main>
      <Footer />
    </MotionConfig>
  );
}
