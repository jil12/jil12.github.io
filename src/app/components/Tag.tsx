import React from 'react';
import type { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  type: 'strategy' | 'development' | 'design' | 'hardware' | 'research';
}

export function Tag({ children, type }: TagProps) {
  const typeClasses = {
    strategy: 'tag-strategy',
    development: 'tag-development',
    design: 'tag-design',
    hardware: 'tag-hardware',
    research: 'tag-research',
  };

  return (
    <span className={`tag ${typeClasses[type]}`}>
      {children}
    </span>
  );
}