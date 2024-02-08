## Overview
This is the Protofy Next.js starter project. It can be used as a starting point for new web projects.  
It includes the following features/tools:
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://https://vitest.dev/)
- [msw](https://mswjs.io/)
- [Vercel CLI](https://vercel.com/docs/cli)

## Project structure
The recommended structure for the project is as follows:
- `src`: The main source folder
  - `assets`: Images, fonts, etc.
  - `components`: Reusable components
    - `ComponentName`: Component folder
      - `ComponentName.tsx`: Component file
      - `ComponentName.stories.tsx`: Storybook stories
      - `ComponentName.test.tsx`: Component tests
  - `const`: Shared constants
  - `hooks`: Custom hooks
  - `mocks`: API mocks
    - `handlers.ts`: Mock API handlers
  - `types`: TypeScript types
  - `utils`: Utility functions

## Setup
Some features might work best with VSCode (e.g. automated linting), so it is recommended to use it as the main code editor.  
Contributions are welcome, so please create a PR if you want to add features for your favorite editor. 🙂

Here's how to get started:
1. Clone the repository
2. Run `yarn` to install the dependencies
3. Run `yarn dev` to start the development server

## Environment variables
Next.js automatically picks up environment variables from `.env.local` and `.env`.  
If your project is deployed to Vercel, you can set environment variables in the Vercel project dashboard. To use those environment variables locally, you can run `yarn env:pull` to sync them to your local `.env.local` file. You might need to link your project first using `yarn vercel link`.
**Warning**: Pulling the env variables will overwrite any changes you made to your local `.env.local` file.

## Linting
The project uses ESLint and Prettier to enforce code style. You can run `yarn lint` to check for linting errors and `yarn lint:fix` to fix them. If you use VSCode, fixing automatically happens on save. This is configured in [.vscode/settings.json](.vscode/settings.json).  
The project also includes a pre-commit hook that runs the linter via `lint-staged` before committing. This is configured in [.husky/pre-commit](.husky/pre-commit).

## Testing
The project uses Vitest for testing. You can run `yarn test` to run the tests or `yarn test:watch` to run the tests in watch mode.  
The project also includes msw to mock API requests. You can find an example for mocks in [src/mocks/handlers.ts](src/mocks/handlers.ts) and for tests using those mocks in [src/mocks/handlers.test.ts](src/mocks/handlers.test.ts).  
The mocks are initialized in [vitest-setup.ts](./vitest-setup.ts).

## Storybook
The project includes Storybook for component development. You can run `yarn storybook` to start the Storybook server. 

### Server components
Support for Next.js server components is currently experimental.  
Add a `<Suspense>` component around your Story in the decorator like this to use a server component:
```tsx
decorators: [
  Story => (
    <Suspense>
      <Story />
    </Suspense>
  ),
],
```

## Deployment
The easiest way to deploy the project is to use Vercel. The Vercel CLI is already included in the project in case you want to use features like syncing environment variables.  
To deploy using Vercel, you need to create a new Vercel project and link it to the GitHub repository using the Vercel website.  
This will automagically create a new deployment whenever you push to the GitHub repository. ✨
