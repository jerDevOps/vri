import React from 'react';
import Button from '../ui/Button';
import { MOCK_DATA } from '../../data/mockData';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1621640786029-22ad83d95079?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    className="w-full h-full object-cover transform scale-105 animate-[pulse_20s_infinite_ease-in-out]"
                    alt="University Campus"
                />
                <div className="absolute inset-0 hero-overlay"></div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-8 text-center lg:text-left">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-unap-yellow/20 border border-unap-yellow text-unap-yellow text-sm font-bold mb-6 backdrop-blur-sm animate-fade-in">
                        <span className="w-2 h-2 rounded-full bg-unap-red animate-pulse"></span>
                        Convocatorias 2026 abiertas
                    </span>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up font-serif drop-shadow-lg">
                        Investigación que <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-unap-yellow via-white to-unap-skyBlue">
                            Transforma el Futuro
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light animate-slide-up drop-shadow-md" style={{ animationDelay: '0.1s' }}>
                        Vicerrectorado de Investigación de la Universidad Nacional del Altiplano.
                        Promovemos el conocimiento científico, la innovación tecnológica y el desarrollo social.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <button className="bg-unap-yellow hover:bg-yellow-400 text-unap-navy font-bold px-8 py-3 rounded-lg shadow-lg shadow-yellow-500/30 transition-all duration-300 transform hover:-translate-y-0.5 text-base">
                            Ver Convocatorias
                        </button>
                        <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg backdrop-blur-sm transition-all text-base">
                            Explorar Líneas
                        </button>
                    </div>
                </div>

                {/* Hero Statistics Card */}
                <div className="lg:col-span-4 hidden lg:block animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl">
                        <h3 className="text-white font-semibold mb-6 border-b border-white/10 pb-2">Impacto en Cifras</h3>
                        <div className="space-y-6">
                            {MOCK_DATA.stats.map((stat) => (
                                <div key={stat.id} className="flex items-center gap-4 group cursor-default">
                                    <div className="w-12 h-12 rounded-lg bg-unap-yellow/20 flex items-center justify-center text-unap-yellow text-xl group-hover:scale-110 transition-transform duration-300">
                                        <i className={`fas ${stat.icon}`}></i>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">{stat.value}+</div>
                                        <div className="text-xs text-white/80 uppercase tracking-wide">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
