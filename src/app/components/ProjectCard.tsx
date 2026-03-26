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
  imageUrl: string;
  shapeIndex: number;
  caseStudyLink?: string;
}

export function ProjectCard({ title, subtitle, tags, imageUrl, shapeIndex, caseStudyLink }: ProjectCardProps) {
  const { elementRef, isVisible } = useScrollAnimation();
  const shapeClass = `card-image-shape-${(shapeIndex % 6) + 1}`;
  
  const cardContent = (
    <>
      <div className={`${shapeClass} card-image-container`}>
        <img 
          src={imageUrl} 
          alt={title} 
          className="card-image"
          loading="lazy"
          decoding="async"
        />
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
            <ArrowUpRight size={14} strokeWidth={2.5} className="card-link-icon" />
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