import useEmblaCarousel from "embla-carousel-react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ClipboardList, Scale, SearchCheck } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/site-shell";
import { processSteps, shariaFlow } from "@/lib/site-content";
import heroProducts from "@/assets/hero-products.jpg";
import heroReview from "@/assets/hero-review.jpg";
import heroSource from "@/assets/hero-source.jpg";
import heroProcess from "@/assets/hero-process.jpg";

const slides = [
  { title: "لو بتدور علي بديل شرعي لأنظمة التقسيط التقليدية؟", text: "اطلب السلعة التي تحتاجها، وتعرّف على إمكانية شرائها بالتقسيط وفق نظام بيع وضوابط واضحة.", cta: "اطلب سلعتك الآن", to: "/request" as const, image: heroProducts, tag: "بيع بالتقسيط مصمم وفق الضوابط الشرعية", badge: "سلعة، مش تمويل نقدي" },
  { title: "التزامك مهم عندنا.", text: "ولذلك كل طلب يخضع لنظام تقييم موحد قبل إتمام العملية.", cta: "اعرف كيف يتم التقييم", to: "/evaluation" as const, image: heroReview, tag: "تقييم موحد لكل طلب", badge: "مراجعة واضحة" },
  { title: "مش لازم السلعة تكون معروضة عندنا.", text: "ابعت اسم السلعة والموديل، ونبحث إمكانية توفيرها لك بالتقسيط وفق شروط النظام.", cta: "اطلب سلعتك", to: "/request" as const, image: heroSource, tag: "حدد ما تحتاجه", badge: "نبحث إمكانية توفيرها" },
  { title: "إحنا مش بنبيع لك «فلوس بالتقسيط».", text: "إحنا بنوفر لك السلعة التي تحتاجها، ثم نبيعها لك بالتقسيط وفق نظام واضح.", cta: "اعرف كيف نعمل", to: "/how-it-works" as const, image: heroProcess, tag: "الفكرة ببساطة", badge: "بل سلعة" },
];

