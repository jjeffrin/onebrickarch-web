'use client'

import OurServices from "@/components/our-services";
import OurTeam from "@/components/our-team";
import OurTestimonials from "@/components/our-testimonials";
import { CareerSection } from "@/components/careers";
import { OurRecentProjects } from "@/components/our-recent-projects";
import { LandingSection } from "@/components/landing-section";

export default function Home() {
  return (
    <div className="bg-slate-50 container mx-auto rounded-xl md:px-8">

      {/* landing section */}
      <LandingSection />

      {/* our recent projects*/}
      <OurRecentProjects />

      {/* Our services */}
      <OurServices />

      {/* Our team */}
      <OurTeam />

      {/* Our testimonials */}
      <OurTestimonials />

      {/* careers */}
      <CareerSection />
    </div>
  );
}
