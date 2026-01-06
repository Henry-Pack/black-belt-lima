import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Heart, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Shield,
    title: "Disciplina",
    description: "Formação de caráter através da prática constante",
  },
  {
    icon: Heart,
    title: "Respeito",
    description: "Valores que transcendem o tatame",
  },
  {
    icon: Target,
    title: "Técnica",
    description: "Ensino focado na evolução técnica individual",
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Ambiente acolhedor para toda a família",
  },
];

export const QuemSomos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="quem-somos" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-accent" />
              <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
                Nossa História
              </span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8">
              QUEM <span className="text-accent">SOMOS</span>
            </h2>

            <div className="space-y-6 text-charcoal leading-relaxed">
              <p className="text-lg">
                A <strong className="text-foreground">Black Belt Lima</strong> é uma academia 
                dedicada à formação esportiva e pessoal através do Judô e do Jiu-Jitsu. 
                Mais do que técnicas de luta, ensinamos valores como disciplina, respeito 
                e autocontrole.
              </p>
              <p>
                Nosso espaço foi criado para receber alunos de todas as idades, em um 
                ambiente acolhedor, seguro e profissional. Acreditamos que as artes 
                marciais são ferramentas poderosas para o desenvolvimento integral do 
                ser humano.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10"
            >
              <Button variant="martial" size="lg" onClick={scrollToContact}>
                Faça Parte da Black Belt Lima
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="group p-6 bg-card border border-border rounded-sm hover:border-accent transition-colors duration-300"
              >
                <value.icon className="w-8 h-8 text-accent mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-display text-xl text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
