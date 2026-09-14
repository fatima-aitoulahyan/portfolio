// Contenu centralisé du portfolio — FR / EN
// Intégration complète de votre profil Ingénieur Logiciel | Cloud & IA

export type Lang = 'fr' | 'en';

export interface Project {
  id: string;
  title: string;
  tagline: { fr: string; en: string };
  context: { fr: string; en: string };
  date: string;
  stack: string[];
  images?: string[];
  activeImageIndex?: number;
  github?: string;
  longDescription: { fr: string; en: string };
  video?: string;
  problem?: { fr: string; en: string };
  role?: { fr: string; en: string };
  challenge?: { fr: string; en: string };
  result?: { fr: string; en: string };
  accomplishments?: { fr: string[]; en: string[] };
}

export interface SkillGroup {
  title: { fr: string; en: string };
  skills: string[];
}

export interface Education {
  institution: string;
  school: string;
  degree: { fr: string; en: string };
  field: { fr: string; en: string };
  period: string;
  location: { fr: string; en: string };
  skills: { fr: string[]; en: string[] };
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export const TRANSLATIONS = {
  en: {
    heroBadge: "Available for PFE Internship 2027",
    heroSubtitle: "Engineering student specializing in Software Engineering, Distributed Systems, and Intelligent Applications.",
    viewProjects: "Explore Projects",
    getInTouch: "Get in Touch",
    aboutEyebrow: "About Me",
    aboutTitle: "Engineering the Future with Code & Intelligence",
    aboutText: "I am an engineering student pursuing my degree in <strong>Software Engineering and Distributed Information Systems (GLSID)</strong> at ENSET Mohammedia. My technical journey spans across full-stack architecture, advanced AI and computer vision pipelines, and robust mobile/embedded solutions. I thrive on transforming complex technical challenges into production-ready software systems.",
    projectsBadge: "Portfolio Showcase",
    projectsTitle: "Featured Engineering Projects",
    projectsSubtitle: "A curated selection of my recent production-grade applications, AI systems, and distributed platforms.",
    exploreProject: "View Details",
    skillsEyebrow: "Tools & Tech Stack",
    skillsTitle: "Technical Proficiency",
    eduEyebrow: "Academic Background",
    eduTitle: "Education & Credentials",
    certEyebrow: "Accreditations",
    certTitle: "Professional Certifications",
    contactEyebrow: "Contact",
    contactTitle: "Let's Build Something Extraordinary",
    contactSub: "I am actively looking for a Final Year Project (PFE) internship starting in 2027. Let's connect!",
    stackLabel: "STACK",
    problemLabel: "CONTEXT",
    challengeLabel: "TECHNICAL CHALLENGE",
    resultLabel: "RESULT"
  },
  fr: {
    heroBadge: "À la recherche d'un stage PFE 2027",
    heroSubtitle: "Élève ingénieure spécialisée en Génie Logiciel, Systèmes Distribués et Applications Intelligentes.",
    viewProjects: "Voir les Projets",
    getInTouch: "Me Contacter",
    aboutEyebrow: "À Propos",
    aboutTitle: "Concevoir le Futur par le Code et l'Intelligence",
    aboutText: "Je suis élève ingénieure en <strong>Génie Logiciel et Systèmes d'Information Distribués (GLSID)</strong> à l'ENSET Mohammedia. Mon parcours technique englobe l'architecture full-stack, l'intelligence artificielle avancée, la vision par ordinateur et les solutions mobiles/embarquées robustes.",
    projectsBadge: "Réalisations",
    projectsTitle: "Projets d'Ingénierie",
    projectsSubtitle: "Une sélection de mes applications de niveau production, systèmes IA et plateformes distribuées.",
    exploreProject: "Voir les Détails",
    skillsEyebrow: "Outils & Stack Technique",
    skillsTitle: "Compétences Techniques",
    eduEyebrow: "Parcours Académique",
    eduTitle: "Formations et Diplômes",
    certEyebrow: "Certifications",
    certTitle: "Certifications Professionnelles",
    contactEyebrow: "Contact",
    contactTitle: "Construisons l'Avenir Ensemble",
    contactSub: "Je recherche activement un stage de Fin d'Études (PFE) pour 2027. Discutons-en !",
    stackLabel: "STACK",
    problemLabel: "CONTEXTE",
    challengeLabel: "DÉFI TECHNIQUE",
    resultLabel: "RÉSULTAT"
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'SIOP-01',
    title: 'SIOP — Système Intégré d\'Organisation de la Production',
    tagline: {
      fr: 'Plateforme intelligente de maintenance d\'ascenseurs avec assistant RAG et automatisation WhatsApp',
      en: 'Intelligent elevator maintenance platform with RAG assistant and WhatsApp automation'
    },
    context: {
      fr: 'ENSET Mohammedia / SPELEV',
      en: 'ENSET Mohammedia / SPELEV'
    },
    date: 'Juin 2026 - Août 2026',
    stack: ['Spring Boot', 'FastAPI', 'Python', 'PostgreSQL', 'pgvector', 'n8n', 'Docker', 'Angular', 'Flutter', 'Git'],
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
    activeImageIndex: 0,
    github: 'https://github.com/fatima-aitoulahyan/SIOP-Web',
    longDescription: {
      fr: 'Développement de la plateforme SPELEV Intelligent Operations Platform (SIOP) pour la gestion de la maintenance des ascenseurs, implémentant des arbres d\'équipements dynamiques, des bons de travail, la planification de calendrier, des systèmes de notification, un backend Java Spring Boot, un frontend Angular et des configurations de déploiement Dokploy.',
      en: 'Developed the SPELEV Intelligent Operations Platform (SIOP) for elevator maintenance management, implementing dynamic equipment trees, work orders, calendar scheduling, notification systems, a Java Spring Boot backend, an Angular frontend, and Dokploy deployment configurations.'
    },
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
    accomplishments: {
      fr: [
        'Développement de modules full-stack critiques pour la gestion des équipements, des parcs d\'intervention et des bons de travail.',
        'Mise en place d\'une architecture RAG (Retrieval-Augmented Generation) pour l\'interrogation de la base de connaissances techniques via FastAPI, pgvector et des modèles d\'embedding avancés.',
        'Création de workflows d\'automatisation sous n8n et d\'un agent conversationnel WhatsApp intelligent gérant le traitement du texte et des messages vocaux (Speech-to-Text et Text-to-Speech).',
        'Intégration de mécanismes de sécurité rigoureux, incluant le contrôle d\'accès par rôles, l\'authentification JWT et la sécurisation des API par clés et rate limiting.'
      ],
      en: [
        'Developed critical full-stack modules for equipment management, intervention parks, and work orders.',
        'Implemented a RAG (Retrieval-Augmented Generation) architecture for querying technical knowledge bases via FastAPI, pgvector, and advanced embedding models.',
        'Created automation workflows under n8n and an intelligent WhatsApp conversational agent handling text and voice messages (Speech-to-Text and Text-to-Speech).',
        'Integrated rigorous security mechanisms, including role-based access control, JWT authentication, and API security via keys and rate limiting.'
      ]
    }
  },
  {
    id: 'TPE-02',
    title: 'Linkzen — TPE & Auto-Entrepreneur Platform',
    tagline: {
      fr: 'Plateforme mobile et web de gestion et de scoring financier pour les TPE',
      en: 'Mobile and web management and financial scoring platform for small businesses'
    },
    context: {
      fr: 'Casablanca-Settat, Maroc (À distance)',
      en: 'Casablanca-Settat, Morocco (Remote)'
    },
    date: 'Juin 2026 - Août 2026',
    stack: ['Flutter', 'React.js', 'Django REST', 'Celery', 'Python', 'PostgreSQL', 'Git'],
    video: 'assets/videos/TPEmobile.mp4',
    activeImageIndex: 0,
    github: 'https://github.com/fatima-aitoulahyan/tpe-manager-mobile',
    longDescription: {
      fr: 'Développement de TPE Manager, une plateforme complète de gestion pour petites entreprises comprenant une application mobile Flutter, un tableau de bord web React, une API REST Django, une planification de tâches Celery et des algorithmes de scoring de pré-éligibilité au crédit.',
      en: 'Developed TPE Manager, a full-small business management platform featuring a Flutter mobile app, a React web dashboard, a Django backend REST API, Celery task scheduling, and credit pre-eligibility scoring algorithms.'
    },
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
    }
  },
  {
    id: 'AGRI-03',
    title: 'Fellah Smart — Application mobile de gestion agricole par IA',
    tagline: {
      fr: 'Application mobile de diagnostic des maladies des plantes par Deep Learning et assistant agronomique Gemini',
      en: 'Mobile app for plant disease diagnosis using Deep Learning and Gemini agronomic assistant'
    },
    context: {
      fr: 'ENSET Mohammedia / Projet Agricole',
      en: 'ENSET Mohammedia / Agricultural Project'
    },
    date: 'Oct 2025 - Mar 2026',
    stack: ['Flutter', 'Django REST Framework', 'TensorFlow', 'MobileNetV2', 'MongoDB', 'Gemini API', 'OpenWeather API', 'Firebase'],
    video: 'assets/videos/SmartAgri.mp4',
    activeImageIndex: 0,
    github: 'https://github.com/fatima-aitoulahyan/smart-agri-app-frontend',
    longDescription: {
      fr: 'Application mobile Flutter (Android/iOS) destinée aux agriculteurs, couplée à un backend Django REST Framework. Le système permet de diagnostiquer les maladies des plantes à partir d\'une simple photo grâce à un modèle de deep learning (MobileNetV2), d\'obtenir des recommandations de traitements, et d\'interagir avec un assistant conversationnel agronomique multilingue propulsé par l\'API Gemini.',
      en: 'Flutter mobile app (Android/iOS) for farmers, coupled with a Django REST Framework backend. The system diagnoses plant diseases from a simple photo using a deep learning model (MobileNetV2), provides treatment recommendations, and features a multilingual agronomic conversational assistant powered by the Gemini API.'
    },
    problem: {
      fr: 'Aider les agriculteurs à identifier rapidement les maladies des cultures et à optimiser la gestion de leurs exploitations agricoles grâce à des outils technologiques accessibles.',
      en: 'Help farmers quickly identify crop diseases and optimize farm management through accessible technological tools.'
    },
    role: {
      fr: 'Développeuse Full Stack & IA — Conception de l\'application mobile Flutter, développement de l\'API Django et intégration du modèle de Deep Learning (MobileNetV2) et de l\'API Gemini.',
      en: 'Full Stack & Mobile Developer — Designed the Flutter mobile app, developed the Django API, and integrated the Deep Learning model (MobileNetV2) and Gemini API.'
    },
    challenge: {
      fr: 'Intégration d\'un modèle de classification d\'images par Deep Learning (MobileNetV2) avec restitution en temps réel des probabilités et couplage avec un LLM externe (Gemini) connecté au web pour des conseils agronomiques actualisés.',
      en: 'Integrating a Deep Learning image classification model (MobileNetV2) with real-time probability outputs and coupling it with an external web-connected LLM (Gemini) for up-to-date agronomic advice.'
    },
    result: {
      fr: 'Application mobile complète et opérationnelle intégrant le diagnostic phytosanitaire par photo, un assistant agronomique intelligent, un suivi des cultures, un calculateur d\'engrais et des alertes météo géolocalisées.',
      en: 'Complete and operational mobile app integrating photo-based phytosanitary diagnosis, an intelligent agronomic assistant, crop tracking, fertilizer calculator, and geolocated weather alerts.'
    },
    accomplishments: {
      fr: [
        'Développement de l\'application mobile multiplateforme avec Flutter (Android/iOS).',
        'Mise en place d\'un backend robuste avec Django REST Framework et MongoDB.',
        'Intégration d\'un modèle TensorFlow/Keras (MobileNetV2) pour la classification et la détection des maladies des plantes.',
        'Connexion à l\'API Gemini avec recherche web pour un assistant conversationnel multilingue (français, arabe, anglais).',
        'Intégration de l\'API OpenWeather et de Firebase Cloud Messaging pour les alertes météo et notifications push.'
      ],
      en: [
        'Developed cross-platform mobile application using Flutter (Android/iOS).',
        'Built a robust backend with Django REST Framework and MongoDB.',
        'Integrated a TensorFlow/Keras model (MobileNetV2) for plant disease classification and detection.',
        'Connected to the Gemini API with web search capabilities for a multilingual conversational assistant (French, Arabic, English).',
        'Integrated OpenWeather API and Firebase Cloud Messaging for weather alerts and push notifications.'
      ]
    }
  }
];
export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: { fr: 'Développement Web Full-Stack', en: 'Full-Stack Web Development' },
    skills: ['Java', 'Spring Boot', 'Spring Security', 'AngularJS', 'Angular', 'React', 'Django', 'Node.js', 'Express.js', 'PHP', 'TypeScript', 'JavaScript']
  },
  {
    title: { fr: 'Systèmes Mobiles & Embarqués', en: 'Mobile & Embedded Systems' },
    skills: ['Flutter', 'Android (Java/Kotlin)', 'React Native', 'ESP32-CAM']
  },
  {
    title: { fr: 'IA & Vision par Ordinateur', en: 'AI & Computer Vision' },
    skills: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'YOLO', 'Roboflow', 'LangChain', 'LangGraph', 'FAISS']
  },
  {
    title: { fr: 'Bases de Données & DevOps', en: 'Databases & DevOps' },
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Redis', 'Docker', 'Dokploy', 'Git', 'Linux']
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    institution: 'HASSAN II UNIVERSITY',
    school: 'École Normale Supérieure de l\'Enseignement Technique (ENSET)',
    degree: {
      fr: 'Diplôme d\'Ingénieur ',
      en: 'Engineering Degree '
    },
    field: {
      fr: 'Génie Logiciel et Systèmes d\'Information Distribués (GLSID)',
      en: 'Software Engineering & Distributed Information Systems (GLSID)'
    },
    period: 'September 2024 - July 2027',
    location: { fr: 'Mohammedia, Morocco', en: 'Mohammedia, Morocco' },
    skills: {
      fr: [
        'Génie Logiciel', 'Systèmes Distribués', 'Architecture Cloud',
        'Design Patterns', 'DevOps & CI/CD', 'Structures de Données & Algorithmes',
        'Machine Learning & IA', 'Cybersécurité (Bases)'
      ],
      en: [
        'Software Engineering', 'Distributed Systems', 'Cloud Architecture',
        'Software Design Patterns', 'DevOps & CI/CD', 'Data Structures & Algorithms',
        'Machine Learning & AI', 'Cybersecurity Fundamentals'
      ]
    }
  },
  {
    institution: 'UNIVERSITÉ IBN ZOHR',
    school: 'Faculté des Sciences Appliquées Ait Melloul',
    degree: {
      fr: 'DEUG',
      en: 'DEUG (University Diploma)'
    },
    field: {
      fr: 'Mathématiques et Informatique',
      en: 'Mathematics and Computer Science'
    },
    period: '2022 - 2024',
    location: { fr: 'Agadir , Maroc', en: 'Agadir , Morocco' },
    skills: {
      fr: [
        'Informatique de Base',
        'Bases de Données & SQL', 'Développement Web', 'Algorithmique'
      ],
      en: [
        'Computer Science',
        'Database Design & SQL', 'Web Development', 'Algorithms'
      ]
    }
  },

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

