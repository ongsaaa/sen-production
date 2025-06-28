// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router'

import RootLayout from './layouts/RootLayout' // Path to your layout
import HomePage from './pages/HomePage' // Path to your home page
import WhoWeAre from './pages/WhoWeAre' // Path to your about page
import BecomeMemberPage from './pages/BecomeMemberPage' // Path to your become membership page
import PartnersPage from './pages/PartnersPage' // Path to your partners page
import NotFoundPage from './pages/NotFoundPage' // Path to your 404 page
import StaffPage from './pages/StaffPage'
import FaqPage from './pages/FaqPage'
import ContactPage from './pages/ContactPage'
import SigsPage from './pages/Sigs'
import OpportunitiesPage from './pages/Opportunities'
import AddOpportunityPage from './pages/AddOpportunityPage'
import StudyToolsPage from './pages/StudyToolsPage'
import UniPathwaysPage from './pages/UniPathwaysPage' // Path to your university pathways page
import ExamsPage from './pages/ExamsPage' // Path to your exams page
import CareerPathwaysPage from './pages/CareerPathwaysPage'
import OpportunityDetailPage from './pages/OpportunityDetailPage'
import PrivacyPage from './pages/PrivacyPage'
import WebscrapePage from './pages/WebscrapePage'

import './styles.css' // Your global styles

console.log('main.tsx: Script started') // <-- ADD THIS

// 1. Define the Root Route
const rootRoute = createRootRoute({
  component: RootLayout, // The component for the root layout
  notFoundComponent: () => <NotFoundPage />,
})

// 2. Define Child Routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/who-we-are',
  component: WhoWeAre,
})

const becomeMemberRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/become-a-member', // Or /join, /membership, etc.
  component: BecomeMemberPage,
})

const partnersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/partners', // Or your desired path
  component: PartnersPage,
})

const staffRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/staff', // Or your desired path
  component: StaffPage,
})

const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/faq', // Or your desired path
  component: FaqPage,
})

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contacts', // Or your desired path
  component: ContactPage,
})

const sigsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/sigs', // Or /special-interest-groups, /communities etc.
  component: SigsPage,
})

const oportunitiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/opportunities',
  component: OpportunitiesPage,
})

const addOpportunityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/add',
  component: AddOpportunityPage,
})

const studyToolsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/study-tools', // Matches Header.tsx link
  component: StudyToolsPage,
})

const uniPathwaysRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/uni-pathways', // Matches Header.tsx link
  component: UniPathwaysPage,
})

const examsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/exams', // Matches Header.tsx link
  component: ExamsPage,
})

const careerPathwaysPage = createRoute({
  getParentRoute: () => rootRoute,
  path: '/career-pathways', // Matches Header.tsx link
  component: CareerPathwaysPage,
})

const opportunityDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/opportunities/$opportunityId',
  component: OpportunityDetailPage,
})

const privacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy-policy',
  component: PrivacyPage,
})

const webscrapeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/webscrape',
  component: WebscrapePage,
})

// 3. Create the Route Tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  becomeMemberRoute,
  partnersRoute,
  staffRoute,
  faqRoute,
  contactRoute,
  sigsRoute,
  oportunitiesRoute,
  addOpportunityRoute,
  studyToolsRoute,
  uniPathwaysRoute,
  examsRoute,
  careerPathwaysPage,
  opportunityDetailRoute,
  privacyPolicyRoute,
  webscrapeRoute
])

// 4. Create the Router Instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
}
