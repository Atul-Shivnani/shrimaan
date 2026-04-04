"use client";

import Link from "next/link";
import { useState } from "react";
import { Field, inp, SaveBtn, useSectionEditor } from "../_components/shared";

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

export default function ContactContentPage() {
  const { data, saving, toast, save } = useSectionEditor("contact");

  if (!data) return <div className="p-6 text-slate-500">Loading content…</div>;

  return (
    <div className="space-y-6">
      <Link href="/admin/content" className="inline-block text-sm text-sky-600 hover:underline">
        ← Back to Content
      </Link>
      <h1 className="text-3xl font-bold text-slate-900">Contact Section</h1>

      {toast && (
        <div className={`px-4 py-3 rounded-xl text-sm font-medium ${toast.ok ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}>
          {toast.text}
        </div>
      )}

      <div className="bg-white rounded-xl shadow p-6">
        <ContactEditor initial={data} saving={saving} onSave={save} />
      </div>
    </div>
  );
}