export interface Experience {
  id: string;
  role: { fr: string; en: string };
  company: string;
  type: string;
  period: { fr: string; en: string };
  location: { fr: string; en: string };
  description: { fr: string[]; en: string[] };
  github?: string;
  stack: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    id: 'EXP-01',
    role: { fr: 'Ingénieure Logicielle Stagiaire', en: 'Software Engineering Intern' },
    company: 'Linkzen',
    type: 'Stage',
    period: { fr: 'juin 2026 - août 2026 · 3 mois', en: 'June 2026 - August 2026 · 3 months' },
    location: { fr: 'Préfecture de Mohammédia, Maroc · À distance', en: 'Mohammedia Prefecture, Morocco · Remote' },
    description: {
      fr: [
        'Conception et développement d’une plateforme mobile et web de gestion destinée aux TPE et auto-entrepreneurs marocains.',
        'Développement de l’application mobile multiplateforme avec Flutter (iOS & Android) et du tableau de bord web avec React.js.',
        'Conception et développement d’API REST avec Django pour la gestion des utilisateurs, devis, factures, paiements, trésorerie et demandes de financement.',
        'Implémentation du cycle de vie complet des devis : création, numérotation automatique, génération PDF, suivi des statuts et conversion en facture.',
        'Mise en place d’un dashboard de suivi de trésorerie avec gestion des recettes/dépenses et visualisation des indicateurs financiers.',
        'Développement d’un système de scoring et de pré-éligibilité au crédit basé sur les données d’activité des utilisateurs.',
        'Mise en place de tâches asynchrones avec Celery pour automatiser les rappels de paiement, les relances de devis et les échéances fiscales.'
      ],
      en: [
        'Designed and developed a mobile and web management platform for Moroccan small businesses and freelancers.',
        'Built cross-platform mobile application using Flutter (iOS & Android) and web dashboard with React.js.',
        'Designed and developed Django REST APIs for user management, quotations, invoices, payments, cash flow, and loan requests.',
        'Implemented full quotation lifecycle: creation, auto-numbering, PDF generation, status tracking, and conversion to invoice.',
        'Set up a cash flow monitoring dashboard with income/expense tracking and financial indicators.',
        'Developed a credit scoring and pre-eligibility evaluation system based on user activity data.',
        'Implemented asynchronous tasks with Celery to automate payment reminders, quote follow-ups, and tax deadlines.'
      ]
    },
    github: 'https://github.com/fatima-aitoulahyan/tpe-manager-mobile',
    stack: ['Flutter', 'React.js', 'Django', 'Celery', 'PostgreSQL']
  },
  {
    id: 'EXP-02',
    role: { fr: 'Développeuse Full Stack — Stagiaire PFA', en: 'Full Stack Developer — PFA Intern' },
    company: 'SPELEV',
    type: 'Stage',
    period: { fr: 'juin 2026 - août 2026 · 3 mois', en: 'June 2026 - August 2026 · 3 months' },
    location: { fr: 'Préfecture de Mohammédia, Maroc · À distance', en: 'Mohammedia Prefecture, Morocco · Remote' },
    description: {
      fr: [
        'Stage de fin d’année (PFA) : Développement de SIOP, plateforme de gestion de maintenance d’ascenseurs digitalisant le cycle d’intervention.',
        'Conception et développement du module de gestion des ascenseurs (CRUD, pièces jointes, rattachement client/site).',
        'Développement du module utilisateur avec activation sécurisée par email et récupération de mot de passe.',
        'Mise en place du workflow d’évaluation d’un nouvel ascenseur (technicien → responsable maintenance).',
        'Intégration d’un module calendrier (FullCalendar) pour la planification des interventions.',
        'Travail en équipe de 6 sur une architecture monolithique modulaire, revue de code et alignement frontend/backend.'
      ],
      en: [
        'End-of-year internship (PFA): Developed SIOP, an elevator maintenance management platform digitalizing intervention workflows.',
        'Designed and developed the elevator management module (CRUD, attachments, client/site mapping).',
        'Developed the user module with secure email activation and password recovery.',
        'Implemented the evaluation workflow for new elevators (technician → maintenance manager).',
        'Integrated a calendar module (FullCalendar) for scheduling interventions.',
        'Collaborated in a team of 6 on a modular monolithic architecture, code reviews, and frontend/backend alignment.'
      ]
    },
    github: 'https://github.com/fatima-aitoulahyan/SIOP-Web',
    stack: ['Spring Boot', 'Spring Security', 'PostgreSQL', 'Angular', 'Docker', 'Dokploy']
  },
  {
    id: 'EXP-03',
    role: { fr: 'Stagiaire Full Stack Web Developer', en: 'Full Stack Web Developer Intern' },
    company: 'Pratisoft',
    type: 'Stage',
    period: { fr: 'juil. 2025 - août 2025 · 2 mois', en: 'July 2025 - August 2025 · 2 months' },
    location: { fr: 'Casablanca-Settat, Maroc · Sur site', en: 'Casablanca-Settat, Morocco · On-site' },
    description: {
      fr: [
        'Participation au développement d’un module critique de sécurisation des prescriptions médicales.',
        'Développement d’un système de détection automatisée des interactions médicamenteuses et effets indésirables.',
        'Conception et intégration d’API REST pour l’analyse des données en temps réel.',
        'Implémentation d’un mécanisme de gestion sécurisée des clés API et amélioration de l’UI/UX pour les professionnels de santé.'
      ],
      en: [
        'Contributed to the development of a critical medical prescription security module.',
        'Developed an automated detection system for drug-drug interactions and adverse effects.',
        'Designed and integrated REST APIs for real-time data analysis.',
        'Implemented secure API key management and optimized UI/UX for healthcare professionals.'
      ]
    },
    stack: ['AngularJS', 'Django', 'Python', 'REST API']
  }
];