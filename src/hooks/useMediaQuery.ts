"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook that returns true if the current viewport width matches the provided media query
 * @param query Media query string (e.g., '(max-width: 768px)')
 * @returns Boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query);

      // Set initial value
      setMatches(media.matches);

      // Define listener function
      const listener = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };

      // Add listener for changes
      media.addEventListener("change", listener);

      // Clean up listener on unmount
      return () => {
        media.removeEventListener("change", listener);
      };
    }

    // Default to false on server-side
    return undefined;
  }, [query]);

  return matches;
}
