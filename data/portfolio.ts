/**
 * ============================================================================
 *  PORTFOLIO CONTENT  ‑  your words live here.
 * ============================================================================
 *
 *  Edit the values below. The types guide you: your editor will autocomplete
 *  fields and flag anything missing. To add an experience, copy an existing
 *  object in the `experience` array and change the values. To remove a whole
 *  section, set its toggle to false in config/site.config.ts instead of
 *  deleting content here.
 */

export interface About {
  /** Two or three short paragraphs. Plain sentences read best. */
  paragraphs: string[];
  /** A few quick facts shown beside the text. Keep them scannable. */
  highlights: { label: string; value: string }[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  /** e.g. "Berlin, Germany" or "Remote". */
  location: string;
  /** e.g. "Jul 2021" */
  start: string;
  /** "Present" for current roles. */
  end: string;
  /** Optional context line, e.g. "via Toptal". */
  via?: string;
  /** Bullet points. Lead with impact where you can. */
  points: string[];
  tech: string[];
}

export interface Project {
  name: string;
  /** Short description, one or two sentences. */
  description: string;
  href: string;
  tech: string[];
  /** Optional tag shown on the card, e.g. "Live" or "Open Source". */
  tag?: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface PortfolioData {
  about: About;
  skills: SkillGroup[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
}

export const portfolio: PortfolioData = {
  about: {
    paragraphs: [
      'I am a software engineer from Karachi who builds mobile and web products with Flutter, React, Node.js, and REST APIs. I usually sit at the point where product ideas become working software, and I like that part of the job.',
      'Over the last couple of years I have shipped mobile apps, AI features, and deployment workflows for client and project work. I care about practical details, clean handoffs, and releases that do what they are supposed to do.',
    ],
    highlights: [
      { label: 'Experience', value: '2+ years' },
      { label: 'Problem Solver', value: 'Problem -> Think -> Solution -> Ship' },
      {label: 'Top-Rated', value: 'Upwork' },
      { label: 'Focus', value: 'React, Flutter, Node.js' },
      { label: 'Based in', value: 'Karachi, Pakistan' },
    ],
  },

  skills: [
    {
      title: 'Mobile',
      items: ['Flutter', 'Dart', 'Android', 'iOS'],
    },
    {
      title: 'Frontend',
      items: ['React', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'REST APIs', 'Django (familiar)', 'API integration'],
    },
    {
      title: 'Tools & Delivery',
      items: ['Git', 'GitHub', 'GitHub Actions', 'Docker', 'CI/CD', 'AI integration', 'Upwork'],
    },
  ],

  experience: [
    {
      role: 'Top-Rated Freelancer',
      company: 'Upwork',
      location: 'Remote',
      start: 'Jun 2025',
      end: 'Present',
      points: [
        'Delivered software solutions for international clients while keeping Top-Rated status through consistent 5-star feedback.',
        'Implemented features and fixed bugs in coordination with backend teams and client requirements.',
        'Moved projects from rough requirements to shippable releases without losing track of edge cases or handoff details.',
      ],
      tech: ['React', 'Flutter', 'Node.js', 'REST APIs', 'AI integration'],
    },
    {
      role: 'App Deployment Management Trainee',
      company: 'Avaialdo Solutions',
      location: 'Karachi, Pakistan',
      start: 'Oct 2024',
      end: 'Aug 2025',
      points: [
        'Contributed to the development and deployment of 50+ mobile apps on Android and iOS.',
        'Helped prepare releases, manage build issues, and keep delivery work moving across multiple apps.',
        'Worked with Flutter codebases and deployment workflows during release cycles.',
      ],
      tech: ['Flutter', 'Android', 'iOS', 'CI/CD', 'GitHub Actions'],
    },
    {
      role: 'Flutter Developer',
      company: 'Pakistan Council of Scientific and Industrial Research',
      location: 'Karachi, Pakistan',
      start: 'Aug 2024',
      end: 'Nov 2024',
      points: [
        'Built a diabetes management chatbot with multilingual support and voice features.',
        'Worked on the product flow and app experience for a health-focused use case.',
        'Collaborated on integration details so the chatbot felt usable instead of experimental.',
      ],
      tech: ['Flutter', 'Dart', 'AI integration', 'Voice', 'REST APIs'],
    },
    {
      role: 'Software Engineer Intern',
      company: 'NCL-NED',
      location: 'Karachi, Pakistan',
      start: 'Jul 2024',
      end: 'Nov 2024',
      points: [
        'Worked on a vehicle diagnostics app for real-time OBD-II engine data analysis.',
        'Helped shape the app around live diagnostic information instead of static dashboards.',
        'Contributed to implementation and debugging during the internship.',
      ],
      tech: ['Flutter', 'OBD-II', 'Mobile Apps', 'Debugging'],
    },
  ],

  projects: [
    {
      name: 'Propoze AI',
      description:
        'AI-powered platform for generating tailored Upwork proposals in seconds. It combines React, Node.js, and AI integration to turn project details into a draft that is fast enough to use in real bidding work.',
      href: 'https://propoze.tech',
      tech: ['React', 'Node.js', 'AI integration', 'Upwork'],
      tag: 'Live',
    },
    {
      name: 'Smart Secure',
      description:
        'SmartSecure is a modern mobile security platform designed to help people stay safe while buying, selling, and using smartphones with confidence.',
      href: 'https://play.google.com/store/apps/details?id=com.digiarch.smartsecure&hl=en',
      tech: ['Flutter', 'Dart', 'Android', 'iOS', 'Security'],
    },
    {
      name: 'Job Track',
      description:
        'Track and manage your jobs with JobTrack, stay organized and never miss out!',
      href: 'https://play.google.com/store/apps/details?id=com.job.jobtrack&hl=en',
      tech: ['Flutter', 'Dart', 'Android', 'iOS', 'Productivity'],
    },
    {
      name: 'Wash my Ride',
      description:'Looking for a quick and convenient way to get your car washed? Our app lets you book car wash slots in just a few taps. Whether you are at home, work, or on the go, schedule your car wash at your convenience and enjoy a spotless vehicle without the hassle. Choose from a range of services and pick a time that suits your schedule. Keep your car looking brand new with just a few clicks!',
      href: 'https://play.google.com/store/apps/details?id=com.newuniqueapp.app&hl=en',
      tech: ['Flutter', 'Dart', 'AI integration', 'Android', 'iOS', 'Productivity'],
    },
    {
      name: 'AuroGrade (Launching Soon)',
      description:'An automated paper checker for O/A level students. It uses AI to grade papers and provide feedback on answers, helping students improve their performance and understanding of the subject matter.',
      href: '#',
      tech: ['Flutter', 'AI integration', 'Android', 'iOS', 'Education'],
    },
    {
      name: 'Campus Ride (Launching Soon)',
      description:'A carpool app for university students that helps them find and share rides with their peers. It aims to reduce traffic congestion, save money, and promote sustainable transportation on campus.',
      href: '#',
      tech: ['Flutter', 'AI integration', 'Android', 'iOS', 'Productivity'],
    },
  ],

  education: [
    {
      degree: 'Bachelor of Science, Software Engineering',
      school: 'NED University of Engineering & Technology',
      location: 'Karachi, Pakistan',
      period: 'Completed',
    },
  ],

  certifications: [],
};
