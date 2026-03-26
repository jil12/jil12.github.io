import { FileText, Mail, Linkedin, Github } from 'lucide-react';
import resumePdf from '@/assets/global/Jiyi Liu-PM.pdf';

export function Footer() {
  const email = 'jiliu297@outlook.com';
  const linkedInUrl = 'https://www.linkedin.com/in/jiyi-l-279ab9235';
  const githubUrl = 'https://github.com/jil12';

  return (
    <footer className="bg-[var(--text)] text-[var(--canvas)] py-20 px-6">
      <div className="centered-content">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-medium mb-6 leading-tight">
            Let's build something impactful together.
          </h2>
          
          <p className="text-lg mb-12 opacity-90">
            Currently seeking full-time opportunities as a Technical PM, UX Prototyper, 
            or Creative Technologist.
          </p>
          
          <div className="flex items-center gap-8">
            <a
              href={`mailto:${email}`}
              aria-label={`Email ${email}`}
              className="hover:text-[var(--burnt-orange)] transition-colors"
            >
              <Mail size={32} stroke="currentColor" />
            </a>
            
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[var(--burnt-orange)] transition-colors"
            >
              <Linkedin size={32} stroke="currentColor" />
            </a>
            
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-[var(--burnt-orange)] transition-colors"
            >
              <Github size={32} stroke="currentColor" />
            </a>

            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Preview resume PDF in a new tab"
              className="hover:text-[var(--burnt-orange)] transition-colors"
            >
              <FileText size={32} stroke="currentColor" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}