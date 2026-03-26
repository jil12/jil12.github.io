import { Briefcase, Wrench, User, FileText } from 'lucide-react';
import resumePdf from '@/assets/global/Jiyi Liu-PM.pdf';

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header-fixed">
      <nav className="nav-container">
        <h3 className="nav-logo">Jiyi Liu</h3>
        
        <div className="nav-links">
          <button
            onClick={() => scrollToSection('work')}
            className="nav-link"
          >
            <Briefcase size={16} strokeWidth={2} />
            Work
          </button>
          <button
            onClick={() => scrollToSection('toolkit')}
            className="nav-link"
          >
            <Wrench size={16} strokeWidth={2} />
            Toolkit
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="nav-link"
          >
            <User size={16} strokeWidth={2} />
            About
          </button>
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-sm"
            aria-label="Preview resume PDF in a new tab"
          >
            <FileText size={14} strokeWidth={2.5} />
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}