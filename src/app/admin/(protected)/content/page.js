"use client";

import { useEffect, useState } from "react";

const TABS = ["hero", "services", "about", "contact"];

// ─── Shared helpers ──────────────────────────────────────────────────────────
function Field({ label, children }) {
  return (
    <div className="space-y-1">
      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide">{label}</label>
      {children}
    </div>
  );
}
const inp = "w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400";
const AddBtn = ({ onClick, label }) => (
  <button type="button" onClick={onClick} className="w-full py-2 border-2 border-dashed border-slate-300 rounded-xl text-sm text-slate-500 hover:border-sky-400 hover:text-sky-600 transition-colors">
    + {label}
  </button>
);
const RemoveBtn = ({ onClick }) => (
  <button type="button" onClick={onClick} className="text-xs text-red-500 hover:underline shrink-0">Remove</button>
);
const SaveBtn = ({ saving }) => (
  <button type="submit" disabled={saving} className="px-6 py-2 rounded-lg bg-sky-600 text-white font-semibold disabled:opacity-60 hover:bg-sky-700 transition-colors">
    {saving ? "Saving…" : "Save"}
  </button>
);

// ─── Hero Editor ──────────────────────────────────────────────────────────────
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

// ─── Services Editor ──────────────────────────────────────────────────────────
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

// ─── About Editor ─────────────────────────────────────────────────────────────
function AboutEditor({ initial, saving, onSave }) {
  const [title, setTitle] = useState(initial?.title ?? "Who We Are");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [stats, setStats] = useState(initial?.stats?.length ? initial.stats : [{ number: "", label: "" }]);
  const [why, setWhy] = useState(initial?.whyChooseUs?.length ? initial.whyChooseUs : [{ title: "", description: "" }]);

  const setStat = (i, field, val) =>
    setStats((prev) => prev.map((s, idx) => (idx === i ? { ...s, [field]: val } : s)));
  const setWhyItem = (i, field, val) =>
    setWhy((prev) => prev.map((s, idx) => (idx === i ? { ...s, [field]: val } : s)));

  const submit = (e) => {
    e.preventDefault();
    onSave({ title, description, stats, whyChooseUs: why });
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <Field label="Section Title">
        <input className={inp} value={title} onChange={(e) => setTitle(e.target.value)} />
      </Field>
      <Field label="Description">
        <textarea className={inp} rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
      </Field>

      <hr className="border-slate-200" />
      <p className="text-sm font-semibold text-slate-700">Impact Stats</p>
      {stats.map((stat, i) => (
        <div key={i} className="flex gap-3 items-end bg-slate-50 border border-slate-200 rounded-xl p-3">
          <Field label="Number">
            <input className={inp} value={stat.number} onChange={(e) => setStat(i, "number", e.target.value)} placeholder="50+" />
          </Field>
          <Field label="Label">
            <input className={inp} value={stat.label} onChange={(e) => setStat(i, "label", e.target.value)} placeholder="Years of Experience" />
          </Field>
          {stats.length > 1 && (
            <div className="pb-2"><RemoveBtn onClick={() => setStats((p) => p.filter((_, idx) => idx !== i))} /></div>
          )}
        </div>
      ))}
      <AddBtn onClick={() => setStats((p) => [...p, { number: "", label: "" }])} label="Add Stat" />

      <hr className="border-slate-200" />
      <p className="text-sm font-semibold text-slate-700">Why Choose Us</p>
      {why.map((item, i) => (
        <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">{item.title || `Item ${i + 1}`}</span>
            {why.length > 1 && <RemoveBtn onClick={() => setWhy((p) => p.filter((_, idx) => idx !== i))} />}
          </div>
          <Field label="Title">
            <input className={inp} value={item.title} onChange={(e) => setWhyItem(i, "title", e.target.value)} placeholder="Direct Partnership" />
          </Field>
          <Field label="Description">
            <textarea className={inp} rows={2} value={item.description} onChange={(e) => setWhyItem(i, "description", e.target.value)} placeholder="Access to authentic Raymond and Mafatlal fabrics." />
          </Field>
        </div>
      ))}
      <AddBtn onClick={() => setWhy((p) => [...p, { title: "", description: "" }])} label="Add Item" />
      <SaveBtn saving={saving} />
    </form>
  );
}

// ─── Contact Editor ───────────────────────────────────────────────────────────
function ContactEditor({ initial, saving, onSave }) {
  const [title, setTitle] = useState(initial?.title ?? "Contact Us");
  const [subtitle, setSubtitle] = useState(initial?.subtitle ?? "");

  const submit = (e) => { e.preventDefault(); onSave({ title, subtitle }); };

  return (
    <form onSubmit={submit} className="space-y-4">
      <Field label="Section Title">
        <input className={inp} value={title} onChange={(e) => setTitle(e.target.value)} />
      </Field>
      <Field label="Subtitle">
        <textarea className={inp} rows={3} value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
      </Field>
      <SaveBtn saving={saving} />
    </form>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function AdminContentPage() {
  const [content, setContent] = useState(null);
  const [active, setActive] = useState("hero");
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    fetch("/api/content")
      .then((r) => r.json())
      .then((d) => setContent(d.content || {}));
  }, []);

  const save = async (section, data) => {
    setSaving(true);
    setToast(null);
    const res = await fetch("/api/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ section, content: data }),
    });
    setSaving(false);
    setToast(res.ok ? { ok: true, text: "Saved successfully." } : { ok: false, text: "Failed to save." });
    setTimeout(() => setToast(null), 3000);
    if (res.ok) setContent((prev) => ({ ...prev, [section]: data }));
  };

  if (!content) return <div className="p-6 text-slate-500">Loading content…</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Content CMS</h1>

      {toast && (
        <div className={`px-4 py-3 rounded-xl text-sm font-medium ${toast.ok ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}>
          {toast.text}
        </div>
      )}

      <div className="flex gap-2 flex-wrap">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-5 py-2 rounded-lg capitalize font-medium text-sm transition-colors ${
              active === tab ? "bg-sky-600 text-white" : "bg-white border border-slate-200 text-slate-700 hover:border-sky-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        {active === "hero" && (
          <HeroEditor key="hero" initial={content.hero} saving={saving} onSave={(d) => save("hero", d)} />
        )}
        {active === "services" && (
          <ServicesEditor key="services" initial={content.services} saving={saving} onSave={(d) => save("services", d)} />
        )}
        {active === "about" && (
          <AboutEditor key="about" initial={content.about} saving={saving} onSave={(d) => save("about", d)} />
        )}
        {active === "contact" && (
          <ContactEditor key="contact" initial={content.contact} saving={saving} onSave={(d) => save("contact", d)} />
        )}
      </div>
    </div>
  );
}
