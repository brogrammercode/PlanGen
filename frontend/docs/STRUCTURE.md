# SAAS Plangen - Production Folder Structure

```
saas-plangen/
├── .env.example
├── .env.local
├── .env.production
├── .env.development
├── .gitignore
├── .eslintrc.json
├── .prettierrc
├── .prettierignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── vitest.config.ts
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── CHANGELOG.md
├── LICENSE
├── docker-compose.yml
├── Dockerfile
├── nginx.conf
│
├── public/
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
│   └── icons/
│       ├── apple-touch-icon.png
│       └── android-chrome-192x192.png
│
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── vite-env.d.ts
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.test.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Input/
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── Input.test.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Modal/
│   │   │   │   ├── Modal.tsx
│   │   │   │   ├── Modal.test.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Card/
│   │   │   │   ├── Card.tsx
│   │   │   │   ├── Card.test.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Dropdown/
│   │   │   │   ├── Dropdown.tsx
│   │   │   │   ├── Dropdown.test.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Tooltip/
│   │   │   │   ├── Tooltip.tsx
│   │   │   │   ├── Tooltip.test.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Badge/
│   │   │   │   ├── Badge.tsx
│   │   │   │   ├── Badge.test.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Avatar/
│   │   │   │   ├── Avatar.tsx
│   │   │   │   ├── Avatar.test.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Skeleton/
│   │   │   │   ├── Skeleton.tsx
│   │   │   │   ├── Skeleton.test.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Spinner/
│   │   │   │   ├── Spinner.tsx
│   │   │   │   ├── Spinner.test.tsx
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── common/
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Header.test.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Sidebar/
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   ├── Sidebar.test.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── Footer.test.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Layout/
│   │   │   │   ├── Layout.tsx
│   │   │   │   ├── Layout.test.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Navigation/
│   │   │   │   ├── Navigation.tsx
│   │   │   │   ├── Navigation.test.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Breadcrumb/
│   │   │   │   ├── Breadcrumb.tsx
│   │   │   │   ├── Breadcrumb.test.tsx
│   │   │   │   └── index.ts
│   │   │   ├── ErrorBoundary/
│   │   │   │   ├── ErrorBoundary.tsx
│   │   │   │   ├── ErrorBoundary.test.tsx
│   │   │   │   └── index.ts
│   │   │   ├── ProtectedRoute/
│   │   │   │   ├── ProtectedRoute.tsx
│   │   │   │   ├── ProtectedRoute.test.tsx
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   │   ├── components/
│   │   │   │   │   ├── LoginForm/
│   │   │   │   │   │   ├── LoginForm.tsx
│   │   │   │   │   │   ├── LoginForm.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── RegisterForm/
│   │   │   │   │   │   ├── RegisterForm.tsx
│   │   │   │   │   │   ├── RegisterForm.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── ForgotPasswordForm/
│   │   │   │   │   │   ├── ForgotPasswordForm.tsx
│   │   │   │   │   │   ├── ForgotPasswordForm.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   └── index.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── dashboard/
│   │   │   │   ├── components/
│   │   │   │   │   ├── DashboardStats/
│   │   │   │   │   │   ├── DashboardStats.tsx
│   │   │   │   │   │   ├── DashboardStats.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── RecentTasks/
│   │   │   │   │   │   ├── RecentTasks.tsx
│   │   │   │   │   │   ├── RecentTasks.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── ProjectOverview/
│   │   │   │   │   │   ├── ProjectOverview.tsx
│   │   │   │   │   │   ├── ProjectOverview.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   └── index.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── tasks/
│   │   │   │   ├── components/
│   │   │   │   │   ├── TaskList/
│   │   │   │   │   │   ├── TaskList.tsx
│   │   │   │   │   │   ├── TaskList.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── TaskCard/
│   │   │   │   │   │   ├── TaskCard.tsx
│   │   │   │   │   │   ├── TaskCard.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── TaskForm/
│   │   │   │   │   │   ├── TaskForm.tsx
│   │   │   │   │   │   ├── TaskForm.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── TaskBoard/
│   │   │   │   │   │   ├── TaskBoard.tsx
│   │   │   │   │   │   ├── TaskBoard.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── TaskFilters/
│   │   │   │   │   │   ├── TaskFilters.tsx
│   │   │   │   │   │   ├── TaskFilters.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── TaskDetails/
│   │   │   │   │   │   ├── TaskDetails.tsx
│   │   │   │   │   │   ├── TaskDetails.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   └── index.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── roadmaps/
│   │   │   │   ├── components/
│   │   │   │   │   ├── RoadmapList/
│   │   │   │   │   │   ├── RoadmapList.tsx
│   │   │   │   │   │   ├── RoadmapList.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── RoadmapView/
│   │   │   │   │   │   ├── RoadmapView.tsx
│   │   │   │   │   │   ├── RoadmapView.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── RoadmapForm/
│   │   │   │   │   │   ├── RoadmapForm.tsx
│   │   │   │   │   │   ├── RoadmapForm.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── MilestoneCard/
│   │   │   │   │   │   ├── MilestoneCard.tsx
│   │   │   │   │   │   ├── MilestoneCard.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── TimelineView/
│   │   │   │   │   │   ├── TimelineView.tsx
│   │   │   │   │   │   ├── TimelineView.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   └── index.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── projects/
│   │   │   │   ├── components/
│   │   │   │   │   ├── ProjectList/
│   │   │   │   │   │   ├── ProjectList.tsx
│   │   │   │   │   │   ├── ProjectList.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── ProjectCard/
│   │   │   │   │   │   ├── ProjectCard.tsx
│   │   │   │   │   │   ├── ProjectCard.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── ProjectForm/
│   │   │   │   │   │   ├── ProjectForm.tsx
│   │   │   │   │   │   ├── ProjectForm.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── ProjectSettings/
│   │   │   │   │   │   ├── ProjectSettings.tsx
│   │   │   │   │   │   ├── ProjectSettings.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   └── index.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── teams/
│   │   │   │   ├── components/
│   │   │   │   │   ├── TeamList/
│   │   │   │   │   │   ├── TeamList.tsx
│   │   │   │   │   │   ├── TeamList.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── TeamCard/
│   │   │   │   │   │   ├── TeamCard.tsx
│   │   │   │   │   │   ├── TeamCard.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── TeamForm/
│   │   │   │   │   │   ├── TeamForm.tsx
│   │   │   │   │   │   ├── TeamForm.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── MemberList/
│   │   │   │   │   │   ├── MemberList.tsx
│   │   │   │   │   │   ├── MemberList.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   └── index.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── settings/
│   │   │   │   ├── components/
│   │   │   │   │   ├── ProfileSettings/
│   │   │   │   │   │   ├── ProfileSettings.tsx
│   │   │   │   │   │   ├── ProfileSettings.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── AccountSettings/
│   │   │   │   │   │   ├── AccountSettings.tsx
│   │   │   │   │   │   ├── AccountSettings.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── NotificationSettings/
│   │   │   │   │   │   ├── NotificationSettings.tsx
│   │   │   │   │   │   ├── NotificationSettings.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── BillingSettings/
│   │   │   │   │   │   ├── BillingSettings.tsx
│   │   │   │   │   │   ├── BillingSettings.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   └── index.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   └── index.ts
│   │   │
│   │   └── index.ts
│   │
│   ├── pages/
│   │   ├── HomePage/
│   │   │   ├── HomePage.tsx
│   │   │   ├── HomePage.test.tsx
│   │   │   └── index.ts
│   │   ├── LoginPage/
│   │   │   ├── LoginPage.tsx
│   │   │   ├── LoginPage.test.tsx
│   │   │   └── index.ts
│   │   ├── RegisterPage/
│   │   │   ├── RegisterPage.tsx
│   │   │   ├── RegisterPage.test.tsx
│   │   │   └── index.ts
│   │   ├── DashboardPage/
│   │   │   ├── DashboardPage.tsx
│   │   │   ├── DashboardPage.test.tsx
│   │   │   └── index.ts
│   │   ├── TasksPage/
│   │   │   ├── TasksPage.tsx
│   │   │   ├── TasksPage.test.tsx
│   │   │   └── index.ts
│   │   ├── RoadmapsPage/
│   │   │   ├── RoadmapsPage.tsx
│   │   │   ├── RoadmapsPage.test.tsx
│   │   │   └── index.ts
│   │   ├── ProjectsPage/
│   │   │   ├── ProjectsPage.tsx
│   │   │   ├── ProjectsPage.test.tsx
│   │   │   └── index.ts
│   │   ├── TeamsPage/
│   │   │   ├── TeamsPage.tsx
│   │   │   ├── TeamsPage.test.tsx
│   │   │   └── index.ts
│   │   ├── SettingsPage/
│   │   │   ├── SettingsPage.tsx
│   │   │   ├── SettingsPage.test.tsx
│   │   │   └── index.ts
│   │   ├── NotFoundPage/
│   │   │   ├── NotFoundPage.tsx
│   │   │   ├── NotFoundPage.test.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   │
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useLocalStorage.ts
│   │   ├── useDebounce.ts
│   │   ├── usePagination.ts
│   │   ├── useApi.ts
│   │   ├── useTasks.ts
│   │   ├── useRoadmaps.ts
│   │   ├── useProjects.ts
│   │   ├── useTeams.ts
│   │   ├── useNotifications.ts
│   │   └── index.ts
│   │
│   ├── services/
│   │   ├── api/
│   │   │   ├── client.ts
│   │   │   ├── endpoints.ts
│   │   │   ├── interceptors.ts
│   │   │   ├── types.ts
│   │   │   └── index.ts
│   │   ├── auth/
│   │   │   ├── authService.ts
│   │   │   ├── tokenService.ts
│   │   │   └── index.ts
│   │   ├── tasks/
│   │   │   ├── tasksService.ts
│   │   │   └── index.ts
│   │   ├── roadmaps/
│   │   │   ├── roadmapsService.ts
│   │   │   └── index.ts
│   │   ├── projects/
│   │   │   ├── projectsService.ts
│   │   │   └── index.ts
│   │   ├── teams/
│   │   │   ├── teamsService.ts
│   │   │   └── index.ts
│   │   ├── notifications/
│   │   │   ├── notificationsService.ts
│   │   │   └── index.ts
│   │   └── index.ts
│   │
│   ├── store/
│   │   ├── index.ts
│   │   ├── rootReducer.ts
│   │   ├── store.ts
│   │   ├── slices/
│   │   │   ├── authSlice.ts
│   │   │   ├── tasksSlice.ts
│   │   │   ├── roadmapsSlice.ts
│   │   │   ├── projectsSlice.ts
│   │   │   ├── teamsSlice.ts
│   │   │   ├── uiSlice.ts
│   │   │   └── index.ts
│   │   ├── middleware/
│   │   │   ├── logger.ts
│   │   │   ├── errorHandler.ts
│   │   │   └── index.ts
│   │   └── selectors/
│   │       ├── authSelectors.ts
│   │       ├── tasksSelectors.ts
│   │       ├── roadmapsSelectors.ts
│   │       ├── projectsSelectors.ts
│   │       ├── teamsSelectors.ts
│   │       └── index.ts
│   │
│   ├── types/
│   │   ├── api.ts
│   │   ├── auth.ts
│   │   ├── task.ts
│   │   ├── roadmap.ts
│   │   ├── project.ts
│   │   ├── team.ts
│   │   ├── user.ts
│   │   ├── common.ts
│   │   └── index.ts
│   │
│   ├── utils/
│   │   ├── constants/
│   │   │   ├── api.ts
│   │   │   ├── routes.ts
│   │   │   ├── config.ts
│   │   │   └── index.ts
│   │   ├── helpers/
│   │   │   ├── dateUtils.ts
│   │   │   ├── formatters.ts
│   │   │   ├── validators.ts
│   │   │   ├── storage.ts
│   │   │   ├── auth.ts
│   │   │   └── index.ts
│   │   ├── schemas/
│   │   │   ├── authSchemas.ts
│   │   │   ├── taskSchemas.ts
│   │   │   ├── roadmapSchemas.ts
│   │   │   ├── projectSchemas.ts
│   │   │   └── index.ts
│   │   └── index.ts
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── variables.css
│   │   ├── components.css
│   │   ├── utilities.css
│   │   └── themes/
│   │       ├── light.css
│   │       ├── dark.css
│   │       └── index.ts
│   │
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logos/
│   │   │   │   ├── logo.svg
│   │   │   │   ├── logo-dark.svg
│   │   │   │   └── favicon.ico
│   │   │   ├── illustrations/
│   │   │   │   ├── empty-state.svg
│   │   │   │   ├── error-404.svg
│   │   │   │   └── welcome.svg
│   │   │   └── icons/
│   │   │       ├── task.svg
│   │   │       ├── roadmap.svg
│   │   │       ├── project.svg
│   │   │       └── team.svg
│   │   └── fonts/
│   │       ├── inter/
│   │       │   ├── Inter-Regular.woff2
│   │       │   ├── Inter-Medium.woff2
│   │       │   └── Inter-Bold.woff2
│   │       └── index.css
│   │
│   └── config/
│       ├── env.ts
│       ├── routes.ts
│       ├── api.ts
│       ├── theme.ts
│       └── index.ts
│
├── tests/
│   ├── __mocks__/
│   │   ├── fileMock.js
│   │   └── styleMock.js
│   ├── setup.ts
│   ├── utils/
│   │   ├── testUtils.tsx
│   │   ├── mockData.ts
│   │   └── index.ts
│   ├── fixtures/
│   │   ├── tasks.json
│   │   ├── roadmaps.json
│   │   ├── projects.json
│   │   └── users.json
│   └── e2e/
│       ├── auth.spec.ts
│       ├── tasks.spec.ts
│       ├── roadmaps.spec.ts
│       └── projects.spec.ts
│
├── docs/
│   ├── API.md
│   ├── CONTRIBUTING.md
│   ├── DEPLOYMENT.md
│   ├── DEVELOPMENT.md
│   └── ARCHITECTURE.md
│
├── scripts/
│   ├── build.sh
│   ├── deploy.sh
│   ├── test.sh
│   └── setup.sh
│
└── .github/
    ├── workflows/
    │   ├── ci.yml
    │   ├── cd.yml
    │   └── quality-check.yml
    ├── ISSUE_TEMPLATE/
    │   ├── bug_report.md
    │   └── feature_request.md
    └── pull_request_template.md
```

