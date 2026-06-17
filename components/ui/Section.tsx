import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  /** Small monospace-style index, e.g. "01". */
  index: string;
  title: string;
  children: ReactNode;
  className?: string;
}

/** Consistent section frame: anchor id, numbered eyebrow, title, content. */
export function Section({ id, index, title, children, className }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 md:py-28 ${className ?? ''}`}>
      <div className="container-content">
        <Reveal>
          <div className="mb-10 flex items-center gap-4 md:mb-14">
            <span className="font-display text-sm font-medium text-accent">{index}</span>
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
            <span className="h-px flex-1 bg-border" />
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
