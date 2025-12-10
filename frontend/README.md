# **Aura research (frontend)**

A modern web application to create and log in users built with **Next.js**, **Tailwind CSS**,
**Zod**, and **Jest**.\
This project follows best practices from the latest versions of the
framework and tooling.

------------------------------------------------------------------------

## 🚀 **Tech Stack**

### **Next.js**

Next.js is chosen as the main framework because it offers:

-   **Full-stack capabilities** (Server Components, Server Actions,
    Route Handlers).
-   **App Router** with file-system based routing.
-   **Optimized performance**: automatic code-splitting, caching, RSCs.
-   **Built-in SEO tools**: Metadata API, dynamic OG images.
-   **Great developer experience**: fast refresh, zero-config tooling.

### **Tailwind CSS**

Tailwind was selected for styling due to:

-   **Utility-first workflow** → build modern UIs faster without writing
    custom CSS.
-   **Consistency** in spacing, colors, typography, etc.
-   **Fully customizable** design system.
-   **Tiny production builds** thanks to purge/tree-shaking.

### **Zod**

Zod is used for validation because it provides:

-   **Runtime validation + TypeScript inference** (schema defines both
    types and validations).
-   **Safe form handling** in Server Actions and API routes.
-   **Clean error management** with detailed messages.
-   **Composable schemas** for complex data structures.

### **Jest**

Jest powers the unit tests:

-   **Fast, reliable test runner**.
-   **Mocks, spies, and snapshots** included out of the box.
-   **Great TypeScript support**.
-   **Easy integration** with Next.js projects.

------------------------------------------------------------------------

## 📁 **Project Structure (Simplified)**

``` bash
/
├── actions/            # Server actions for auth and main
├── app/                # Next.js App Router
│   └── (auth)/         # Login and Register screens
│   └── (main)/         # Dashboard and profile screens
├── components/         # UI Components
├── lib/                # Utilities, helpers, validators
│   └── validation/     # Zod schemas
├── services/           # Logic for API calls
├── tests/              # Jest unit tests
├── jest.config.js      # Jest config
└── package.json
```

------------------------------------------------------------------------

## 🛠️ **Prerequisites**

-   **Node.js** 18+
-   **pnpm** (recommended) or npm/yarn

------------------------------------------------------------------------

## 📦 **Installation**

``` bash
pnpm install
```

or

``` bash
npm install
```

------------------------------------------------------------------------

## 🏃 **Run the Development Server**

``` bash
pnpm dev
```

or

``` bash
npm run dev
```

Then open:

    http://localhost:3000

------------------------------------------------------------------------

## 🏗️ **Build for Production**

``` bash
pnpm build
```

To preview the production build:

``` bash
pnpm start
```

------------------------------------------------------------------------

## ✔️ **Running Tests (Jest)**

Run all unit tests:

``` bash
pnpm test
```

Run in watch mode:

``` bash
pnpm test:watch
```

Run tests with coverage:

``` bash
pnpm test:coverage
```

Example `package.json` scripts:

``` json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

## ✨ **Why This Stack?**

This project represents a modern, scalable, and maintainable frontend
architecture:

-   **Next.js** handles routing, rendering, and server logic in one
    unified structure.
-   **Tailwind CSS** ensures a clean and consistent design without
    writing CSS files.
-   **Zod** guarantees that all data entering the system is validated
    and typed.
-   **Jest** keeps the codebase reliable through automated testing.