## Key Configuration Files Content:

### package.json
```json
{
  "name": "saas-plangen",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.1",
    "@reduxjs/toolkit": "^2.0.1",
    "react-redux": "^9.0.4",
    "axios": "^1.6.2",
    "react-hook-form": "^7.48.2",
    "@hookform/resolvers": "^3.3.2",
    "zod": "^3.22.4",
    "date-fns": "^3.0.6",
    "react-hot-toast": "^2.4.1",
    "framer-motion": "^10.16.16",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@typescript-eslint/eslint-plugin": "^6.14.0",
    "@typescript-eslint/parser": "^6.14.0",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.55.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "postcss": "^8.4.32",
    "prettier": "^3.1.1",
    "tailwindcss": "^3.3.6",
    "typescript": "^5.2.2",
    "vite": "^5.0.8",
    "vitest": "^1.0.4",
    "@testing-library/react": "^14.1.2",
    "@testing-library/jest-dom": "^6.1.5",
    "@testing-library/user-event": "^14.5.1"
  }
}
```

### vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@services': resolve(__dirname, 'src/services'),
      '@store': resolve(__dirname, 'src/store'),
      '@types': resolve(__dirname, 'src/types'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@config': resolve(__dirname, 'src/config'),
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: process.env.NODE_ENV === 'development',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          state: ['@reduxjs/toolkit', 'react-redux'],
          ui: ['framer-motion', 'lucide-react']
        }
      }
    }
  },
  server: {
    port: 3000,
    host: true
  },
  preview: {
    port: 4173
  }
})
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@pages/*": ["src/pages/*"],
      "@hooks/*": ["src/hooks/*"],
      "@services/*": ["src/services/*"],
      "@store/*": ["src/store/*"],
      "@types/*": ["src/types/*"],
      "@utils/*": ["src/utils/*"],
      "@assets/*": ["src/assets/*"],
      "@config/*": ["src/config/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist", "tests/e2e"]
}
```

### .eslintrc.json
```json
{
  "root": true,
  "env": { "browser": true, "es2020": true },
  "extends": [
    "eslint:recommended",
    "@typescript-eslint/recommended",
    "eslint-plugin-react-hooks/recommended"
  ],
  "ignorePatterns": ["dist", ".eslintrc.cjs"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": ["./tsconfig.json", "./tsconfig.node.json"]
  },
  "plugins": ["react-refresh"],
  "rules": {
    "react-refresh/only-export-components": [
      "warn",
      { "allowConstantExport": true }
    ],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "prefer-const": "error",
    "no-console": "warn"
  }
}
```

### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          500: '#6b7280',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
```

### .env.example
```bash
# API Configuration
VITE_API_BASE_URL=https://api.plangen.com
VITE_API_VERSION=v1
VITE_API_TIMEOUT=10000

# Authentication
VITE_JWT_SECRET_KEY=your-jwt-secret-key
VITE_AUTH_TOKEN_KEY=plangen_auth_token
VITE_REFRESH_TOKEN_KEY=plangen_refresh_token

# App Configuration
VITE_APP_NAME=Plangen
VITE_APP_VERSION=1.0.0
VITE_APP_ENVIRONMENT=development
VITE_APP_URL=http://localhost:3000

# Feature Flags
VITE_FEATURE_ROADMAPS=true
VITE_FEATURE_TEAMS=true
VITE_FEATURE_ANALYTICS=false

# External Services
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_key
VITE_GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX
VITE_SENTRY_DSN=https://your-sentry-dsn

# Storage
VITE_STORAGE_PREFIX=plangen_
VITE_CACHE_DURATION=3600000

# UI Configuration
VITE_DEFAULT_THEME=light
VITE_SIDEBAR_COLLAPSED=false
VITE_ITEMS_PER_PAGE=20
```

### Docker Configuration

#### Dockerfile
```dockerfile
# Multi-stage build for production
FROM node:18-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine as production

# Copy built application
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
```

#### docker-compose.yml
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:80"
    environment:
      - NODE_ENV=production
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost/"]
      interval: 30s
      timeout: 10s
      retries: 3

  # Optional: Add Redis for caching
  redis:
    image: redis:alpine
    ports:
      - "6379:6379"
    restart: unless-stopped
```

### GitHub Actions Workflow

#### .github/workflows/ci.yml
```yaml
name: CI

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x, 20.x]

    steps:
    - uses: actions/checkout@v4

    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Run linter
      run: npm run lint

    - name: Run type check
      run: npm run type-check

    - name: Run tests
      run: npm run test:coverage

    - name: Build application
      run: npm run build

    - name: Upload coverage to Codecov
      uses: codecov/codecov-action@v3
```

### Additional Production Files

#### nginx.conf
```nginx
events {
    worker_connections 1024;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    server {
        listen 80;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;

        # Enable gzip compression
        gzip on;
        gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

        # Security headers
        add_header X-Frame-Options DENY;
        add_header X-Content-Type-Options nosniff;
        add_header X-XSS-Protection "1; mode=block";

        # Handle client routing
        location / {
            try_files $uri $uri/ /index.html;
        }

        # Cache static assets
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }

        # API proxy (if needed)
        location /api {
            proxy_pass http://api-server:8000;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
        }
    }
}
```

#### vitest.config.ts
```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'tests/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/index.ts'
      ]
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@services': resolve(__dirname, 'src/services'),
      '@store': resolve(__dirname, 'src/store'),
      '@types': resolve(__dirname, 'src/types'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@config': resolve(__dirname, 'src/config'),
    }
  }
})
```

## Architecture Benefits:

1. **Scalability**: Feature-based organization allows teams to work independently
2. **Maintainability**: Clear separation of concerns and consistent naming conventions
3. **Testability**: Comprehensive testing setup with unit, integration, and e2e tests
4. **Type Safety**: Full TypeScript integration with strict configurations
5. **Performance**: Optimized build with code splitting and caching strategies
6. **Developer Experience**: Hot reloading, linting, formatting, and debugging tools
7. **Production Ready**: Docker, CI/CD, monitoring, and deployment configurations
8. **Security**: Environment variable management and security headers
9. **Accessibility**: Built-in support for accessible components
10. **Internationalization Ready**: Structure supports easy i18n implementation

This structure provides a comprehensive, scalable foundation for your SAAS Plangen project with proper separation of concerns, testability, and production-ready organization.