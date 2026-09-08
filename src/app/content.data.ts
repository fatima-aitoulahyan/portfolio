// Contenu centralisé du portfolio — FR / EN
// Intégration complète de votre profil Ingénieur Logiciel | Cloud & IA

export type Lang = 'fr' | 'en';

export interface Project {
  id: string;
  status: { fr: string; en: string };
  title: string;
  githubUrl:String;
  tagline: { fr: string; en: string };
  problem: { fr: string; en: string };
  role: { fr: string; en: string };
  challenge: { fr: string; en: string };
  result: { fr: string; en: string };
  videoUrl?: string;       // Optionnel (présent s'il y a une vidéo)
  images?: string[];       // Optionnel (présent s'il y a des images)
  currentImageIndex?: number; // Optionnel (pour le carrousel d'images)
  poster?: string;
  stack: string[];
  location?: string;
  accomplishments?: { fr: string[]; en: string[] };
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'EXP-01',
    status: { fr: 'STAGE — TPE MANAGER', en: 'INTERNSHIP — TPE MANAGER' },
    title: 'Linkzen — TPE & Auto-Entrepreneur Platform',
    githubUrl : 'https://github.com/fatima-aitoulahyan/tpe-manager-mobile',
    tagline: {
      fr: 'Plateforme mobile et web de gestion et de scoring financier pour les TPE',
      en: 'Mobile and web management and financial scoring platform for small businesses'
    },
    location: 'Casablanca-Settat, Maroc (À distance)',
    problem: {
      fr: 'Fournir aux TPE et auto-entrepreneurs marocains une solution centralisée pour digitaliser leur gestion commerciale, leur facturation et l\'accès au crédit.',
      en: 'Provide Moroccan small businesses and freelancers with a centralized solution to digitize commercial management, invoicing, and access to credit.'
    },
    role: {
      fr: 'Développeuse Full Stack & Mobile — Conception et développement complet de l\'application mobile Flutter, du dashboard React et des API Django.',
      en: 'Full Stack & Mobile Developer — Complete design and development of the Flutter mobile app, React dashboard, and Django APIs.'
    },
    challenge: {
      fr: 'Développement d\'un système de scoring et de pré-éligibilité au crédit basé sur l\'activité, couplé à des tâches asynchrones Celery pour automatiser les rappels de paiement.',
      en: 'Developed a credit scoring and pre-eligibility system based on user activity, coupled with Celery asynchronous tasks to automate payment reminders.'
    },
    result: {
      fr: 'MVP complet et opérationnel intégrant la gestion des devis, factures, trésorerie, notifications push et calculs de scoring financier.',
      en: 'Complete and operational MVP integrating quotation management, invoicing, cash flow, push notifications, and financial scoring calculations.'
    },
// Projet EXP-01
    videoUrl: 'https://drive.google.com/file/d/1s8de-Gl4ln9HTCjEAW29metGiFklhfQX/preview',    currentImageIndex: 0,
    accomplishments: {
      fr: [
        'Développement de l\'application mobile multiplateforme avec Flutter (iOS & Android) et du tableau de bord web avec React.js.',
        'Conception et développement d\'API REST avec Django pour la gestion des utilisateurs, devis, factures, paiements, trésorerie et demandes de financement.',
        'Mise en place du cycle de vie complet des devis et factures avec génération de documents PDF et traçabilité.',
        'Développement d\'un système de scoring et de pré-éligibilité au crédit basé sur les données d\'activité des utilisateurs.',
        'Implémentation de tâches asynchrones avec Celery et intégration d\'un système de notifications push.'
      ],
      en: [
        'Developed cross-platform mobile app with Flutter (iOS & Android) and web dashboard with React.js.',
        'Designed and developed Django REST APIs for user management, quotations, invoices, payments, cash flow, and loan requests.',
        'Implemented complete quotation and invoicing lifecycle with PDF generation and traceability.',
        'Developed a credit scoring and pre-eligibility evaluation system based on user activity data.',
        'Set up asynchronous tasks with Celery and integrated a push notification system.'
      ]
    },
    stack: ['Flutter', 'React.js', 'Django REST', 'Celery', 'Python', 'PostgreSQL', 'Git']
  },
  {
    id: 'PROJ-SIOP',
    status: { fr: 'PROJET — SYSTÈME DE GESTION (SPELEV)', en: 'PROJECT — MANAGEMENT SYSTEM (SPELEV)' },
    title: 'SIOP — Système Intégré d\'Organisation de la Production',
    githubUrl : 'https://github.com/fatima-aitoulahyan/SIOP-Web',
    tagline: {
      fr: 'Plateforme intelligente de maintenance d\'ascenseurs avec assistant RAG et automatisation WhatsApp',
      en: 'Intelligent elevator maintenance platform with RAG assistant and WhatsApp automation'
    },
    location: 'ENSET Mohammedia / SPELEV',
    problem: {
      fr: 'Moderniser la gestion de la maintenance des parcs d\'ascenseurs pour l\'entreprise SPELEV en digitalisant le suivi des équipements, la gestion des interventions terrain et l\'assistance technique par IA.',
      en: 'Modernize elevator park maintenance management for SPELEV by digitizing equipment tracking, field intervention management, and AI technical assistance.'
    },
    role: {
      fr: 'Ingénieure Logiciel | Cloud & IA — Conception et développement des modules full-stack, intégration des workflows d\'intelligence artificielle et architecture orientée services.',
      en: 'Software Engineer | Cloud & AI — Design and development of full-stack modules, integration of artificial intelligence workflows, and service-oriented architecture.'
    },
    challenge: {
      fr: 'Mise en place d\'une architecture hybride combinant un backend métier robuste (Spring Boot), un moteur RAG vectoriel (FastAPI, PostgreSQL/pgvector) et des pipelines d\'automatisation avancés sous n8n pour un agent conversationnel multicanal.',
      en: 'Implementation of a hybrid architecture combining a robust business backend (Spring Boot), a vector RAG engine (FastAPI, PostgreSQL/pgvector), and advanced automation pipelines under n8n for a multichannel conversational agent.'
    },
    result: {
      fr: 'Plateforme opérationnelle complète couvrant la gestion des ascenseurs, des parcs et des bons de travail, couplée à un assistant intelligent multilingue (texte/audio) connecté à la base de connaissances interne.',
      en: 'Complete operational platform covering elevator, park, and work order management, coupled with a multilingual intelligent assistant (text/audio) connected to the internal knowledge base.'
    },
    images: [
      'assets/images/1.png',
      'assets/images/2.png',
      'assets/images/3.png',
      'assets/images/4.png',
      'assets/images/5.png',
      'assets/images/6.png',
      'assets/images/7.png',
      'assets/images/8.png',
      'assets/images/9.png'
    ],
    currentImageIndex: 0,
    accomplishments: {
      fr: [
        'Développement de modules full-stack critiques pour la gestion des équipements, des parcs d\'intervention et des bons de travail[cite: 1].',
        'Mise en place d\'une architecture RAG (Retrieval-Augmented Generation) pour l\'interrogation de la base de connaissances techniques via FastAPI, pgvector et des modèles d\'embedding avancés[cite: 1].',
        'Création de workflows d\'automatisation sous n8n et d\'un agent conversationnel WhatsApp intelligent gérant le traitement du texte et des messages vocaux (Speech-to-Text et Text-to-Speech)[cite: 1].',
        'Intégration de mécanismes de sécurité rigoureux, incluant le contrôle d\'accès par rôles, l\'authentification JWT et la sécurisation des API par clés et rate limiting[cite: 1].'
      ],
      en: [
        'Developed critical full-stack modules for equipment management, intervention parks, and work orders[cite: 1].',
        'Implemented a RAG (Retrieval-Augmented Generation) architecture for querying technical knowledge bases via FastAPI, pgvector, and advanced embedding models[cite: 1].',
        'Created automation workflows under n8n and an intelligent WhatsApp conversational agent handling text and voice messages (Speech-to-Text and Text-to-Speech)[cite: 1].',
        'Integrated rigorous security mechanisms, including role-based access control, JWT authentication, and API security via keys and rate limiting[cite: 1].'
      ]
    },
    stack: ['Spring Boot', 'FastAPI', 'Python', 'PostgreSQL', 'pgvector', 'n8n', 'Docker', 'Angular', 'Flutter', 'Git']
  },
  {
    id: 'AI-01',
    status: { fr: 'PROJET MOBILE — DEEP LEARNING', en: 'MOBILE PROJECT — DEEP LEARNING' },
    title: 'Plant Disease Detection Mobile App',
    tagline: {
      fr: 'Application mobile intelligente de classification des maladies des plantes par CNN',
      en: 'Smart mobile application for plant disease classification using CNN'
    },
    problem: {
      fr: 'Automatiser le diagnostic des cultures agricoles et proposer des traitements conformes aux directives de l\'ONSSA.',
      en: 'Automate agricultural crop diagnosis and propose treatments compliant with ONSSA guidelines.'
    },
    role: {
      fr: 'Développement mobile Flutter et entraînement du modèle de Deep Learning.',
      en: 'Flutter mobile development and Deep Learning model training.'
    },
    challenge: {
      fr: 'Prétraitement, analyse et augmentation de données d\'images pour entraîner, valider et optimiser un modèle de réseau de neurones convolutifs (CNN).',
      en: 'Preprocessed, analyzed, and augmented image data to train, validate, and optimize a Convolutional Neural Network (CNN) model.'
    },
    result: {
      fr: 'Application mobile fluide connectée à un backend Django et une base MongoDB pour le suivi des cultures.',
      en: 'Smooth mobile application connected to a Django backend and MongoDB database for crop monitoring.'
    },
// Projet AI-01
    videoUrl: 'https://drive.google.com/file/d/1ed_j5BMkBQFUAv3IzHZXHxfTIzmpuO_2/preview',    githubUrl:'https://github.com/fatima-aitoulahyan/smart-agri-app-frontend',
    currentImageIndex: 0,
    stack: ['Flutter', 'Django', 'TensorFlow', 'CNN', 'MongoDB', 'Python']
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Oracle Cloud Infrastructure AI Foundations',
    issuer: 'Oracle',
    date: '2025'
  },
  {
    title: 'Java SE 17 Developer',
    issuer: 'Oracle',
    date: '2025',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=8C3F6D4BBE164DDAD380879DF2342C53BC98151966C47F5E2680792BCC80126D'
  },
  {
    title: 'Associate AI Engineer for Developers',
    issuer: 'DataCamp',
    date: '2025',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/f7f0d654cc717889a30dea6e50bb22476a1f79e6'
  },
  {
    title: 'Red Hat System Administration I & II (RH124 / RH134)',
    issuer: 'Red Hat',
    date: '2025',
    link: 'https://www.credly.com/badges/62e77ce4-94dc-46cd-96d8-8363991c8fc2/public_url'
  },
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    date: '2025'
  },
  {
    title: 'SQL Certification',
    issuer: '365 DataScience',
    date: '2025'
  }
];

