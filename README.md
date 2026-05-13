# Capella Ops Landing

Landing comercial independiente para `capellaops.com`, construida con Next.js, React, Tailwind CSS y TypeScript. La app operativa en `app.capellaops.com` no se toca desde este proyecto.

## Stack

- Next.js con App Router
- React
- TypeScript
- Tailwind CSS
- Componentes propios
- Metadata SEO básica
- Responsive para desktop, tablet y mobile

## Estructura

```text
src/
  app/
    demo/
    distribuidores/
    planes/
    politica-de-privacidad/
    privacidad/
    terminos-de-servicio/
    terminos/
  components/
    forms/
    layout/
    legal/
    marketing/
    sections/
    ui/
  lib/
```

## Correr localmente

Primero crea un archivo `.env.local` en la raíz del proyecto usando `.env.example` como base:

```bash
cp .env.example .env.local
```

Completa las variables:

```env
RESEND_API_KEY=tu_api_key_de_resend
DEMO_LEADS_TO_EMAIL=jose.hugo.cordova@gmail.com
DEMO_LEADS_FROM_EMAIL=Capella Ops <no-reply@capellaops.com>
```

Después instala dependencias y levanta el entorno local:

```bash
npm install
npm run dev
```

La app quedará disponible por defecto en `http://localhost:3000`.

## Deploy en Vercel

1. Sube este proyecto a un repositorio Git.
2. En Vercel, crea un nuevo proyecto e importa el repositorio.
3. Deja la configuración por defecto para Next.js.
4. Usa `npm install` como install command y `npm run build` como build command.
5. En la sección de Environment Variables agrega `RESEND_API_KEY`, `DEMO_LEADS_TO_EMAIL` y `DEMO_LEADS_FROM_EMAIL`.
6. Publica el proyecto y apunta el dominio `capellaops.com`.

## Variables de entorno

- `RESEND_API_KEY`: API key privada usada solo desde `src/app/api/demo/route.ts`.
- `DEMO_LEADS_TO_EMAIL`: correo que recibe los leads de demo.
- `DEMO_LEADS_FROM_EMAIL`: remitente configurado para los correos salientes.

`.env.local` está ignorado por Git y no debe subirse al repositorio.

## Notas

- Los CTAs del sitio apuntan a `/demo`, `/planes`, `/distribuidores` y `https://app.capellaops.com`.
- El formulario de demo envía `POST` a `/api/demo` y usa Resend solo desde servidor.
- `/privacidad` redirige a `/politica-de-privacidad`.
- `/terminos` redirige a `/terminos-de-servicio`.
- Los textos legales son placeholders editables.
