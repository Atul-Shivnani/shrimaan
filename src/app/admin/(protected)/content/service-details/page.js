"use client";

import Link from "next/link";
import { useState } from "react";
import { Field, inp, AddBtn, RemoveBtn, SaveBtn, useSectionEditor } from "../_components/shared";

const SERVICE_SLUGS = [
  { slug: "corporate-uniform", name: "Corporate Uniform" },
  { slug: "t-shirts", name: "T-Shirt" },
  { slug: "boiler-suits", name: "Boiler Suits" },
  { slug: "suits-blazers", name: "Suits & Blazers" },
  { slug: "safety-uniform", name: "Safety Uniform" },
];

function ServiceDetailEditor({ initial, saving, onSave, slug }) {
  const [longDescription, setLongDescription] = useState(
    initial?.longDescription?.length ? initial.longDescription : ["", ""]
  );
  const [features, setFeatures] = useState(
    initial?.features?.length ? initial.features : [""]
  );
  const [fabrics, setFabrics] = useState(
    initial?.fabrics?.length ? initial.fabrics : [{ name: "", description: "" }]
  );
  const [idealFor, setIdealFor] = useState(
    initial?.idealFor?.length ? initial.idealFor : [""]
  );
  const [minOrder, setMinOrder] = useState(initial?.minOrder ?? "");
  const [deliveryTime, setDeliveryTime] = useState(initial?.deliveryTime ?? "");

  const setFabric = (i, field, val) =>
    setFabrics((prev) => prev.map((item, idx) => (idx === i ? { ...item, [field]: val } : item)));

  const submit = (e) => {
    e.preventDefault();
    onSave({ ...initial, [slug]: { longDescription, features, fabrics, idealFor, minOrder, deliveryTime } });
  };

  return (
    <form onSubmit={submit} className="space-y-6">

      {/* Long Description */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide">Long Description (paragraphs)</h3>
        {longDescription.map((para, i) => (
          <div key={i} className="flex gap-2 items-start">
            <div className="flex-1">
              <textarea
                className={inp}
                rows={3}
                value={para}
                onChange={(e) => setLongDescription((p) => p.map((v, idx) => idx === i ? e.target.value : v))}
                placeholder={`Paragraph ${i + 1}`}
              />
            </div>
            {longDescription.length > 1 && (
              <RemoveBtn onClick={() => setLongDescription((p) => p.filter((_, idx) => idx !== i))} />
            )}
          </div>
        ))}
        <AddBtn onClick={() => setLongDescription((p) => [...p, ""])} label="Add Paragraph" />
      </div>

      {/* Features */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide">Features</h3>
        {features.map((feat, i) => (
          <div key={i} className="flex gap-2 items-center">
            <input
              className={inp}
              value={feat}
              onChange={(e) => setFeatures((p) => p.map((v, idx) => idx === i ? e.target.value : v))}
              placeholder="Feature description"
            />
            {features.length > 1 && <RemoveBtn onClick={() => setFeatures((p) => p.filter((_, idx) => idx !== i))} />}
          </div>
        ))}
        <AddBtn onClick={() => setFeatures((p) => [...p, ""])} label="Add Feature" />
      </div>

      {/* Fabrics */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide">Fabric Options</h3>
        {fabrics.map((fab, i) => (
          <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">{fab.name || `Fabric ${i + 1}`}</span>
              {fabrics.length > 1 && <RemoveBtn onClick={() => setFabrics((p) => p.filter((_, idx) => idx !== i))} />}
            </div>
            <Field label="Fabric Name">
              <input className={inp} value={fab.name} onChange={(e) => setFabric(i, "name", e.target.value)} placeholder="Mafatlal Shirting" />
            </Field>
            <Field label="Description">
              <input className={inp} value={fab.description} onChange={(e) => setFabric(i, "description", e.target.value)} placeholder="Breathable, easy-care shirting ideal for daily corporate wear." />
            </Field>
          </div>
        ))}
        <AddBtn onClick={() => setFabrics((p) => [...p, { name: "", description: "" }])} label="Add Fabric" />
      </div>

      {/* Ideal For */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide">Ideal For (Industries)</h3>
        {idealFor.map((item, i) => (
          <div key={i} className="flex gap-2 items-center">
            <input
              className={inp}
              value={item}
              onChange={(e) => setIdealFor((p) => p.map((v, idx) => idx === i ? e.target.value : v))}
              placeholder="IT & Software"
            />
            {idealFor.length > 1 && <RemoveBtn onClick={() => setIdealFor((p) => p.filter((_, idx) => idx !== i))} />}
          </div>
        ))}
        <AddBtn onClick={() => setIdealFor((p) => [...p, ""])} label="Add Industry" />
      </div>

      {/* Order Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Minimum Order">
          <input className={inp} value={minOrder} onChange={(e) => setMinOrder(e.target.value)} placeholder="50 pieces per style" />
        </Field>
        <Field label="Delivery Time">
          <input className={inp} value={deliveryTime} onChange={(e) => setDeliveryTime(e.target.value)} placeholder="15–21 working days" />
        </Field>
      </div>

      <SaveBtn saving={saving} />
    </form>
  );
}

function ServiceDetailsEditorContainer({ data, saving, save }) {
  const [activeSlug, setActiveSlug] = useState(SERVICE_SLUGS[0].slug);

  const handleSave = (slug) => (patch) => {
    // patch contains the full updated serviceDetails object for this service
    const updated = { ...data, ...patch };
    save(updated);
  };

  return (
    <div className="space-y-6">
      {/* Service tabs */}
      <div className="flex gap-2 flex-wrap">
        {SERVICE_SLUGS.map(({ slug, name }) => (
          <button
            key={slug}
            type="button"
            onClick={() => setActiveSlug(slug)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeSlug === slug
                ? "bg-sky-600 text-white"
                : "bg-white border border-slate-200 text-slate-700 hover:border-sky-300"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      {SERVICE_SLUGS.map(({ slug }) =>
        activeSlug === slug ? (
          <ServiceDetailEditor
            key={slug}
            slug={slug}
            initial={data?.[slug]}
            saving={saving}
            onSave={handleSave(slug)}
          />
        ) : null
      )}
    </div>
  );
}

export default function ServiceDetailsContentPage() {
  const { data, saving, toast, save } = useSectionEditor("serviceDetails");

  if (!data) return <div className="p-6 text-slate-500">Loading content…</div>;

  return (
    <div className="space-y-6">
      <Link href="/admin/content" className="inline-block text-sm text-sky-600 hover:underline">
        ← Back to Content
      </Link>
      <h1 className="text-3xl font-bold text-slate-900">Service Details</h1>
      <p className="text-slate-500 text-sm">Edit the detailed content shown on each service&apos;s dedicated page.</p>

      {toast && (
        <div className={`px-4 py-3 rounded-xl text-sm font-medium ${toast.ok ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}>
          {toast.text}
        </div>
      )}

      <div className="bg-white rounded-xl shadow p-6">
        <ServiceDetailsEditorContainer data={data} saving={saving} save={save} />
      </div>
    </div>
  );
}
