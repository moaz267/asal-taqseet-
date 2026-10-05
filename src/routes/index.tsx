import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "سلعة | شراء السلع بالتقسيط" },
    { name: "description", content: "اطلب السلعة التي تحتاجها وتعرّف على إمكانية شرائها بالتقسيط وفق نظام بيع وضوابط واضحة." },
    { property: "og:title", content: "سلعة | شراء السلع بالتقسيط" },
    { property: "og:description", content: "نظام بيع بالتقسيط مصمم وفق الضوابط الشرعية." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <HomePage />;
}
