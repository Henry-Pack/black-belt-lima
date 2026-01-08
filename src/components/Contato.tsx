import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Instagram, Facebook, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/5500000000000",
    color: "bg-[#25D366] hover:bg-[#20BD5A]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/black_beltlima/",
    color: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/Blackbeltlima",
    color: "bg-[#1877F2] hover:bg-[#166FE5]",
  },
];

export const Contato = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="py-24 lg:py-32 bg-foreground" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-accent" />
              <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
                Entre em Contato
              </span>
              <div className="w-12 h-px bg-accent" />
            </div>

            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-background mb-4">
              BLACK BELT <span className="text-accent">LIMA</span>
            </h2>

            <p className="text-lg text-background/70 mb-12 max-w-2xl mx-auto">
              Venha conhecer nossa academia e agende sua aula experimental. 
              Estamos prontos para receber você e sua família.
            </p>
          </motion.div>

          {/* Social Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className={`flex items-center gap-3 px-8 py-4 rounded-sm text-white font-medium transition-all duration-300 ${link.color}`}
              >
                <link.icon className="w-5 h-5" />
                {link.name}
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 text-background/60"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              <span>Gravataí, RS</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-background/20" />
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-accent" />
              <span>(00) 00000-0000</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
