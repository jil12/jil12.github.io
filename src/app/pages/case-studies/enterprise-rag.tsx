import React from 'react';
import {
  CaseStudyLayout,
  NarrativeSection,
  CaseStudySection,
  CaseStudyMetadata,
} from '../../components/CaseStudyLayout';

import ragChatbotHeroImg from '@/assets/projects/enterprise-rag/RAG_Chatbot.png';
import architectureDiagramImg from '@/assets/projects/enterprise-rag/SystemArchitecture.png';
import averageScoreChartImg from '@/assets/projects/enterprise-rag/Average Score by Models.png';

const projectDemoVideoEmbed =
  'https://www.youtube.com/embed/dNVrw0taqSM';

const sections: CaseStudySection[] = [
  { id: 'overview', title: 'Project Overview' },
  { id: 'architecture', title: 'Architecture & Security' },
  { id: 'evaluation', title: 'Automated Evaluation' },
  { id: 'impact', title: 'Impact & Model Selection' },
  { id: 'learnings', title: 'Strategic Takeaways' },
];

const metadata: CaseStudyMetadata = {
  role: 'AI Architecture & Evaluation Lead',
  timeline: '3 Months',
  team: 'AI + Backend Engineering',
  tools: [
    'Dual-path SQL/RAG routing',
    'RBAC (vector metadata)',
    'Embedding metrics',
    'NASA-TLX',
    'Mistral vs. Llama evaluation',
  ],
};

export function EnterpriseRag() {
  return (
    <CaseStudyLayout
      title="Enterprise RAG Knowledge Assistant"
      heroImage={ragChatbotHeroImg}
      heroCaption="FIG 1.0: Enterprise RAG Chatbot Interface"
      metadata={metadata}
      sections={sections}
    >
      <NarrativeSection id="overview" title="Project Overview">
        <p>
          I designed and evaluated an enterprise-grade Knowledge Assistant to securely retrieve and
          synthesize company data. To overcome the inherent limitations of Large Language Models
          (LLMs) in deterministic computation, I engineered a dual-path hybrid routing architecture,
          fortified by strict Role-Based Access Control (RBAC), and validated through a custom
          automated evaluation pipeline.
        </p>
        <div className="case-study-media-container mt-8 mb-4">
          <iframe
            src={projectDemoVideoEmbed}
            title="Knowledge Assistant Demo Video"
            className="w-full rounded-lg shadow-lg border border-gray-200"
            style={{ aspectRatio: '16 / 9' }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            VIDEO 1.0: Live demonstration of the Knowledge Assistant retrieving structured and
            unstructured data.
          </p>
        </div>
      </NarrativeSection>

      <NarrativeSection id="architecture" title="Architecture & Security">
        <p>
          Standard RAG pipelines struggle when asked to mix structured database queries with
          unstructured document retrieval. To solve this, I designed a specialized architecture:
        </p>
        <ul className="case-study-list">
          <li>
            <strong>Dual-Path Hybrid Routing:</strong> Engineered a system that intelligently routes
            user queries. It segregates structured data requests (directing them to SQL databases)
            from unstructured queries (directing them to the RAG vector database), guaranteeing
            deterministic output accuracy.
          </li>
          <li>
            <strong>Enterprise-Grade Security:</strong> Integrated strict Role-Based Access Control
            (RBAC) directly at the vector database metadata level. During rigorous multi-department
            testing, this architecture achieved a <strong>100% accuracy rate</strong> in preventing
            cross-role data leakage.
          </li>
        </ul>
        <div className="case-study-media-container mt-6 mb-4">
          <img
            src={architectureDiagramImg}
            alt="System architecture diagram showing SQL and RAG query routing paths"
            className="w-full rounded-lg shadow-md border border-gray-100"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            FIG 2.0: Dual-Path Hybrid Routing System Architecture
          </p>
        </div>
      </NarrativeSection>

      <NarrativeSection id="evaluation" title="Automated Evaluation Pipeline">
        <p>
          Choosing the right foundational model requires moving beyond &quot;vibes.&quot; I built a
          data-driven evaluation pipeline to objectively assess model performance:
        </p>
        <ul className="case-study-list">
          <li>
            <strong>Algorithmic Assessment:</strong> Established embedding-based metrics to
            programmatically evaluate outputs for Faithfulness, Relevance, and Conciseness.
          </li>
          <li>
            <strong>Human-in-the-Loop Testing:</strong> Incorporated the NASA-TLX cognitive load
            scale to capture qualitative user trust and friction metrics during live testing.
          </li>
        </ul>
      </NarrativeSection>

      <NarrativeSection id="impact" title="Impact & Model Selection">
        <p>
          By synthesizing the algorithmic and human-in-the-loop data, I drove the final executive
          model selection. The data proved that <strong>Mistral</strong> was the superior choice
          over Llama 3.1 for our specific use case, delivering higher user trust and a{' '}
          <strong>26% faster response time</strong> (15.3s vs. 20.7s).
        </p>
        <div className="case-study-media-container mt-6 mb-4">
          <img
            src={averageScoreChartImg}
            alt="Bar chart showing average scores by model, proving Mistral's superiority"
            className="w-full rounded-lg shadow-md border border-gray-100"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            FIG 3.0: Automated Evaluation Pipeline Results - Average Score by Models
          </p>
        </div>
      </NarrativeSection>

      <NarrativeSection id="learnings" title="Strategic Takeaways">
        <p>
          Building AI for the enterprise is fundamentally an exercise in risk management and systems
          design. LLMs are powerful, but they are not silver bullets. By surrounding the LLM with
          strict routing architecture and metadata-level security, we transformed an unpredictable
          generative tool into a highly secure, trustworthy enterprise product. Furthermore,
          establishing a rigorous, metric-driven evaluation pipeline ensures that model selection is
          always dictated by product needs and data, not just industry hype.
        </p>
      </NarrativeSection>
    </CaseStudyLayout>
  );
}
