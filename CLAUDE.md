# CLAUDE.md — DHP Dynamics

> Fichier de référence pour Claude Code. À placer à la racine du projet.

---

## 🏁 Présentation du projet

**DHP Dynamics** est une entreprise spécialisée dans la **création de karts de drift sur mesure** — des machines conçues pour glisser, pas pour aller tout droit. Le site vitrine est construit avec **Astro** et reflète une identité de marque haute performance : brute, précise, électrisante.

---

## 🎯 Stack technique

| Outil | Usage |
|---|---|
| **Astro** | Framework principal (SSG/SSR) |
| **Tailwind CSS** | Styling utilitaire |
| **TypeScript** | Typage strict partout |
| **Framer Motion / Motion One** | Animations fluides |
| **Fontes Google** | Voir charte typo ci-dessous |

```bash
# Commandes de base
npm run dev       # Serveur de développement (localhost:4321)
npm run build     # Build de production dans ./dist
npm run preview   # Prévisualiser le build
npm run astro     # CLI Astro
```

---

## 🗂️ Architecture du projet

```
dhp-dynamics/
├── public/
│   ├── fonts/            # Polices locales si besoin
│   ├── images/           # Assets statiques (logos, photos karts)
│   └── favicon.svg       # Logo SVG réduit
├── src/
│   ├── assets/           # Images traitées par Astro (optimisation auto)
│   ├── components/
│   │   ├── ui/           # Composants atomiques (Button, Badge, Card…)
│   │   ├── sections/     # Blocs de page (Hero, Features, Gallery…)
│   │   └── layout/       # Header, Footer, Nav
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro         # Page d'accueil
│   │   ├── karts/
│   │   │   ├── index.astro     # Catalogue karts
│   │   │   └── [slug].astro    # Fiche produit dynamique
│   │   ├── sur-mesure.astro    # Page commande personnalisée
│   │   ├── a-propos.astro
│   │   └── contact.astro
│   ├── content/
│   │   └── karts/              # Fichiers .md ou .json par modèle de kart
│   ├── styles/
│   │   └── global.css          # Variables CSS + reset
│   └── utils/
│       └── helpers.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── CLAUDE.md               ← tu es ici
```

---

## 🎨 Charte graphique

### Identité de marque

DHP Dynamics incarne la **précision mécanique**, la **puissance brute** et **l'adrénaline du drift**. L'esthétique est sombre, industrielle et électrique — comme un kart sous les néons d'une piste de nuit.

---

### Logo

**Concept :** Logotype typographique "DHP" avec une barre de soulignement oblique suggérant une trajectoire de drift. La lettre "D" intègre une légère rotation dynamique. Le mot "DYNAMICS" s'inscrit dessous en tracking large, ancré et autoritaire.

**Usage du logo :**
- Version principale : fond sombre, texte blanc + accent orange
- Version inversée : fond blanc, texte noir + accent orange
- Version monochrome : blanc pur ou noir pur selon contexte
- Espace de protection : toujours 1× la hauteur du "D" autour du logo
- Ne jamais déformer, recolorer en dehors de la palette, ou ajouter d'ombre portée

```
┌─────────────────────┐
│  ╔╦╗╦ ╦╔═╗          │
│   ║║╠═╣╠═╝          │
│  ═╩╝╩ ╩╩            │
│  ▔▔▔▔▔▔▔▔╲          │  ← trait oblique ~-15deg
│  DYNAMICS           │
└─────────────────────┘
```

**Fichiers logo à créer :**
- `public/logo.svg` — version principale SVG
- `public/logo-dark.svg` — version fond clair
- `public/favicon.svg` — icône seule "DHP"

---

### Palette de couleurs

```css
/* === styles/global.css === */
:root {
  /* Fonds */
  --color-void:    #080808;   /* Noir absolu — fond principal */
  --color-dark:    #111111;   /* Fond sections secondaires */
  --color-surface: #1C1C1C;   /* Cards, panels */
  --color-border:  #2A2A2A;   /* Bordures subtiles */

  /* Accents */
  --color-fire:    #FF4400;   /* Orange brûlé — CTA, highlights primaires */
  --color-ember:   #FF6B35;   /* Orange doux — hovers, gradients */
  --color-spark:   #FFB347;   /* Ambre — éléments tertiaires */

  /* Texte */
  --color-white:   #F5F5F5;   /* Titres principaux */
  --color-muted:   #999999;   /* Corps de texte secondaire */
  --color-ghost:   #555555;   /* Placeholders, labels discrets */

  /* Statuts */
  --color-success: #22C55E;
  --color-error:   #EF4444;
}
```

**Règle d'usage :**
- Le fond est toujours sombre (`void` ou `dark`)
- `--color-fire` est réservé aux **actions** (CTA, liens actifs, accents décoratifs)
- Ne jamais utiliser `fire` sur fond `ember` ou `spark`
- Les gradients vont toujours du plus sombre vers l'accent : `from-[#080808] to-[#1C1C1C]`

---

### Typographie

| Rôle | Police | Poids | Usage |
|---|---|---|---|
| **Titres H1–H2** | `Barlow Condensed` | 800 (ExtraBold Italic) | Headlines chocs, chiffres |
| **Titres H3–H4** | `Barlow Condensed` | 600 (SemiBold) | Sous-titres, noms de produits |
| **Corps de texte** | `Inter` | 400 / 500 | Paragraphes, labels, UI |
| **Technique / Specs** | `JetBrains Mono` | 400 | Données techniques, tableaux de specs |
| **Logo / Brand** | `Barlow Condensed` | 900 Italic | Uniquement pour le logotype |

