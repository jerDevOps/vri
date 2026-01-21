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

                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Left Column: Mission and Results */}
                    <div className="space-y-8 reveal" style={{ transitionDelay: '0.2s' }}>
                        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-blue-900/5 border border-blue-50 transition-all hover:shadow-2xl">
                            <p className="text-gray-700 text-lg leading-relaxed mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-unap-blue first-letter:mr-3 first-letter:float-left">
                                El Vicerrectorado de Investigación es el órgano rector de la generación y contribución en investigación científica,
                                así como del desarrollo tecnológico e innovación de nuestra <span className="font-bold text-unap-blue">Universidad Nacional del Altiplano</span>.
                            </p>

                            <div className="grid gap-4">
                                {[
                                    { text: 'Docentes Investigadores Renacyt', icon: 'fa-user-check', color: 'text-unap-gold', bg: 'bg-unap-gold/10' },
                                    { text: 'Investigación formativa en estudiantes (Pregrado)', icon: 'fa-graduation-cap', color: 'text-unap-blue', bg: 'bg-unap-blue/10' },
                                    { text: 'Investigación de tesistas (Pre y Posgrado)', icon: 'fa-file-alt', color: 'text-unap-gold', bg: 'bg-unap-gold/10' }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all group border border-transparent hover:border-gray-100 cursor-default">
                                        <div className={`w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center ${item.color} text-xl group-hover:scale-110 transition-transform`}>
                                            <i className={`fas ${item.icon}`}></i>
                                        </div>
                                        <span className="font-bold text-gray-800">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Digital Identity/Tech */}
                    <div className="reveal" style={{ transitionDelay: '0.4s' }}>
                        <div className="relative group h-full">
                            {/* Decorative Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-unap-blue to-unap-gold rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

                            <div className="relative bg-white p-10 rounded-[2rem] shadow-2xl border border-white h-full flex flex-col justify-center">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-unap-blue rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform">
                                        <i className="fas fa-fingerprint"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-unap-blue">Identidad Digital VRI</h3>
                                        <span className="text-unap-gold text-sm font-black tracking-widest uppercase">Innovación Tecnológica</span>
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
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-unap-gold flex items-center justify-center text-white text-xs">
                                            <i className="fas fa-shield-alt"></i>
                                        </div>
                                        <p className="text-gray-700 font-medium text-sm">Ecosistema digital unificado bajo una sola identidad.</p>
                                    </div>
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
