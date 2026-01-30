import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { noticiasData } from '../../data/actividadesData';

const NewsSection = () => {
    const [activeNews, setActiveNews] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Asegurar que siempre hay datos
    const newsItems = noticiasData.slice(0, 3);
    const featuredNews = newsItems[activeNews] || newsItems[0];

    const handleNewsHover = (idx) => {
        if (idx === activeNews) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveNews(idx);
            setTimeout(() => setIsTransitioning(false), 50);
        }, 200);
    };

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[150px] -translate-x-1/2"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#AEDD2B]/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 reveal">
                    <div>
                        <span className="inline-block px-4 py-2 bg-unap-blue/10 text-unap-blue rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4">
                            Últimas Noticias
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                            Actualidad <span className="text-unap-blue">Científica</span>
                        </h2>
                    </div>
                    <a href="#noticias" className="group flex items-center gap-3 px-6 py-3 bg-unap-blue text-white rounded-full font-bold hover:bg-blue-700 transition-colors">
                        Ver Todas
                        <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </a>
                </div>

                {/* News Grid - Magazine Style */}
                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Featured News (Left - Large) */}
                    <div className="lg:col-span-7 reveal">
                        <article className="group relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-xl">
                            <a href={featuredNews?.url || "#"} target="_blank" rel="noopener noreferrer" className="block h-full">
                                {/* Image with transition */}
                                <div className={`absolute inset-0 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                                    <img
                                        src={featuredNews?.image}
                                        alt={featuredNews?.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                                {/* Category Badge */}
                                <div className="absolute top-6 left-6">
                                    <span className={`inline-block ${featuredNews?.badgeColor} text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                                        {featuredNews?.category}
                                    </span>
                                </div>

                                {/* Content with transition */}
                                <div className={`absolute bottom-0 left-0 right-0 p-8 md:p-10 transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                                    <div className="flex items-center gap-4 text-white/70 text-sm mb-4">
                                        <span className="flex items-center gap-2">
                                            <i className="far fa-calendar"></i>
                                            {featuredNews?.date}
                                        </span>
                                        <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                                        <span>5 min de lectura</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 leading-tight group-hover:text-[#AEDD2B] transition-colors">
                                        {featuredNews?.title}
                                    </h3>
                                    <p className="text-white/80 text-base leading-relaxed line-clamp-2 max-w-2xl">
                                        {featuredNews?.excerpt}
                                    </p>

                                    <div className="mt-6 inline-flex items-center gap-2 text-[#AEDD2B] font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                                        Leer Artículo Completo
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </a>
                        </article>
                    </div>

                    {/* News List (Right - Stacked) */}
                    <div className="lg:col-span-5">
                        <div className="flex flex-col gap-4">
                            {newsItems.map((item, idx) => (
                                <article
                                    key={item.id}
                                    onMouseEnter={() => handleNewsHover(idx)}
                                    className={`flex gap-5 p-4 rounded-2xl cursor-pointer transition-all duration-300 ease-out ${activeNews === idx
                                            ? 'bg-white shadow-xl border-l-4 border-unap-blue scale-[1.02]'
                                            : 'bg-white shadow-sm hover:shadow-md border-l-4 border-transparent'
                                        }`}
                                >
                                    {/* Thumbnail */}
                                    <div className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden bg-gray-100">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className={`w-full h-full object-cover transition-transform duration-500 ${activeNews === idx ? 'scale-110' : 'scale-100'}`}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 flex flex-col justify-center">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className={`w-2 h-2 rounded-full flex-shrink-0 transition-transform duration-300 ${item.badgeColor} ${activeNews === idx ? 'scale-125' : 'scale-100'}`}></span>
                                            <span className="text-xs font-bold text-gray-400 uppercase">{item.category}</span>
                                        </div>
                                        <h4 className={`font-bold leading-snug line-clamp-2 text-sm transition-colors duration-300 ${activeNews === idx ? 'text-unap-blue' : 'text-gray-800'
                                            }`}>
                                            {item.title}
                                        </h4>
                                        <span className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                                            <i className="far fa-clock"></i>
                                            {item.date}
                                        </span>
                                    </div>

                                    {/* Arrow */}
                                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center self-center transition-all duration-300 ${activeNews === idx
                                            ? 'bg-unap-blue text-white scale-110'
                                            : 'bg-gray-100 text-gray-400'
                                        }`}>
                                        <i className={`fas fa-arrow-right text-sm transition-transform duration-300 ${activeNews === idx ? 'translate-x-0.5' : ''}`}></i>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* View All Link */}
                        <a href="#noticias" className="block text-center py-6 text-unap-blue font-bold hover:underline transition-colors">
                            Ver más noticias →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
