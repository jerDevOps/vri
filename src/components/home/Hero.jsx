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
                <div className="lg:col-span-7 text-center lg:text-left">

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up font-serif drop-shadow-lg animate-title-fill">
                        Investigación que <br />
                        <span>
                            Transforma el Futuro
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light animate-slide-up drop-shadow-md" style={{ animationDelay: '0.1s' }}>
                        Vicerrectorado de Investigación de la Universidad Nacional del Altiplano.
                        Promovemos el conocimiento científico, la innovación tecnológica y el desarrollo social.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-slide-up max-w-2xl mx-auto lg:mx-0" style={{ animationDelay: '0.2s' }}>
                        {[
                            { name: 'Instituto de Investigación', link: '#', icon: '/src/assets/dii.png' },
                            { name: 'Innovación y Transferencia', link: 'https://transparencia.unap.edu.pe/web/', icon: '/src/assets/innova.png' },
                            { name: 'INCUNALAB', link: 'https://www.incunalab.com/', icon: 'src/assets/incunalab.png' },
                            { name: 'Bienes y Servicios', link: 'https://www.facebook.com/dpbsunap/?locale=hi_IN', icon: 'src/assets/bienes.png' }
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                className={`group flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-unap-yellow/20 hover:border-unap-yellow/50 transition-all duration-300 transform hover:-translate-y-1 text-center animate-float ${index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : index === 3 ? 'delay-300' : ''}`}
                            >
                                <div className="w-24 h-24 mb-4 rounded-full bg-white/5 flex items-center justify-center overflow-hidden transition-all duration-500 border border-white/10 group-hover:border-unap-yellow/50 group-hover:shadow-[0_0_30px_rgba(255,197,44,0.4)]">
                                    <img
                                        src={item.icon}
                                        alt={item.name}
                                        className="w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-115"
                                    />
                                </div>
                                <span className="text-[10px] font-bold text-white uppercase tracking-wider leading-tight group-hover:text-unap-yellow transition-colors">
                                    {item.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Hero Video Section */}
                <div className="lg:col-span-5 hidden lg:block animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/eUcmIoieemc?autoplay=0&mute=1&loop=1&playlist=eUcmIoieemc"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
