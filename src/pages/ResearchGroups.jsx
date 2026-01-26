import React, { useState } from 'react';
import { GROUPS_DATA } from '../data/groupsData';

const SectionTitle = ({ title, subtitle }) => (
    <div className="mb-12">
        {subtitle && <span className="text-[#149C68] font-bold uppercase tracking-widest text-sm mb-2 block animate-fade-in">{subtitle}</span>}
        <h2 className="text-3xl md:text-4xl font-bold text-[#383939] leading-tight">
            {title}
        </h2>
        <div className="w-20 h-1.5 bg-[#AEE637] mt-4 rounded-full"></div>
    </div>
);

const GroupCard = ({ type, data }) => {
    switch (type) {
        case 'financiado':
            return (
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all group relative overflow-hidden flex flex-col h-full">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#149C68]/5 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="mb-6">
                        <span className="bg-[#AEE637]/20 text-[#149C68] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            {data.escuela}
                        </span>
                    </div>
                    <h4 className="text-xl font-bold text-[#383939] mb-4 line-clamp-3 flex-grow">
                        {data.proyecto}
                    </h4>
                    <div className="space-y-4 pt-6 border-t border-gray-100">
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Docente Investigador</p>
                            <p className="text-sm font-bold text-[#383939]">{data.investigador}</p>
                        </div>
                        <div className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl">
                            <span className="text-xs font-bold text-gray-500">FINANCIAMIENTO</span>
                            <span className="text-lg font-black text-[#149C68]">S/ {data.monto}</span>
                        </div>
                    </div>
                </div>
            );
        case 'reconocido':
            return (
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all group relative overflow-hidden flex flex-col h-full">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#38C958]/5 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                            {data.facultad}
                        </span>
                        <span className="bg-[#149C68]/10 text-[#149C68] text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                            {data.escuela}
                        </span>
                    </div>
                    <h4 className="text-xl font-bold text-[#383939] mb-2">
                        {data.grupo}
                    </h4>
                    <p className="text-xs font-semibold text-[#149C68] mb-6 italic">
                        Línea: {data.linea}
                    </p>
                    <div className="space-y-6 pt-6 border-t border-gray-100 flex-grow">
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Responsable</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#38C958] flex items-center justify-center text-white font-bold">
                                    {data.responsable.charAt(0)}
                                </div>
                                <p className="text-sm font-bold text-[#383939]">{data.responsable}</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Integrantes ({data.integrantes.length})</p>
                            <ul className="grid grid-cols-1 gap-1">
                                {data.integrantes.slice(0, 5).map((integ, idx) => (
                                    <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-[#AEE637]"></div>
                                        {integ}
                                    </li>
                                ))}
                                {data.integrantes.length > 5 && (
                                    <li className="text-xs font-bold text-[#149C68] italic mt-1">Y {data.integrantes.length - 5} más...</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            );
        default:
            return null;
    }
};

const ResearchGroups = () => {
    const [activeYear, setActiveYear] = useState('2025');

    return (
        <div className="bg-[#FFFEDB]/30 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src="src/assets/portada_grupos.jpg"
                        alt="Fondo Grupos"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#149C68]/90 to-[#149C68]/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block px-4 py-1 bg-[#AEE637] text-[#383939] rounded-full text-xs font-bold mb-6 uppercase tracking-wider animate-bounce">
                        Excelencia Académica
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-modern-reveal">
                        Grupos de <span className="text-[#AEE637]">Investigación</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 font-medium italic animate-fade-in">
                        "La investigación como camino al conocimiento"
                    </p>
                </div>
            </section>

            {/* Quiénes Somos */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <SectionTitle
                            title={GROUPS_DATA.about.title}
                            subtitle="Trayectoria y Propósito"
                        />
                        <p className="text-xl text-gray-600 leading-relaxed font-medium">
                            {GROUPS_DATA.about.desc}
                        </p>
                    </div>
                </div>
            </section>

            {/* Selector de Año */}
            <section className="py-12 bg-gray-50 border-y border-gray-100 sticky top-20 z-40">
                <div className="container mx-auto px-4 flex justify-center gap-4">
                    {['2025', '2024'].map((year) => (
                        <button
                            key={year}
                            onClick={() => setActiveYear(year)}
                            className={`px-12 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 ${activeYear === year
                                ? 'bg-[#149C68] text-white shadow-xl shadow-[#149C68]/20'
                                : 'bg-white text-gray-500 hover:bg-white/80'
                                }`}
                        >
                            CONVOCATORIA {year}
                        </button>
                    ))}
                </div>
            </section>

            {/* Contenido Dinámico según Año */}
            <div className="py-20 space-y-32">
                {activeYear === '2025' ? (
                    <>
                        {/* 2025 Financiados */}
                        <section className="container mx-auto px-4">
                            <SectionTitle
                                title="Grupos con Financiamiento 2025"
                                subtitle="Inversión en Conocimiento"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {GROUPS_DATA.financiados2025.map((item) => (
                                    <GroupCard key={item.id} type="financiado" data={item} />
                                ))}
                            </div>
                        </section>

                        {/* 2025 Reconocidos */}
                        <section className="container mx-auto px-4">
                            <SectionTitle
                                title="Grupos Reconocidos por UNA Puno 2025"
                                subtitle="Prestigio Institucional"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {GROUPS_DATA.reconocidos2025.map((item) => (
                                    <GroupCard key={item.id} type="reconocido" data={item} />
                                ))}
                            </div>
                        </section>
                    </>
                ) : (
                    <>
                        {/* 2024 Financiados */}
                        <section className="container mx-auto px-4">
                            <SectionTitle
                                title="Grupos con Financiamiento 2024"
                                subtitle="Impacto Logrado"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {GROUPS_DATA.financiados2024.map((item) => (
                                    <GroupCard key={item.id} type="financiado" data={item} />
                                ))}
                            </div>
                        </section>

                        {/* 2024 Reconocidos */}
                        <section className="container mx-auto px-4">
                            <SectionTitle
                                title="Grupos Reconocidos por UNA Puno 2024"
                                subtitle="Legado Científico"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {GROUPS_DATA.reconocidos2024.map((item) => (
                                    <GroupCard key={item.id} type="reconocido" data={item} />
                                ))}
                            </div>
                        </section>
                    </>
                )}
            </div>
        </div>
    );
};

export default ResearchGroups;
