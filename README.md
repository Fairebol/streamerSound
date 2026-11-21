# Sonidos

lo necesito por que no puedo tener el streamlabs desktop y esta es mi unica opcion de tener todos los audios que quiera XD

Sitio estático en Astro. Cada archivo de `public/sounds/` aparece solo en la lista.

## Uso
```bash
npm install
npm run dev      # desarrollo
npm run build    # genera /dist
```

1. Poné tus `.mp3` / `.wav` en `public/sounds/` (minúsculas, guiones, sin espacios).
2. Cambiá `site` en `astro.config.mjs` por tu dominio.
3. Deploy de `/dist` en Cloudflare Pages, Netlify, etc.

## Endpoints
- `GET /api/sounds.json` → lista con `id`, `name`, `format`, `url`
- `GET /sounds/<archivo>` → link directo al audio
