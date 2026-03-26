import React from 'react';
import {
  CaseStudyLayout,
  NarrativeSection,
  CaseStudySection,
  CaseStudyMetadata
} from '../../components/CaseStudyLayout';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../components/ui/carousel';

import ezLineFinalHeroImg from '@/assets/projects/ez-line/EZ_Line.png';
import designProcessImg from '@/assets/projects/ez-line/EZLineDesignProcess.png';
import revenueModelImg from '@/assets/projects/ez-line/EZ_RevenueModel.png';

import prototypeImg1 from '@/assets/projects/ez-line/EZp1.png';
import prototypeImg2 from '@/assets/projects/ez-line/EZp2.png';
import prototypeImg3 from '@/assets/projects/ez-line/EZp3.png';
import prototypeImg4 from '@/assets/projects/ez-line/EZp4.png';
import prototypeImg5 from '@/assets/projects/ez-line/EZp5.png';

const prototypeIterationsImgs = [
  prototypeImg1,
  prototypeImg2,
  prototypeImg3,
  prototypeImg4,
  prototypeImg5,
];

const sections: CaseStudySection[] = [
  { id: 'overview', title: 'Project Overview' },
  { id: 'challenge', title: 'The Challenge' },
  { id: 'approach', title: 'The Approach & Prototyping' },
  { id: 'impact', title: 'The Impact & GTM Strategy' },
  { id: 'learnings', title: 'Strategic Takeaways' },
];

const metadata: CaseStudyMetadata = {
  role: 'Product Discovery Lead (UX Research + Prototyping)',
  timeline: '3 Months',
  team: 'Cross-functional student team',
  tools: ['Autodesk Fusion', '3D printing', 'Qualitative research', 'GTM strategy', 'Revenue modeling'],
};

export function EZLine() {
  return (
    <CaseStudyLayout
      title="EZ Line Inclusive Beauty"
      heroImage={ezLineFinalHeroImg}
      heroCaption="FIG 1.0: The final 3D-printed EZ Line accessible makeup tool."
      metadata={metadata}
      sections={sections}
    >
      <NarrativeSection id="overview" title="Project Overview">
        <p>
          I led the end-to-end product discovery, UX research, and physical prototyping for an
          inclusive makeup tool specifically designed for blind and low-vision users. Moving from
          initial concept to a high-fidelity physical prototype, I successfully developed a
          validated Go-To-Market (GTM) strategy and a highly profitable revenue model for the
          product launch.
        </p>
      </NarrativeSection>

      <NarrativeSection id="challenge" title="The Challenge">
        <p>
          Translating empathetic user research into a functional, manufacturable physical product
          required a clear, constraint-driven vision. We needed to address unmet needs in makeup
          accessibility through a cost-effective and reusable solution. To achieve this under a
          strict three-month deadline, I had to rapidly upskill in 3D modeling and 3D printing from
          scratch while ensuring the product remained financially viable for the business.
        </p>
      </NarrativeSection>

      <NarrativeSection id="approach" title="The Approach & Prototyping">
        <ul className="case-study-list">
          <li>
            <strong>Deep Qualitative Research & Ideation:</strong> Conducted over 23 hours of direct
            observation and tactile testing with more than 15 participants across 14 different
            organizations to synthesize actionable product requirements. We sketched over 100
            concepts to synthesize actionable product requirements.
          </li>
        </ul>

        <div className="case-study-media-container mt-4 mb-6">
          <img
            src={designProcessImg}
            alt="Early design process, sketches, and perceptual mapping of competitor products"
            className="w-full rounded-lg shadow-md border border-gray-100"
            style={{ margin: 0 }}
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            FIG 2.0: Synthesizing 23+ hours of qualitative research into early concept sketches.
          </p>
        </div>

        <ul className="case-study-list">
          <li>
            <strong>Iterative Hardware Design:</strong> I taught myself Autodesk Fusion to
            translate our 2D concepts into functional 3D models. These models were 3D printed and
            refined across three distinct iterations based on real-world tactile user testing.
          </li>
        </ul>

        <div className="case-study-media-container mt-4 mb-8">
          <Carousel>
            <CarouselContent>
              {prototypeIterationsImgs.map((src, idx) => (
                <CarouselItem key={src}>
                  <img
                    src={src}
                    alt={`Prototype iteration ${idx + 1}`}
                    className="w-full rounded-lg shadow-md border border-gray-100 bg-gray-50"
                    style={{ margin: 0 }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <p className="text-sm text-gray-500 mt-2 text-center">
            FIG 3.0: Hardware evolution showcasing the 5 prototype iterations, refined strictly
            through tactile user feedback.
          </p>
        </div>
      </NarrativeSection>

      <NarrativeSection id="impact" title="The Impact & GTM Strategy">
        <p>
          The project culminated in a stakeholder pitch that successfully bridged accessibility
          with strong business fundamentals:
        </p>
        <ul className="case-study-list">
          <li>
            Delivered a high-fidelity physical prototype proven to be accessible and empowering to
            the target demographic.
          </li>
          <li>
            Developed a 5-year sales forecast projecting an <strong>8% annual growth trajectory</strong>
            targeting the $7B U.S. cosmetic tools market.
          </li>
          <li>
            Pitched a highly profitable <strong>70% gross margin</strong>, equating to a $3.50 profit per
            unit.
          </li>
        </ul>

        <div className="case-study-media-container mt-6 mb-4">
          <img
            src={revenueModelImg}
            alt="Charts displaying the 5-year sales forecast, revenue model, and GTM channels"
            className="w-full rounded-lg shadow-md border border-gray-100"
            style={{ margin: 0 }}
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            FIG 4.0: Financial breakdown highlighting the 70% gross margin and 5-year multi-channel sales forecast.
          </p>
        </div>
      </NarrativeSection>

      <NarrativeSection id="learnings" title="Strategic Takeaways">
        <p>
          Constraints breed creativity. Learning complex new technical skills—like CAD modeling and
          3D printing—becomes highly approachable and urgent when driven by a clear, empathetic user
          need. Furthermore, executing a successful zero-to-one product relies entirely on
          balancing human-centered design with rigorous revenue modeling to ensure the solution can
          actually survive in the market.
        </p>
      </NarrativeSection>
    </CaseStudyLayout>
  );
}