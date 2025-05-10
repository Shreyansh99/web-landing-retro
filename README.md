# Web Agency Landing Page

A modern, responsive web agency landing page built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Features

- Responsive design that looks great on all devices
- Modern UI with Tailwind CSS
- TypeScript for type safety
- Authentication with Supabase
- SEO optimized
- Fast performance

## Pages

- Home
- About
- Services
- Contact
- Login/Signup

## Getting Started

### Prerequisites

- Node.js 14.6.0 or newer
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/web-landing.git
cd web-landing
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
   - Copy `.env.local.example` to `.env.local`
   - Add your Supabase URL and anon key

```bash
cp .env.local.example .env.local
```

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Supabase Setup

1. Create a new project on [Supabase](https://supabase.com)
2. Get your project URL and anon key from the project settings
3. Add them to your `.env.local` file

## Deployment

This project can be easily deployed to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/yourusername/web-landing)

## Built With

- [Next.js](https://nextjs.org/) - The React framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Supabase](https://supabase.com/) - The open source Firebase alternative

## License

This project is licensed under the MIT License - see the LICENSE file for details.
