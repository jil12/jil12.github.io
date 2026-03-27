import React, { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import '../../styles/case-study.css';

export interface CaseStudySection {
  id: string;
  title: string;
}

export interface CaseStudyMetadata {
  role: string;
  timeline: string;
  team: string;
  tools: string[];
}

interface CaseStudyLayoutProps {
  title: string;
  heroImage:
    | string
    | {
        sources?: Array<{ type: string; srcset: string }>;
        img: { src: string; w?: number; h?: number; width?: number; height?: number };
      };
  heroCaption: string;
  metadata: CaseStudyMetadata;
  sections: CaseStudySection[];
  children: ReactNode;
}

function isPicture(
  heroImage: CaseStudyLayoutProps['heroImage'],
): heroImage is Exclude<CaseStudyLayoutProps['heroImage'], string> {
  return typeof heroImage === 'object' && heroImage !== null && 'img' in heroImage;
}

function normalizeSources(
  sources: unknown,
): Array<{ type?: string; srcset: string }> {
  if (Array.isArray(sources)) return sources as Array<{ type?: string; srcset: string }>;
  if (typeof sources === 'string') return [{ srcset: sources }];
  if (sources && typeof sources === 'object' && 'srcset' in (sources as Record<string, unknown>)) {
    return [sources as { type?: string; srcset: string }];
  }
  return [];
}

export function CaseStudyLayout({
  title,
  heroImage,
  heroCaption,
  metadata,
  sections,
  children,
}: CaseStudyLayoutProps) {
  const [tocOpen, setTocOpen] = useState(false);
  const tocRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    if (!tocOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (tocRef.current && !tocRef.current.contains(e.target as Node)) {
        setTocOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [tocOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setTocOpen(false);
  };

  return (
    <div className="case-study-container">
      {/* Back Button - Top Left */}
      <Link to="/" className="case-study-back">
        ← Back
      </Link>

      {/* Hamburger TOC - Top Right, visible on small screens only */}
      <div ref={tocRef} className="case-study-toc-wrapper">
      <button
        type="button"
        className="case-study-toc-toggle"
        onClick={() => setTocOpen(!tocOpen)}
        aria-label={tocOpen ? 'Close table of contents' : 'Open table of contents'}
        aria-expanded={tocOpen}
      >
        {tocOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
      </button>

      {/* TOC Dropdown - shown when hamburger is open on small screens */}
      {tocOpen && (
        <div className="case-study-toc-dropdown" role="menu">
          <nav className="toc-nav toc-nav-dropdown">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="toc-link"
                role="menuitem"
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>
      )}
      </div>

      {/* Fixed Left Table of Contents - desktop only */}
      <aside className="case-study-toc-left">
        <nav className="toc-nav">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="toc-link"
            >
              {section.title}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content - Centered Column */}
      <main className="case-study-main">
        {/* Project Title */}
        <header className="case-study-header">
          <h1 className="case-study-title">{title}</h1>
        </header>

        {/* Project Hero */}
        <section className="project-hero">
          <div className="media-container">
            {isPicture(heroImage) ? (
              <picture>
                {normalizeSources((heroImage as any).sources).map((s) => (
                  <source key={`${s.type ?? 'img'}:${s.srcset}`} type={s.type} srcSet={s.srcset} />
                ))}
                <ImageWithFallback
                  src={(heroImage as any).img?.src ?? (heroImage as any).src ?? ''}
                  alt={title}
                  className="hero-media"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 94vw, 860px"
                />
              </picture>
            ) : (
              <ImageWithFallback
                src={heroImage}
                alt={title}
                className="hero-media"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            )}
          </div>
          {heroCaption && <p className="media-caption">{heroCaption}</p>}
        </section>

        {/* At a Glance - Medium Style */}
        <section className="at-a-glance">
          <div className="glance-row">
            <span className="glance-label">Role</span>
            <span className="glance-value">{metadata.role}</span>
          </div>
          <div className="glance-row">
            <span className="glance-label">Timeline</span>
            <span className="glance-value">{metadata.timeline}</span>
          </div>
          <div className="glance-row">
            <span className="glance-label">Team</span>
            <span className="glance-value">{metadata.team}</span>
          </div>
          <div className="glance-row">
            <span className="glance-label">Tools</span>
            <span className="glance-value">{metadata.tools.join(', ')}</span>
          </div>
        </section>

        {/* Narrative Sections */}
        {children}
      </main>
    </div>
  );
}

interface NarrativeSectionProps {
  id: string;
  title: string;
  markerColor?: 'orange' | 'purple' | 'yellow' | 'green';
  children: ReactNode;
}

export function NarrativeSection({ id, title, children }: NarrativeSectionProps) {
  return (
    <section id={id} className="narrative-section">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
}