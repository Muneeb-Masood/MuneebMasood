import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { portfolio } from '@/data/portfolio';

export function Skills() {
  return (
    <Section id="skills" index="02" title="Skills">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.skills.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 0.06}>
            <div className="group h-full rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent/50">
              <h3 className="font-display text-sm font-semibold text-secondary">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-muted px-2.5 py-1 text-sm text-foreground/90 transition-colors group-hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
