import React, { useEffect, useState, useRef } from 'react';

// Reusable Stat Counter Component (Similar to InstitutionalStats)
const StatCounter = ({ value, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);

    const numericPart = value.replace(/[^0-9]/g, '');
    const suffix = value.replace(/[0-9]/g, '');
    const targetValue = parseInt(numericPart, 10);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) observer.observe(countRef.current);
        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easedProgress * targetValue));
            if (progress < 1) window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
    }, [hasStarted, targetValue, duration]);

    return (
        <span ref={countRef}>
            {count.toLocaleString()}{suffix}
        </span>
    );
};

const ScientificJournals = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselImages = [
        "https://images.unsplash.com/photo-1544640808-32ca72ac7f67?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1524178232363-1fb28f74b0cc?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200",
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const stats = [
        { label: 'Tesis Sustentadas', val: '14000', icon: 'fa-graduation-cap' },
        { label: 'Estudiantes', val: '18000', icon: 'fa-users' },
        { label: 'Sustentaciones', val: '1538', icon: 'fa-scroll' },
        { label: 'Proyectos Pregrado', val: '463', icon: 'fa-project-diagram' },
        { label: 'Proyectos Aprobados', val: '7200', icon: 'fa-check-double' },
        { label: 'Docentes Investigadores', val: '10000', icon: 'fa-user-tie' },
    ];

    return (
        <div className="bg-white min-h-screen font-sans">

            {/* HERO SECTION - Limpio y Profesional */}
            <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #02416D 0%, #0A5483 50%, #066699 100%)' }}>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                <div className="container mx-auto px-4 py-32 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
                            <i className="fas fa-book-open text-[#AEDD2B]"></i>
                            <span className="text-white text-sm font-semibold">Vicerrectorado de Investigación</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                            Revistas Científicas
                        </h1>

                        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Promoviendo la excelencia en la investigación y difusión del conocimiento científico
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-8 py-4 bg-[#AEDD2B] text-[#02416D] rounded-xl font-bold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
                                Explorar Revistas
                            </button>
                            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold hover:bg-white/20 transition-all duration-300 border border-white/20">
                                Conocer Más
                            </button>
                        </div>
                    </div>
                </div>

                {/* Wave Separator */}
                <div className="absolute bottom-0 left-0 w-full">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" />
                    </svg>
                </div>
            </div>

            {/* ABOUT SECTION - Tres Columnas */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                icon: "fa-history",
                                title: "Nuestra Historia",
                                text: "El Vicerrectorado de Investigación ha sido pilar fundamental en la formación académica, promoviendo el desarrollo institucional con excelencia y compromiso."
                            },
                            {
                                icon: "fa-bullseye",
                                title: "Nuestra Misión",
                                text: "Impulsar la generación del conocimiento científico y tecnológico, fortaleciendo las capacidades investigativas de nuestra comunidad universitaria."
                            },
                            {
                                icon: "fa-handshake",
                                title: "Nuestro Compromiso",
                                text: "Trabajar con transparencia para contribuir al desarrollo sostenible y bienestar de la comunidad, impulsando la innovación constante."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#02416D] to-[#066699] flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <i className={`fas ${item.icon}`}></i>
                                </div>
                                <h3 className="text-2xl font-bold text-[#02416D] mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STATS SECTION - Moderno y Limpio */}
            <section className="py-20 bg-gradient-to-br from-[#02416D] to-[#0A5483] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(30deg, #AEDD2B 12%, transparent 12.5%, transparent 87%, #AEDD2B 87.5%, #AEDD2B), linear-gradient(150deg, #AEDD2B 12%, transparent 12.5%, transparent 87%, #AEDD2B 87.5%, #AEDD2B)', backgroundSize: '80px 140px' }}></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Impacto en Cifras</h2>
                        <div className="w-24 h-1 bg-[#AEDD2B] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="mb-4 text-[#AEDD2B] text-4xl group-hover:scale-125 transition-transform duration-300">
                                    <i className={`fas ${stat.icon}`}></i>
                                </div>
                                <div className="text-4xl md:text-5xl font-black text-white mb-2">
                                    <StatCounter value={stat.val} />
                                </div>
                                <div className="text-white/60 text-xs uppercase tracking-wider font-semibold">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CAROUSEL SECTION - Destacado */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-black text-[#02416D] mb-4">Logros Destacados</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Hitos que marcan nuestra trayectoria de excelencia en investigación y desarrollo académico
                            </p>
                        </div>

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <div className="aspect-[16/9] relative">
                                {carouselImages.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                                    >
                                        <img src={img} alt="Logro" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                                            <span className="inline-block bg-[#AEDD2B] text-[#02416D] px-4 py-2 rounded-lg text-sm font-black uppercase mb-4">
                                                Destacado
                                            </span>
                                            <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                                                {["Liderazgo en Investigación Regional", "Infraestructura de Última Generación", "Comunidad Académica Comprometida"][idx]}
                                            </h3>
                                            <p className="text-white/80 max-w-2xl">
                                                {["Reconocidos a nivel nacional por nuestra excelencia investigativa", "Laboratorios y espacios equipados con tecnología de punta", "Docentes y estudiantes comprometidos con la innovación"][idx]}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Carousel Controls */}
                            <div className="absolute bottom-8 right-8 flex gap-2">
                                {carouselImages.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentSlide(idx)}
                                        className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-12 bg-[#AEDD2B]' : 'w-2 bg-white/50 hover:bg-white/80'}`}
                                    ></button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PLATFORMS SECTION - Grid Moderno */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-[#02416D] mb-4">Plataformas de Investigación</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Herramientas digitales para la gestión y difusión de la investigación científica
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {[
                            {
                                title: "PILAR",
                                subtitle: "Tesis Pregrado",
                                desc: "Sistema integral para la gestión de tesis desde el registro hasta la sustentación",
                                color: "#02416D",
                                icon: "fa-graduation-cap"
                            },
                            {
                                title: "CURSOS",
                                subtitle: "Recursos Académicos",
                                desc: "Materiales de referencia y guías metodológicas organizadas por líneas de investigación",
                                color: "#0A5483",
                                icon: "fa-book-reader"
                            },
                            {
                                title: "REPOSITORIO",
                                subtitle: "Producción Científica",
                                desc: "Archivo digital de tesis aprobadas y producción académica institucional",
                                color: "#066699",
                                icon: "fa-database"
                            },
                            {
                                title: "FEDU",
                                subtitle: "Financiamiento",
                                desc: "Fondo Especial de Desarrollo Universitario para proyectos de investigación",
                                color: "#013a63",
                                icon: "fa-hand-holding-usd"
                            }
                        ].map((platform, idx) => (
                            <div key={idx} className="group relative bg-white rounded-2xl border-2 border-gray-100 hover:border-[#AEDD2B] transition-all duration-300 overflow-hidden hover:shadow-xl">
                                <div className="h-2 w-full" style={{ backgroundColor: platform.color }}></div>

                                <div className="p-6">
                                    <div className="w-14 h-14 rounded-xl mb-4 flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: platform.color }}>
                                        <i className={`fas ${platform.icon}`}></i>
                                    </div>

                                    <h3 className="text-2xl font-black mb-1" style={{ color: platform.color }}>{platform.title}</h3>
                                    <p className="text-sm font-semibold text-gray-600 mb-3">{platform.subtitle}</p>
                                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{platform.desc}</p>

                                    <button className="text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all" style={{ color: platform.color }}>
                                        Acceder <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>

                                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 -mr-8 -mt-8" style={{ backgroundColor: platform.color, borderRadius: '50%' }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ScientificJournals;
