import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { noticiasData } from '../../data/actividadesData';

const NewsSection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <SectionTitle
                        title="Noticias Científicas"
                        subtitle="Descubre los últimos avances y logros de nuestra comunidad académica."
                    />
                    <a href="#noticias-eventos" className="hidden md:flex items-center text-unap-blue font-semibold hover:text-blue-700 transition-colors pb-10">
                        Ver todo <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {noticiasData.map((item, idx) => (
                        <article
                            key={item.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group reveal"
                            style={{ transitionDelay: `${idx * 150}ms` }}
                        >
                            <a href={item.url || "#"} target="_blank" rel="noopener noreferrer" className="block relative h-56 overflow-hidden">
                                <div className={`absolute top-4 left-4 ${item.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-lg tracking-wide uppercase`}>
                                    {item.category}
                                </div>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                            <div className="p-8">
                                <div className="flex items-center text-gray-400 text-xs font-semibold mb-4 gap-4">
                                    <span className="flex items-center"><i className="far fa-calendar mr-2"></i> {item.date}</span>
                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                    <span>3 min de lectura</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-snug group-hover:text-unap-blue transition-colors font-serif">
                                    <a href={item.url || "#"} target="_blank" rel="noopener noreferrer">
                                        {item.title}
                                    </a>
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {item.excerpt}
                                </p>
                                <a
                                    href={item.url || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-unap-blue text-sm font-bold uppercase tracking-wider hover:underline decoration-2 underline-offset-4 inline-block"
                                >
                                    Leer noticia completa
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
