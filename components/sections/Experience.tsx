import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { portfolio } from '@/data/portfolio';

export function Experience() {
  return (
    <Section id="experience" index="03" title="Experience">
      <div className="relative">
        {/* Vertical spine for the timeline (hidden on small screens). */}
        <div className="absolute left-[7px] top-2 hidden h-full w-px bg-border sm:block" aria-hidden="true" />

        <div className="space-y-10">
          {portfolio.experience.map((job, i) => (
            <Reveal key={`${job.company}-${job.start}`} delay={Math.min(i, 4) * 0.04}>
              <article className="relative sm:pl-10">
                <span
                  className="absolute left-0 top-1.5 hidden h-4 w-4 rounded-full border-2 border-accent bg-background sm:block"
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-lg font-semibold">
                    {job.role}{' '}
                    <span className="text-accent">@ {job.company}</span>
                  </h3>
                  <span className="shrink-0 text-sm text-muted-foreground">
                    {job.start} – {job.end}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {job.location}
                  {job.via ? ` · ${job.via}` : ''}
                </p>

                <ul className="mt-3 space-y-2">
                  {job.points.map((point, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-secondary">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {job.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded border border-border px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
