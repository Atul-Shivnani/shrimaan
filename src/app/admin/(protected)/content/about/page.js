"use client";

import Link from "next/link";
import { useState } from "react";
import { Field, inp, AddBtn, RemoveBtn, SaveBtn, useSectionEditor } from "../_components/shared";

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

export default function AboutContentPage() {
  const { data, saving, toast, save } = useSectionEditor("about");

  if (!data) return <div className="p-6 text-slate-500">Loading content…</div>;

  return (
    <div className="space-y-6">
      <Link href="/admin/content" className="inline-block text-sm text-sky-600 hover:underline">
        ← Back to Content
      </Link>
      <h1 className="text-3xl font-bold text-slate-900">About Section</h1>

      {toast && (
        <div className={`px-4 py-3 rounded-xl text-sm font-medium ${toast.ok ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}>
          {toast.text}
        </div>
      )}

      <div className="bg-white rounded-xl shadow p-6">
        <AboutEditor initial={data} saving={saving} onSave={save} />
      </div>
    </div>
  );
}