export const SKILLS = {
  cloud: ['OCI', 'AWS', 'Docker', 'Linux', 'Red Hat'],
  ai: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'YOLO', 'CNN', 'LLM', 'RAG', 'OpenAI API'],
  backend: ['Spring Boot', 'Django REST', 'FastAPI', 'Node.js', 'Java', 'Python', 'Celery'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQL'],
  frontend: ['Angular', 'React', 'TypeScript', 'HTML5', 'CSS3'],
  mobile: ['Flutter', 'Android (Java/Kotlin)'],
  tools: ['Git', 'GitLab', 'Jira', 'Roboflow', 'UML', 'Agile Scrum']
};

export const UI_TEXT = {
  fr: {
    role: 'Étudiante en Ingénierie Logicielle | Cloud & IA',
    heroLine: 'Je conçois des systèmes intelligents et distribués — du Cloud au Deep Learning.',
    aboutTitle: 'À propos',
    about: 'Élève ingénieure en dernière année du cycle d\'ingénieur (Génie Logiciel et Systèmes d\'Information Distribués) à l\'ENSET Mohammedia, certifiée en IA et Cloud (OCI, AWS, Red Hat). Passionnée par l\'ingénierie logicielle, le Cloud et l\'IA, je recherche un stage PFE de 6 mois à partir de janvier 2027.',
    projectsTitle: 'Projets & Réalisations IA',
    skillsTitle: 'Compétences & Stack',
    educationTitle: 'Formation Académique',
    certificationsTitle: 'Certifications Officielles',
    contactTitle: 'Contact',
    contactSub: 'Une opportunité de stage PFE ou un projet Cloud & IA ? Discutons-en.',
    stackLabel: 'STACK',
    problemLabel: 'CONTEXTE',
    challengeLabel: 'DÉFI TECHNIQUE',
    resultLabel: 'RÉSULTAT'
  },
  en: {
    role: 'Software Engineering Student | Cloud & AI',
    heroLine: 'I design intelligent and distributed systems — from Cloud to Deep Learning.',
    aboutTitle: 'About',
    about: 'Software Engineering student (Distributed Systems track) at ENSET Mohammedia, certified in AI and Cloud (OCI, AWS, Red Hat). Passionate about software engineering, cloud, and AI, seeking a 6-month PFE internship starting in January 2027.',
    projectsTitle: 'AI Projects & Systems',
    skillsTitle: 'Skills & Stack',
    educationTitle: 'Education',
    certificationsTitle: 'Official Certifications',
    contactTitle: 'Contact',
    contactSub: 'A PFE internship opportunity or a Cloud & AI project? Let\'s connect.',
    stackLabel: 'STACK',
    problemLabel: 'CONTEXT',
    challengeLabel: 'TECHNICAL CHALLENGE',
    resultLabel: 'RESULT'
  }
};