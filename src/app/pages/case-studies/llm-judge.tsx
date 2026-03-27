import React from 'react';
import {
  CaseStudyLayout,
  NarrativeSection,
  CaseStudySection,
  CaseStudyMetadata,
} from '../../components/CaseStudyLayout';
import heroImage from '@/assets/projects/llm-judge/FineTuning.png?format=avif;webp&w=960;1600&q=65&as=picture';

const sections: CaseStudySection[] = [
  { id: 'overview', title: 'Project Overview' },
  { id: 'challenge', title: 'The Challenge' },
  { id: 'approach', title: 'The Approach' },
  { id: 'impact', title: 'The Impact' },
  { id: 'learnings', title: 'Learnings' },
];

const metadata: CaseStudyMetadata = {
  role: 'ML Researcher (Fine-Tuning & Evaluation)',
  timeline: '1 Month',
  team: 'Applied ML + Engineering',
  tools: ['Mistral-7B', 'Quantization', 'DPO', 'SFT', 'Binary Classification'],
};

export function LlmJudge() {
  return (
    <CaseStudyLayout
      title="LLM Hallucination Judge"
      heroImage={heroImage}
      heroCaption="FIG 1.0: Hallucination Judgment Model Training Pipeline"
      metadata={metadata}
      sections={sections}
    >
      <NarrativeSection id="overview" title="Project Overview">
        <p>
          I fine-tuned a quantized Mistral-7B model under strict hardware constraints to
          classify hallucination risk for binary decisions. The goal was to prove which
          fine-tuning strategy produced the most reliable judge.
        </p>
      </NarrativeSection>

      <NarrativeSection id="challenge" title="The Challenge">
        <p>
          Fine-tuning quality had to be achieved without access to large-scale compute.
          I also needed a training/evaluation setup where DPO and SFT were directly comparable
          for the same task definition and classification objective.
        </p>
      </NarrativeSection>

      <NarrativeSection id="approach" title="The Approach">
        <p>
          I evaluated Supervised Fine-Tuning (SFT) versus Direct Preference Optimization (DPO)
          for the hallucination judge. Both experiments were run within the same quantized
          and constrained training envelope, then compared using task-appropriate
          classification metrics to isolate which method truly improved outcomes.
        </p>
      </NarrativeSection>

      <NarrativeSection id="impact" title="The Impact">
        <p>
          The results demonstrated that, for this binary classification setting, SFT
          outperformed DPO—supporting an evidence-based fine-tuning strategy choice for
          reliable judge behavior under real hardware limits.
        </p>
      </NarrativeSection>

      <NarrativeSection id="learnings" title="Learnings and Takeaways">
        <p>
          Training strategy must match task structure. When the objective is straightforward
          binary decision-making, supervised fine-tuning provides a mathematically aligned path
          to better performance—especially when compute constraints are real.
        </p>
      </NarrativeSection>
    </CaseStudyLayout>
  );
}

