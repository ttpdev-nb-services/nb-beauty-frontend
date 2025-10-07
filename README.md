# Project Overview

## Introduce

Frontend project for Bich Ngoc Spa working in the beauty care field

Goals:

- Build a modern, intuitive, and user-friendly UI.
- Connect to the backend API to display and process data.
- Ensure smooth experience across desktop and mobile.

---

## Main Features

- **Authentication**: Login/SignUp, user roles & permissions.
- **Dashboard**: Overview page with key metrics.
- **Core Modules**: [Describe your modules, e.g. Products, Orders, Users...]
- **UI Components**: Reusable components (button, modal, table...).
- **Theme & Layout**: Manage colors, fonts, responsive layouts.

---

## Installation & Setup

### 1. Requirements

- Node.js >= 18
- pnpm >= 9

### 2. Clone repository

```bash
git clone https://gitlab.com/nb-services/nb-beauty-frontend.git
cd nb-beauty-frontend
```

### 3. Steps

1. Pnpm install (Install dependencies)
2. Pnpm run (Run app in development)
3. Pnpm build (Build app for production)

---

## Tech Stack

- **Framework**: NextJs v15
- **Language**: TypeScript
- **Style CSS**: TailwindCSS v4
- **UI Library**: ShadCn UI
- **Lint & Format**: ESLint + Prettier
- **Package Manager**: PNPM

---

## Project Structure

```
src/
├── app/                         # Define routes, pages
│   ├── (dashboard)/             # Routes and pages for Admin
│   ├── (public)/                # Routes and pages for public
│   ├── (account)/               # Routes and pages for account
│   ├── layout.tsx               # Main app layout
│   └── seo.config.ts            # SEO config for pages
│
├── components/                  # Reusable global UI components
│   ├── ui/                      # ShadCn UI components (Button, Input, Modal, ...)
│   ├── common/                  # Basic components (Button, Input, Modal, ...)
│   ├── layout/                  # Global layouts (Header, Footer, Sidebar, Navbar)
│   └── feedback/                # Feedback components (Toast, Alert, Spinner, ...)
│
├── modules/                     # Main modules, divided by domain
│   ├── auth/                    # Authentication module
│   │   ├── services             # Place class service to feature can instant
│   │   ├── types                # Defind type for request, response
│   │   ├── schema               # Defind default values and validate by thirst part-ty library
│   ├── user/                    # User module
│   ├── product/                 # Product module
│   └── ...                      # Other modules
│
├── features/                    # Placed UI components, pages, form, create instant of service in modules
│   ├── auth/                    # Authentication module
│   │   ├── components/          # Auth-specific components (LoginForm, RegisterForm, ...)
│   │   ├── pages/               # Auth-specific pages
│   │   └── hooks/               # Hooks dedicated to auth
│   ├── user/                    # User module
│   ├── product/                 # Product module
│   └── ...                      # Other modules
│
├── hooks/                       # Global custom hooks
│   ├── useTheme.ts              # Theme switch hook
│   ├── useMediaQuery.ts         # Responsive hook
│   └── useParams.ts             # Params handling hook
│
├── services/                    # Global services
│   ├── apiClient.ts             # Axios/fetch client initialization
│   ├── storage.service.ts       # LocalStorage / SessionStorage helpers
│   ├── notification.service.ts  # Global toast/notification service
│   └── ...
│
├── contexts/                    # Defind context and type to provider using
├── providers/                   # Defind provider
├── styles/                      # Global styles
│   ├── globals.css              # Global CSS
│   ├── tailwind.css             # Tailwind setup
│   └── theme.ts                 # Theme configuration
│
├── configs/                     # App-wide configuration
│   ├── react-query.config.ts    # React Query Client config
│   └── env.config.ts            # Environment variables config
│
├── utils/                       # Helper functions
│   ├── format.ts                # Format functions (date, currency, ...)
│   ├── cn.ts                    # Merge classNames
│   ├── env.ts                   # Get Env functions
│   └── validator.ts             # Validation functions
│
├── langs/                       # Internationalization (i18n)
│   ├── en/                      # English translations
│   │   └── common.json
│   ├── vi/                      # Vietnamese translations
│   │   └── common.json
│   └── index.ts                 # i18n initialization
│
└── interfaces/                  # TypeScript types/interfaces
    ├── auth.interface.ts         # Auth-related types
    ├── user.interface.ts         # User-related types
    ├── product.interface.ts      # Product-related types
    └── api.interface.ts          # Common API request/response types

```

---

## Contributing

1. Fork the repo
2. Create a new branch: feature/your-feature-name
3. Commit & push changes
4. Open a Pull Request

## Get Started

### Fields for form

Project using react hook form with style and pattern shadcn UI

- Built and give some custom field was wrapper into useFormContext
- Like: Select, MultiSelect, Text, Number, Price, Radio, Checkbox... place in folder /components/react-hook-forns/fields
