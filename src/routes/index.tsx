import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "週末自然散步｜大安森林公園（虛構教學活動）" },
      { name: "description", content: "2026/12/12 上午 9:00–12:00，在大安森林公園慢慢走、看樹、聽鳥。本活動為虛構教學示範。" },
      { property: "og:title", content: "週末自然散步｜大安森林公園" },
      { property: "og:description", content: "2026/12/12 上午 9:00–12:00 大安森林公園自然散步（虛構教學活動）。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const highlights = [
  { icon: "🌳", title: "認識樹木", text: "跟著導覽認識公園裡的榕樹、樟樹與落羽松。" },
  { icon: "🐦", title: "聆聽鳥鳴", text: "放慢腳步，辨認五色鳥、白頭翁等常見鳥類。" },
  { icon: "🍃", title: "自然筆記", text: "用簡單的速寫與文字，記錄今天的發現。" },
];

const schedule = [
  ["09:00", "集合、報到與暖身"],
  ["09:20", "樹木導覽散步"],
  ["10:30", "生態池賞鳥時間"],
  ["11:20", "自然筆記分享"],
  ["12:00", "活動結束"],
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <div className="bg-accent text-accent-foreground text-center text-sm py-2 px-4 font-medium">
        ⚠️ 本頁為虛構教學活動示範，活動內容並非真實舉辦，請勿實際前往報名。
      </div>

      <header className="bg-hero">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <span className="inline-block rounded-full bg-card/70 px-4 py-1 text-sm text-primary border border-border">
            虛構教學活動 · Demo
          </span>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl font-bold tracking-tight">週末自然散步</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            在城市中央的森林裡，花一個早上慢慢走、深呼吸，重新和樹與鳥打招呼。
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-primary text-primary-foreground px-4 py-2">2026 年 12 月 12 日（六）</span>
            <span className="rounded-full bg-card px-4 py-2 border border-border">上午 9:00 – 12:00</span>
            <span className="rounded-full bg-card px-4 py-2 border border-border">大安森林公園</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        <section className="py-20">
          <h2 className="font-serif text-3xl font-bold">活動介紹</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            這是一場輕鬆、適合所有年齡的自然散步。不需要任何專業知識，只要帶著好奇心和舒適的鞋子。
            我們會在導覽員帶領下繞行公園，觀察季節變化中的植物與動物。
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-2xl bg-card border border-border p-6 shadow-soft">
                <div className="text-3xl">{h.icon}</div>
                <h3 className="mt-4 font-serif text-xl font-semibold">{h.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 border-t border-border grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-bold">時間與地點</h2>
            <dl className="mt-6 space-y-4">
              <div><dt className="text-sm text-muted-foreground">日期</dt><dd className="text-lg font-medium">2026 年 12 月 12 日（星期六）</dd></div>
              <div><dt className="text-sm text-muted-foreground">時間</dt><dd className="text-lg font-medium">上午 9:00 – 12:00</dd></div>
              <div><dt className="text-sm text-muted-foreground">地點</dt><dd className="text-lg font-medium">大安森林公園（台北市大安區新生南路二段 1 號）</dd></div>
              <div><dt className="text-sm text-muted-foreground">集合點</dt><dd className="text-lg font-medium">捷運大安森林公園站 2 號出口旁廣場</dd></div>
            </dl>
          </div>
          <div>
            <h3 className="font-serif text-2xl font-semibold">當日流程</h3>
            <ol className="mt-6 space-y-3">
              {schedule.map(([t, d]) => (
                <li key={t} className="flex gap-4 rounded-xl bg-secondary px-4 py-3">
                  <span className="font-semibold text-primary w-14">{t}</span>
                  <span className="text-secondary-foreground">{d}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-20 border-t border-border">
          <h2 className="font-serif text-3xl font-bold">集合地圖</h2>
          <p className="mt-2 text-muted-foreground">請於 8:50 前抵達集合點，找穿綠色背心的工作人員報到。</p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-soft h-[420px]">
            <iframe
              title="大安森林公園集合地圖"
              className="h-full w-full"
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=121.5290%2C25.0255%2C121.5420%2C25.0345&layer=mapnik&marker=25.0335%2C121.5355"
            />
          </div>
          <a
            className="mt-4 inline-block text-sm text-primary underline underline-offset-4"
            href="https://www.openstreetmap.org/?mlat=25.0335&mlon=121.5355#map=17/25.0335/121.5355"
            target="_blank" rel="noreferrer"
          >
            在新視窗開啟地圖 →
          </a>
        </section>
      </main>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        本頁面為虛構教學活動示範，所有資訊僅供學習使用。
      </footer>
    </div>
  );
}
