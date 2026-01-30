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
        "https://scontent.flim26-1.fna.fbcdn.net/v/t39.30808-6/543300981_1183067023854441_8790105001484600733_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFvnX4r1yH9xth02v7AK0lG5tDLA-RYI5Hm0MsD5FgjkdPxu_AhptrgIXcOw6EvXIWKF2yJHdxWKN-IiSu50l5w&_nc_ohc=7olI9NFR7IQQ7kNvwG4p5ew&_nc_oc=Adm4jT9xzTaPXtGOMGAnWmzNLDH3cGeZTatoPuddgac3hh0iWJHceL6o4OUopt589Wk&_nc_zt=23&_nc_ht=scontent.flim26-1.fna&_nc_gid=NWPvU1R4LeLSkjKcjmnhBg&oh=00_Afo1t2b56SiR1BtncGHorDCfgjVdo8ipPi27uogUTf3TRg&oe=6982A234",
        "https://scontent.flim26-1.fna.fbcdn.net/v/t39.30808-6/543077190_1183067183854425_4510730984227246259_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHMDy4JZo-90H7CA_OdT99mCC1oMWiG3JQILWgxaIbclFV28yJ4Ho6SUCKVRjtmnTItPdL5Bi5WWYBZQgRo8puP&_nc_ohc=uUMvAZa6THQQ7kNvwGRAuRz&_nc_oc=AdlxCpekpI_y3nukze1q2-o00uelDkXx2wNb6sZ3dUC7ZmgpViPboXgDVx07YQ7en9c&_nc_zt=23&_nc_ht=scontent.flim26-1.fna&_nc_gid=NbtMYZx9mlRUVXww-UPCfQ&oh=00_AfpMK-wHDJgWfx_OiKxI_mepYcYune78_6_Iw5KkPuTI4A&oe=6982C4EF",
        "https://scontent.flim20-1.fna.fbcdn.net/v/t39.30808-6/540451333_1183065530521257_5475203325510708086_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH2IpqMRRk4F2WIBodd67WSINiNk8pBm_8g2I2TykGb_3q6oP-Gl_kRqvRycerQfBUVStB81JcyOinH31coo3cP&_nc_ohc=ARShsrG3oSoQ7kNvwG8wDUp&_nc_oc=AdlGBTjs1rT8A_ukXuSbbJw83nEO3FupiBOhe7lrSaqglWrkp3nZpgDXHRmbKaVrCGA&_nc_zt=23&_nc_ht=scontent.flim20-1.fna&_nc_gid=7d1djQVwhTSsOxS0aQ6Cmg&oh=00_AfrB_DfcjKrUS8naWFiuUbJLg2rE3-zAg9-et_HPh6bhsA&oe=6982CE4B",
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

            {/* HERO SECTION - Con Imagen y Superposición Azul */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#030D4F]">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="src/assets/portada_revistas.jpg"
                        alt="Revistas Científicas Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#030D4F]/95 to-[#030D4F]/40"></div>
                </div>

                {/* Decorative Celeste Glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 z-10"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-300/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 z-10"></div>

                <div className="container mx-auto px-4 relative z-20">

                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 animate-fade-in border border-white/10">
                            <i className="fas fa-book-open text-[#AEDD2B]"></i>
                            <span className="text-white text-xs font-bold uppercase tracking-widest">Vicerrectorado de Investigación</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-modern-reveal">
                            Revistas <span className="text-[#AEDD2B]">Científicas</span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up">
                            Promoviendo la excelencia en la investigación y difusión del conocimiento científico institucional.
                        </p>
                    </div>
                </div>
            </section>



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
                                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#030D4F] to-[#061266] flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <i className={`fas ${item.icon}`}></i>
                                </div>
                                <h3 className="text-2xl font-bold text-[#030D4F] mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STATS SECTION - Moderno y Limpio */}
            <section className="py-20 bg-gradient-to-br from-[#030D4F] to-[#071f9c] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Impacto en Cifras</h2>
                        <div className="w-20 h-1.5 bg-[#AEDD2B] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="mb-4 text-sky-400 text-4xl group-hover:scale-125 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">
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
                            <h2 className="text-3xl md:text-4xl font-bold text-[#030D4F] mb-4">Logros Destacados</h2>
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
                                            <span className="inline-block bg-[#AEDD2B] text-[#030D4F] px-4 py-2 rounded-lg text-sm font-black uppercase mb-4">
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
                        <h2 className="text-3xl md:text-4xl font-bold text-[#030D4F] mb-4">Plataformas de Investigación</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Herramientas digitales para la gestión y difusión de la investigación científica
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {[
                            {
                                title: "PGI",
                                subtitle: "Gestión de Investigación",
                                desc: "Sistema integral para la gestión de tesis desde el registro hasta la sustentación",
                                color: "#030D4F",
                                icon: "fa-graduation-cap",
                                link: "https://pgi.vriunap.pe/home"
                            },
                            {
                                title: "CURSOS",
                                subtitle: "Recursos Académicos",
                                desc: "Materiales de referencia y guías metodológicas organizadas por líneas de investigación",
                                color: "#051675",
                                icon: "fa-book-reader",
                                link: "https://vriunap.pe/cursos/"
                            },
                            {
                                title: "REPOSITORIO",
                                subtitle: "Producción Científica",
                                desc: "Archivo digital de tesis aprobadas y producción académica institucional",
                                color: "#071f9c",
                                icon: "fa-database",
                                link: "https://repositorio.unap.edu.pe/home"
                            },
                            {
                                title: "FEDU",
                                subtitle: "Financiamiento",
                                desc: "Fondo Especial de Desarrollo Universitario para proyectos de investigación",
                                color: "#010a3d",
                                icon: "fa-hand-holding-usd",
                                link: "https://vriunap.pe/fedu/"
                            }
                        ].map((platform, idx) => (
                            <div key={idx} className="group relative bg-white rounded-2xl border-2 border-gray-100 hover:border-sky-400 transition-all duration-300 overflow-hidden hover:shadow-xl">
                                <div className="h-2 w-full" style={{ backgroundColor: platform.color }}></div>

                                <div className="p-6">
                                    <div className="w-14 h-14 rounded-xl mb-4 flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: platform.color }}>
                                        <i className={`fas ${platform.icon}`}></i>
                                    </div>

                                    <h3 className="text-2xl font-black mb-1" style={{ color: platform.color }}>{platform.title}</h3>
                                    <p className="text-sm font-semibold text-gray-600 mb-3">{platform.subtitle}</p>
                                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{platform.desc}</p>

                                    <a href={platform.link} target="_blank" rel="noopener noreferrer" className="text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all" style={{ color: platform.color }}>
                                        Acceder <i className="fas fa-arrow-right"></i>
                                    </a>
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
