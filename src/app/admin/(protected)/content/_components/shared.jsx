"use client";

import { useEffect, useState } from "react";

// ─── UI helpers ───────────────────────────────────────────────────────────────
export function Field({ label, children }) {
  return (
    <div className="space-y-1">
      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide">{label}</label>
      {children}
    </div>
  );
}

export const inp = "w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400";

export const AddBtn = ({ onClick, label }) => (
  <button type="button" onClick={onClick} className="w-full py-2 border-2 border-dashed border-slate-300 rounded-xl text-sm text-slate-500 hover:border-sky-400 hover:text-sky-600 transition-colors">
    + {label}
  </button>
);

export const RemoveBtn = ({ onClick }) => (
  <button type="button" onClick={onClick} className="text-xs text-red-500 hover:underline shrink-0">Remove</button>
);

export const SaveBtn = ({ saving }) => (
  <button type="submit" disabled={saving} className="px-6 py-2 rounded-lg bg-sky-600 text-white font-semibold disabled:opacity-60 hover:bg-sky-700 transition-colors">
    {saving ? "Saving…" : "Save"}
  </button>
);

// ─── Shared fetch/save/toast hook ─────────────────────────────────────────────
export function useSectionEditor(sectionKey) {
  const [data, setData] = useState(null);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    fetch("/api/content")
      .then((r) => r.json())
      .then((d) => setData(d.content?.[sectionKey] ?? {}));
  }, [sectionKey]);

  const save = async (payload) => {
    setSaving(true);
    setToast(null);
    const res = await fetch("/api/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ section: sectionKey, content: payload }),
    });
    setSaving(false);
    setToast(res.ok ? { ok: true, text: "Saved successfully." } : { ok: false, text: "Failed to save." });
    setTimeout(() => setToast(null), 3000);
    if (res.ok) setData(payload);
  };

  return { data, saving, toast, save };
}
