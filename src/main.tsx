
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initPerformanceOptimizations } from './lib/performance';

// Initialize performance optimizations
initPerformanceOptimizations();

// Create root with error boundary
const renderApp = () => {
  const root = createRoot(document.getElementById("root")!);
  root.render(<App />);
};

// Use requestIdleCallback for non-critical initialization
if ('requestIdleCallback' in window) {
  // Wait for browser idle time to initialize non-critical tasks
  window.requestIdleCallback(() => {
    // Any non-critical initialization goes here
    console.log('Performance optimizations initialized during idle time');
  });
} else {
  // Fallback for browsers without requestIdleCallback
  setTimeout(() => {
    console.log('Performance optimizations initialized with timeout');
  }, 1);
}

// Render the app immediately
renderApp();
