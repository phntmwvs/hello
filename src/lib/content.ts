export interface Job {
  title: string
  company: string
  start: string
  end: string
  location: string
  blurb: string
  tech: string[]
}

export const name = 'Daniel'
export const shortName = 'DG'
export const role = 'Full-Stack Software Engineer'
export const location = 'Remote · USA'

export const summary =
  "Hi, I'm Daniel. I'm a full-stack software engineer. I've been doing this for almost a decade now and I've gone from working with Bower and AngularJS/Ember for small e-commerce sites to working on large-scale distributed systems. I'm comfortable with using AI tools as well as writing code the old fashion way. When I'm not working I enjoy writing music, watching films, photography, traveling, reading, and hanging out with my wife and our three cats."

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
      'Working on both greenfield and existing Node.js microservices. I move from team to team to help projects reach the finish line on-time. Leading AI Adoption at UDX.',
    tech: ['Node.js', 'TypeORM', 'GraphQL', 'Azure Service Bus', 'Azure Event Hubs', 'Azure AI Foundry', 'Redis', 'Azure SQL DB', 'Couch DB', 'Snyk', 'Claude Code', 'Codex', 'Copilot', 'OpenCode'],
  },
  {
    title: 'Senior Software Engineer',
    company: 'T-Mobile',
    start: '09/2021',
    end: '11/2025',
    location: 'Remote',
    blurb:
      'Full-stack work across greenfield and legacy projects. Led code reviews, pair-programmed with junior developers, and built DevOps jobs, pipelines, and deployments.',
    tech: ['Angular', 'RxJS', 'Java', 'Spring Boot', 'Kubernetes', 'Helm', 'C#', '.NET', 'PostgreSQL', 'RabbitMQ', 'Kafka', 'Copilot'],
  },
  {
    title: 'Full-Stack Software Engineer',
    company: 'Colibri Group',
    start: '01/2020',
    end: '09/2021',
    location: 'Columbus, OH',
    blurb:
      'Architected and developed e-learning solutions for customer experiences and internal tools. Led offshore meetings and performed code reviews.',
    tech: ['TypeScript', 'JavaScript', 'Node.js', 'Angular', 'SQL', 'C#', '.NET'],
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
