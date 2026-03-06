"use client";

import { useEffect, useRef } from "react";
import { trackEvent, trackCustomEvent } from "./MetaPixel";

// Fire ViewContent when a service page is viewed
export function ServicePixelEvent({ serviceName, serviceSlug }) {
  useEffect(() => {
    trackEvent("ViewContent", {
      content_name: serviceName,
      content_category: "Uniform Service",
      content_ids: [serviceSlug],
      content_type: "product",
    });
  }, [serviceName, serviceSlug]);

  return null;
}

// Fire HighIntent when user spends >30s on the contact section
export function ContactIntentTracker() {
  const timerRef = useRef(null);
  const firedRef = useRef(false);

  useEffect(() => {
    const section = document.getElementById("contact");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timerRef.current = setTimeout(() => {
            if (!firedRef.current) {
              firedRef.current = true;
              trackCustomEvent("HighIntentVisitor", { section: "contact", dwellSeconds: 30 });
            }
          }, 30000); // 30 seconds
        } else {
          clearTimeout(timerRef.current);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      clearTimeout(timerRef.current);
    };
  }, []);

  return null;
}
