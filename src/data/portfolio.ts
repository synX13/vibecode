export const personalInfo = {
  name: 'Agus Wikamto',
  title: 'Senior DevOps Engineer',
  subtitle: 'Platform Engineer & Backend Engineer',
  bio: 'Building scalable backend systems and cloud infrastructure with 10+ years of experience in DevOps, Platform Engineering, and Backend Development.',
  email: 'agus.wikamto@example.com',
  phone: '+62 812 3456 7890',
  location: 'Indonesia',
  github: 'https://github.com/aguswikamto',
  linkedin: 'https://linkedin.com/in/aguswikamto',
  resume: '/resume.pdf',
}

export const skills = [
  {
    category: 'Cloud & Infrastructure',
    items: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'Linux'],
  },
  {
    category: 'DevOps & CI/CD',
    items: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'ArgoCD', 'Helm'],
  },
  {
    category: 'Backend Development',
    items: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'Redis', 'MongoDB'],
  },
  {
    category: 'Monitoring & Observability',
    items: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'CloudWatch'],
  },
]

export const experiences = [
  {
    company: 'Linguise',
    position: 'Senior DevOps Engineer',
    period: '2022 - Present',
    description: 'Leading DevOps initiatives and cloud infrastructure modernization.',
    responsibilities: [
      'Architected and maintained Kubernetes clusters serving 1M+ requests/day',
      'Implemented GitOps workflows reducing deployment time by 60%',
      'Led migration from monolith to microservices architecture',
      'Established monitoring and alerting systems achieving 99.9% uptime',
    ],
    achievements: [
      'Reduced infrastructure costs by 40% through optimization',
      'Improved deployment frequency from weekly to daily',
      'Automated 80% of operational tasks',
    ],
    technologies: ['Kubernetes', 'AWS', 'Terraform', 'ArgoCD', 'Prometheus', 'Grafana'],
  },
  {
    company: 'Shieldtag',
    position: 'Platform Engineer',
    period: '2020 - 2022',
    description: 'Built and maintained scalable platform infrastructure.',
    responsibilities: [
      'Designed multi-region AWS infrastructure for high availability',
      'Implemented CI/CD pipelines for 20+ microservices',
      'Managed PostgreSQL and Redis clusters handling 10TB+ data',
      'Developed internal developer platform (IDP)',
    ],
    achievements: [
      'Achieved 99.95% uptime SLA',
      'Reduced incident response time by 50%',
      'Scaled platform to support 10x traffic growth',
    ],
    technologies: ['AWS EKS', 'RDS', 'ElastiCache', 'CloudFormation', 'Jenkins'],
  },
  {
    company: 'PT Integra Inovasi Indonesia',
    position: 'Backend Engineer',
    period: '2018 - 2020',
    description: 'Developed scalable backend systems and APIs.',
    responsibilities: [
      'Built RESTful APIs serving 500K+ daily requests',
      'Optimized database queries reducing response time by 40%',
      'Implemented caching strategies improving performance',
      'Mentored junior developers and conducted code reviews',
    ],
    achievements: [
      'Delivered 15+ production features',
      'Reduced API latency from 500ms to 150ms',
      'Improved code coverage from 40% to 85%',
    ],
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
  },
]

export const projects = [
  {
    title: 'Linguise',
    description: 'AI-powered translation platform serving millions of users worldwide.',
    challenge: 'Scale infrastructure to handle 1M+ daily translation requests while maintaining sub-100ms latency.',
    solution: 'Implemented Kubernetes-based microservices architecture with auto-scaling and global CDN.',
    architecture: 'Microservices on EKS with CloudFront CDN, RDS PostgreSQL, and ElastiCache Redis.',
    technologies: ['Kubernetes', 'AWS', 'Node.js', 'PostgreSQL', 'Redis', 'CloudFront'],
    result: 'Achieved 99.9% uptime with 40% cost reduction and 60% faster deployments.',
    featured: true,
  },
  {
    title: 'Shieldtag',
    description: 'Enterprise security tagging and compliance management platform.',
    challenge: 'Build a secure, compliant platform handling sensitive data across multiple regions.',
    solution: 'Designed multi-region AWS infrastructure with encryption at rest and in transit.',
    architecture: 'EKS clusters across 3 regions, RDS Multi-AZ, S3 with versioning, and comprehensive monitoring.',
    technologies: ['AWS', 'Kubernetes', 'Terraform', 'PostgreSQL', 'S3', 'CloudWatch'],
    result: 'Achieved SOC 2 compliance with 99.95% uptime SLA.',
    featured: true,
  },
  {
    title: 'E-Office',
    description: 'Digital office management system for enterprise workflow automation.',
    challenge: 'Digitize paper-based office processes serving 1000+ employees.',
    solution: 'Built microservices architecture with document management and workflow engine.',
    architecture: 'Node.js microservices, PostgreSQL, Redis cache, and S3 for document storage.',
    technologies: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS S3'],
    result: 'Reduced document processing time by 70% and eliminated paper usage.',
    featured: true,
  },
  {
    title: 'E-Monev',
    description: 'Government project monitoring and evaluation system.',
    challenge: 'Track and evaluate 500+ government projects across Indonesia.',
    solution: 'Developed scalable backend with real-time analytics and reporting.',
    architecture: 'Python backend, PostgreSQL, Redis, and RESTful APIs with React frontend.',
    technologies: ['Python', 'PostgreSQL', 'Redis', 'Docker', 'REST API'],
    result: 'Improved project tracking efficiency by 80% with real-time dashboards.',
    featured: true,
  },
  {
    title: 'COVID Tracking',
    description: 'Real-time COVID-19 tracking and analytics dashboard.',
    challenge: 'Provide real-time pandemic data visualization for public awareness.',
    solution: 'Built scalable data pipeline with automated updates and interactive dashboards.',
    architecture: 'Python data pipeline, PostgreSQL, Redis cache, and React dashboard.',
    technologies: ['Python', 'PostgreSQL', 'Redis', 'Docker', 'React'],
    result: 'Served 100K+ daily users with real-time data updates.',
    featured: true,
  },
]

export const awsArchitecture = {
  title: 'AWS Architecture',
  description: 'Production-grade AWS infrastructure designed for high availability and scalability.',
  components: [
    { name: 'CloudFront', description: 'Global CDN for low-latency content delivery' },
    { name: 'Application Load Balancer', description: 'Distributes traffic across multiple targets' },
    { name: 'EKS', description: 'Managed Kubernetes service for container orchestration' },
    { name: 'EC2', description: 'Scalable compute capacity in the cloud' },
    { name: 'RDS', description: 'Managed relational database service' },
    { name: 'Redis', description: 'In-memory caching for high performance' },
    { name: 'S3', description: 'Object storage for static assets and backups' },
    { name: 'CloudWatch', description: 'Monitoring and observability platform' },
  ],
}

export const kubernetesArchitecture = {
  title: 'Kubernetes Architecture',
  description: 'Container orchestration platform for automated deployment and scaling.',
  components: [
    { name: 'Ingress', description: 'Manages external access to services' },
    { name: 'Service', description: 'Network abstraction for pod communication' },
    { name: 'Deployment', description: 'Manages replica sets and rolling updates' },
    { name: 'Pods', description: 'Smallest deployable units of computing' },
    { name: 'Redis', description: 'In-memory data store for caching' },
    { name: 'MySQL', description: 'Relational database for persistent storage' },
    { name: 'Monitoring', description: 'Comprehensive observability stack' },
  ],
  badges: ['Helm', 'HPA', 'Rolling Update', 'Self Healing'],
}