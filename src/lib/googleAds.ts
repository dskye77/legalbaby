// Utility functions for Google Ads event tracking

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Track a conversion event
 * @param conversionLabel - The conversion label from Google Ads (e.g., 'xxxxx')
 * @param value - Optional conversion value
 * @param currency - Currency code (default: 'USD')
 */
export const trackConversion = (
  conversionLabel: string,
  value?: number,
  currency: string = 'USD'
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `AW-321489997/${conversionLabel}`,
      value: value,
      currency: currency,
    });
  }
};

/**
 * Track application form submission
 */
export const trackApplicationSubmit = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'submit_application', {
      event_category: 'engagement',
      event_label: 'Artist Application',
    });
  }
};

/**
 * Track "Request Access" button click
 */
export const trackRequestAccess = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click_request_access', {
      event_category: 'engagement',
      event_label: 'Request Access Button',
    });
  }
};

/**
 * Track form field interactions
 * @param fieldName - Name of the form field
 */
export const trackFormInteraction = (fieldName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_interaction', {
      event_category: 'engagement',
      event_label: fieldName,
    });
  }
};

/**
 * Track page views (automatically handled by gtag config, but can be called manually)
 * @param url - Page URL
 */
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'AW-321489997', {
      page_path: url,
    });
  }
};

/**
 * Track custom events
 * @param eventName - Name of the event
 * @param params - Event parameters
 */
export const trackEvent = (
  eventName: string,
  params?: Record<string, unknown>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};
