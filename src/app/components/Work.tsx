import React from 'react';
import { ProjectCard } from './ProjectCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import hapticDemoImg from '@/assets/projects/datafeel-haptics/IMG_1703.JPG';
import ezLineImg from '@/assets/projects/ez-line/1 v13.png';
import enterpriseRagImg from '@/assets/projects/enterprise-rag/RAG_Chatbot.png';
import llmJudgeImg from '@/assets/projects/llm-judge/FineTuning.png';
import texasImmersiveImg from '@/assets/projects/texas-immersive/HarmonicSea.png';
import tagTrailsImg from '@/assets/projects/tagtrails-ux/TagTrails.png';

const projectCards = [
  {
    title: 'DataFeel: Multi-Sensory Haptic Tech',
    subtitle: 'From B2B Software to B2C Consumer Hardware',
    tags: [
      { label: 'Hardware Integration', type: 'hardware' as const },
      { label: 'Product Strategy', type: 'strategy' as const },
      { label: 'Full-Stack C#', type: 'development' as const },
    ],
    imageUrl: hapticDemoImg,
    caseStudyLink: '/case-study/datafeel-haptics',
  },
  {
    title: 'Enterprise RAG Knowledge Assistant',
    subtitle: 'Hybrid LLM Architecture & Evaluation',
    tags: [
      { label: 'AI Architecture', type: 'development' as const },
      { label: 'Data Security', type: 'strategy' as const },
      { label: 'Prompt Engineering', type: 'development' as const },
    ],
    imageUrl: enterpriseRagImg,
    caseStudyLink: '/case-study/enterprise-rag',
  },
  {
    title: 'Texas Immersive: Spatial Ecosystems',
    subtitle: 'Harmonic Sea & TXI Launch Pad',
    tags: [
      { label: 'Spatial UX', type: 'design' as const },
      { label: 'Technical PM', type: 'strategy' as const },
      { label: 'State Machines', type: 'development' as const },
    ],
    imageUrl: texasImmersiveImg,
    caseStudyLink: '/case-study/texas-immersive',
  },
  {
    title: 'LLM Hallucination Judge',
    subtitle: 'Mistral-7B Fine-Tuning: DPO vs. SFT',
    tags: [
      { label: 'LLM Fine-Tuning', type: 'development' as const },
      { label: 'Model Evaluation', type: 'research' as const },
      { label: 'AI Strategy', type: 'strategy' as const },
    ],
    imageUrl: llmJudgeImg,
    caseStudyLink: '/case-study/llm-judge',
  },
  {
    title: 'TagTrails: Quantitative UX Research',
    subtitle: 'Statistical Analysis of Interface Performance',
    tags: [
      { label: 'Quantitative UX', type: 'research' as const },
      { label: 'Statistical Modeling', type: 'development' as const },
      { label: 'Data Analytics', type: 'strategy' as const },
    ],
    imageUrl: tagTrailsImg,
    caseStudyLink: '/case-study/tagtrails-ux',
  },
  {
    title: 'EZ Line Inclusive Beauty',
    subtitle: 'End-to-End Product Discovery',
    tags: [
      { label: 'CAD Prototyping', type: 'hardware' as const },
      { label: 'Revenue Modeling', type: 'strategy' as const },
      { label: 'Accessibility', type: 'design' as const },
    ],
    imageUrl: ezLineImg,
    caseStudyLink: '/case-study/ez-line',
  },
];

export function Work() {
  const { elementRef, isVisible } = useScrollAnimation<HTMLHeadingElement>();

  return (
    <section id="work" className="section-work">
      <div className="centered-content">
        <div className="section-header">
          <h2 
            ref={elementRef}
            className={`section-heading scroll-fade-in ${isVisible ? 'visible' : ''}`}
          >
            Selected Work
          </h2>
        </div>
        
        <div className="work-grid">
          {projectCards.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              tags={project.tags}
              imageUrl={project.imageUrl}
              shapeIndex={index}
              caseStudyLink={project.caseStudyLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}