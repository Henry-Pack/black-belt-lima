import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const trainingPrograms = [
  {
    title: "Judô",
    subtitle: "A arte suave",
    features: ["Formação técnica", "Disciplina e respeito", "Treinos para crianças e adultos"],
    accent: true,
  },
  {
    title: "Jiu-Jitsu",
    subtitle: "A arte da defesa",
    features: ["Defesa pessoal", "Técnica e estratégia", "Condicionamento físico"],
    accent: false,
  },
  {
    title: "Treino Funcional",
    subtitle: "Performance total",
    features: ["Força", "Mobilidade", "Condicionamento geral"],
    accent: false,
  },
];

export const Treinos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="treinos" className="py-24 lg:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-accent" />
            <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
              Modalidades
            </span>
            <div className="w-12 h-px bg-accent" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-4">
            NOSSOS <span className="text-accent">TREINOS</span>
          </h2>
          <p className="text-charcoal max-w-2xl mx-auto">
            Oferecemos modalidades completas para seu desenvolvimento físico e mental
          </p>
        </motion.div>

        {/* Training Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {trainingPrograms.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative p-8 rounded-sm transition-all duration-500 ${
                program.accent
                  ? "bg-foreground text-background"
                  : "bg-card border border-border hover:border-accent"
              }`}
            >
              {/* Card Header */}
              <div className="mb-8">
                <p
                  className={`text-xs tracking-widest uppercase mb-2 ${
                    program.accent ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {program.subtitle}
                </p>
                <h3
                  className={`font-display text-4xl ${
                    program.accent ? "text-background" : "text-foreground"
                  }`}
                >
                  {program.title}
                </h3>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {program.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={`flex items-center gap-3 ${
                      program.accent ? "text-background/80" : "text-charcoal"
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        program.accent ? "bg-accent" : "bg-accent"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Decorative Line */}
              <div
                className={`absolute bottom-0 left-0 w-0 h-1 transition-all duration-500 group-hover:w-full ${
                  program.accent ? "bg-accent" : "bg-accent"
                }`}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button variant="martial" size="lg" onClick={scrollToContact}>
            Agendar Aula Experimental
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
