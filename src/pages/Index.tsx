import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import BeforeAfter from "@/components/landing/BeforeAfter";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import Testimonials from "@/components/landing/Testimonials";
import AITrust from "@/components/landing/AITrust";
import Integrations from "@/components/landing/Integrations";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import { faqs } from "@/components/landing/FAQ";

const Index = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Corteza — AI Team Memory for Product Teams"
        description="Stop losing decisions in meetings, Slack, and docs. Corteza captures what your team decides and why — then makes it searchable in seconds with AI."
        path="/"
        jsonLd={faqSchema}
      />
      <Header />
      <main>
        <Hero />
        <BeforeAfter />
        <HowItWorks />
        <Features />
        <Testimonials />
        <AITrust />
        <Integrations />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
