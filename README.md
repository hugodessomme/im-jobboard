# im-boilerplate

An open source boilerplate to quickly set up any new project with Next.js 14.

## Features

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [T3 Env](https://env.t3.gg/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/)
- [Storybook](https://storybook.js.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Commitizen](https://commitizen.github.io/cz-cli/)

## Getting started

1. Click on "Use this template > Create a new repository"

2. Clone the repository

```bash
git clone _EDIT_PROJECT_REPOSITORY_.git
```

2. Check for updates and install them if needed

```bash
cd _EDIT_PROJECT_NAME_
npx npm-check-updates
npx npm-check-updates -u
```

3. Install dependencies

```bash
npm install
```

4. Copy the `.env.example` to `.env`

```bash
cp .env.example .env
```

5. Edit each `_EDIT_` token (e.g. `_EDIT_PROJECT_URL_`) in the `CONTRIBUTING.md`, `LICENSE.md` and `README.example.md`

6. Copy the `README.example.md` to `README.md`, delete the `README.example.md`

```bash
cp README.example.md README.md && rm README.example.md
```

7. Start the development server

```bash
npm run dev
```

See also [all available npm scripts here](https://github.com/hugodessomme/im-boilerplate/blob/main/package.json#L5)

## Project structure

```bash
.
├── .storybook              # Storybook configuration
├── .vscode                 # VSCode configuration
├── prisma                  # Prisma schema, migrations and seed scripts
├── public/                 # Public assets
├── src/
│   ├── app                 # Application
│   ├── components          # Components
│   ├── config              # Static data
│   ├── lib                 # Vendors configuration and shared code
│   ├── styles              # Styles
│   ├── types               # Type definitions
│   └── env.mjs             # Environment variables schema
├── .czrc                   # Commitizen configuration
├── .env                    # Environment variables
├── .eslintrc.cjs           # ESLint configurations
├── jest.config.mjs         # Jest configuration
├── postcss.config.cjs      # PostCSS configuration
├── prettier.config.mjs     # Prettier configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Why not...

_... any UI library (e.g. [shadcn/ui](https://ui.shadcn.com/)),  Cypress, Playwright, commitlint,_ :exploding_head:

This boilerplate is opinionated and aims to make you start any project as quickly as possible on a stable foundation.

**It is not an all-inclusive boilerplate**.

It is not possible to satisfy every need for each developer / team / company. Let's also not forget we all have different levels of experience in the industry and a boilerplate should not intimidate beginners to use it by being overly bloated from the start.

**BUT** it should not prevent you from extending it to meet the needs of your application, that is expected!

- Unsure whether or how to extend it? Just use it as is.
- Want to add [Mantine](https://mantine.dev/) as your UI library for your project? Install and use it.
- Dislike some choices made in the boilerplate? Edit files, uninstall packages and use your own.

For example, the use of `commitizen` for formatting your commit messages is optional. If you need more strictness within your team for commits, add [husky](https://typicode.github.io/husky/) and [commitlint](https://commitlint.js.org/) configurations. If you need freedom, just commit any message or use `npm run commit` to help you format it.

## To be (or not to be) implemented

- GitHub Actions?
- Docker?