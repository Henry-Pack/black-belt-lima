import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logoImage from "@/assets/logo-blackbelt.webp";

const navItems = [
  { label: "Início", href: "#inicio", isSection: true },
  { label: "Quem Somos", href: "#quem-somos", isSection: true },
  { label: "Nossos Senseis", href: "#senseis", isSection: true },
  { label: "Nosso Espaço", href: "#espaco", isSection: true },
  { label: "Treinos", href: "#treinos", isSection: true },
  { label: "Fotos", href: "/galeria", isSection: false },
  { label: "Contato", href: "#contato", isSection: true },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleSectionObserver = () => {
      if (!isHomePage) return;
      
      const sections = navItems.filter(item => item.isSection).map((item) => item.href.slice(1));
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.3 }
      );

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.observe(element);
      });

      return () => observer.disconnect();
    };

    window.addEventListener("scroll", handleScroll);
    handleSectionObserver();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const scrollToSection = (href: string) => {
    if (isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/" + href;
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.isSection) {
      scrollToSection(item.href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-subtle"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img 
                src={logoImage} 
                alt="Black Belt Lima Logo" 
                className="h-10 w-10 md:h-12 md:w-12 object-contain"
              />
              <span className="font-display text-2xl md:text-3xl tracking-wider text-foreground">
                BLACK BELT <span className="text-accent">LIMA</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                item.isSection ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item);
                    }}
                    className={`text-sm font-medium transition-colors link-underline ${
                      isHomePage && activeSection === item.href.slice(1)
                        ? "text-accent"
                        : "text-charcoal hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`text-sm font-medium transition-colors link-underline ${
                      location.pathname === item.href
                        ? "text-accent"
                        : "text-charcoal hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <Button
                variant="martial"
                size="sm"
                onClick={() => scrollToSection("#contato")}
              >
                Agendar Aula Experimental
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background pt-20 lg:hidden"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navItems.map((item, index) => (
                item.isSection ? (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item);
                    }}
                    className={`text-xl font-display tracking-wide ${
                      isHomePage && activeSection === item.href.slice(1)
                        ? "text-accent"
                        : "text-charcoal"
                    }`}
                  >
                    {item.label}
                  </motion.a>
                ) : (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-xl font-display tracking-wide ${
                        location.pathname === item.href
                          ? "text-accent"
                          : "text-charcoal"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <Button
                  variant="martial"
                  size="lg"
                  onClick={() => scrollToSection("#contato")}
                >
                  Agendar Aula Experimental
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
