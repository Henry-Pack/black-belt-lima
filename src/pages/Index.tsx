import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { QuemSomos } from "@/components/QuemSomos";
import { Senseis } from "@/components/Senseis";
import { Espaco } from "@/components/Espaco";
import { Treinos } from "@/components/Treinos";
import { GaleriaPreview } from "@/components/GaleriaPreview";
import { Avaliacoes } from "@/components/Avaliacoes";
import { Contato } from "@/components/Contato";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <QuemSomos />
      <Senseis />
      <Espaco />
      <Treinos />
      <GaleriaPreview />
      <Avaliacoes />
      <Contato />
      <Footer />
    </div>
  );
};

export default Index;
