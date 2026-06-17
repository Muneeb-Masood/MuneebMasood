import { siteConfig } from '@/config/site.config';
import { SocialIcon } from './SocialIcon';

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-content flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          {siteConfig.name} · {siteConfig.location}
        </p>

        <div className="flex items-center gap-2">
          {siteConfig.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-secondary transition-colors hover:border-accent hover:text-accent cursor-pointer"
            >
              <SocialIcon icon={s.icon} className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </div>

      <div className="container-content mt-6">
        <p className="text-center text-xs text-muted-foreground">
          Built with Next.js and Tailwind. Open source on{' '}
          <a
            href="https://github.com/mrazam110/mrazam110.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-border underline-offset-4 transition-colors hover:text-accent"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
