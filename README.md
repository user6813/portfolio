# Personal Portfolio (Next.js + Tailwind CSS)

A modern, responsive personal portfolio website built with Next.js (App Router) and Tailwind CSS.

## Features
- Static data in `src/constants/` (personal info, tech stack, projects, contact)
- Full-screen (90vh) scroll-snapping sections: Hero, Tech Stack, Projects, Contact
- Sticky header with navigation anchors
- Download Resume button (downloads `public/resume.pdf`)
- Responsive, accessible, elegant design
- No backend required

## Folder Structure
```
portfolio/
├── public/
│   ├── profile.jpg         # Your profile image
│   └── resume.pdf          # Your resume file
├── src/
│   ├── app/
│   │   ├── page.tsx        # Main page with all sections
│   │   └── globals.css     # Global styles
│   └── constants/
│       ├── personalInfo.ts # Personal info data
│       ├── techStack.ts    # Tech stack data
│       ├── projects.ts     # Projects data
│       └── contact.ts      # Contact details
└── README.md
```

## Usage
1. Place your `profile.jpg` and `resume.pdf` in the `public/` folder.
2. Update the data in `src/constants/` files.
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view your site.

---
Built with ❤️ using Next.js and Tailwind CSS.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
