import { ArrowDown } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

const titles = ['Product Manager', 'Design Engineer', 'UX Designer', 'XR Explorer'] as const;
const titleColorClasses = ['hero-title-color-1', 'hero-title-color-2', 'hero-title-color-3', 'hero-title-color-4'] as const;

export function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(pauseTimeout);
    }
    
    if (!isDeleting && displayedText === currentTitle) {
      setIsPaused(true);
      return;
    }
    
    if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, isPaused, currentTitleIndex]);

  // Mouse trace effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      {/* Mouse trace effect */}
      <div 
        className="mouse-trace" 
        style={{ 
          left: `${mousePosition.x}px`, 
          top: `${mousePosition.y}px` 
        }}
      />
      
      <div className="centered-content">
        <div className="hero-content">
          <div className="hero-title-container">
            <h1 className="hero-title-intro">
              Hi, I'm <span className="hero-name">Jiyi</span>, a
            </h1>
            <div className="hero-title-line">
              <span className={`hero-title-animated ${titleColorClasses[currentTitleIndex]}`}>
                {displayedText}
                <span className="hero-cursor"></span>
              </span>
            </div>
          </div>
          
          <p className="hero-description">
            My work blends hardware, software, and user research to turn technical challenges into accessible, validated solutions. I build playful products across physical spaces and digital interfaces.
          </p>
          
          <div className="hero-button-wrapper">
            <button
              onClick={() => {
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              See Projects
              <ArrowDown className="btn-icon" size="1em" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}