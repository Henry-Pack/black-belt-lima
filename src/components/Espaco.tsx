import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, MapPin, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import dojoImage from "@/assets/dojo-space.jpg";

const features = [
  { icon: Shield, title: "Ambiente organizado e seguro" },
  { icon: MapPin, title: "Estrutura adequada" },
  { icon: Car, title: "Estacionamento" },
];

export const Espaco = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="espaco" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <img
                src={dojoImage}
                alt="Espaço da Academia Black Belt Lima"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-belt/30 to-transparent" />
            </div>

            {/* Decorative Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent -z-10 rounded-sm" />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-accent" />
              <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
                Estrutura
              </span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8">
              NOSSO <span className="text-accent">ESPAÇO</span>
            </h2>

            <p className="text-lg text-charcoal leading-relaxed mb-10">
              A Black Belt Lima oferece um espaço preparado para treinos de alto 
              nível, com estrutura adequada, tatames de qualidade e ambiente seguro 
              para crianças, jovens e adultos.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-muted flex items-center justify-center rounded-sm">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">
                    {feature.title}
                  </span>
                </motion.div>
              ))}
            </div>

            <Button variant="martial" size="lg" onClick={scrollToContact}>
              Visite Nossa Academia
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
