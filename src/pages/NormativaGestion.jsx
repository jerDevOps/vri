import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { normativaData } from '../data/normativaData';

const PDFModal = ({ file, title, onClose }) => {
    if (!file) return null;

    // Asumimos que los PDFs estarán en la carpeta /assets/docs/ dentro de public o assets
    // Si están en public/assets/docs/, la ruta sería /assets/docs/nombre.pdf
    const pdfPath = `/assets/docs/${file}`;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-fade-in">
            <div className="absolute inset-0 bg-[#030D4F]/80 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative bg-white w-full max-w-6xl h-full rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white z-10">
                    <div>
                        <span className="text-[10px] font-black text-[#AEDD2B] uppercase tracking-widest mb-1 block">Visualizador de Documentos</span>
                        <h3 className="text-xl font-black text-[#030D4F] tracking-tighter line-clamp-1">{title}</h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-[#030D4F] hover:bg-red-50 hover:text-red-500 transition-all"
                    >
                        <i className="fas fa-times text-xl"></i>
                    </button>
                </div>
                <div className="flex-1 bg-gray-100 relative">
                    <iframe
                        src={`${pdfPath}#toolbar=0`}
                        className="w-full h-full border-none"
                        title={title}
                    ></iframe>
                </div>
                <div className="p-4 bg-gray-50 text-center">
                    <a
                        href={pdfPath}
                        download
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#030D4F] text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#051675] transition-all shadow-lg"
                    >
                        <i className="fas fa-download"></i> Descargar Documento Oficial
                    </a>
                </div>
            </div>
        </div>
    );
};

const NormativaGestion = () => {
    useScrollReveal();
    const [selectedPDF, setSelectedPDF] = useState(null);
    const [activeTab, setActiveTab] = useState('directivas');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pb-24 bg-[#FAF9F6] min-h-screen">
            {/* HERO SECTION STANDARDIZED (60vh) */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#030D4F]">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1920"
                        alt="Normativa Background"
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
                            Marco Legal & Transparencia
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-white mb-6 animate-modern-reveal tracking-tighter">
                        Normativa y <span className="text-[#AEDD2B]">Gestión</span>
                    </h1>
                    <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto font-light animate-slide-up leading-relaxed">
                        Compendio de directivas, reglamentos y lineamientos oficiales que rigen la actividad científica y académica del Vicerrectorado de Investigación.
                    </p>
                </div>
            </section>

            {/* TABS NAVIGATION */}
            <div className="sticky top-16 md:top-20 z-40 bg-white border-b border-gray-100 shadow-sm">
                <div className="container mx-auto px-4 max-w-4xl flex items-center justify-center gap-12 font-sans py-4">
                    <button
                        onClick={() => setActiveTab('directivas')}
                        className={`text-xs font-black uppercase tracking-widest transition-all relative pb-2 ${activeTab === 'directivas' ? 'text-[#030D4F] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-[#AEDD2B]' : 'text-gray-400 hover:text-gray-900'}`}
                    >
                        Directivas
                    </button>
                    <button
                        onClick={() => setActiveTab('reglamentos')}
                        className={`text-xs font-black uppercase tracking-widest transition-all relative pb-2 ${activeTab === 'reglamentos' ? 'text-[#030D4F] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-[#AEDD2B]' : 'text-gray-400 hover:text-gray-900'}`}
                    >
                        Reglamentos
                    </button>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-6xl py-20">
                <div className="grid md:grid-cols-2 gap-8 reveal">
                    {normativaData[activeTab].map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-[#030D4F]/5 text-[#030D4F] flex items-center justify-center group-hover:bg-[#AEDD2B] group-hover:text-[#030D4F] transition-colors">
                                    <i className="fas fa-file-pdf text-xl"></i>
                                </div>
                                <span className="bg-gray-50 text-[9px] font-black text-gray-400 px-3 py-1 rounded-full uppercase tracking-widest">PDF Oficial</span>
                            </div>

                            <h3 className="text-lg font-black text-[#030D4F] mb-4 tracking-tight leading-snug group-hover:text-[#051675]">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                                {item.description}
                            </p>

                            <button
                                onClick={() => setSelectedPDF(item)}
                                className="w-full py-4 bg-gray-50 text-[#030D4F] rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#030D4F] hover:text-white transition-all flex items-center justify-center gap-2 group-hover:shadow-lg"
                            >
                                Ver Documento <i className="fas fa-external-link-alt text-[9px]"></i>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* PDF MODAL */}
            {selectedPDF && (
                <PDFModal
                    file={selectedPDF.file}
                    title={selectedPDF.title}
                    onClose={() => setSelectedPDF(null)}
                />
            )}
        </div>
    );
};

export default NormativaGestion;
