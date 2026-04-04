"use client";

import Link from "next/link";
import { useState } from "react";
import { Field, inp, AddBtn, RemoveBtn, SaveBtn, useSectionEditor } from "../_components/shared";

function AboutPageEditor({ initial, saving, onSave }) {
  const [timeline, setTimeline] = useState(initial?.timeline ?? []);
  const [partners, setPartners] = useState(initial?.partners ?? []);
  const [process, setProcess] = useState(initial?.process ?? []);
  const [industries, setIndustries] = useState(initial?.industries ?? []);

  const setItem = (setter, i, field, val) =>
    setter((prev) => prev.map((item, idx) => (idx === i ? { ...item, [field]: val } : item)));

  const submit = (e) => {
    e.preventDefault();
    onSave({ timeline, partners, process, industries });
  };

  return (
    <form onSubmit={submit} className="space-y-8">

      {/* Timeline */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">Our Journey (Timeline)</h2>
        {timeline.map((item, i) => (
          <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm text-slate-700">{item.title || `Event ${i + 1}`}</span>
              {timeline.length > 1 && <RemoveBtn onClick={() => setTimeline((p) => p.filter((_, idx) => idx !== i))} />}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Field label="Year / Era">
                <input className={inp} value={item.year} onChange={(e) => setItem(setTimeline, i, "year", e.target.value)} placeholder="1985" />
              </Field>
              <div className="md:col-span-2">
                <Field label="Title">
                  <input className={inp} value={item.title} onChange={(e) => setItem(setTimeline, i, "title", e.target.value)} placeholder="Authorized Mafatlal Distributor" />
                </Field>
              </div>
            </div>
            <Field label="Description">
              <textarea className={inp} rows={2} value={item.description} onChange={(e) => setItem(setTimeline, i, "description", e.target.value)} />
            </Field>
          </div>
        ))}
        <AddBtn onClick={() => setTimeline((p) => [...p, { year: "", title: "", description: "" }])} label="Add Timeline Event" />
      </div>

      {/* Partners */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">Fabric Partners</h2>
        {partners.map((item, i) => (
          <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm text-slate-700">{item.name || `Partner ${i + 1}`}</span>
              {partners.length > 1 && <RemoveBtn onClick={() => setPartners((p) => p.filter((_, idx) => idx !== i))} />}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Field label="Name">
                <input className={inp} value={item.name} onChange={(e) => setItem(setPartners, i, "name", e.target.value)} placeholder="Mafatlal" />
              </Field>
              <Field label="Badge">
                <input className={inp} value={item.badge} onChange={(e) => setItem(setPartners, i, "badge", e.target.value)} placeholder="Authorized Distributor" />
              </Field>
            </div>
            <Field label="Tagline">
              <input className={inp} value={item.tagline} onChange={(e) => setItem(setPartners, i, "tagline", e.target.value)} placeholder="India's Heritage Fabric Brand" />
            </Field>
            <Field label="Description">
              <textarea className={inp} rows={3} value={item.description} onChange={(e) => setItem(setPartners, i, "description", e.target.value)} />
            </Field>
          </div>
        ))}
        <AddBtn onClick={() => setPartners((p) => [...p, { name: "", tagline: "", description: "", badge: "" }])} label="Add Partner" />
      </div>

      {/* Process */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">How We Work (Process Steps)</h2>
        {process.map((item, i) => (
          <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm text-slate-700">Step {item.step || i + 1}: {item.title}</span>
              {process.length > 1 && <RemoveBtn onClick={() => setProcess((p) => p.filter((_, idx) => idx !== i))} />}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <Field label="Step Number">
                <input className={inp} value={item.step} onChange={(e) => setItem(setProcess, i, "step", e.target.value)} placeholder="01" />
              </Field>
              <div className="md:col-span-3">
                <Field label="Title">
                  <input className={inp} value={item.title} onChange={(e) => setItem(setProcess, i, "title", e.target.value)} placeholder="Consultation" />
                </Field>
              </div>
            </div>
            <Field label="Description">
              <textarea className={inp} rows={2} value={item.description} onChange={(e) => setItem(setProcess, i, "description", e.target.value)} />
            </Field>
          </div>
        ))}
        <AddBtn onClick={() => setProcess((p) => [...p, { step: String(p.length + 1).padStart(2, "0"), title: "", description: "" }])} label="Add Step" />
      </div>

      {/* Industries */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">Industries We Serve</h2>
        {industries.map((item, i) => (
          <div key={i} className="flex gap-3 items-end bg-slate-50 border border-slate-200 rounded-xl p-3">
            <Field label="Icon (emoji)">
              <input className={inp} value={item.icon} onChange={(e) => setItem(setIndustries, i, "icon", e.target.value)} placeholder="🏢" style={{ fontSize: "1.2rem" }} />
            </Field>
            <div className="flex-1">
              <Field label="Name">
                <input className={inp} value={item.name} onChange={(e) => setItem(setIndustries, i, "name", e.target.value)} placeholder="Corporate & IT" />
              </Field>
            </div>
            {industries.length > 1 && (
              <div className="pb-2"><RemoveBtn onClick={() => setIndustries((p) => p.filter((_, idx) => idx !== i))} /></div>
            )}
          </div>
        ))}
        <AddBtn onClick={() => setIndustries((p) => [...p, { name: "", icon: "" }])} label="Add Industry" />
      </div>

      <SaveBtn saving={saving} />
    </form>
  );
}

export default function AboutPageContentPage() {
  const { data, saving, toast, save } = useSectionEditor("aboutPage");

  if (!data) return <div className="p-6 text-slate-500">Loading content…</div>;

  return (
    <div className="space-y-6">
      <Link href="/admin/content" className="inline-block text-sm text-sky-600 hover:underline">
        ← Back to Content
      </Link>
      <h1 className="text-3xl font-bold text-slate-900">About Page</h1>

      {toast && (
        <div className={`px-4 py-3 rounded-xl text-sm font-medium ${toast.ok ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}>
          {toast.text}
        </div>
      )}

      <div className="bg-white rounded-xl shadow p-6">
        <AboutPageEditor initial={data} saving={saving} onSave={save} />
      </div>
    </div>
  );
}
