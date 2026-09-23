export interface Job {
  title: string
  company: string
  start: string
  end: string
  location: string
  blurb: string
  tech: string[]
}

export const name = 'Dan'
export const role = 'Full-Stack Software Engineer'
export const location = 'Remote · USA'

export const summary =
  "Hi, I'm Dan. I'm a full-stack software engineer who is extremely passionate about making impactful software that helps people. I stay up to date with the latest trends and best practices in the JavaScript/TypeScript world — and when I'm not building, I'm writing and listening to music, watching films, playing games, and hanging out with my wife and cats."

export const linkedin = 'https://www.linkedin.com/in/dandotjs' // TODO: confirm handle
export const email = '' // TODO: confirm contact email

export const jobs: Job[] = [
  {
    title: 'Senior Node.js Developer',
    company: 'Universal Studios',
    start: '11/2025',
    end: 'Present',
    location: 'Remote',
    blurb:
      'Sole developer on several greenfield Node.js microservices, currently building Guest Account Modernization features. Leading AI Adoption at UDX.',
    tech: ['Node.js', 'Azure Service Bus', 'Azure Event Hubs', 'Redis', 'Azure SQL DB', 'Couch DB', 'Claude Code', 'Codex', 'Copilot', 'OpenCode'],
  },
  {
    title: 'Senior Software Engineer',
    company: 'T-Mobile',
    start: '09/2021',
    end: '11/2025',
    location: 'Remote',
    blurb:
      'Full-stack work across greenfield and legacy projects. Led code reviews, pair-programmed with junior developers, and built DevOps jobs, pipelines, and deployments.',
    tech: ['Angular', 'Spring Boot', 'Kubernetes', '.NET', 'PostgreSQL', 'RabbitMQ', 'Kafka', 'Copilot'],
  },
  {
    title: 'Full-Stack Software Engineer',
    company: 'Colibri Group',
    start: '01/2020',
    end: '09/2021',
    location: 'Columbus, OH',
    blurb:
      'Architected and developed e-learning solutions for customer experiences and internal tools. Led offshore meetings and performed code reviews.',
    tech: ['TypeScript', 'JavaScript', 'Node.js', 'Angular', 'SQL', '.NET'],
  },
  {
    title: 'Full-Stack Web Developer',
    company: 'Hondros Education Group',
    start: '06/2018',
    end: '01/2020',
    location: 'Columbus, OH',
    blurb:
      'Maintained and upgraded a custom e-commerce platform and management apps; built new applications to improve business processes.',
    tech: ['JavaScript', 'AngularJS', 'Angular', 'Node.js', 'MongoDB', 'SQL'],
  },
]

export const technologies = [
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Angular',
  'Svelte',
  'Spring Boot',
  '.NET',
  'Kubernetes',
  'PostgreSQL',
  'Redis',
  'Azure Service Bus',
  'Azure Event Hubs',
  'Azure SQL',
  'Docker',
  'Couch DB',
  'Kafka',
  'RabbitMQ',
  'C#',
  'Snyk',
  'Gitlab',
  'GitHub',
  'Claude Code',
  'Codex',
  'Copilot',
  'OpenCode'
]
