import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Circle } from 'lucide-react';
import React from 'react';
import type { Ref } from 'react';

interface ToolkitBoxProps {
  title: string;
  items: string[];
}

export function ToolkitBox({ title, items }: ToolkitBoxProps) {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <div 
      ref={elementRef as unknown as Ref<HTMLDivElement>}
      className={`toolkit-box scroll-fade-in ${isVisible ? 'visible' : ''}`}
    >
      <h3 className="toolkit-title">{title}</h3>
      <ul className="toolkit-list">
        {items.map((item, index) => (
          <li key={index} className="toolkit-item">
            <Circle size="0.6em" fill="currentColor" strokeWidth={0} className="toolkit-bullet" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}