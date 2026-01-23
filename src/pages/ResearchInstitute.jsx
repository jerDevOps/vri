import React from 'react';

const ResearchInstitute = () => {
    const services = [
        {
            title: "PGI",
            subtitle: "Plataforma de Gestión de la Investigación",
            desc: "Sistema centralizado para el seguimiento y gestión de proyectos de investigación científica.",
            color: "#149C68"
        },
        {
            title: "Sub Unidad de Publicaciones",
            subtitle: "Editorial Universitaria",
            desc: "Gestión y difusión de la producción científica y académica de la universidad.",
            color: "#38C958"
        },
        {
            title: "Repositorio",
            subtitle: "Acceso Abierto",
            desc: "Almacenamiento y preservación digital de la producción intelectual de la comunidad UNA.",
            color: "#AEE637"
        }
    ];

    return (
        <div className="bg-[#FFFEDB]/30 min-h-screen">
            {/* Hero Section - Restored as per Image */}
            <section className="relative h-[85vh] lg:h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="src/assets/portadadii.jpg"
                        alt="Investigación"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#149C68]/90 to-[#149C68]/40"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-white">
                    <div className="max-w-4xl animate-modern-reveal">
                        <span className="inline-block px-4 py-1 bg-[#AEE637] text-[#383939] rounded-full text-xs font-bold mb-6 uppercase tracking-wider">
                            Innovación y Excelencia
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Instituto de Investigación <br />
                            <span className="text-[#FFFEDB]">UNA Puno</span>
                        </h1>
                        <p className="text-xl text-[#FFFEDB]/90 mb-8 max-w-2xl font-medium">
                            Impulsamos el conocimiento científico y tecnológico desde el altiplano para el mundo.
                            Liderando la investigación en biodiversidad, cambio climático y desarrollo social.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-[#38C958] hover:bg-[#AEE637] text-white hover:text-[#383939] rounded-xl font-bold transition-all shadow-lg hover:shadow-[#AEE637]/20 transform hover:-translate-y-1">
                                Explorar Proyectos
                            </button>
                            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-xl font-bold transition-all transform hover:-translate-y-1">
                                Publicaciones
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/20 to-transparent"></div>
            </section>

            {/* Quick Stats - Restored as per Image */}
            <section className="py-12 -mt-16 lg:-mt-20 relative z-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { label: 'Investigadores', value: '450+', icon: 'fa-user-graduate' },
                            { label: 'Proyectos Activos', value: '120+', icon: 'fa-microscope' },
                            { label: 'Publicaciones 2024', value: '320+', icon: 'fa-book' },
                            { label: 'Patentes', value: '15+', icon: 'fa-lightbulb' }
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-xl border-b-4 border-[#149C68] transform hover:-translate-y-1 transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-[#AEE637]/20 flex items-center justify-center text-[#149C68]">
                                        <i className={`fas ${stat.icon} text-2xl`}></i>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-[#383939]">{stat.value}</p>
                                        <p className="text-xs text-gray-500 font-bold uppercase tracking-tighter">{stat.label}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quiénes Somos Section - Added as requested */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[#149C68] font-bold uppercase tracking-widest text-sm mb-4 block">Trayectoria</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#383939] mb-8 leading-tight">
                                Transformando el futuro a través de la <span className="text-[#149C68]">Ciencia</span>
                            </h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    El Instituto de Investigación UNA Puno es el pilar científico de nuestra casa de estudios, dedicado a la generación de conocimiento con impacto regional y global.
                                </p>
                                <p>
                                    Nuestra labor se centra en articular el talento humano con recursos tecnológicos avanzados para resolver problemáticas sociales, ambientales y productivas.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#AEE637] rounded-3xl rotate-3 scale-[1.02] opacity-20 transition-transform group-hover:rotate-0"></div>
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                                className="relative z-10 rounded-3xl shadow-2xl object-cover aspect-video"
                                alt="Equipo de investigación"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3 Column Services - Added as requested */}
            <section className="py-24 bg-[#FFFEDB]/40">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#383939] mb-4 tracking-tight">Servicios Estratégicos</h2>
                        <div className="w-20 h-1.5 bg-[#AEE637] mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:-translate-y-2 transition-all duration-500 border border-gray-100">
                                <div className="p-8">
                                    <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-white" style={{ backgroundColor: item.color }}>
                                        <i className={`fas ${idx === 0 ? 'fa-laptop-code' : idx === 1 ? 'fa-book-open' : 'fa-database'} text-2xl`}></i>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#383939] mb-2">{item.title}</h3>
                                    <p className="text-sm font-bold text-[#149C68] mb-4 uppercase tracking-tighter">{item.subtitle}</p>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                        {item.desc}
                                    </p>
                                    <div className="space-y-3">
                                        <button className="w-full py-2.5 px-4 rounded-xl text-xs font-bold border border-gray-100 hover:bg-gray-50 flex items-center justify-between transition-colors">
                                            <span>¿Quiénes somos?</span>
                                            <i className="fas fa-arrow-right text-[10px] opacity-30"></i>
                                        </button>
                                        <button className="w-full py-2.5 px-4 rounded-xl text-xs font-bold border border-gray-100 hover:bg-gray-50 flex items-center justify-between transition-colors">
                                            <span>Página Oficial</span>
                                            <i className="fas fa-globe text-[10px] opacity-30"></i>
                                        </button>
                                        <button className="w-full py-2.5 px-4 rounded-xl text-xs font-bold border border-gray-100 hover:bg-gray-50 flex items-center justify-between transition-colors">
                                            <span>Contáctanos</span>
                                            <i className="fas fa-envelope text-[10px] opacity-30"></i>
                                        </button>
                                        <a href="#" className="flex items-center justify-center w-full py-3 bg-[#383939] text-white rounded-xl font-bold text-xs uppercase tracking-widest mt-6 hover:bg-[#149C68] transition-all">
                                            Ir al portal
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cómo Investigamos - Restored/Adjusted */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#383939] mb-4">¿Cómo investigamos?</h2>
                        <div className="w-20 h-1.5 bg-[#AEE637] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Grupos */}
                        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#149C68]/5 rounded-bl-full -mr-10 -mt-10 group-hover:bg-[#149C68]/10 transition-colors"></div>
                            <div className="w-16 h-16 rounded-2xl bg-[#149C68] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#149C68]/30">
                                <i className="fas fa-users text-2xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-[#383939] mb-4">Grupos</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Unidades operativas formadas por docentes e investigadores líderes en diversas áreas del conocimiento.
                            </p>
                            <a href="#" className="inline-flex items-center text-[#149C68] font-bold hover:gap-3 transition-all">
                                Ver Grupos 2025 <i className="fas fa-arrow-right ml-2 text-sm"></i>
                            </a>
                        </div>

                        {/* Semilleros */}
                        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#38C958]/5 rounded-bl-full -mr-10 -mt-10 group-hover:bg-[#38C958]/10 transition-colors"></div>
                            <div className="w-16 h-16 rounded-2xl bg-[#38C958] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#38C958]/30">
                                <i className="fas fa-seedling text-2xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-[#383939] mb-4">Semilleros</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Espacios de formación para estudiantes que dan sus primeros pasos en la investigación científica.
                            </p>
                            <a href="#" className="inline-flex items-center text-[#38C958] font-bold hover:gap-3 transition-all">
                                Unirse a Semillero <i className="fas fa-arrow-right ml-2 text-sm"></i>
                            </a>
                        </div>

                        {/* Institutos */}
                        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#AEE637]/5 rounded-bl-full -mr-10 -mt-10 group-hover:bg-[#AEE637]/10 transition-colors"></div>
                            <div className="w-16 h-16 rounded-2xl bg-[#AEE637] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#AEE637]/30">
                                <i className="fas fa-university text-2xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-[#383939] mb-4">Institutos</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Centros de excelencia con infraestructura especializada para proyectos de gran envergadura.
                            </p>
                            <a href="#" className="inline-flex items-center text-[#AEE637] font-bold hover:gap-3 transition-all">
                                Lista de Institutos <i className="fas fa-arrow-right ml-2 text-sm"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects - Restored */}
            <section className="py-24 bg-[#149C68] text-white overflow-hidden relative">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Proyectos Destacados</h2>
                            <p className="text-[#FFFEDB]/80 max-w-xl text-lg">
                                Investigaciones de alto impacto que están transformando nuestro entorno regional.
                            </p>
                        </div>
                        <button className="px-8 py-3 bg-[#AEE637] text-[#383939] rounded-xl font-bold hover:bg-white transition-colors">
                            Ver todos los proyectos
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden group">
                                <div className="h-56 relative overflow-hidden">
                                    <img
                                        src={`https://images.unsplash.com/photo-${1500000000000 + item}?q=80&w=800&auto=format&fit=crop`}
                                        alt="Proyecto"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-[#AEE637] text-[#383939] px-3 py-1 rounded-full text-[10px] font-bold">
                                        VIGENTE 2025
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h4 className="text-xl font-bold mb-3 line-clamp-2">
                                        Monitoreo de Calidad de Agua en la Cuenca del Lago Titicaca
                                    </h4>
                                    <p className="text-white/70 text-sm mb-6 line-clamp-3 leading-relaxed">
                                        Desarrollo de sensores IoT para la detección temprana de metales pesados en ecosistemas altoandinos.
                                    </p>
                                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                                        <span className="text-xs font-medium text-[#AEE637] uppercase tracking-wider text-white/50">Facultad de Ingeniería</span>
                                        <button className="text-white hover:text-[#AEE637] transition-colors translate-y-1">
                                            <i className="fas fa-plus-circle text-2xl"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Eventos Section - Added as requested */}
            <section className="py-24 bg-[#FFFEDB]/20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                        <div className="text-center md:text-left">
                            <h2 className="text-4xl font-bold text-[#383939] mb-2 uppercase tracking-tight">Eventos e Hitos</h2>
                            <p className="text-gray-500 font-medium">Cronograma de actividades y logros del Instituto.</p>
                        </div>
                        <button className="px-8 py-3 bg-[#383939] text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-[#149C68] transition-all">
                            Calendario Completo
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden group">
                                <div className="p-8">
                                    <div className="flex items-center gap-3 text-[#149C68] text-xs font-bold mb-4 uppercase tracking-wider">
                                        <i className="far fa-calendar-alt"></i>
                                        <span>25 de Marzo, 2025</span>
                                    </div>
                                    <h4 className="text-xl font-bold mb-6 text-[#383939] group-hover:text-[#149C68] transition-colors leading-snug">
                                        I Congreso Internacional de Biotecnología Altiplánica
                                    </h4>
                                    <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span>Auditorio Magno UNA Puno</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResearchInstitute;
