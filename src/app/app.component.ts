import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS, SKILLS, Certification, UI_TEXT, Lang, CERTIFICATIONS } from './content.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  lang = signal<Lang>('fr');
  projects = PROJECTS;
  skills = SKILLS;
  certifications: Certification[] = CERTIFICATIONS;

  // Gestion de la modale des projets
  selectedProject: any = null;

  // Gestion de la modale d'agrandissement d'image (lightbox)
  selectedImage: string | null = null;

  openProjectDetails(project: any) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProjectDetails() {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }

  // Navigation du carrousel d'images dans les cartes
  nextImage(project: any, event: Event) {
    event.stopPropagation(); // Évite d'ouvrir la modale ou la fiche détaillée
    if (project.images && project.images.length > 0) {
      project.currentImageIndex = ((project.currentImageIndex || 0) + 1) % project.images.length;
    }
  }

  prevImage(project: any, event: Event) {
    event.stopPropagation(); // Évite d'ouvrir la modale ou la fiche détaillée
    if (project.images && project.images.length > 0) {
      project.currentImageIndex = ((project.currentImageIndex || 0) - 1 + project.images.length) % project.images.length;
    }
  }

  text = computed(() => UI_TEXT[this.lang()]);

  toggleLang() {
    this.lang.set(this.lang() === 'fr' ? 'en' : 'fr');
  }

  t(field: { fr: string; en: string }): string {
    return field[this.lang()];
  }

  openImageModal(imageUrl: string) {
    this.selectedImage = imageUrl;
  }

  closeImageModal() {
    this.selectedImage = null;
  }
}