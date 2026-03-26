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

import audioBookHeroImg from '@/assets/projects/datafeel-haptics/IMG_1703.JPG';
import audioBookAppImg131118 from '@/assets/projects/datafeel-haptics/2025-08-27 131118.png';
import audioBookAppImg131149 from '@/assets/projects/datafeel-haptics/2025-08-27 131149.png';
import audioBookAppImg131207 from '@/assets/projects/datafeel-haptics/2025-08-27 131207.png';
import audioBookAppImg131238 from '@/assets/projects/datafeel-haptics/2025-08-27 131238.png';
import audioBookAppImg131322 from '@/assets/projects/datafeel-haptics/2025-08-27 131322.png';
import audioBookAppImg131347 from '@/assets/projects/datafeel-haptics/2025-08-27 131347.png';
import audioBookAppImg131511 from '@/assets/projects/datafeel-haptics/2025-08-27 131511.png';
import audioBookAppImg131639 from '@/assets/projects/datafeel-haptics/2025-08-27 131639.png';

import plushBearHardwareImg from '@/assets/projects/datafeel-haptics/HapticBear.jpg';

const audioBookAppImgs = [
  audioBookAppImg131118,
  audioBookAppImg131149,
  audioBookAppImg131207,
  audioBookAppImg131238,
  audioBookAppImg131322,
  audioBookAppImg131347,
  audioBookAppImg131511,
  audioBookAppImg131639,
];

const openHousePresentationVideoEmbed =
  'https://www.youtube.com/embed/a064j5_8Qj0?autoplay=1&mute=1&controls=1&loop=1&playlist=a064j5_8Qj0';

const sections: CaseStudySection[] = [
  { id: 'overview', title: 'Project Overview' },
  { id: 'phase-1', title: 'Phase 1: The B2B Haptic Audiobook' },
  { id: 'phase-2', title: 'Phase 2: The B2C Plush Toy Pivot (Ongoing)' },
  { id: 'learnings', title: 'Strategic Takeaways' },
];

const metadata: CaseStudyMetadata = {
  role: 'Product Manager & Designer',
  timeline: '0→1 prototype + ongoing pivot',
  team: 'Startup team (cross-functional)',
  tools: ['C#', 'Avalonia UI', 'CAD + 3D printing', 'Notion', 'Miro'],
};

export function DataFeelHaptics() {
  const audioCarouselApiRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const media = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (media?.matches) return;

    const id = window.setInterval(() => {
      audioCarouselApiRef.current?.scrollNext?.();
    }, 4500);

    return () => window.clearInterval(id);
  }, []);

  return (
    <CaseStudyLayout
      title="DataFeel: Multi-Sensory Haptic Tech"
      heroImage={audioBookHeroImg}
      heroCaption="FIG 1.0: Prototyping the future of haptic feedback: From B2B software to B2C hardware."
      metadata={metadata}
      sections={sections}
    >
      <NarrativeSection id="overview" title="Project Overview">
        <p>
          As a Product Manager and Designer at DataFeel, I am driving the end-to-end development of
          novel multi-energy haptic technologies. My work spans two major initiatives: an award-winning
          B2B interactive audiobook prototype and an ongoing strategic pivot to a B2C consumer hardware
          plush toy line.
        </p>
      </NarrativeSection>

      <NarrativeSection id="phase-1" title="Phase 1: The B2B Haptic Audiobook">
        <p>
          <strong>The Goal:</strong> Build a functional 0-to-1 prototype to secure enterprise client
          interest and validate the core haptic technology.
        </p>
        <ul className="case-study-list">
          <li>
            <strong>Full-Stack Prototyping:</strong> Led front-end development using Avalonia UI and C#
            to synchronize haptic tracks with audiobook playback, mapping text metadata to specific
            sensory effects.
          </li>
          <li>
            <strong>Voice Interaction Integration:</strong> Engineered real-time voice recognition logic
            that triggers immediate haptic feedback when users correctly read specific words aloud.
          </li>
        </ul>

        {/* Visual 1: The Audiobook App UI */}
        <div className="case-study-media-container mt-6 mb-6">
          <Carousel
            opts={{ loop: true }}
            setApi={(api: any) => {
              audioCarouselApiRef.current = api;
            }}
          >
            <CarouselContent>
              {audioBookAppImgs.map((src, idx) => (
                <CarouselItem key={`${src}-${idx}`}>
                  <img
                    src={src}
                    alt="User interface of the DataFeel interactive audiobook application"
                    className="w-full rounded-lg shadow-md border border-gray-100"
                    style={{ margin: 0, background: 'transparent' }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <p className="text-sm text-gray-500 mt-2 text-center">
            FIG 2.0: The C# / Avalonia UI front-end mapping real-time voice recognition to haptic feedback.
          </p>
        </div>

        <ul className="case-study-list">
          <li>
            <strong>The Impact & Evangelism:</strong> This prototype won 1st place among 10 teams at a hackathon and
            successfully equipped our executives for B2B pitching, securing immediate interest from 3+ major enterprise clients.
          </li>
        </ul>

        {/* Visual 2: The Open House Pitch Video */}
        <div className="case-study-media-container mt-6 mb-8">
          <iframe
            src={openHousePresentationVideoEmbed}
            title="DataFeel Knowledge Assistant - Open House Demo"
            className="w-full rounded-lg shadow-lg border border-gray-200"
            style={{ aspectRatio: '16 / 9' }}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            VIDEO 1.0: Live demonstration and product evangelism of the B2B Audiobook App at our Open House event.
          </p>
        </div>
      </NarrativeSection>

      <NarrativeSection id="phase-2" title="Phase 2: The B2C Plush Toy Pivot (Ongoing)">
        <p>
          <strong>The Goal:</strong> Leverage the validated B2B technology to execute a strategic pivot
          into a direct-to-consumer product line.
        </p>
        <ul className="case-study-list">
          <li>
            <strong>Hardware Innovation:</strong> Directed the retrofit of existing plush bear inventory
            with internal haptic hardware to minimize upfront manufacturing costs.
          </li>
          <li>
            <strong>CAD & Agile Execution:</strong> Executed 3D CAD modeling for complex hardware connections.
            Currently authoring comprehensive PRDs via Notion and Miro while leading cross-functional teams
            to develop the companion mobile application.
          </li>
        </ul>

        {/* Visual 3: The Plush Bear Hardware */}
        <div className="case-study-media-container mt-6 mb-4">
          <img
            src={plushBearHardwareImg}
            alt="Physical prototype of the B2C plush bear retrofitted with internal haptic hardware"
            className="w-full rounded-lg shadow-md border border-gray-100 bg-gray-50"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            FIG 3.0: Physical prototyping for the B2C pivot—retrofitting plush inventory with CAD-modeled haptic hardware.
          </p>
        </div>
      </NarrativeSection>

      <NarrativeSection id="learnings" title="Strategic Takeaways">
        <p>
          Working across both B2B software and B2C hardware proved that successful product management
          requires immense adaptability. By building a high-fidelity software prototype first, we
          validated the market demand without heavy hardware overhead. That data-driven confidence—and
          the successful stakeholder pitches that followed—is exactly what empowered us to pivot toward
          a full-scale consumer physical product.
        </p>
      </NarrativeSection>
    </CaseStudyLayout>
  );
}