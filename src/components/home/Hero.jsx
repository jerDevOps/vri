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
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
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

                    <div className="group/dock flex flex-nowrap items-center justify-center lg:justify-start gap-4 sm:gap-8 mt-20 relative px-4 lg:px-0 overflow-x-visible">
                        {[
                            { name: 'Instituto de Investigación', link: '#', icon: 'src/assets/dii.png' },
                            { name: 'Innovación y Transferencia', link: 'https://transparencia.unap.edu.pe/web/', icon: 'src/assets/innova.png' },
                            { name: 'INCUNALAB', link: 'https://www.incunalab.com/', icon: 'src/assets/incunalab.png' },
                            { name: 'Bienes y Servicios', link: 'https://www.facebook.com/dpbsunap/?locale=hi_IN', icon: 'src/assets/bienes.png' },
                            { name: 'PGI', link: 'https://pgi.vriunap.pe/home', icon: 'src/assets/pgi.png' },
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                className="group/item relative flex flex-col items-center flex-shrink-0 transition-all duration-500 group-hover/dock:opacity-30 hover:!opacity-100"
                                style={{
                                    animationDelay: `${0.4 + index * 0.1}s`,
                                    animationFillMode: 'both',
                                    width: '130px'
                                }}
                            >
                                {/* The Orb Container - Neutral/Metal Style */}
                                <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center transition-transform duration-500 group-hover/dock:scale-90 group-hover/item:!scale-125">

                                    {/* Waves Animation (Ripple) - High Visibility Neutral */}
                                    <div className="absolute inset-0 rounded-full border-2 border-white/60 opacity-0 group-hover/item:animate-ripple pointer-events-none"></div>
                                    <div className="absolute inset-0 rounded-full border border-white/40 opacity-0 group-hover/item:animate-ripple pointer-events-none" style={{ animationDelay: '0.4s' }}></div>

                                    {/* Outer Neutral Ring */}
                                    <div className="absolute inset-0 rounded-full border border-white/20 group-hover/item:border-white/50 transition-colors duration-500"></div>

                                    {/* Glass Fill */}
                                    <div className="absolute inset-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10"></div>

                                    {/* Icon - Grayscale to Color */}
                                    <img
                                        src={item.icon}
                                        alt={item.name}
                                        className="relative z-10 w-[60%] h-[60%] object-contain filter drop-shadow-2xl grayscale brightness-110 group-hover/item:grayscale-0 group-hover/item:brightness-125 transition-all duration-500 group-hover/item:rotate-3"
                                    />

                                    {/* Professional Shine */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full pointer-events-none opacity-60"></div>
                                </div>

                                {/* Label Section - Stable Stable */}
                                <div className="mt-8 flex flex-col items-center justify-start h-14">
                                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] leading-tight text-center transition-all duration-300 group-hover/item:text-white group-hover/item:opacity-100">
                                        {item.name}
                                    </span>
                                    {/* Neutral Focus Line */}
                                    <div className="mt-3 w-0 h-[1px] bg-white/60 group-hover/item:w-12 transition-all duration-500 ease-out"></div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Hero Video Section */}
                <div className="lg:col-span-12 xl:col-span-5 lg:mt-24 xl:mt-0 animate-modern-reveal" style={{ animationDelay: '1s' }}>
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
