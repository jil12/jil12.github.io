import {
  CaseStudyLayout,
  NarrativeSection,
  CaseStudySection,
  CaseStudyMetadata
} from '../../components/CaseStudyLayout';
import heroImage from '@/assets/projects/texas-immersive/HarmonicSea.png';

const sections: CaseStudySection[] = [
  { id: 'overview', title: 'Project Overview' },
  { id: 'launch-pad', title: 'Initiative 1: TXI Launch Pad' },
  { id: 'harmonic-sea', title: 'Initiative 2: Harmonic Sea' },
  { id: 'learnings', title: 'Strategic Takeaways' },
];

const metadata: CaseStudyMetadata = {
  role: 'Experience Designer',
  timeline: 'Multiple initiatives (Launch Pad + ongoing web app)',
  team: 'Cross-functional (design, engineering, fabrication)',
  tools: ['Python', 'State machines', 'Figma', 'Notion', 'Miro', '3D modeling', 'Spatial UX'],
};

export function TexasImmersive() {
  return (
    <CaseStudyLayout
      title="Texas Immersive: Spatial Ecosystems"
      heroImage={heroImage}
      heroCaption="Bridging physical installations and digital spatial UX for international audiences."
      metadata={metadata}
      sections={sections}
    >
      <NarrativeSection id="overview" title="Project Overview">
        <p>
          As an Experience Designer at the Texas Immersive Institute, I drive the cross-functional
          development of interactive spatial environments. My work spans two massive initiatives:
          engineering the hardware/software logic for the physical <strong>TXI Launch Pad</strong> smart
          installation, and designing the generative spatial UX for <strong>Harmonic Sea</strong>, an
          international interactive aquarium web app.
        </p>
      </NarrativeSection>

      <NarrativeSection id="launch-pad" title="Initiative 1: TXI Launch Pad Smart Installation">
        <p>
          <strong>The Goal:</strong> Direct the cross-functional development of a physical interactive
          installation, optimizing both the hardware latency and the user growth loop.
        </p>
        <ul className="case-study-list">
          <li>
            <strong>Hardware & Software Engineering:</strong> Coded the core Python logic to successfully
            bypass persistent hardware latency bottlenecks. Programmed robust state machine fallback
            logic to return the system to an idle video state when specific animations were unavailable.
          </li>
          <li>
            <strong>Physical-to-Digital Funnel:</strong> Designed a seamless onboarding funnel utilizing
            3 physical scannable QR codes explicitly mapped to distinct user personas, alongside
            fabricating 2 core 3D models for the physical build.
          </li>
          <li>
            <strong>Growth Loop Optimization:</strong> Implemented a social sharing loop that prompted
            players to capture and post results, driving organic engagement and foot traffic. Managed
            the entire agile execution via Notion and Miro user stories.
          </li>
        </ul>
      </NarrativeSection>

      <NarrativeSection id="harmonic-sea" title="Initiative 2: Harmonic Sea (SNF Nostos) - Ongoing">
        <p>
          <strong>The Goal:</strong> Design a dual-language, generative web app that allows users to
          independently interact with a shared digital aquarium ecosystem.
        </p>
        <ul className="case-study-list">
          <li>
            <strong>Cross-Cultural UX Research:</strong> Conducted rigorous research to map English
            emotional keywords to accurate Greek translations, ensuring a localized and emotionally
            resonant experience for international users.
          </li>
          <li>
            <strong>Spatial Prototyping:</strong> Engineered high-fidelity Figma prototypes for the web
            app interface, serving as the north star for the development team.
          </li>
          <li>
            <strong>System Logic & Documentation:</strong> Co-authored the core technical documentation
            detailing UX roadmaps, spatial audio system designs, and ecosystem generation logic (e.g.,
            adjusting generative parameters to dynamically swap a 3D octopus asset for a turtle based
            on user input).
          </li>
        </ul>
      </NarrativeSection>

      <NarrativeSection id="learnings" title="Strategic Takeaways">
        <p>
          Building for spatial computing requires a deep respect for physical constraints. Whether it
          is bypassing hardware latency with Python or mapping digital UI to physical QR codes, the key
          to an immersive experience is invisible technology. By managing both the overarching product
          strategy (growth loops, user stories) and the deep technical execution (state machines, CAD
          modeling), I ensured that our technical boundaries elevated the user experience rather than
          restricted it.
        </p>
      </NarrativeSection>
    </CaseStudyLayout>
  );
}