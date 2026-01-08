import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import senseiImage from "@/assets/sensei-portrait.jpg";

const highlights = [
  { icon: Award, text: "Experiência comprovada" },
  { icon: BookOpen, text: "Formação técnica" },
  { icon: Users, text: "Ensino baseado em respeito e tradição" },
];

export const Senseis = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="senseis" className="py-24 lg:py-32 bg-muted/30" ref={ref}>
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
              Liderança
            </span>
            <div className="w-12 h-px bg-accent" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground">
            NOSSOS <span className="text-accent">SENSEIS</span>
          </h2>
        </motion.div>

        {/* Sensei Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-5 gap-8 items-center bg-card border border-border p-8 md:p-12 rounded-sm">
            {/* Image */}
            <div className="md:col-span-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src={senseiImage}
                  alt="Sensei Adriano Lima"
                  className="w-full h-full object-cover contrast-105 hover:contrast-110 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black-belt/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-16 h-1 bg-accent mb-2" />
                  <p className="text-sm font-display tracking-wider text-white">
                    FUNDADOR
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3 space-y-6">
              <div>
                <h3 className="font-display text-3xl md:text-4xl text-foreground mb-2">
                  SENSEI ADRIANO <span className="text-accent">LIMA</span>
                </h3>
                <p className="text-sm text-muted-foreground tracking-wide">
                  Fundador e Responsável Técnico
                </p>
              </div>

              <p className="text-charcoal leading-relaxed">
                O Sensei Adriano Lima é o fundador da Black Belt Lima e responsável 
                por transmitir os valores e a filosofia da academia. Com ampla 
                experiência no ensino do Judô, conduz os treinos com 
                foco em técnica, disciplina e evolução constante.
              </p>

              {/* Highlights */}
              <div className="space-y-3 pt-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm text-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4">
                <Button
                  variant="outline"
                  asChild
                  className="border-charcoal text-charcoal hover:bg-charcoal hover:text-background"
                >
                  <a
                    href="https://wa.me/5551984062913"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Conheça Nossa Equipe
                  </a>
              </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
