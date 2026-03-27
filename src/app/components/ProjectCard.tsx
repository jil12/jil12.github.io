import { Tag } from './Tag';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import type { Ref } from 'react';

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  tags: Array<{
    label: string;
    type: 'strategy' | 'development' | 'design' | 'hardware' | 'research';
  }>;
  image:
    | string
    | {
        sources?: Array<{ type: string; srcset: string }>;
        img: { src: string; w?: number; h?: number; width?: number; height?: number };
      };
  shapeIndex: number;
  caseStudyLink?: string;
}

function isPicture(
  image: ProjectCardProps['image'],
): image is Exclude<ProjectCardProps['image'], string> {
  return typeof image === 'object' && image !== null && 'img' in image;
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

export function ProjectCard({ title, subtitle, tags, image, shapeIndex, caseStudyLink }: ProjectCardProps) {
  const { elementRef, isVisible } = useScrollAnimation();
  const shapeClass = `card-image-shape-${(shapeIndex % 6) + 1}`;
  
  const cardContent = (
    <>
      <div className={`${shapeClass} card-image-container`}>
        {isPicture(image) ? (
          <picture>
            {normalizeSources((image as any).sources).map((s) => (
              <source key={`${s.type ?? 'img'}:${s.srcset}`} type={s.type} srcSet={s.srcset} />
            ))}
            <img
              src={(image as any).img?.src ?? (image as any).src ?? ''}
              alt={title}
              className="card-image"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 420px"
            />
          </picture>
        ) : (
          <img
            src={image}
            alt={title}
            className="card-image"
            loading="lazy"
            decoding="async"
          />
        )}
      </div>
      
      <h3 className="card-title">{title}</h3>
      {subtitle && <p className="card-subtitle">{subtitle}</p>}
      
      <div className="card-tags">
        {tags.map((tag, index) => (
          <Tag key={index} type={tag.type}>
            {tag.label}
          </Tag>
        ))}
      </div>
      
      {caseStudyLink && (
        <div className="card-link-wrapper">
          <span className="card-link-text">
            View Case Study
            <ArrowUpRight size="1em" strokeWidth={2.5} className="card-link-icon" />
          </span>
        </div>
      )}
    </>
  );
  
  if (caseStudyLink) {
    return (
      <Link
        to={caseStudyLink}
        ref={elementRef as unknown as Ref<HTMLAnchorElement>}
        className={`project-card scroll-fade-in ${isVisible ? 'visible' : ''}`}
      >
        {cardContent}
      </Link>
    );
  }
  
  return (
    <div 
      ref={elementRef as unknown as Ref<HTMLDivElement>}
      className={`project-card scroll-fade-in ${isVisible ? 'visible' : ''}`}
    >
      {cardContent}
    </div>
  );
}