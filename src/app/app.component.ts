import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // 1. Importer ici
import {
  TRANSLATIONS,
  PROJECTS,
  SKILL_GROUPS,
  EDUCATION_LIST,
  CERTIFICATIONS,
  Project,
  EXPERIENCES
} from './content.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentLang: 'en' | 'fr' = 'en';
  mobileMenuOpen = false;
  selectedProject: Project | null = null;
  lightboxImage: string | null = null;

  translations = TRANSLATIONS;
  projects = PROJECTS;
  skillGroups = SKILL_GROUPS;
  educationList = EDUCATION_LIST;
  certifications = CERTIFICATIONS;
  experiences = EXPERIENCES;

  constructor(private sanitizer: DomSanitizer) {}
  scrollToSection(id: string): void {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      this.mobileMenuOpen = false;
    }
  }


  // Génération automatique et dynamique de TOUTES vos compétences avec icônes et couleurs par domaine
  get techStackList() {
    const getDetails = (skill: string, groupTitle: string) => {
      let icon = '';
      let iconUrl = '';
      let bgColor = 'rgba(99, 102, 241, 0.1)';

      const logos: { [key: string]: string } = {
        // Langages & Web
        'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        'Spring Security': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        'AngularJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
        'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
        'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',

        // Mobile & Embarqué
        'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
        'Android (Java/Kotlin)': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',

        // IA & Data
        'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
        'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
        'OpenCV': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
        'YOLO': 'https://raw.githubusercontent.com/ultralytics/assets/main/logo/Ultralytics_Logomark_Original.svg', // Exemple ou icône personnalisée

        // Bases de données & DevOps
        'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
        'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
        'SQLite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg'
      };
      if (logos[skill]) {
        iconUrl = logos[skill];
      }

      return { icon, iconUrl, bgColor };
    };

    const list: { name: string; category: string; icon: string; iconUrl: string; bgColor: string }[] = [];

    this.skillGroups.forEach(group => {
      const categoryName = group.title[this.currentLang];
      group.skills.forEach(skill => {
        const details = getDetails(skill, group.title.en);
        list.push({
          name: skill,
          category: categoryName,
          icon: details.icon,
          iconUrl: details.iconUrl,
          bgColor: details.bgColor
        });
      });
    });

    return list;
  }  // Première moitié des compétences pour la ligne 1
  get row1List() {
    const all = this.techStackList;
    return all.slice(0, Math.ceil(all.length / 2));
  }

  // Seconde moitié des compétences pour la ligne 2
  get row2List() {
    const all = this.techStackList;
    return all.slice(Math.ceil(all.length / 2));
  }

  // 3. Ajouter cette méthode pour sécuriser l'URL de la vidéo
  getSafeVideoUrl(url: string | undefined): SafeResourceUrl {
    if (!url) return '';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  get t() {
    return this.translations[this.currentLang];
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'fr' : 'en';
  }

  openModal(project: Project) {
    this.selectedProject = project;
  }

  closeModal() {
    this.selectedProject = null;
  }

  openLightbox(imgUrl: string) {
    this.lightboxImage = imgUrl;
  }

  closeLightbox() {
    this.lightboxImage = null;
  }

  nextImage(project: Project) {
    if (project.images && project.images.length > 1) {
      const currentIndex = project.activeImageIndex ?? 0;
      project.activeImageIndex = (currentIndex + 1) % project.images.length;
    }
  }

  prevImage(project: Project) {
    if (project.images && project.images.length > 1) {
      const currentIndex = project.activeImageIndex ?? 0;
      project.activeImageIndex = (currentIndex - 1 + project.images.length) % project.images.length;
    }
  }
}