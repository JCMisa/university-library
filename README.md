This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

Image Kit docs:

- login to your imagekit account and get the endpoint url, public key, and private key
- install the package: npm install imagekitio-next
- go to fileUpload page and import the necessary package

Drizzle docs:

- to generate migration folder, run:
  npx drizzle-kit generate
- to run migration, run:
  npx drizzle-kit migrate
- to simplify, go to package.json and add scripts that run same commands

Auth JS docs:

- to install authjs, run:
  npm install next-auth@beta bcryptjs
- run this to generate mandatory env variable for authjs:
  npx auth secret
- crete new auth.ts file in the root of our directory
- inside api folder create auth folder and then inside create [...nextauth] folder and inside create route.ts
- create file named middlware.ts in the root of directory
