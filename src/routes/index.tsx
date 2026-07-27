import { createFileRoute } from "@tanstack/react-router";

import { Background } from "@/components/botinty/Background";
import { Beneficios } from "@/components/botinty/Beneficios";
import { CasosDeUso } from "@/components/botinty/CasosDeUso";
import { ComoFunciona } from "@/components/botinty/ComoFunciona";
import { CtaFinal } from "@/components/botinty/CtaFinal";
import { DemoInteractiva } from "@/components/botinty/DemoInteractiva";
import { Faq } from "@/components/botinty/Faq";
import { FloatingCta } from "@/components/botinty/FloatingCta";
import { Footer } from "@/components/botinty/Footer";
import { Formulario } from "@/components/botinty/Formulario";
import { Funcionalidades } from "@/components/botinty/Funcionalidades";
import { Hero } from "@/components/botinty/Hero";
import { Integraciones } from "@/components/botinty/Integraciones";
import { Navbar } from "@/components/botinty/Navbar";
import { Problema } from "@/components/botinty/Problema";
import { Seguridad } from "@/components/botinty/Seguridad";
import { faq } from "@/content/site";

const TITULO = "Bot Inty | Inteligencia artificial para tus procesos internos";
const DESCRIPCION =
  "Automatiza solicitudes, entrega documentos y responde las preguntas de tus colaboradores con Bot Inty, el asistente empresarial de inteligencia artificial.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRIPCION },
      {
        name: "keywords",
        content:
          "bot conversacional para empresas, inteligencia artificial para empleados, automatización de procesos internos, chatbot para talento humano, asistente virtual para empleados, automatización de solicitudes de nómina, chatbot empresarial, inteligencia artificial para recursos humanos, autoservicio para empleados, automatización empresarial con IA",
      },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRIPCION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_CO" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITULO },
      { name: "twitter:description", content: DESCRIPCION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Bot Inty",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: DESCRIPCION,
          inLanguage: "es",
          publisher: { "@type": "Organization", name: "Intelecto" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Problema />
        <DemoInteractiva />
        <Funcionalidades />
        <ComoFunciona />
        <CasosDeUso />
        <Beneficios />
        <Integraciones />
        <Seguridad />
        <Faq />
        <CtaFinal />
        <Formulario />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
