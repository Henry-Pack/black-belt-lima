import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import { Link } from "react-router-dom";

const previewImages = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
];

export const GaleriaPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 lg:py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <Camera className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
                Galeria
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              VEJA NOSSA <span className="text-accent">GALERIA</span>
            </h2>
            <p className="text-charcoal mb-6 max-w-md mx-auto lg:mx-0">
              Confira os melhores momentos dos treinos, competições e eventos da Black Belt Lima.
            </p>
            <Link to="/galeria">
              <Button variant="martial" size="lg">
                Ver Todas as Fotos
              </Button>
            </Link>
          </motion.div>

          {/* Preview Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="grid grid-cols-2 gap-3">
              {previewImages.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="aspect-square overflow-hidden rounded-sm bg-muted"
                >
                  <img
                    src={src}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
