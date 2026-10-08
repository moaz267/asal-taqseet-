import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, MessageCircle, PackageOpen, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { navigation } from "@/lib/site-content";

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div dir="rtl" className="min-h-screen overflow-x-clip bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6 lg:flex lg:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="سلعة - الرئيسية">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[0_4px_0_0_var(--primary-depth)]"><PackageOpen size={22} /></span>
            <span className="truncate font-display text-xl font-black">سلعة<span className="text-primary">.</span></span>
          </Link>
          <nav className="mr-auto hidden items-center gap-1 lg:flex" aria-label="التنقل الرئيسي">
            {navigation.map((item) => (
              <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="rounded-full px-3 py-2 text-sm font-bold text-muted-foreground transition hover:bg-card hover:text-foreground" activeProps={{ className: "bg-card text-foreground" }}>{item.label}</Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <Button asChild className="hidden sm:inline-flex"><Link to="/request">اطلب سلعتك الآن</Link></Button>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "إغلاق القائمة" : "فتح القائمة"} aria-expanded={open}>{open ? <X /> : <Menu />}</Button>
          </div>
        </div>
        <div className={open ? "mobile-menu open" : "mobile-menu"}>
          <nav className="space-y-1 px-4 pb-5" aria-label="التنقل على الهاتف">
            {[...navigation, { to: "/request" as const, label: "اطلب سلعتك" }].map((item) => <Link key={item.to} to={item.to} className="block rounded-xl px-4 py-3 font-bold text-muted-foreground hover:bg-card hover:text-foreground">{item.label}</Link>)}
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <Footer />
      <a href="https://wa.me/201094440373" target="_blank" rel="noreferrer" aria-label="تواصل عبر واتساب" className="whatsapp fixed bottom-5 left-4 z-40 flex min-h-12 items-center gap-2 rounded-full bg-whatsapp px-4 font-black text-whatsapp-foreground shadow-xl sm:left-6"><MessageCircle size={22} fill="currentColor" /><span className="hidden sm:inline">واتساب</span></a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-surface-deep px-4 pb-8 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div><div className="font-display text-2xl font-black">سلعة<span className="text-primary">.</span></div><p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">خدمة لطلب السلعة التي تحتاجها وشرائها بالتقسيط وفق نظام بيع وضوابط واضحة.</p></div>
        <div><h2 className="font-display font-bold">صفحات الموقع</h2><div className="mt-4 grid gap-2 text-sm text-muted-foreground">{navigation.map((item) => <Link key={item.to} to={item.to} className="w-fit hover:text-primary">{item.label}</Link>)}</div></div>
        <div><h2 className="font-display font-bold">تواصل واطلب</h2><div className="mt-4 grid gap-3 text-sm text-muted-foreground"><Link to="/request" className="w-fit hover:text-primary">اطلب سلعتك</Link><a dir="ltr" href="https://wa.me/201094440373" target="_blank" rel="noreferrer" className="w-fit hover:text-primary">01094440373</a><span>الشروط والأحكام — تُضاف لاحقًا</span><span>سياسة الخصوصية — تُضاف لاحقًا</span></div></div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-border pt-6 text-center text-xs text-muted-foreground">سلعة — بيع بالتقسيط وفق نظام واضح</div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children?: ReactNode }) {
  return <section className="page-intro"><div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8"><span className="eyebrow">{eyebrow}</span><h1 className="mt-5 max-w-4xl font-display text-4xl font-black leading-tight sm:text-6xl">{title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p>{children}</div></section>;
}

export function CTASection() {
  return <section className="px-4 py-20 sm:px-6 lg:px-8"><div className="cta-panel mx-auto max-w-7xl overflow-hidden rounded-[2rem] p-8 text-center sm:p-14"><h2 className="font-display text-3xl font-black text-cta-foreground sm:text-5xl">عندك سلعة معينة في بالك؟</h2><p className="mx-auto mt-4 max-w-2xl text-lg text-cta-foreground/80">ابعتلنا اسم السلعة والموديل، ونبحث إمكانية توفيرها لك بالتقسيط.</p><Button asChild variant="dark" size="lg" className="mt-8"><Link to="/request">اطلب سلعتك الآن</Link></Button></div></section>;
}