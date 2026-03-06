"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export function trackEvent(eventName, params) {
  if (typeof window !== "undefined" && window.fbq && PIXEL_ID) {
    window.fbq("track", eventName, params);
  }
}

export function trackCustomEvent(eventName, params) {
  if (typeof window !== "undefined" && window.fbq && PIXEL_ID) {
    window.fbq("trackCustom", eventName, params);
  }
}

export default function MetaPixel() {
  const pathname = usePathname();

  // Load the pixel script once on mount
  useEffect(() => {
    if (!PIXEL_ID || window.fbq) return;

    // Inline pixel initialisation
    (function (f, b, e, v) {
      const n = (f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      });
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      const t = b.createElement(e);
      t.async = true;
      t.src = v;
      const s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

    window.fbq("init", PIXEL_ID);
    window.fbq("track", "PageView");
  }, []);

  // Fire PageView on every route change after initial load
  useEffect(() => {
    if (!PIXEL_ID || pathname?.startsWith("/admin")) return;
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  return null;
}
