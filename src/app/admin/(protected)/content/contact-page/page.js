"use client";

import Link from "next/link";
import { useState } from "react";
import { Field, inp, AddBtn, RemoveBtn, SaveBtn, useSectionEditor } from "../_components/shared";

function ContactPageEditor({ initial, saving, onSave }) {
  const [phone, setPhone] = useState(initial?.phone ?? "");
  const [email, setEmail] = useState(initial?.email ?? "");
  const [address, setAddress] = useState(initial?.address ?? "");
  const [businessHours, setBusinessHours] = useState(initial?.businessHours ?? []);
  const [nextSteps, setNextSteps] = useState(initial?.nextSteps ?? []);

  const setHour = (i, field, val) =>
    setBusinessHours((prev) => prev.map((item, idx) => (idx === i ? { ...item, [field]: val } : item)));
  const setStep = (i, field, val) =>
    setNextSteps((prev) => prev.map((item, idx) => (idx === i ? { ...item, [field]: val } : item)));

  const submit = (e) => {
    e.preventDefault();
    onSave({ phone, email, address, businessHours, nextSteps });
  };

  return (
    <form onSubmit={submit} className="space-y-8">

      {/* Contact Info */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">Contact Information</h2>
        <Field label="Phone Number">
          <input className={inp} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 97695 74841" />
        </Field>
        <Field label="Email Address">
          <input className={inp} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enquiry@shrimaanuniforms.com" />
        </Field>
        <Field label="Office Address">
          <textarea className={inp} rows={3} value={address} onChange={(e) => setAddress(e.target.value)} placeholder={"Mafatlal Shrimaan Uniforms,\nNarmada Apartments, Raopura\nVadodara, 390001"} />
        </Field>
      </div>

      {/* Business Hours */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">Business Hours</h2>
        {businessHours.map((item, i) => (
          <div key={i} className="flex gap-3 items-end bg-slate-50 border border-slate-200 rounded-xl p-3">
            <div className="flex-1">
              <Field label="Day(s)">
                <input className={inp} value={item.day} onChange={(e) => setHour(i, "day", e.target.value)} placeholder="Monday – Friday" />
              </Field>
            </div>
            <div className="flex-1">
              <Field label="Hours">
                <input className={inp} value={item.hours} onChange={(e) => setHour(i, "hours", e.target.value)} placeholder="10:00 AM – 7:00 PM" />
              </Field>
            </div>
            {businessHours.length > 1 && (
              <div className="pb-2"><RemoveBtn onClick={() => setBusinessHours((p) => p.filter((_, idx) => idx !== i))} /></div>
            )}
          </div>
        ))}
        <AddBtn onClick={() => setBusinessHours((p) => [...p, { day: "", hours: "" }])} label="Add Hours Row" />
      </div>

      {/* Next Steps */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">What Happens Next (Process Steps)</h2>
        {nextSteps.map((item, i) => (
          <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm text-slate-700">Step {item.step}: {item.title}</span>
              {nextSteps.length > 1 && <RemoveBtn onClick={() => setNextSteps((p) => p.filter((_, idx) => idx !== i))} />}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <Field label="Step Number">
                <input className={inp} value={item.step} onChange={(e) => setStep(i, "step", e.target.value)} placeholder="01" />
              </Field>
              <div className="md:col-span-3">
                <Field label="Title">
                  <input className={inp} value={item.title} onChange={(e) => setStep(i, "title", e.target.value)} placeholder="We Review Your Enquiry" />
                </Field>
              </div>
            </div>
            <Field label="Description">
              <textarea className={inp} rows={2} value={item.description} onChange={(e) => setStep(i, "description", e.target.value)} />
            </Field>
          </div>
        ))}
        <AddBtn onClick={() => setNextSteps((p) => [...p, { step: String(p.length + 1).padStart(2, "0"), title: "", description: "" }])} label="Add Step" />
      </div>

      <SaveBtn saving={saving} />
    </form>
  );
}

export default function ContactPageContentPage() {
  const { data, saving, toast, save } = useSectionEditor("contactPage");

  if (!data) return <div className="p-6 text-slate-500">Loading content…</div>;

  return (
    <div className="space-y-6">
      <Link href="/admin/content" className="inline-block text-sm text-sky-600 hover:underline">
        ← Back to Content
      </Link>
      <h1 className="text-3xl font-bold text-slate-900">Contact Page</h1>

      {toast && (
        <div className={`px-4 py-3 rounded-xl text-sm font-medium ${toast.ok ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}>
          {toast.text}
        </div>
      )}

      <div className="bg-white rounded-xl shadow p-6">
        <ContactPageEditor initial={data} saving={saving} onSave={save} />
      </div>
    </div>
  );
}
