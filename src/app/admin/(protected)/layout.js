import Link from "next/link";
import { redirect } from "next/navigation";
import { auth, signOut } from "@/auth";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/contacts", label: "Contacts" },
  { href: "/admin/analytics", label: "Analytics" },
  { href: "/admin/content", label: "Content" },
];

export default async function AdminLayout({ children }) {
  const session = await auth();
  if (!session?.user) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-slate-100 flex">
      <aside className="w-64 bg-slate-900 text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-6">Admin Portal</h2>
        <nav className="space-y-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="block px-3 py-2 rounded hover:bg-slate-700">
              {link.label}
            </Link>
          ))}
        </nav>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/admin/login" });
          }}
          className="mt-8"
        >
          <button className="w-full rounded bg-sky-600 py-2 font-semibold">Sign out</button>
        </form>
      </aside>
      <main className="flex-1 p-4 md:p-8">{children}</main>
    </div>
  );
}
