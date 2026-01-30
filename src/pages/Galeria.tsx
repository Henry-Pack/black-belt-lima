import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const PHOTOS_PER_LOAD = 8;

const photos = [
    { id: 1, src: "public/galeria/judo01.webp", alt: "Treino de Judô", category: "Judô" },
    { id: 2, src: "public/galeria/judo02.webp", alt: "Judô Kids", category: "Judô" },
    { id: 3, src: "public/galeria/judo03.webp", alt: "Treino de Luta no Solo", category: "Imobilização" },
    { id: 4, src: "public/galeria/judo04.webp", alt: "Premiação do Atleta Ezequiel", category: "Competição" },
    { id: 5, src: "public/galeria/judo05.webp", alt: "Treino de Juji-Gatame", category: "Finalização" },
    { id: 6, src: "public/galeria/judo06.webp", alt: "Treino de Luta no Solo", category: "Imobilização" },
    { id: 7, src: "public/galeria/judo07.webp", alt: "Treino na 61 Academia", category: "Evento" },
    { id: 8, src: "public/galeria/judo08.webp", alt: "Treino na 61 Academia", category: "Evento" },
    { id: 9, src: "public/galeria/judo11.webp", alt: "Luta Sensei Adriano", category: "Competição" },
    { id: 10, src: "public/galeria/judo09.webp", alt: "Luta Sensei Adriano", category: "Competição" },
    { id: 11, src: "public/galeria/judo10.webp", alt: "Treino de Uchikomi", category: "Judô" },
];


const Galeria = () => {
    const [visibleCount, setVisibleCount] = useState(PHOTOS_PER_LOAD);
    const visiblePhotos = photos.slice(0, visibleCount);
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-16 bg-muted/30">
                <div className="container mx-auto px-4 lg:px-8">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
                    >
                        <ArrowLeft size={20} />
                        Voltar para Início
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-px bg-accent" />
                            <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
                                Galeria
                            </span>
                            <div className="w-12 h-px bg-accent" />
                        </div>
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-4">
                            NOSSAS <span className="text-accent">FOTOS</span>
                        </h1>
                        <p className="text-charcoal max-w-2xl">
                            Confira os melhores momentos da Black Belt Lima: treinos, competições, graduações e muito mais.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {visiblePhotos.map((photo, index) => (
                            <motion.div

                                key={photo.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                className="group relative aspect-square overflow-hidden rounded-sm bg-muted cursor-pointer"
                            >
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black-belt/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-xs text-accent font-medium tracking-wider uppercase">
                                        {photo.category}
                                    </span>
                                    <p className="text-white text-sm font-medium">{photo.alt}</p>
                                </div>
                            </motion.div>
                        ))}

                    </div>

                    {visibleCount < photos.length && (
                        <div className="mt-16 text-center">
                            <button
                                onClick={() => setVisibleCount((prev) => prev + PHOTOS_PER_LOAD)}
                                className="px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-black-belt transition-colors duration-300"
                            >
                                Ver mais fotos
                            </button>
                        </div>
                    )}

                    {/* Placeholder message */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-16 text-center p-8 border border-dashed border-border rounded-sm"
                    >
                        <p className="text-muted-foreground">
                            📷 Novas Fotos Adicionadas Toda Semana!
                            <br />
                            <span className="text-sm">
                                A cada semana novas fotos são adicionadas para você nunca perder os detalhes dos nossos treinos!
                            </span>
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Galeria;
