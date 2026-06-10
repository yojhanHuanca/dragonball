import type { LucideIcon } from "lucide-react"
import { Activity, BarChart3, Bolt, Brain, ShieldCheck, Sparkles, Trophy, Users } from "lucide-react"

export const navItems = [
  { label: "Experiencia", href: "#experience" },
  { label: "Sagas", href: "#sagas" },
  { label: "Ranking", href: "#ranking" },
  { label: "FAQ", href: "#faq" },
]

export const stats = [
  { label: "Guerreros indexados", value: "128", detail: "con historial de combate" },
  { label: "Sagas analizadas", value: "12", detail: "canon y eventos clave" },
  { label: "Tiempo de busqueda", value: "0.4s", detail: "interaccion promedio" },
  { label: "Conversion CTA", value: "38%", detail: "flujo optimizado" },
]

export const features: Array<{
  icon: LucideIcon
  title: string
  description: string
}> = [
  {
    icon: Bolt,
    title: "Exploracion instantanea",
    description: "Encuentra personajes, sagas y tecnicas con una interfaz rapida, clara y sin friccion.",
  },
  {
    icon: BarChart3,
    title: "Datos con contexto",
    description: "Cada tarjeta prioriza informacion accionable: poder, rol, arco narrativo y progreso.",
  },
  {
    icon: ShieldCheck,
    title: "Experiencia accesible",
    description: "Contraste alto, navegacion por teclado, estados visibles y jerarquia legible en todo tamano.",
  },
]

export const benefits = [
  "Modo claro y oscuro con preferencia persistente.",
  "Componentes reutilizables preparados para crecer.",
  "CTAs visibles sin saturar la lectura.",
  "Animaciones sutiles que guian sin distraer.",
]

export const sagas = [
  { name: "Saiyan", status: "Origen", progress: 78, tone: "from-orange-500 to-amber-300" },
  { name: "Namek", status: "Escalada", progress: 92, tone: "from-emerald-500 to-cyan-300" },
  { name: "Androides", status: "Amenaza", progress: 86, tone: "from-sky-500 to-violet-400" },
]

export const fighters = [
  { name: "Goku", role: "Saiyan", initials: "GK", power: 96 },
  { name: "Vegeta", role: "Principe", initials: "VG", power: 94 },
  { name: "Gohan", role: "Potencial", initials: "GH", power: 91 },
  { name: "Piccolo", role: "Estratega", initials: "PC", power: 88 },
]

export const testimonials = [
  {
    quote: "La interfaz hace que explorar personajes se sienta rapido, premium y muy facil de entender.",
    author: "Mika Tanaka",
    role: "Product Designer",
    initials: "MT",
  },
  {
    quote: "El ranking y las sagas quedan claros desde el primer scroll. Excelente para convertir curiosidad en accion.",
    author: "Leo Vargas",
    role: "Frontend Lead",
    initials: "LV",
  },
  {
    quote: "Visualmente potente sin sacrificar legibilidad. El modo oscuro se siente especialmente pulido.",
    author: "Ari Chen",
    role: "UX Researcher",
    initials: "AC",
  },
]

export const faqs = [
  {
    question: "La pagina funciona en movil?",
    answer: "Si. La navegacion cambia a Sheet, las tarjetas se reorganizan y los CTAs mantienen tamano tactil comodo.",
  },
  {
    question: "Se puede conectar a una API real?",
    answer: "La arquitectura queda lista para reemplazar los arreglos locales por datos remotos sin tocar las secciones visuales.",
  },
  {
    question: "Por que usar shadcn/UI?",
    answer: "Permite componentes accesibles y consistentes, con control total de estilos mediante Tailwind y Radix.",
  },
]

export const trustItems = [
  { icon: Sparkles, label: "Premium UI" },
  { icon: Activity, label: "Rapida" },
  { icon: Users, label: "Responsive" },
  { icon: Brain, label: "Clara" },
  { icon: Trophy, label: "Conversion" },
]
