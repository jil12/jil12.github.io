import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Circle } from 'lucide-react';

interface ToolkitBoxProps {
  title: string;
  items: string[];
}

export function ToolkitBox({ title, items }: ToolkitBoxProps) {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <div 
      ref={elementRef}
      className={`toolkit-box scroll-fade-in ${isVisible ? 'visible' : ''}`}
    >
      <h3 className="toolkit-title">{title}</h3>
      <ul className="toolkit-list">
        {items.map((item, index) => (
          <li key={index} className="toolkit-item">
            <Circle size={6} fill="currentColor" strokeWidth={0} className="toolkit-bullet" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}