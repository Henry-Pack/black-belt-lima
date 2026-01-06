import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: "Cristofer Maeski",
    badge: "Local Guide",
    text: "Boa localização, ótimo ambiente, acolhedor, com estacionamento. Recomendo.",
    rating: 5,
  },
  {
    name: "Diego Cardenal",
    badge: "Local Guide",
    text: "Ambiente muito bom para família e prática esportiva. Super recomendo.",
    rating: 5,
  },
  {
    name: "Ana Lúcia Souza Padilha",
    badge: "Local Guide",
    text: "Ótimo ambiente e atendimento. Super recomendo as aulas de judô.",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(rating)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
    ))}
  </div>
);

export const Avaliacoes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-background" ref={ref}>
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
              Depoimentos
            </span>
            <div className="w-12 h-px bg-accent" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
            O QUE DIZEM <span className="text-accent">NOSSOS ALUNOS</span>
          </h2>

          {/* Google Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-4 bg-card border border-border px-6 py-3 rounded-sm"
          >
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 fill-accent text-accent" />
              <span className="font-display text-2xl text-foreground">4,7</span>
            </div>
            <div className="w-px h-8 bg-border" />
            <span className="text-sm text-muted-foreground">
              Mais de 60 avaliações no Google
            </span>
          </motion.div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group bg-card border border-border p-8 rounded-sm hover:border-accent transition-colors duration-300"
            >
              <StarRating rating={review.rating} />

              <blockquote className="my-6 text-charcoal leading-relaxed">
                "{review.text}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <span className="font-display text-lg text-foreground">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {review.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{review.badge}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <Button variant="martial" size="lg" onClick={scrollToContact}>
            Treine em um Ambiente Recomendado
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
