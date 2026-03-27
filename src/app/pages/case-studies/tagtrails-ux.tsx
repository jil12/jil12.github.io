import React from 'react';
import {
  CaseStudyLayout,
  NarrativeSection,
  CaseStudySection,
  CaseStudyMetadata,
} from '../../components/CaseStudyLayout';
import heroImage from '@/assets/projects/tagtrails-ux/TagTrails.png?format=avif;webp&w=960;1600&q=65&as=picture';

const sections: CaseStudySection[] = [
  { id: 'overview', title: 'Project Overview' },
  { id: 'challenge', title: 'The Challenge' },
  { id: 'approach', title: 'The Approach' },
  { id: 'impact', title: 'The Impact' },
  { id: 'learnings', title: 'Learnings' },
];

const metadata: CaseStudyMetadata = {
  role: 'UX Researcher (Quantitative Analysis)',
  timeline: '2 Months',
  team: 'Research + Product',
  tools: ['Eye Tracking', 'ANOVA', 'Linear Regression', 'Cognitive Metrics'],
};

export function TagTrailsUx() {
  return (
    <CaseStudyLayout
      title="TagTrails: Quantitative UX Research"
      heroImage={heroImage}
      heroCaption="FIG 1.0: Interface Performance Analysis"
      metadata={metadata}
      sections={sections}
    >
      <NarrativeSection id="overview" title="Project Overview">
        <p>
          I analyzed eye-tracking and cognitive data from 37 participants to understand how
          interface structure impacts comprehension and task efficiency. The research produced
          quantitative evidence for high-ROI UX decisions.
        </p>
      </NarrativeSection>

      <NarrativeSection id="challenge" title="The Challenge">
        <p>
          The challenge was translating noisy human behavior signals into clear, actionable
          design guidance. We needed statistical rigor to separate real performance effects
          from variation across users and sessions.
        </p>
      </NarrativeSection>

      <NarrativeSection id="approach" title="The Approach">
        <p>
          I ran ANOVA to identify factors that meaningfully impacted performance, then applied
          linear regression to model relationships between UI structure and outcome measures.
          The resulting patterns guided prioritized improvements and reduced the risk of
          guesswork in the design roadmap.
        </p>
      </NarrativeSection>

      <NarrativeSection id="impact" title="The Impact">
        <p>
          The team used the findings to refine interface decisions with measurable confidence,
          improving expected usability and targeting the highest-impact changes first.
        </p>
      </NarrativeSection>

      <NarrativeSection id="learnings" title="Learnings and Takeaways">
        <p>
          Quantitative UX becomes valuable when statistics lead to decisions. Modeling outcomes
          and communicating uncertainty helped stakeholders commit to a data-backed design direction.
        </p>
      </NarrativeSection>
    </CaseStudyLayout>
  );
}

