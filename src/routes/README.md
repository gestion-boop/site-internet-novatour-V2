# NovaTour — Site vitrine

Site officiel de NovaTour, plateforme de découverte de lieux en Occitanie grâce aux visites immersives à 360°.

## Technologies

- React 19 et TypeScript
- TanStack Start / TanStack Router
- Vite
- Tailwind CSS 4
- TanStack Query

## Installation

```bash
npm install
npm run dev
```

Le site est ensuite disponible sur l’adresse indiquée par Vite.

## Vérifications avant déploiement

```bash
npm run lint
npm run build
npm run preview
```

## Domaine et référencement

Le domaine de production configuré est `https://novatour.fr`.

Fichiers SEO importants :

- `src/routes/index.tsx`
- `src/routes/offres.tsx`
- `src/routes/sitemap[.]xml.ts`
- `public/robots.txt`

L’image utilisée pour les aperçus sociaux est actuellement `/hero-occitanie.png`.

## Formulaires

Les formulaires utilisent actuellement FormSubmit et envoient les demandes à `natacha.jaillet@novavisio.fr`.
Les URL de retour sont configurées sur le domaine `novatour.fr`.

Pour une gestion totalement maîtrisée des données et du suivi des erreurs, il est recommandé de remplacer FormSubmit par une route serveur dédiée, Supabase Edge Functions, Brevo ou Resend.

## API NovaTour

La route `src/routes/api/latest-places.ts` récupère les derniers lieux publiés depuis l’API NovaTour et sert de proxy au navigateur.

## Déploiement

Le projet peut être déployé sur une plateforme compatible avec TanStack Start et Nitro. Vérifier les paramètres de build de l’hébergeur :

- commande d’installation : `npm install`
- commande de build : `npm run build`
- version Node.js recommandée : 20 ou supérieure
