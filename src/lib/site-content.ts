import {
  BadgeCheck, Box, CheckCircle2, ClipboardCheck, FileSearch, Handshake,
  PackageCheck, ScanSearch, ShoppingBag, UserRoundSearch,
} from "lucide-react";

export const navigation = [
  { to: "/", label: "الرئيسية" },
  { to: "/how-it-works", label: "كيف نعمل؟" },
  { to: "/sharia-guidelines", label: "الضوابط الشرعية" },
  { to: "/customer-terms", label: "شروط العميل" },
  { to: "/evaluation", label: "كيف يتم التقييم؟" },
] as const;

export const processSteps = [
  { title: "طلب العميل", icon: ShoppingBag, description: "تحدد السلعة والموديل والمواصفات والمورد أو المكان إن كان محددًا، والمدة التي تريد التقسيط عليها." },
  { title: "دراسة العميل", icon: UserRoundSearch, description: "قبل الشراء، يتم جمع البيانات والمستندات وتحديد القدرة على السداد." },
  { title: "الموافقة", icon: BadgeCheck, description: "يتم تحديد سعر الشراء وسعر البيع بالتقسيط والمقدم وعدد الأقساط وقيمة كل قسط والضمانات المقبولة." },
  { title: "شراء السلعة", icon: Box, description: "يتم شراء السلعة من المورد." },
  { title: "تملك وقبض السلعة", icon: PackageCheck, description: "يتم التأكد أن السلعة أصبحت في ملكنا وتحت مسؤوليتنا قبل بيعها للعميل." },
  { title: "البيع بالتقسيط", icon: Handshake, description: "يتم توقيع عقد البيع مع العميل بالسعر النهائي المتفق عليه." },
];

export const shariaFlow = ["طلب العميل", "دراسة العميل", "الموافقة", "شراء السلعة", "تملك وقبض السلعة", "البيع بالتقسيط"];

export const evaluationStages = [
  { title: "استلام الطلب", icon: ClipboardCheck },
  { title: "مراجعة البيانات", icon: FileSearch },
  { title: "دراسة الطلب", icon: ScanSearch },
  { title: "إبلاغ العميل بالنتيجة", icon: CheckCircle2 },
];