import type { Route } from "./+types/home";
import { getCategories, getFeaturedProducts, getBrands } from "~/lib/data.server";
import { siteSettings } from "~/lib/constants";

import { Navbar } from "~/components/layout/Navbar";
import { Footer } from "~/components/layout/Footer";
import { WhatsAppFAB } from "~/components/whatsapp/WhatsAppFAB";
import { ScrollProgressBar } from "~/components/decorative/ScrollProgressBar";
import { WaveDivider } from "~/components/decorative/WaveDivider";

import { Hero } from "~/components/home/Hero";
import { Solutions } from "~/components/home/Solutions";
import { Process360 } from "~/components/home/Process360";
import { BrandCarousel } from "~/components/home/BrandCarousel";
import { FeaturedCategories } from "~/components/home/FeaturedCategories";
import { PrintingTechniques } from "~/components/home/PrintingTechniques";
import { CompanyStats } from "~/components/home/CompanyStats";
import { ContactCTA } from "~/components/home/ContactCTA";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${siteSettings.name} | Articulos Promocionales Personalizados` },
    { name: "description", content: siteSettings.subtitle },
    { property: "og:title", content: `${siteSettings.name} - Articulos Promocionales` },
    { property: "og:description", content: siteSettings.subtitle },
    { property: "og:type", content: "website" },
  ];
}

export async function loader({}: Route.LoaderArgs) {
  const [categories, featuredProducts, brands] = await Promise.all([
    getCategories(),
    getFeaturedProducts(),
    getBrands(),
  ]);

  return { categories, featuredProducts, brands };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { categories, brands } = loaderData;

  return (
    <>
      <ScrollProgressBar />
      <Navbar />

      <main>
        <Hero />
        <WaveDivider color="white" />
        <Solutions />
        <WaveDivider color="var(--color-surface-50)" />
        <FeaturedCategories categories={categories} />
        <WaveDivider color="white" />
        <Process360 />
        <CompanyStats />
        <WaveDivider color="white" />
        <PrintingTechniques />
        <WaveDivider color="var(--color-surface-50)" />
        <BrandCarousel brands={brands} />
        <ContactCTA />
      </main>

      <Footer />
      <WhatsAppFAB />
    </>
  );
}
