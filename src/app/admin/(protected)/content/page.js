import Link from "next/link";

const SECTIONS = [
  {
    key: "hero",
    title: "Hero Slider",
    description: "Manage the homepage hero carousel: slide images, titles, and descriptions.",
    href: "/admin/content/hero",
  },
  {
    key: "services",
    title: "Products & Services",
    description: "Add, remove, or edit service cards including names, slugs, and images.",
    href: "/admin/content/services",
  },
  {
    key: "about",
    title: "About Section (Homepage)",
    description: "Edit the homepage about section: company story, stats, and 'Why Choose Us'.",
    href: "/admin/content/about",
  },
  {
    key: "contact",
    title: "Contact Section (Homepage)",
    description: "Update the homepage contact section title and subtitle text.",
    href: "/admin/content/contact",
  },
  {
    key: "about-page",
    title: "About Page",
    description: "Edit the full /about page: timeline, fabric partners, process steps, and industries.",
    href: "/admin/content/about-page",
  },
  {
    key: "contact-page",
    title: "Contact Page",
    description: "Edit the /contact page: phone, email, address, business hours, and what-happens-next steps.",
    href: "/admin/content/contact-page",
  },
  {
    key: "service-details",
    title: "Service Details",
    description: "Edit each service's detail page content: descriptions, features, fabrics, ideal industries, and order info.",
    href: "/admin/content/service-details",
  },
];

export default function AdminContentPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Content CMS</h1>
      <p className="text-slate-500 text-sm">Select a section below to edit its content.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SECTIONS.map((s) => (
          <div key={s.key} className="bg-white rounded-xl shadow p-6 flex flex-col gap-3">
            <div>
              <h2 className="text-lg font-semibold text-slate-800">{s.title}</h2>
              <p className="text-sm text-slate-500 mt-1">{s.description}</p>
            </div>
            <Link
              href={s.href}
              className="self-start px-4 py-2 rounded-lg bg-sky-600 text-white text-sm font-semibold hover:bg-sky-700 transition-colors"
            >
              Edit
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
