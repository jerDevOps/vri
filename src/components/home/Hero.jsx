import React from 'react';
import Button from '../ui/Button';
import { MOCK_DATA } from '../../data/mockData';

const Hero = () => {
    const [showVideo, setShowVideo] = React.useState(false);

    return (
        <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 lg:pt-20 pb-12 lg:pb-0">
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

            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center lg:grid lg:grid-cols-12 gap-6 lg:gap-12 lg:items-center">
                <div className="lg:col-span-7 text-center lg:text-left w-full">

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 font-serif drop-shadow-2xl text-white">
                        <span className="block animate-reveal-text" style={{ animationDelay: '0.2s' }}>
                            Investigación que
                        </span>
                        <span className="block animate-reveal-text text-white" style={{ animationDelay: '0.6s' }}>
                            Transforma el Futuro
                        </span>
                    </h1>

                    <p className="text-xs sm:text-lg md:text-xl text-white/90 mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light animate-slide-up drop-shadow-md" style={{ animationDelay: '0.1s' }}>
                        Vicerrectorado de Investigación de la Universidad Nacional del Altiplano.
                        Promovemos el conocimiento científico e innovación tecnológica.
                    </p>

                    <div className="group/dock flex flex-nowrap items-center justify-start lg:justify-start gap-3 sm:gap-6 mt-4 lg:mt-12 relative px-2 lg:px-0 overflow-x-auto pb-6 lg:pb-0 scrollbar-hide lg:overflow-x-visible w-full">
                        {[
                            { name: 'Instituto de Investigación', link: '#idi', icon: 'src/assets/dii.png' },
                            { name: 'Innovación y Transferencia', link: 'https://transparencia.unap.edu.pe/web/', icon: 'src/assets/innova.png' },
                            { name: 'INCUNALAB', link: 'https://www.incunalab.com/', icon: 'src/assets/incunalab.png' },
                            { name: 'Bienes y Servicios', link: 'https://www.facebook.com/dpbsunap/?locale=hi_IN', icon: 'src/assets/bienes.png' },
                            { name: 'PGI', link: 'https://pgi.vriunap.pe/home', icon: 'src/assets/pgi.png' },
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                className="group/item relative flex flex-col items-center flex-shrink-0 transition-all duration-500 group-hover/dock:opacity-30 hover:!opacity-100 w-[90px] sm:w-[130px]"
                                style={{
                                    animationDelay: `${0.4 + index * 0.1}s`,
                                    animationFillMode: 'both'
                                }}
                            >
                                {/* The Orb Container - Neutral/Metal Style */}
                                <div className="relative w-16 h-16 sm:w-28 sm:h-28 flex items-center justify-center transition-transform duration-500 group-hover/dock:scale-90 group-hover/item:!scale-125">
                                    <div className="absolute inset-0 rounded-full border border-white/20 group-hover/item:border-white/50 transition-colors duration-500"></div>
                                    <div className="absolute inset-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10"></div>
                                    <img
                                        src={item.icon}
                                        alt={item.name}
                                        className="relative z-10 w-[50%] h-[50%] object-contain filter drop-shadow-2xl grayscale brightness-110 group-hover/item:grayscale-0 group-hover/item:brightness-125 transition-all duration-500 group-hover/item:rotate-3"
                                    />
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full pointer-events-none opacity-60"></div>
                                </div>

                                {/* Label Section */}
                                <div className="mt-3 flex flex-col items-center justify-start h-12">
                                    <span className="text-[8px] sm:text-[10px] font-bold text-white/80 uppercase tracking-tight sm:tracking-[0.2em] leading-tight text-center transition-all duration-300 group-hover/item:text-white group-hover/item:opacity-100 px-1">
                                        {item.name}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Hero Video Section - Dynamic for Mobile */}
                <div className="lg:col-span-12 xl:col-span-5 mt-6 lg:mt-0 w-full animate-modern-reveal" style={{ animationDelay: '0.8s' }}>
                    {!showVideo ? (
                        <div
                            onClick={() => setShowVideo(true)}
                            className="relative w-full aspect-video lg:aspect-video rounded-2xl overflow-hidden shadow-2xl group/video cursor-pointer border border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center transition-all duration-500 hover:border-unap-gold/50"
                        >
                            <img
                                src="https://img.youtube.com/vi/eUcmIoieemc/maxresdefault.jpg"
                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/video:scale-105 transition-transform duration-700"
                                alt="Video Thumbnail"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                            <div className="relative z-10 flex flex-col items-center gap-4">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-unap-gold rounded-full flex items-center justify-center shadow-2xl group-hover/video:scale-110 transition-transform duration-300">
                                    <i className="fas fa-play text-white text-2xl sm:text-3xl ml-1"></i>
                                </div>
                                <span className="text-white font-bold text-sm sm:text-base uppercase tracking-widest drop-shadow-lg">Reproducir Video Institucional</span>
                            </div>

                            {/* Ripple Effect Animation */}
                            <div className="absolute w-20 h-20 bg-unap-gold/30 rounded-full animate-ping"></div>
                        </div>
                    ) : (
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-unap-gold/30">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/eUcmIoieemc?autoplay=1&mute=0"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                            <button
                                onClick={(e) => { e.stopPropagation(); setShowVideo(false); }}
                                className="absolute top-4 right-4 z-20 w-8 h-8 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                            >
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
