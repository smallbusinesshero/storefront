import ReactGA from "react-ga";

export function initializeAnalytics() {
  // Only on client side 
  if (typeof window !== 'undefined') {
    // On local, setup testMode, so data won't go to analytics dashboard
    if (process.env.NODE_ENV === "development") {
      ReactGA.initialize('UA-162524264-1', { testMode: true, debug: true });
    } else {
      ReactGA.initialize('UA-162524264-1');
    }

  ReactGA.pageview(window.location.pathname + window.location.search);
    }
}

// Send event if user uses search bar and log place id 
export function analyticsSearchLocation(placeID: string) {
  ReactGA.event({
      category: 'user-input',
      action: 'search-location',
      label: placeID,
    });
}

	// Send event event if social-media link is clicked
export function analyticsSocialMediaRef(eventType: string, storeId: string) {
  ReactGA.event({
      category: 'social-media-ref',
      action: eventType,
      label: storeId,
    });
}