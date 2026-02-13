import type { NavLink, CategoryNavItem, Solution, ProcessStep, Technique, Stat, SiteSettings } from "./types";

export const siteSettings: SiteSettings = {
  name: "Ale Promocionales",
  tagline: "Tu marca, nuestro impulso",
  subtitle: "Articulos promocionales personalizados para tu empresa",
  whatsapp: "5215512345678",
  email: "contacto@alepromocionales.mx",
  address: "Ciudad de Mexico, Mexico",
  instagram: "https://instagram.com/alepromocionales",
  facebook: "https://facebook.com/alepromocionales",
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/categorias", label: "Categorias" },
  { href: "/marcas", label: "Marcas" },
  { href: "/cotizar", label: "Cotizar" },
  { href: "/contacto", label: "Contacto" },
];

export const categoryNavItems: CategoryNavItem[] = [
  { slug: "textiles", name: "Textiles", icon: "Shirt" },
  { slug: "escritura", name: "Escritura", icon: "PenTool" },
  { slug: "tecnologia", name: "Tecnologia", icon: "Smartphone" },
  { slug: "drinkware", name: "Drinkware", icon: "Coffee" },
  { slug: "bolsas", name: "Bolsas", icon: "ShoppingBag" },
  { slug: "oficina", name: "Oficina", icon: "Briefcase" },
];

export const solutions: Solution[] = [
  {
    title: "Eventos corporativos",
    description: "Articulos personalizados para congresos, ferias y conferencias.",
    icon: "CalendarDays",
    color: "primary",
  },
  {
    title: "Regalos empresariales",
    description: "Obsequios premium que fortalecen relaciones comerciales.",
    icon: "Gift",
    color: "coral",
  },
  {
    title: "Campanas de marketing",
    description: "Productos que maximizan visibilidad y alcance de marca.",
    icon: "Megaphone",
    color: "electric",
  },
  {
    title: "Kit de bienvenida",
    description: "Paquetes personalizados para nuevos colaboradores.",
    icon: "Package",
    color: "mint",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Ideacion",
    description: "Entendemos tu marca y definimos la estrategia ideal.",
    icon: "Lightbulb",
  },
  {
    step: 2,
    title: "Diseno",
    description: "Creamos propuestas visuales con tu identidad.",
    icon: "Palette",
  },
  {
    step: 3,
    title: "Produccion",
    description: "Fabricamos con materiales y tecnicas de calidad.",
    icon: "Factory",
  },
  {
    step: 4,
    title: "Logistica",
    description: "Entrega puntual en cualquier parte de Mexico.",
    icon: "Truck",
  },
];

export const techniques: Technique[] = [
  {
    id: "serigrafia",
    name: "Serigrafia",
    description: "Impresion directa sobre superficies planas. Ideal para grandes volumenes con colores solidos.",
    image: "/images/techniques/serigrafia.svg",
  },
  {
    id: "sublimacion",
    name: "Sublimacion",
    description: "Transferencia fotografica full-color sobre poliester y superficies tratadas.",
    image: "/images/techniques/sublimacion.svg",
  },
  {
    id: "bordado",
    name: "Bordado",
    description: "Acabado premium con hilo sobre textiles. Durabilidad y elegancia garantizada.",
    image: "/images/techniques/bordado.svg",
  },
  {
    id: "grabado-laser",
    name: "Grabado Laser",
    description: "Precision milimetrica sobre metal, madera y acrilico. Acabado ejecutivo.",
    image: "/images/techniques/grabado-laser.svg",
  },
  {
    id: "tampografia",
    name: "Tampografia",
    description: "Impresion sobre superficies curvas e irregulares con gran detalle.",
    image: "/images/techniques/tampografia.svg",
  },
  {
    id: "transfer",
    name: "Transfer",
    description: "Impresion full-color sobre textiles oscuros y materiales especiales.",
    image: "/images/techniques/transfer.svg",
  },
];

export const stats: Stat[] = [
  { value: 1000, suffix: "+", label: "Productos disponibles" },
  { value: 10, suffix: "+", label: "Anos de experiencia" },
  { value: 500, suffix: "+", label: "Clientes satisfechos" },
  { value: 50, suffix: "+", label: "Marcas premium" },
];

export const mexicanStates = [
  "Aguascalientes", "Baja California", "Baja California Sur", "Campeche",
  "Chiapas", "Chihuahua", "Ciudad de Mexico", "Coahuila", "Colima",
  "Durango", "Estado de Mexico", "Guanajuato", "Guerrero", "Hidalgo",
  "Jalisco", "Michoacan", "Morelos", "Nayarit", "Nuevo Leon", "Oaxaca",
  "Puebla", "Queretaro", "Quintana Roo", "San Luis Potosi", "Sinaloa",
  "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatan",
  "Zacatecas",
];
