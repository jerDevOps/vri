import React from 'react';

const ResearchInstitute = () => {
    return (
        <div className="bg-[#FFFEDB]/30 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="src/assets/portadadii.jpg"
                        alt="Investigación"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#149C68]/90 to-[#149C68]/40"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-white">
                    <div className="max-w-3xl animate-modern-reveal">
                        <span className="inline-block px-4 py-1 bg-[#AEE637] text-[#383939] rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
                            Innovación y Excelencia
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Instituto de Investigación <br />
                            <span className="text-[#FFFEDB]">UNA Puno</span>
                        </h1>
                        <p className="text-xl text-[#FFFEDB]/90 mb-8 max-w-2xl">
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

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FFFEDB]/30 to-transparent"></div>
            </section>

            {/* Quick Stats */}
            <section className="py-12 -mt-16 relative z-20">
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
                                        <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Sections */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#383939] mb-4">¿Cómo investigamos?</h2>
                        <div className="w-24 h-1.5 bg-[#AEE637] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Investigation Groups */}
                        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#149C68]/5 rounded-bl-full -mr-10 -mt-10 group-hover:bg-[#149C68]/10 transition-colors"></div>
                            <div className="w-16 h-16 rounded-2xl bg-[#149C68] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#149C68]/30">
                                <i className="fas fa-users text-2xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-[#383939] mb-4">Grupos de Investigación</h3>
                            <p className="text-gray-600 mb-6">
                                Contamos con grupos multidisciplinarios enfocados en solucionar desafíos locales y globales.
                            </p>
                            <a href="#" className="inline-flex items-center text-[#149C68] font-bold hover:gap-3 transition-all">
                                Ver Grupos <i className="fas fa-arrow-right ml-2 text-sm"></i>
                            </a>
                        </div>

                        {/* Seedlings */}
                        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#38C958]/5 rounded-bl-full -mr-10 -mt-10 group-hover:bg-[#38C958]/10 transition-colors"></div>
                            <div className="w-16 h-16 rounded-2xl bg-[#38C958] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#38C958]/30">
                                <i className="fas fa-seedling text-2xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-[#383939] mb-4">Semilleros</h3>
                            <p className="text-gray-600 mb-6">
                                Formamos a la próxima generación de investigadores a través de mentoría y proyectos estudiantiles.
                            </p>
                            <a href="#" className="inline-flex items-center text-[#38C958] font-bold hover:gap-3 transition-all">
                                Conocer Más <i className="fas fa-arrow-right ml-2 text-sm"></i>
                            </a>
                        </div>

                        {/* Research Centers */}
                        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#AEE637]/5 rounded-bl-full -mr-10 -mt-10 group-hover:bg-[#AEE637]/10 transition-colors"></div>
                            <div className="w-16 h-16 rounded-2xl bg-[#AEE637] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#AEE637]/30">
                                <i className="fas fa-university text-2xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-[#383939] mb-4">Institutos de Investigación</h3>
                            <p className="text-gray-600 mb-6">
                                Centros de excelencia especializados en áreas estratégicas para el desarrollo de la región.
                            </p>
                            <a href="#" className="inline-flex items-center text-[#AEE637] font-bold hover:gap-3 transition-all">
                                Explorar Institutos <i className="fas fa-arrow-right ml-2 text-sm"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-20 bg-[#149C68]">
                <div className="container mx-auto px-4 text-white">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Proyectos Destacados</h2>
                            <p className="text-[#FFFEDB]/80 max-w-xl text-lg">
                                Conoce las investigaciones que están transformando nuestro entorno y generando impacto real.
                            </p>
                        </div>
                        <button className="px-8 py-3 bg-[#AEE637] text-[#383939] rounded-xl font-bold hover:bg-white transition-colors">
                            Ver todos los proyectos
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden hover:bg-white/20 transition-all group">
                                <div className="h-56 relative overflow-hidden">
                                    <img
                                        src={`https://images.unsplash.com/photo-${1500000000000 + item}?q=80&w=800&auto=format&fit=crop`}
                                        alt="Proyecto"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-[#AEE637] text-[#383939] px-3 py-1 rounded-full text-xs font-bold">
                                        VIGENTE 2025
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h4 className="text-xl font-bold mb-3 line-clamp-2">
                                        Monitoreo de Calidad de Agua en la Cuenca del Lago Titicaca mediante Sensores IoT
                                    </h4>
                                    <p className="text-white/70 text-sm mb-6 line-clamp-3">
                                        Desarrollo de un sistema de alerta temprana para la detección de metales pesados y contaminantes orgánicos...
                                    </p>
                                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                                        <span className="text-xs font-medium text-[#AEE637]">Facultad de Ingeniería</span>
                                        <button className="text-white hover:text-[#AEE637] transition-colors">
                                            <i className="fas fa-plus-circle text-2xl"></i>
                                        </button>
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
