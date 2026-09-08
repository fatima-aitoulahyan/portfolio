# Portfolio — AITOULAHYAN

Portfolio Angular standalone, bilingue FR/EN, thème "plan technique / schéma d'architecture".

## Installer et lancer

```bash
npm install -g @angular/cli   # si pas déjà installé
npm install
ng serve
```

Ouvre ensuite `http://localhost:4200`.

## Structure

- `src/app/content.data.ts` — **tout le texte est ici** (projets, compétences, à propos, labels FR/EN). Modifie ce fichier pour changer le contenu sans toucher au HTML/CSS.
- `src/app/app.component.html` — structure des sections (hero, à propos, projets, compétences, contact)
- `src/app/app.component.scss` — design system (couleurs, typo) dans `src/styles.scss`
- `src/index.html` — polices Google Fonts (Space Grotesk, Inter, JetBrains Mono)

## À personnaliser avant de publier

1. Dans `app.component.html`, section `#contact` : remplace `ton.email@exemple.com`, le lien GitHub et LinkedIn par les tiens.
2. Dans `content.data.ts` : ajoute/retire des projets, ajuste les textes FR/EN.
3. Ajoute une section "Expérience" (Pratisoft) si tu veux la détailler — la structure est prête à dupliquer depuis `.about`.
4. Déploiement gratuit conseillé : Vercel ou Netlify (connecte le repo GitHub, build command `ng build`, output `dist/portfolio/browser`).

## Design

Palette "plan technique" : fond bleu nuit (#0f1b2d), lignes bleu-gris (#3c5875), accent ambre signal (#e8a33d). Les projets sont présentés comme des fiches techniques (spec-cards) avec ID de module, statut, et défi technique — cohérent avec ton travail réel en UML/BPMN.
