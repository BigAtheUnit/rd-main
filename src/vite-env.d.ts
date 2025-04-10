
/// <reference types="vite/client" />

// Google Analytics gtag.js type definitions
interface Window {
  gtag?: (
    command: string,
    action: string,
    params?: {
      event_category?: string;
      event_label?: string;
      [key: string]: any;
    }
  ) => void;
}

declare function gtag(
  command: string,
  action: string,
  params?: {
    event_category?: string;
    event_label?: string;
    [key: string]: any;
  }
): void;
