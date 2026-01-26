import React, { useState } from 'react';
import { RENACYT_DATA } from '../data/renacytData';

const SectionTitle = ({ title, subtitle }) => (
    <div className="mb-12">
        {subtitle && <span className="text-[#149C68] font-bold uppercase tracking-widest text-sm mb-2 block animate-fade-in">{subtitle}</span>}
        <h2 className="text-3xl md:text-4xl font-bold text-[#383939] leading-tight">
            {title}
        </h2>
        <div className="w-20 h-1.5 bg-[#AEE637] mt-4 rounded-full"></div>
    </div>
);

const FacultyHeader = ({ data }) => (
    <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 p-2 flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-110 transition-transform">
            <img
                src={data.logo || "/src/assets/logo_unap_gray.png"}
                alt={data.facultad}
                className="w-full h-full object-contain opacity-80"
                onError={(e) => { e.target.src = "/src/assets/logo_unap_gray.png"; }}
            />
        </div>
        <div className="min-w-0">
            <span className="bg-[#149C68]/10 text-[#149C68] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase truncate block mb-0.5">
                {data.facultad}
            </span>
            <h4 className="text-xs font-black text-[#383939] uppercase leading-tight truncate">
                {data.escuela}
            </h4>
        </div>
    </div>
);

const DocenteInvestigadorCard = ({ data }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-xl transition-all group relative overflow-hidden flex flex-col h-full border-b-2 hover:border-b-[#38C958]">
            <FacultyHeader data={data} />

            <div className="space-y-1.5 mt-2">
                {data.docentes.map((docente, idx) => (
                    <div key={idx} className="flex items-center justify-between py-1.5 px-3 rounded-lg bg-gray-50/50 hover:bg-white border border-transparent hover:border-[#AEE637]/30 transition-all text-[11px]">
                        <span className="font-bold text-[#4a4a4a] truncate pr-2">{docente.nombre}</span>
                        <span className="text-[9px] font-black text-[#149C68] whitespace-nowrap shrink-0 opacity-80 uppercase italic">
                            {docente.nivel}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const DocenteRenacytCard = ({ data }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-xl transition-all group relative overflow-hidden flex flex-col h-full border-b-2 hover:border-b-[#149C68]">
            <FacultyHeader data={data} />

            <div className="space-y-1.5 mt-2">
                {data.docentes.map((docente, idx) => (
                    <div key={idx} className="flex flex-col py-2 px-3 rounded-lg bg-gray-50/50 hover:bg-white border border-transparent hover:border-[#149C68]/30 transition-all">
                        <div className="flex items-center justify-between mb-0.5">
                            <span className="text-[11px] font-bold text-[#383939] truncate">{docente.nombre}</span>
                            <span className="text-[8px] font-black text-[#149C68] uppercase shrink-0 px-1.5 py-0.5 bg-white rounded-md border border-gray-100">
                                {docente.nivel}
                            </span>
                        </div>
                        <div className="flex items-center gap-1.5 opacity-60">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                            <span className="text-[9px] font-bold uppercase tracking-tighter">{docente.estado}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Renacyt = () => {
    return (
        <div className="bg-[#fcfcfc] min-h-screen">
            {/* Hero Section - Mas compacto */}
            <section className="relative h-[45vh] flex items-center justify-center overflow-hidden pt-16">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/src/assets/portada_renacyt.jpg"
                        alt="Fondo RENACYT"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#149C68]/95 to-[#149C68]/60"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block px-3 py-1 bg-[#AEE637] text-[#383939] rounded-full text-[10px] font-bold mb-4 uppercase tracking-widest animate-bounce">
                        Excelencia Investigativa
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-2 animate-modern-reveal">
                        Padrón de <span className="text-[#AEE637]">Investigadores</span>
                    </h1>
                </div>
            </section>

            {/* Quiénes Somos - Mas compacto */}
            <section className="relative py-16 bg-white border-b border-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <SectionTitle
                            title={RENACYT_DATA.about.title}
                            subtitle="UNA PUNO"
                        />
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                            {RENACYT_DATA.about.desc}
                        </p>
                    </div>
                </div>
            </section>

            {/* Docentes Investigadores - Grid mas denso */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="DOCENTES INVESTIGADORES"
                        subtitle="Clasificación Universitaria"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {RENACYT_DATA.docentesInvestigadores.map((item) => (
                            <DocenteInvestigadorCard key={item.id} data={item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Docentes Renacyt - Grid mas denso */}
            <section className="py-20 bg-gray-50/50">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="DOCENTES RENACYT"
                        subtitle="Registro Nacional (CONCYTEC)"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {RENACYT_DATA.docentesRenacyt.map((item) => (
                            <DocenteRenacytCard key={item.id} data={item} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Renacyt;