```html
<!-- Dans BaseLayout.astro -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,800;1,900&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400&display=swap"
  rel="stylesheet"
/>
```

**Tailles de référence (Tailwind) :**
```
H1 : text-6xl lg:text-8xl  font-extrabold italic  (Barlow Condensed)
H2 : text-4xl lg:text-6xl  font-extrabold italic
H3 : text-2xl lg:text-3xl  font-semibold
Body: text-base             font-normal            (Inter)
Mono: text-sm               font-normal            (JetBrains Mono)
```

---

### Iconographie & visuels

- Style d'icônes : **Lucide** ou **Phosphor Icons** — stroke fins, pas de fill
- Photos : toujours à fort contraste, teintées légèrement orange/chaud via filtre CSS si nécessaire
- Pas de clipart, pas d'illustrations cartoon
- Les images de karts doivent être sur fond neutre foncé ou en action (piste, fumée)

---

### Effets & animations

```css
/* Glow signature de la marque */
.glow-fire {
  box-shadow: 0 0 20px rgba(255, 68, 0, 0.4), 0 0 60px rgba(255, 68, 0, 0.15);
}

/* Ligne décorative oblique (motif récurrent) */
.skew-line {
  transform: skewX(-8deg);
}
```

- Les CTA principaux ont un **glow orange** au hover
- Les titres de section peuvent utiliser un **underline oblique** en `--color-fire`
- Les transitions : toujours `ease-out`, durée 200–400ms
- Pas d'animation > 600ms sans raison UX justifiée
- Respecter `prefers-reduced-motion`

---

## 📐 Conventions de code

### Astro

- Toujours typer les `Props` avec une `interface` en TypeScript
- Utiliser `Astro.props` destructuré, jamais `Astro.props.xxx` direct
- Les layouts reçoivent un `title` et un `description` obligatoires
- Nommer les pages en kebab-case, les composants en PascalCase

```astro
---
// ✅ Correct
interface Props {
  title: string;
  subtitle?: string;
}
const { title, subtitle } = Astro.props;
---
```

### Tailwind

- Utiliser les **variables CSS** dans `tailwind.config.mjs` pour mapper la palette
- Pas de valeurs arbitraires `[#FF4400]` — toujours passer par `text-fire`, `bg-void` etc.
- Classes utilitaires uniquement, pas de `@apply` sauf pour les composants répétitifs

```js
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      colors: {
        void:    'var(--color-void)',
        dark:    'var(--color-dark)',
        surface: 'var(--color-surface)',
        fire:    'var(--color-fire)',
        ember:   'var(--color-ember)',
        spark:   'var(--color-spark)',
        muted:   'var(--color-muted)',
      },
      fontFamily: {
        display: ['Barlow Condensed', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
    },
  },
}
```

### Nommage

- Composants : `PascalCase.astro` (ex: `KartCard.astro`)
- Utilitaires : `camelCase.ts` (ex: `formatPrice.ts`)
- CSS classes custom : `kebab-case`
- Variables CSS : `--color-xxx`, `--font-xxx`, `--spacing-xxx`
- Types/Interfaces : `PascalCase` (ex: `interface KartModel`)

---

## 🏎️ Contenu & pages

### Pages à créer

| Page | Description |
|---|---|
| `/` | Hero animé, valeurs, modèles phares, CTA sur mesure |
| `/karts` | Catalogue filtrable par catégorie / puissance |
| `/karts/[slug]` | Fiche détaillée : specs, galerie, CTA commande |
| `/sur-mesure` | Formulaire de configuration personnalisée |
| `/a-propos` | Histoire, atelier, équipe DHP |
| `/contact` | Formulaire + coordonnées + map |

### Modèle de données kart (Content Collections)

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const kartsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name:        z.string(),          // ex: "DHP-X1 Phantom"
    slug:        z.string(),
    category:    z.enum(['entry', 'sport', 'pro', 'custom']),
    tagline:     z.string(),
    price:       z.number().optional(),
    specs: z.object({
      motorType:    z.string(),       // ex: "Électrique brushless"
      power:        z.string(),       // ex: "18 kW"
      torque:       z.string(),       // ex: "85 Nm"
      topSpeed:     z.string(),       // ex: "80 km/h"
      weight:       z.string(),       // ex: "145 kg"
      driftAngle:   z.string(),       // ex: "jusqu'à 50°"
      chassis:      z.string(),
    }),
    images:      z.array(z.string()),
    featured:    z.boolean().default(false),
    available:   z.boolean().default(true),
  }),
});

export const collections = { karts: kartsCollection };
```

---

## ✅ Checklist avant commit

- [ ] Aucune couleur hardcodée hors des variables CSS
- [ ] Toutes les images passent par `<Image />` d'Astro (optimisation)
- [ ] Les props Astro sont toutes typées
- [ ] `alt` présent sur toutes les `<img>`
- [ ] `prefers-reduced-motion` respecté
- [ ] Pas de `console.log` en production
- [ ] Les métadonnées SEO (`title`, `description`, `og:image`) sont définies par page

---

## 🔗 Ressources

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Barlow Condensed — Google Fonts](https://fonts.google.com/specimen/Barlow+Condensed)
- [Inter — Google Fonts](https://fonts.google.com/specimen/Inter)
- [Lucide Icons](https://lucide.dev)
- [Motion One](https://motion.dev)
- [Claude Code Docs](https://docs.claude.com/en/docs/claude-code/overview)
