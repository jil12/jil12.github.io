import { Briefcase, Wrench, User, FileText, Menu, X } from 'lucide-react';
import resumePdf from '@/assets/global/Jiyi Liu-PM.pdf';
import { Link } from 'react-router';
import React from 'react';

export function Navigation() {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileNavOpen(false);
  };

  return (
    <header className="header-fixed">
      <nav className="nav-container">
        <h3>
          <Link
            to="/"
            className="nav-logo"
            aria-label="Go to top of home page"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Jiyi Liu
          </Link>
        </h3>

        <button
          type="button"
          className="nav-menu-toggle"
          aria-label={mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileNavOpen}
          onClick={() => setMobileNavOpen((v) => !v)}
        >
          {mobileNavOpen ? <X size="1em" strokeWidth={2.5} /> : <Menu size="1em" strokeWidth={2.5} />}
        </button>

        <div className="nav-links nav-links-desktop">
          <button onClick={() => scrollToSection('work')} className="nav-link">
            <Briefcase size="1em" strokeWidth={2} />
            Work
          </button>
          <button onClick={() => scrollToSection('toolkit')} className="nav-link">
            <Wrench size="1em" strokeWidth={2} />
            Toolkit
          </button>
          <button onClick={() => scrollToSection('about')} className="nav-link">
            <User size="1em" strokeWidth={2} />
            About
          </button>
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-sm"
            aria-label="Preview resume PDF in a new tab"
            onClick={() => setMobileNavOpen(false)}
          >
            <FileText size="1em" strokeWidth={2.5} />
            Resume
          </a>
        </div>
      </nav>

      {mobileNavOpen && (
        <div className="nav-links nav-links-mobile" role="menu">
          <button onClick={() => scrollToSection('work')} className="nav-link" role="menuitem">
            <Briefcase size="1em" strokeWidth={2} />
            Work
          </button>
          <button onClick={() => scrollToSection('toolkit')} className="nav-link" role="menuitem">
            <Wrench size="1em" strokeWidth={2} />
            Toolkit
          </button>
          <button onClick={() => scrollToSection('about')} className="nav-link" role="menuitem">
            <User size="1em" strokeWidth={2} />
            About
          </button>
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-sm"
            role="menuitem"
            aria-label="Preview resume PDF in a new tab"
            onClick={() => setMobileNavOpen(false)}
          >
            <FileText size="1em" strokeWidth={2.5} />
            Resume
          </a>
        </div>
      )}
    </header>
  );
}