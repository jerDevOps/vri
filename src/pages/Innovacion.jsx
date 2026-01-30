import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { innovacionData } from '../data/innovacionData';

const Innovacion = () => {
    useScrollReveal();
    const [activeTab, setActiveTab] = useState('patentes');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const tabs = [
        { id: 'patentes', label: 'Propiedad Intelectual', icon: 'fa-certificate' },
        { id: 'transferencia', label: 'Transferencia Tecnológica', icon: 'fa-exchange-alt' },
        { id: 'vinculacion', label: 'Vinculación Empresarial', icon: 'fa-handshake' }
    ];

    return (
        <div className="pb-24 bg-[#FAF9F6] min-h-screen">
            {/* HERO SECTION STANDARDIZED (60vh) */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#030D4F]">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920"
                        alt="Innovación Background"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#030D4F]/95 to-[#030D4F]/40"></div>
                </div>

                {/* Decorative Glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 z-10"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#AEDD2B]/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 z-10"></div>

                <div className="container mx-auto px-4 relative z-20 text-center">
                    <div className="inline-block mb-4 animate-fade-in">
                        <span className="py-2 px-6 rounded-full bg-white/10 border border-white/20 text-white font-black tracking-widest uppercase text-[10px] backdrop-blur-md">
                            Ecosistema de Innovación
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-white mb-6 animate-modern-reveal tracking-tighter">
                        Innovación y <span className="text-[#AEDD2B]">Transferencia</span>
                    </h1>
                    <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto font-light animate-slide-up leading-relaxed">
                        Transformamos la investigación académica en soluciones reales para el desarrollo económico y social de la región y el país.
                    </p>
                </div>
            </section>

            {/* INTERACTIVE NAVIGATION TABS */}
            <div className="sticky top-16 md:top-20 z-40 bg-white border-b border-gray-100 shadow-sm">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="flex items-center justify-between py-4 overflow-x-auto no-scrollbar gap-8 md:gap-0">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-3 text-[11px] font-black uppercase tracking-widest transition-all relative pb-2 whitespace-nowrap ${activeTab === tab.id ? 'text-[#030D4F] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-[#AEDD2B]' : 'text-gray-400 hover:text-gray-900'}`}
                            >
                                <i className={`fas ${tab.icon} ${activeTab === tab.id ? 'text-[#AEDD2B]' : ''}`}></i>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl py-16 md:py-24">

                {/* 1. PATENTES (PROPIEDAD INTELECTUAL) */}
                {activeTab === 'patentes' && (
                    <div className="grid lg:grid-cols-2 gap-8 reveal">
                        {innovacionData.patentes.map((patent) => (
                            <div key={patent.id} className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#030D4F]/5 rounded-bl-[5rem] -mr-8 -mt-8 group-hover:bg-[#AEDD2B]/20 transition-colors"></div>
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="bg-[#030D4F] text-[#AEDD2B] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                                            Patente Registrada
                                        </div>
                                        <span className="text-gray-300 font-mono text-xs">{patent.id_uap}</span>
                                    </div>
                                    <h3 className="text-2xl font-black text-[#030D4F] mb-6 leading-tight group-hover:text-[#051675]">
                                        {patent.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                        {patent.description}
                                    </p>
                                    <div className="pt-8 border-t border-gray-50 flex flex-wrap gap-6 items-center">
                                        <div>
                                            <span className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Inventores</span>
                                            <span className="text-xs font-bold text-[#030D4F]">{patent.inventors}</span>
                                        </div>
                                        <div>
                                            <span className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Año de Registro</span>
                                            <span className="text-xs font-bold text-[#030D4F]">{patent.year}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* 2. TRANSFERENCIA TECNOLÓGICA */}
                {activeTab === 'transferencia' && (
                    <div className="space-y-16 reveal">
                        {innovacionData.transferencia.map((project, idx) => (
                            <div key={project.id} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="lg:w-1/2 relative">
                                    <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-video lg:aspect-square">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute -bottom-6 -right-6 md:right-10 bg-[#AEDD2B] p-8 md:p-12 rounded-[2.5rem] shadow-xl text-[#030D4F] max-w-[250px] md:max-w-xs">
                                        <span className="block text-[10px] font-black uppercase tracking-widest mb-4">Impacto Real</span>
                                        <p className="text-sm md:text-base font-bold leading-relaxed">{project.impact}</p>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 p-8 md:p-12">
                                    <span className="text-[#AEDD2B] text-xs font-black uppercase tracking-[0.3em] mb-4 block">Proyecto de Transferencia</span>
                                    <h2 className="text-3xl md:text-5xl font-black text-[#030D4F] leading-tight mb-8">
                                        {project.title}
                                    </h2>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                                        {project.description}
                                    </p>
                                    <button className="px-8 py-4 bg-[#030D4F] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#051675] transition-all shadow-xl shadow-blue-900/10">
                                        Ver Expediente del Proyecto
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* 3. VINCULACIÓN EMPRESARIAL */}
                {activeTab === 'vinculacion' && (
                    <div className="bg-white rounded-[3rem] overflow-hidden border border-gray-100 shadow-xl reveal">
                        <table className="w-full text-left font-sans">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100">
                                    <th className="px-10 py-6 text-[10px] font-black text-[#030D4F] uppercase tracking-widest">Empresa / Aliado</th>
                                    <th className="px-10 py-6 text-[10px] font-black text-[#030D4F] uppercase tracking-widest">Proyecto Colaborativo</th>
                                    <th className="px-10 py-6 text-[10px] font-black text-[#030D4F] uppercase tracking-widest">Año</th>
                                    <th className="px-10 py-6 text-[10px] font-black text-[#030D4F] uppercase tracking-widest text-center">Estado</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {innovacionData.vinculacion.map((item) => (
                                    <tr key={item.id} className="hover:bg-gray-50/50 transition-colors group">
                                        <td className="px-10 py-8">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-[#030D4F] font-bold group-hover:bg-[#AEDD2B] transition-colors">
                                                    {item.company.charAt(0)}
                                                </div>
                                                <span className="text-sm font-black text-[#030D4F]">{item.company}</span>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8">
                                            <span className="block text-sm font-bold text-gray-800 mb-1">{item.project}</span>
                                            <span className="text-xs text-gray-500 line-clamp-1">{item.description}</span>
                                        </td>
                                        <td className="px-10 py-8 text-sm font-bold text-gray-400">{item.year}</td>
                                        <td className="px-10 py-8 text-center">
                                            <span className="inline-block px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-emerald-50 text-emerald-600 border border-emerald-100">
                                                {item.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Innovacion;
