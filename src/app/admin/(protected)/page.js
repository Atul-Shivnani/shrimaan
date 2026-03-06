import prisma from "@/lib/prisma";

function Bar({ value, max }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div className="flex-1 bg-slate-100 rounded-full h-2.5 overflow-hidden">
      <div className="bg-sky-500 h-2.5 rounded-full" style={{ width: `${pct}%` }} />
    </div>
  );
}

export default async function AdminDashboardPage() {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const [contactsCount, unreadContacts, totalPageViews, totalVisitors, recentContacts, recentViews] = await Promise.all([
    prisma.contact.count(),
    prisma.contact.count({ where: { read: false } }),
    prisma.pageView.count(),
    prisma.visitor.count(),
    prisma.contact.findMany({ orderBy: { createdAt: "desc" }, take: 5 }),
    prisma.pageView.findMany({
      where: { createdAt: { gte: sevenDaysAgo } },
      select: { createdAt: true },
    }),
  ]);

  // Traffic last 7 days
  const dayMap = {};
  for (const pv of recentViews) {
    const day = pv.createdAt.toISOString().split("T")[0];
    dayMap[day] = (dayMap[day] || 0) + 1;
  }
  const byDay = Object.entries(dayMap).sort(([a], [b]) => a.localeCompare(b));
  const maxDay = Math.max(1, ...byDay.map(([, c]) => c));

  // Peak hours last 7 days
  const hourArr = Array(24).fill(0);
  for (const pv of recentViews) {
    hourArr[pv.createdAt.getHours()]++;
  }
  const maxHour = Math.max(1, ...hourArr);
  const peakHour = hourArr.indexOf(Math.max(...hourArr));

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 shadow">
          <p className="text-sm text-slate-500">Total Contacts</p>
          <p className="text-3xl font-bold text-slate-900 mt-1">{contactsCount}</p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow border-l-4 border-sky-500">
          <p className="text-sm text-slate-500">Unread Contacts</p>
          <p className="text-3xl font-bold text-sky-600 mt-1">{unreadContacts}</p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow">
          <p className="text-sm text-slate-500">Page Views</p>
          <p className="text-3xl font-bold text-slate-900 mt-1">{totalPageViews}</p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow">
          <p className="text-sm text-slate-500">Visitors</p>
          <p className="text-3xl font-bold text-slate-900 mt-1">{totalVisitors}</p>
        </div>
      </div>

      {/* Traffic — Last 7 Days */}
      <section className="bg-white rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-4 text-slate-800">Traffic — Last 7 Days</h2>
        {byDay.length === 0 ? (
          <p className="text-slate-400 text-sm">No page views yet.</p>
        ) : (
          <div className="space-y-2">
            {byDay.map(([date, count]) => (
              <div key={date} className="flex items-center gap-3 text-sm">
                <span className="w-28 text-slate-500 shrink-0">{date}</span>
                <Bar value={count} max={maxDay} />
                <span className="w-8 text-right font-medium text-slate-700 shrink-0">{count}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Peak Hours */}
      <section className="bg-white rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-1 text-slate-800">Peak Hours — Last 7 Days</h2>
        {recentViews.length > 0 && (
          <p className="text-sm text-slate-500 mb-4">
            Busiest hour: <span className="font-semibold text-sky-600">{String(peakHour).padStart(2, "0")}:00–{String(peakHour + 1).padStart(2, "0")}:00</span>
          </p>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {hourArr.map((count, hour) => (
            <div key={hour} className="flex items-center gap-2 text-sm">
              <span className="w-12 text-slate-500 shrink-0">{String(hour).padStart(2, "0")}:00</span>
              <Bar value={count} max={maxHour} />
              <span className="w-6 text-right font-medium text-slate-700 shrink-0">{count}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Contacts */}
      <section className="bg-white rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-4 text-slate-800">Recent Contacts</h2>
        {recentContacts.length === 0 ? (
          <p className="text-slate-400 text-sm">No contacts yet.</p>
        ) : (
          <div className="space-y-3">
            {recentContacts.map((contact) => (
              <div key={contact.id} className={`border rounded-xl p-4 ${contact.read ? "" : "border-sky-200 bg-sky-50"}`}>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold text-slate-900">{contact.name}</p>
                    <p className="text-sm text-slate-500">{contact.email}{contact.phone ? ` · ${contact.phone}` : ""}</p>
                  </div>
                  {!contact.read && (
                    <span className="text-xs bg-sky-100 text-sky-700 rounded-full px-2 py-0.5 font-semibold shrink-0">Unread</span>
                  )}
                </div>
                <p className="text-sm text-slate-600 mt-2 line-clamp-2">{contact.message}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
