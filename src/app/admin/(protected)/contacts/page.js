"use client";

import { useEffect, useMemo, useState } from "react";

export default function ContactsAdminPage() {
  const [contacts, setContacts] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const res = await fetch("/api/contact");
    const data = await res.json();
    setContacts(data.contacts || []);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return contacts;
    return contacts.filter((c) =>
      [c.name, c.email, c.phone, c.message].filter(Boolean).join(" ").toLowerCase().includes(q)
    );
  }, [contacts, query]);

  const toggleRead = async (contact) => {
    await fetch("/api/contact", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: contact.id, read: !contact.read }),
    });
    setContacts((prev) =>
      prev.map((c) => (c.id === contact.id ? { ...c, read: !c.read } : c))
    );
  };

  const deleteContact = async (id) => {
    if (!confirm("Delete this contact submission?")) return;
    await fetch(`/api/contact?id=${id}`, { method: "DELETE" });
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const unreadCount = contacts.filter((c) => !c.read).length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-3xl font-bold text-slate-900">
          Contacts
          {unreadCount > 0 && (
            <span className="ml-3 text-base bg-sky-600 text-white rounded-full px-3 py-1 font-semibold">
              {unreadCount} unread
            </span>
          )}
        </h1>
        <input
          className="border rounded-lg p-3 w-full md:w-80"
          placeholder="Search by name, email, message…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {loading ? (
        <p className="text-slate-500">Loading…</p>
      ) : filtered.length === 0 ? (
        <p className="text-slate-500">No contacts found.</p>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-100 text-slate-600 uppercase text-xs">
              <tr>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Message</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr key={c.id} className={`border-t ${c.read ? "bg-white" : "bg-sky-50"}`}>
                  <td className="p-3">
                    <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${c.read ? "bg-slate-100 text-slate-500" : "bg-sky-100 text-sky-700"}`}>
                      {c.read ? "Read" : "Unread"}
                    </span>
                  </td>
                  <td className="p-3 font-medium text-slate-900">{c.name}</td>
                  <td className="p-3 text-slate-700">{c.email}</td>
                  <td className="p-3 text-slate-600">{c.phone || "—"}</td>
                  <td className="p-3 text-slate-600 max-w-xs truncate">{c.message}</td>
                  <td className="p-3 text-slate-500 whitespace-nowrap">
                    {new Date(c.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleRead(c)}
                        className="text-xs px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                      >
                        {c.read ? "Mark unread" : "Mark read"}
                      </button>
                      <button
                        onClick={() => deleteContact(c.id)}
                        className="text-xs px-2 py-1 rounded bg-red-50 hover:bg-red-100 text-red-700 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
