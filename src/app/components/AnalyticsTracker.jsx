"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

function getDeviceType() {
  const ua = navigator.userAgent.toLowerCase();
  if (/ipad|tablet/.test(ua)) return "tablet";
  if (/iphone|android|mobile/.test(ua)) return "mobile";
  return "desktop";
}

function getSessionId() {
  const key = "shrimaan-session-id";
  const existing = localStorage.getItem(key);
  if (existing) return existing;
  const created =
    typeof crypto?.randomUUID === "function"
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  localStorage.setItem(key, created);
  return created;
}

async function getGeoData() {
  if (navigator.geolocation) {
    try {
      const pos = await new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 5000 })
      );
      const { latitude, longitude } = pos.coords;
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
        { headers: { "Accept-Language": "en" } }
      );
      const data = await res.json();
      return {
        city:
          data?.address?.city ||
          data?.address?.town ||
          data?.address?.village ||
          data?.address?.county ||
          null,
        region: data?.address?.state || null,
        country: data?.address?.country || null,
      };
    } catch {
      // permission denied or timeout — fall through
    }
  }
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    return { city: data?.city || null, region: data?.region || null, country: data?.country_name || null };
  } catch {
    return { city: null, region: null, country: null };
  }
}

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const seenSectionsRef = useRef(new Set());
  // { sectionId: { start: timestamp | null, total: seconds } }
  const sectionTimersRef = useRef({});
  const startRef = useRef(Date.now());
  const geoRef = useRef({ city: null, region: null, country: null });

  useEffect(() => {
    getGeoData().then((geo) => { geoRef.current = geo; }).catch(() => {});
  }, []);

  useEffect(() => {
    if (!pathname || pathname.startsWith("/admin")) return;

    startRef.current = Date.now();
    seenSectionsRef.current = new Set();
    sectionTimersRef.current = {};

    const observer = new IntersectionObserver(
      (entries) => {
        const now = Date.now();
        for (const entry of entries) {
          const id = entry.target.id;
          if (!id) continue;

          if (entry.isIntersecting) {
            seenSectionsRef.current.add(id);
            sectionTimersRef.current[id] = {
              ...sectionTimersRef.current[id],
              start: now,
            };
          } else {
            const timer = sectionTimersRef.current[id];
            if (timer?.start) {
              sectionTimersRef.current[id] = {
                start: null,
                total: (timer.total || 0) + (now - timer.start) / 1000,
              };
            }
          }
        }
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));

    const getSectionTimes = () => {
      const now = Date.now();
      const result = {};
      for (const [id, timer] of Object.entries(sectionTimersRef.current)) {
        let total = timer.total || 0;
        if (timer.start) total += (now - timer.start) / 1000; // still visible
        result[id] = Math.round(total);
      }
      return result;
    };

    const sendEvent = () => {
      const payload = {
        sessionId: getSessionId(),
        page: pathname,
        sections: Array.from(seenSectionsRef.current),
        sectionTimes: getSectionTimes(),
        duration: Math.max(0, Math.round((Date.now() - startRef.current) / 1000)),
        referrer: document.referrer || null,
        city: geoRef.current.city,
        region: geoRef.current.region,
        country: geoRef.current.country,
        device: getDeviceType(),
        userAgent: navigator.userAgent || null,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || null,
        screen: `${window.screen.width}x${window.screen.height}`,
        language: navigator.language || null,
      };

      const body = JSON.stringify(payload);
      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/analytics", new Blob([body], { type: "application/json" }));
      } else {
        fetch("/api/analytics", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          keepalive: true,
          body,
        }).catch(() => {});
      }
    };

    window.addEventListener("pagehide", sendEvent);
    return () => {
      observer.disconnect();
      window.removeEventListener("pagehide", sendEvent);
      sendEvent();
    };
  }, [pathname]);

  return null;
}
