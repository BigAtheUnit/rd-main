
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from './components/ui/toaster.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster as SonnerToaster } from './components/ui/sonner.tsx'
import './lib/performance.ts'

// Import our utility to remove any lovable references
import './components/contact/utils/lovableRemover.ts'

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
        <Toaster />
        <SonnerToaster position="bottom-right" />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
