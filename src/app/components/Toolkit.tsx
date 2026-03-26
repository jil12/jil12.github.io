import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ToolkitBox } from './ToolkitBox';

export function Toolkit() {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const aiAndEngineering = [
    'Python',
    'JavaScript',
    'C#',
    'React/Flask',
    'LLM Architecture (RAG)',
    'MCP & Prompt Engineering',
    'Cursor / Claude Code',
    'GitHub',
  ];

  const productAndStrategy = [
    'Agile Methodologies',
    'PRD & User Stories',
    'A/B Testing',
    'SQL & Data Analytics',
    'Revenue Modeling',
    'Go-To-Market Strategy',
    'Jira / Notion',
  ];

  const designAndPrototyping = [
    'Figma (Auto-layout)',
    'Unity',
    'Avalonia UI',
    'CAD Modeling',
    '3D Printing',
    'Spatial UX',
    'Web Accessibility',
  ];
  return (
    <section id="toolkit" className="section-toolkit">
      <div className="centered-content">
        <div className="section-header">
          <h2 
            ref={elementRef}
            className={`section-heading scroll-fade-in ${isVisible ? 'visible' : ''}`}
          >
            Toolkit
          </h2>
        </div>
        
        <div className="toolkit-grid">
          <ToolkitBox title="AI & Engineering" items={aiAndEngineering} />
          <ToolkitBox title="Product & Strategy" items={productAndStrategy} />
          <ToolkitBox title="Design & Prototyping" items={designAndPrototyping} />
        </div>
      </div>
    </section>
  );
}