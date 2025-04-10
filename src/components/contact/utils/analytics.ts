
/**
 * Track a form submission success
 */
export const trackFormSuccess = (): void => {
  if (window.gtag) {
    window.gtag('event', 'form_submission_success', {
      event_category: 'Contact',
      event_label: 'Contact Form'
    });
  }
};

/**
 * Track a form submission error
 * @param errorMessage Error message
 */
export const trackFormError = (errorMessage: string): void => {
  if (window.gtag) {
    window.gtag('event', 'form_submission_error', {
      event_category: 'Contact',
      event_label: errorMessage,
    });
  }
};
