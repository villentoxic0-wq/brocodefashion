# brocodefashion

A premium fashion storefront built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```
3. Open in browser:
   ```bash
   http://localhost:3000
   ```

## Production build

```bash
npm run build
```

## Vercel deployment

This project includes `vercel.json` for Vercel deployment.

1. Connect the repository to Vercel.
2. Use the default build command:
   ```bash
   npm run build
   ```
3. Set the output directory to the root of the project.
4. Add a custom domain such as `brocodefashion.com` through the Vercel dashboard.

## Netlify deployment

You can also deploy on Netlify with this project.

1. Drag the repository to Netlify or connect via Git.
2. Set build command:
   ```bash
   npm run build
   ```
3. Set publish directory:
   ```bash
   .next
   ```

## Notes

- The project is configured for a dark luxury fashion brand experience.
- Update the domain in Vercel or Netlify settings after registering `brocodefashion.com`.