export function HomePage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: "rtl" });
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const sync = useCallback(() => emblaApi && setSelected(emblaApi.selectedScrollSnap()), [emblaApi]);
  useEffect(() => { if (!emblaApi) return; sync(); emblaApi.on("select", sync); return () => { emblaApi.off("select", sync); }; }, [emblaApi, sync]);
  useEffect(() => { if (!emblaApi || paused) return; const timer = window.setInterval(() => emblaApi.scrollNext(), 7000); return () => window.clearInterval(timer); }, [emblaApi, paused]);

  return <>
    <section className="relative overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} aria-roledescription="carousel" aria-label="رسائل الخدمة">
      <div ref={emblaRef} className="overflow-hidden"><div className="flex touch-pan-y">{slides.map((slide, index) => <article key={slide.title} className="min-w-0 flex-[0_0_100%] px-4 py-10 sm:px-6 sm:py-16 lg:px-8"><div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
        <div className="reveal-up"><span className="eyebrow">{slide.tag}</span><h1 className="mt-6 max-w-3xl font-display text-4xl font-black leading-[1.2] sm:text-6xl lg:text-7xl">{slide.title}</h1><p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">{slide.text}</p><div className="mt-8 flex flex-wrap gap-4"><Button asChild size="lg"><Link to={slide.to}>{slide.cta}<ArrowLeft size={20} /></Link></Button>{index === 0 && <Button asChild size="lg" variant="outline"><Link to="/how-it-works">اعرف كيف نعمل</Link></Button>}</div></div>
        <div className="hero-visual relative mx-auto w-full max-w-lg"><img src={slide.image} alt="عرض بصري يوضح خدمة توفير وبيع السلع بالتقسيط" width={1024} height={1200} className="aspect-[4/5] w-full rounded-[2rem] object-cover" fetchPriority={index === 0 ? "high" : "auto"} loading={index === 0 ? "eager" : "lazy"} /><div className="floating-label absolute -right-2 top-8 rounded-2xl bg-accent px-4 py-3 font-black text-accent-foreground shadow-xl sm:-right-8">{slide.badge}</div><div className="floating-label-delayed absolute -bottom-4 left-2 rounded-2xl bg-primary px-4 py-3 font-black text-primary-foreground shadow-xl sm:left-[-2rem]">خطوات واضحة</div></div>
      </div></article>)}</div></div>
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3"><Button variant="outline" size="icon" onClick={() => emblaApi?.scrollPrev()} aria-label="الشريحة السابقة"><ArrowRight size={18} /></Button><div className="flex gap-2">{slides.map((slide, index) => <button key={slide.title} onClick={() => emblaApi?.scrollTo(index)} aria-label={`انتقل إلى الشريحة ${index + 1}`} className={index === selected ? "h-2.5 w-8 rounded-full bg-primary transition-all" : "size-2.5 rounded-full bg-muted transition-all"} />)}</div><Button variant="outline" size="icon" onClick={() => emblaApi?.scrollNext()} aria-label="الشريحة التالية"><ArrowLeft size={18} /></Button></div>
    </section>

    <section className="bg-surface-deep px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8"><div className="mx-auto max-w-5xl"><span className="eyebrow">من الطلب إلى السلعة</span><h2 className="mt-5 font-display text-4xl font-black leading-tight sm:text-6xl">اطلب السلعه اللي محتاجها واحنا نوفرهالك بالتقسيط</h2><p className="mt-6 text-xl font-bold">محتاج حاجه ومش قادر تدفع ثمنها كامل ؟</p><p className="mt-3 text-lg text-muted-foreground">ابعتلنا اسم السلعه والموديل ونوفرهالك بالتقسيط.</p><Button asChild size="lg" className="mt-9"><Link to="/request">اطلب سلعتك الآن<ArrowLeft /></Link></Button></div></section>

    <section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end"><div><span className="eyebrow">ست مراحل واضحة</span><h2 className="mt-4 font-display text-4xl font-black sm:text-5xl">كيف نعمل؟</h2></div><Button asChild variant="outline"><Link to="/how-it-works">اعرف التفاصيل<ArrowLeft /></Link></Button></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{processSteps.map((step, index) => <article key={step.title} className="process-card reveal-card" style={{ animationDelay: `${index * 90}ms` }}><div className="flex items-center justify-between"><span className={index % 2 ? "step-number gold" : "step-number"}>{index + 1}</span><step.icon className="text-primary" /></div><h3 className="mt-5 font-display text-xl font-black">{step.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p></article>)}</div></div></section>

    <section className="bg-surface-deep px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"><div><span className="eyebrow">الضوابط الشرعية</span><h2 className="mt-5 font-display text-4xl font-black leading-tight sm:text-5xl">نظام بيع بالتقسيط مصمم وفق الضوابط الشرعية</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">نوفر لك إمكانية شراء السلعة التي تحتاجها من خلال بيع بالتقسيط وفق ضوابط واضحة.</p><Button asChild className="mt-7"><Link to="/sharia-guidelines">اعرف الضوابط الشرعية<ArrowLeft /></Link></Button></div><div className="flow-panel">{shariaFlow.filter((_, i) => i !== 2).map((label, index) => <div key={label} className="flow-row"><span>{index + 1}</span><strong>{label}</strong></div>)}</div></div></section>

    <section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.8fr_1.2fr]"><div className="relative mx-auto grid aspect-square w-full max-w-sm place-items-center"><div className="absolute inset-8 rounded-full border border-primary/30" /><div className="absolute inset-20 rounded-full border border-accent/30" /><div className="grid size-28 place-items-center rounded-[2rem] bg-primary text-primary-foreground shadow-2xl"><SearchCheck size={52} /></div></div><div><span className="eyebrow">مراجعة قبل التنفيذ</span><h2 className="mt-5 font-display text-4xl font-black sm:text-5xl">كل طلب له تقييمه</h2><p className="mt-5 text-lg text-muted-foreground">كل طلب يخضع لنظام تقييم موحد قبل إتمام العملية.</p><p className="mt-3 text-sm text-muted-foreground">تفاصيل معايير التقييم ستُضاف عند اعتمادها.</p><Button asChild variant="outline" className="mt-7"><Link to="/evaluation">كيف يتم التقييم؟<ArrowLeft /></Link></Button></div></div></section>
    <CTASection />
  </>;
}