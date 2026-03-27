import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ImageWithFallback } from './figma/ImageWithFallback';
import aboutMeImage from '@/assets/global/AboutMe.png?format=avif;webp&w=512;1024&q=70&as=picture';
import aboutMeImageAlt from '@/assets/global/AboutMe_Real.jpg?format=avif;webp&w=512;1024&q=75&as=picture';

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

export function About() {
  const { elementRef, isVisible } = useScrollAnimation<HTMLHeadingElement>();

  return (
    <section id="about" className="section-about">
      <div className="centered-content">
        <div className="section-header">
          <h2
            ref={elementRef}
            className={`section-heading scroll-fade-in ${isVisible ? 'visible' : ''}`}
          >
            About Me
          </h2>
        </div>

        <div className="about-grid">
          {/* Left Column - Flip Image */}
          <div className="about-image-wrapper">
            <div className="about-flip-container">
              <div className="about-flip-inner">
                <div className="about-flip-front">
                  <picture>
                    {normalizeSources((aboutMeImage as any).sources).map((s) => (
                      <source key={`${s.type ?? 'img'}:${s.srcset}`} type={s.type} srcSet={s.srcset} />
                    ))}
                    <ImageWithFallback
                      src={(aboutMeImage as any).img?.src ?? (aboutMeImage as any).src ?? ''}
                      alt="About Me"
                      className="about-image"
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 1024px) 80vw, 420px"
                    />
                  </picture>
                </div>
                <div className="about-flip-back">
                  <picture>
                    {normalizeSources((aboutMeImageAlt as any).sources).map((s) => (
                      <source key={`${s.type ?? 'img'}:${s.srcset}`} type={s.type} srcSet={s.srcset} />
                    ))}
                    <ImageWithFallback
                      src={(aboutMeImageAlt as any).img?.src ?? (aboutMeImageAlt as any).src ?? ''}
                      alt="About Me - Alt"
                      className="about-image"
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 1024px) 80vw, 420px"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="about-content">
            <div className="about-text-content">
              <blockquote className="about-manifesto">
                "The best products emerge when business strategy, user empathy, and technical
                architecture speak the exact same language."
              </blockquote>

              <div className="about-prose">
                <p>
                  I am a Technical Product Manager and Design Engineer who thrives in the
                  "zero-to-one" space. Give me a messy, ambiguous challenge and strict technical
                  boundaries, and I will build a functional prototype. I don't wait for ideal
                  conditions -- whether I'm soldering hardware for haptic feedback, programming
                  spatial UI in Unity, or designing hybrid LLM architectures. I use constraints to
                  drive innovation and A/B testing to prove it works.
                </p>
                <p>
                  My journey started at the intersection of Digital Narrative and Computer
                  Engineering at the University of Pittsburgh, which taught me how to tell stories
                  through hardware. Today, as an MS in Information Studies candidate at UT Austin,
                  I'm focused on scaling those stories -- building accessible, data-backed tech
                  ecosystems that connect physical spaces with digital interfaces.
                </p>
              </div>

              <div className="about-offline">
                <p>
                  <strong>When I'm offline:</strong> Figuring out the beta on bouldering routes,
                  playing bass, catching live shows, and volunteering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}