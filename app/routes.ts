import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("categorias", "routes/categorias.tsx"),
  route("categorias/:slug", "routes/categorias.$slug.tsx"),
  route("producto/:slug", "routes/producto.$slug.tsx"),
  route("cotizar", "routes/cotizar.tsx"),
  route("contacto", "routes/contacto.tsx"),
  route("marcas", "routes/marcas.tsx"),
  route("aviso-privacidad", "routes/aviso-privacidad.tsx"),
  route("terminos", "routes/terminos.tsx"),
] satisfies RouteConfig;
