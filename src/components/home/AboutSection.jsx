import React from 'react';

const AboutSection = () => {
    return (
        <section className="py-24 bg-[#f8f9ff] relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-unap-blue/5 rounded-full blur-[120px] -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-unap-gold/10 rounded-full blur-[100px] translate-y-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Centered Title */}
                <div className="text-center max-w-3xl mx-auto mb-16 reveal">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-unap-blue mb-6 tracking-tight">
                        Liderazgo y Excelencia en <span className="text-unap-gold">Investigación</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-unap-gold mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Left Column: Mission and Results */}
                    <div className="reveal h-full" style={{ transitionDelay: '0.2s' }}>
                        <div className="bg-white p-6 md:p-10 rounded-[2rem] border border-blue-50 transition-all duration-300 shadow-blue-900/5 hover:shadow-2xl hover:-translate-y-1 h-full flex flex-col">
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-unap-blue first-letter:mr-3 first-letter:float-left">
                                El Vicerrectorado de Investigación es el órgano rector de la generación y contribución en investigación científica,
                                así como del desarrollo tecnológico e innovación de nuestra <span className="font-bold text-unap-blue">Universidad Nacional del Altiplano</span>.
                            </p>

                            <div className="grid gap-4 mt-auto">
                                {[
                                    { text: 'Docentes Investigadores Renacyt', icon: 'fa-user-check', color: 'text-unap-gold', bg: 'bg-unap-gold/10' },
                                    { text: 'Investigación formativa en estudiantes (Pregrado)', icon: 'fa-graduation-cap', color: 'text-unap-blue', bg: 'bg-unap-blue/10' },
                                    { text: 'Investigación de tesistas (Pre y Posgrado)', icon: 'fa-file-alt', color: 'text-unap-gold', bg: 'bg-unap-gold/10' }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all group border border-transparent hover:border-gray-100 cursor-default">
                                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white shadow-sm flex items-center justify-center ${item.color} text-lg md:text-xl group-hover:scale-110 transition-transform`}>
                                            <i className={`fas ${item.icon}`}></i>
                                        </div>
                                        <span className="font-bold text-gray-800 text-sm md:text-base">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Digital Identity/Tech */}
                    <div className="reveal h-full" style={{ transitionDelay: '0.4s' }}>
                        <div className="bg-white p-6 md:p-10 rounded-[2rem] border border-blue-50 transition-all duration-300 shadow-blue-900/5 hover:shadow-2xl hover:-translate-y-1 h-full flex flex-col justify-center">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform overflow-hidden p-2">
                                    <img src="src/assets/vrionly.png" alt="VRI Logo" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-unap-blue">Identidad Digital VRI</h3>
                                    <span className="text-unap-gold text-[10px] md:text-sm font-black tracking-widest uppercase">Innovación Tecnológica</span>
                                </div>
                            </div>


                            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                Nuestras plataformas están interconectadas para brindar facilidad de uso y acceso seguro.
                                Integramos tecnologías de vanguardia como <span className="text-unap-blue font-bold">OpenID</span> e <span className="text-unap-blue font-bold">IDaaS</span> (Identidad como servicio), siendo pioneros tecnológicos a nivel nacional.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-blue-50/50 border border-blue-100">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <p className="text-gray-700 font-medium text-sm">Acceso seguro y confiable para docentes y estudiantes.</p>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-gold-50/10 border border-unap-gold/20">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                                        <i className="fas fa-shield-alt"></i>
                                    </div>
                                    <p className="text-gray-700 font-medium text-sm">Ecosistema digital unificado bajo una sola identidad.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
