"use client";

import Link from "next/link";
import { useState } from "react";
import { Field, inp, AddBtn, RemoveBtn, SaveBtn, useSectionEditor } from "../_components/shared";

function HeroEditor({ initial, saving, onSave }) {
  const [slides, setSlides] = useState(
    initial?.slides?.length ? initial.slides : [{ src: "", srcMobile: "", alt: "", title: "", description: "" }]
  );

  const set = (i, field, val) =>
    setSlides((prev) => prev.map((s, idx) => (idx === i ? { ...s, [field]: val } : s)));
  const add = () =>
    setSlides((prev) => [...prev, { src: "", srcMobile: "", alt: "", title: "", description: "" }]);
  const remove = (i) => setSlides((prev) => prev.filter((_, idx) => idx !== i));
  const submit = (e) => { e.preventDefault(); onSave({ slides }); };

  return (
    <form onSubmit={submit} className="space-y-4">
      <p className="text-sm text-slate-500">
        Use paths relative to <code className="bg-slate-100 px-1 rounded">/public</code> (e.g. <code className="bg-slate-100 px-1 rounded">/my-image.jpg</code>) or full external URLs.
      </p>
      {slides.map((slide, i) => (
        <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-sm text-slate-700">Slide {i + 1}</span>
            {slides.length > 1 && <RemoveBtn onClick={() => remove(i)} />}
          </div>
          <Field label="Title">
            <input className={inp} value={slide.title} onChange={(e) => set(i, "title", e.target.value)} placeholder="Premium Corporate Uniforms" />
          </Field>
          <Field label="Description">
            <textarea className={inp} rows={2} value={slide.description} onChange={(e) => set(i, "description", e.target.value)} placeholder="Tailored solutions for your company's image and comfort." />
          </Field>
          <Field label="Desktop Image Path">
            <input className={inp} value={slide.src} onChange={(e) => set(i, "src", e.target.value)} placeholder="/sheetal cover.jpg" />
          </Field>
          <Field label="Mobile Image Path (optional — falls back to desktop)">
            <input className={inp} value={slide.srcMobile} onChange={(e) => set(i, "srcMobile", e.target.value)} placeholder="/sheetal cover V.jpg" />
          </Field>
          <Field label="Alt Text">
            <input className={inp} value={slide.alt} onChange={(e) => set(i, "alt", e.target.value)} placeholder="Shrimaan Uniforms" />
          </Field>
        </div>
      ))}
      <AddBtn onClick={add} label="Add Slide" />
      <SaveBtn saving={saving} />
    </form>
  );
}

export default function HeroContentPage() {
  const { data, saving, toast, save } = useSectionEditor("hero");

  if (!data) return <div className="p-6 text-slate-500">Loading content…</div>;

  return (
    <div className="space-y-6">
      <Link href="/admin/content" className="inline-block text-sm text-sky-600 hover:underline">
        ← Back to Content
      </Link>
      <h1 className="text-3xl font-bold text-slate-900">Hero Slider</h1>

      {toast && (
        <div className={`px-4 py-3 rounded-xl text-sm font-medium ${toast.ok ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}>
          {toast.text}
        </div>
      )}

      <div className="bg-white rounded-xl shadow p-6">
        <HeroEditor initial={data} saving={saving} onSave={save} />
      </div>
    </div>
  );
}
