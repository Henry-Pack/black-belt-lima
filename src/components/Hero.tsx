import { motion } from "framer-motion";
import { ChevronDown, Users, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-judoka.jpg";

const highlights = [
  { icon: Users, text: "Ambiente familiar" },
  { icon: Calendar, text: "Treinos para todas as idades" },
  { icon: Award, text: "Professores qualificados" },
];

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Judoca executando técnica de projeção"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-px h-32 bg-gradient-to-b from-transparent via-accent to-transparent opacity-50" />
      <div className="absolute bottom-1/4 right-8 w-px h-32 bg-gradient-to-b from-transparent via-foreground to-transparent opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Pre-heading */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-px bg-accent" />
              <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
                Academia de Artes Marciais
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-tight mb-6">
              <span className="block text-black-belt drop-shadow-sm">BLACK BELT</span>
              <span className="block text-accent drop-shadow-sm">LIMA</span>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed"
            >
              Disciplina, respeito e evolução através do Judô e do Jiu-Jitsu
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-6 mb-10"
            >
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-charcoal"
                >
                  <item.icon className="w-4 h-4 text-accent" />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="martial"
                size="lg"
                onClick={() => scrollToSection("#contato")}
              >
                Agendar Aula Experimental
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#quem-somos")}
                className="border-charcoal text-charcoal hover:bg-charcoal hover:text-background"
              >
                Conheça a Academia
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          onClick={() => scrollToSection("#quem-somos")}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Rolar para baixo"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};
