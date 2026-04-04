"use client";

import Link from "next/link";
import { useState } from "react";
import { Field, inp, AddBtn, RemoveBtn, SaveBtn, useSectionEditor } from "../_components/shared";

function ServicesEditor({ initial, saving, onSave }) {
  const [title, setTitle] = useState(initial?.title ?? "Products & Services");
  const [subtitle, setSubtitle] = useState(initial?.subtitle ?? "");
  const [items, setItems] = useState(initial?.items?.length ? initial.items : []);

  const setItem = (i, field, val) =>
    setItems((prev) => prev.map((s, idx) => (idx === i ? { ...s, [field]: val } : s)));

  const handleNameChange = (i, val) => {
    const slug = val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    setItems((prev) =>
      prev.map((s, idx) => (idx === i ? { ...s, name: val, slug: s.slug || slug } : s))
    );
  };

  const add = () =>
    setItems((prev) => [
      ...prev,
      { id: Date.now(), slug: "", name: "", shortDescription: "", mainImage: "", descriptionImage: "" },
    ]);
  const remove = (i) => setItems((prev) => prev.filter((_, idx) => idx !== i));
  const submit = (e) => { e.preventDefault(); onSave({ title, subtitle, items }); };

  return (
    <form onSubmit={submit} className="space-y-4">
      <Field label="Section Title">
        <input className={inp} value={title} onChange={(e) => setTitle(e.target.value)} />
      </Field>
      <Field label="Section Subtitle">
        <textarea className={inp} rows={2} value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
      </Field>

      <hr className="border-slate-200" />
      <p className="text-sm font-semibold text-slate-700">Services List</p>

      {items.map((svc, i) => (
        <div key={svc.id ?? i} className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-sm text-slate-700">{svc.name || `Service ${i + 1}`}</span>
            <RemoveBtn onClick={() => remove(i)} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Field label="Name">
              <input className={inp} value={svc.name} onChange={(e) => handleNameChange(i, e.target.value)} placeholder="Corporate Uniform" />
            </Field>
            <Field label="Slug (used in URL)">
              <input className={inp} value={svc.slug} onChange={(e) => setItem(i, "slug", e.target.value)} placeholder="corporate-uniform" />
            </Field>
          </div>
          <Field label="Short Description">
            <textarea className={inp} rows={2} value={svc.shortDescription} onChange={(e) => setItem(i, "shortDescription", e.target.value)} placeholder="Tailored uniforms that align with your brand identity." />
          </Field>
          <Field label="Main Image Path">
            <input className={inp} value={svc.mainImage} onChange={(e) => setItem(i, "mainImage", e.target.value)} placeholder="/1. Corporate Uniform.jpeg" />
          </Field>
          <Field label="Description Image Path">
            <input className={inp} value={svc.descriptionImage} onChange={(e) => setItem(i, "descriptionImage", e.target.value)} placeholder="/1a. Corporate Uniform.PNG" />
          </Field>
        </div>
      ))}
      <AddBtn onClick={add} label="Add Service" />
      <SaveBtn saving={saving} />
    </form>
  );
}

export default function ServicesContentPage() {
  const { data, saving, toast, save } = useSectionEditor("services");

  if (!data) return <div className="p-6 text-slate-500">Loading content…</div>;

  return (
    <div className="space-y-6">
      <Link href="/admin/content" className="inline-block text-sm text-sky-600 hover:underline">
        ← Back to Content
      </Link>
      <h1 className="text-3xl font-bold text-slate-900">Products & Services</h1>

      {toast && (
        <div className={`px-4 py-3 rounded-xl text-sm font-medium ${toast.ok ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}>
          {toast.text}
        </div>
      )}

      <div className="bg-white rounded-xl shadow p-6">
        <ServicesEditor initial={data} saving={saving} onSave={save} />
      </div>
    </div>
  );
}
