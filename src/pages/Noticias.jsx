import React, { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { noticiasData } from '../data/actividadesData';

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    if (!images || images.length === 0) return null;

    const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl h-full min-h-[450px] bg-gray-100">
            {images.map((img, idx) => (
                <img
                    key={idx}
                    src={img}
                    alt={`Slide ${idx}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
                />
            ))}

            {/* Overlay sutil para mejorar visibilidad de controles */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            {images.length > 1 && (
                <>
                    <button onClick={prev} className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/30 border border-white/20 flex items-center justify-center">
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button onClick={next} className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/30 border border-white/20 flex items-center justify-center">
                        <i className="fas fa-chevron-right"></i>
                    </button>
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-1.5 rounded-full transition-all ${idx === currentIndex ? 'bg-[#AEDD2B] w-8' : 'bg-white/40 w-2 hover:bg-white/60'}`}
                            ></button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

const Noticias = () => {
    useScrollReveal();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mediaMode, setMediaMode] = useState('photos');

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentIndex]);

    const activeNews = noticiasData[currentIndex];

    const nextNews = () => {
        if (currentIndex < noticiasData.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setMediaMode('photos');
        }
    };

    const prevNews = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setMediaMode('photos');
        }
    };

    if (!activeNews) return null;

    return (
        <div className="pb-24 bg-[#FAF9F6] min-h-screen font-serif">

            {/* HERO SECTION - Estandardizado h-[60vh] con Estética de Periódico */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#030D4F]">
                {/* Background Multimedia sutil */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        src={activeNews.image}
                        alt="News BG"
                        className="w-full h-full object-cover blur-sm scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#030D4F] via-[#030D4F]/95 to-[#030D4F]/80"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-400/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 z-10"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#AEDD2B]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 z-10"></div>

                <div className="container mx-auto px-4 relative z-20 text-center">
                    <div className="inline-flex items-center gap-4 mb-4 animate-fade-in">
                        <span className="h-px w-8 bg-[#AEDD2B]"></span>
                        <span className="text-white/60 text-xs font-black uppercase tracking-[0.4em] font-sans">Crónicas de Puno</span>
                        <span className="h-px w-8 bg-[#AEDD2B]"></span>
                    </div>

                    <h1 className="text-7xl md:text-9xl font-black text-white mb-2 animate-modern-reveal tracking-tighter drop-shadow-2xl">
                        VRI <span className="text-[#AEDD2B]">JOURNAL</span>
                    </h1>

                    <div className="max-w-xl mx-auto border-t border-white/10 pt-6 mt-4 animate-slide-up">
                        <p className="text-blue-100 text-sm md:text-base font-medium tracking-widest uppercase italic font-sans">
                            Divulgación Científica & Cultura Académica
                        </p>
                    </div>
                </div>

                {/* Ribbon Inferior con Fecha */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-md border-t border-white/10 py-3 z-30">
                    <div className="container mx-auto px-4 flex justify-between items-center text-[10px] font-black text-white/50 uppercase tracking-[0.2em] font-sans">
                        <span>Puno, Perú</span>
                        <span className="text-[#AEDD2B]">{activeNews.date}</span>
                        <span>Edición Digital</span>
                    </div>
                </div>
            </section>

            {/* CONTROLES DE NAVEGACIÓN "A PÁGINA COMPLETA" */}
            <div className="sticky top-16 md:top-20 z-40 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 flex justify-between items-center max-w-7xl py-4 font-sans">
                    <button
                        onClick={prevNews}
                        disabled={currentIndex === 0}
                        className={`group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest transition-all ${currentIndex === 0 ? 'opacity-20 pointer-events-none' : 'text-[#030D4F] hover:text-[#AEDD2B]'}`}
                    >
                        <span className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-current group-hover:text-white transition-all">
                            <i className="fas fa-arrow-left"></i>
                        </span>
                        Atrás
                    </button>

                    <div className="hidden md:flex items-center gap-6">
                        <div className="text-center">
                            <span className="block text-[9px] font-black text-gray-400 uppercase tracking-tighter">Leyendo ahora</span>
                            <span className="text-xs font-black text-[#030D4F]">{activeNews.category}</span>
                        </div>
                        <div className="h-8 w-px bg-gray-100"></div>
                        <div className="flex items-center gap-2">
                            {noticiasData.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-[#AEDD2B] scale-150' : 'bg-gray-200 hover:bg-[#030D4F]/20'}`}
                                ></button>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={nextNews}
                        disabled={currentIndex === noticiasData.length - 1}
                        className={`group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest transition-all ${currentIndex === noticiasData.length - 1 ? 'opacity-20 pointer-events-none' : 'text-[#030D4F] hover:text-[#AEDD2B]'}`}
                    >
                        Siguiente
                        <span className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-current group-hover:text-white transition-all">
                            <i className="fas fa-arrow-right"></i>
                        </span>
                    </button>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl py-16 md:py-24 animate-fade-in">

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* COLUMNA IZQUIERDA: CONTENIDO EDITORIAL */}
                    <div className="lg:w-3/5">
                        <header className="mb-12">
                            <div className="flex items-center gap-4 mb-8">
                                <span className={`px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg ${activeNews.badgeColor || 'bg-unap-blue'}`}>
                                    {activeNews.category}
                                </span>
                                <div className="h-px flex-1 bg-gray-100"></div>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-black text-[#030D4F] leading-[1.05] tracking-tighter mb-10 text-balance block">
                                {activeNews.title}
                            </h2>

                            <div className="flex items-center gap-6 py-4 border-y border-gray-100 font-sans">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#030D4F] text-white flex items-center justify-center text-xs">
                                        <i className="fas fa-user-edit"></i>
                                    </div>
                                    <div>
                                        <span className="block text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Corresponsal</span>
                                        <span className="text-xs font-black text-[#030D4F]">Prensa VRI</span>
                                    </div>
                                </div>
                                <div className="h-8 w-px bg-gray-100"></div>
                                <div>
                                    <span className="block text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Lectura</span>
                                    <span className="text-xs font-black text-[#030D4F]">8 Minutos</span>
                                </div>
                            </div>
                        </header>

                        <div className="prose prose-2xl max-w-none">
                            {/* LEAD - RESUMEN IMPACTANTE */}
                            <p className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed mb-12 border-l-[6px] border-[#AEDD2B] pl-8 md:pl-12 italic">
                                {activeNews.excerpt}
                            </p>

                            {/* BODY CON DROP CAP */}
                            <div className="space-y-8">
                                {activeNews.content.split('\n\n').map((para, i) => (
                                    <p key={i} className={`text-xl text-gray-600 leading-[1.9] text-justify font-medium ${i === 0 ? 'first-letter:text-8xl first-letter:font-black first-letter:text-[#030D4F] first-letter:mr-4 first-letter:float-left first-letter:leading-none' : ''}`}>
                                        {para.trim()}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* ACCIONES DE ARTÍCULO */}
                        <div className="mt-20 flex flex-wrap gap-4 font-sans">
                            <button className="flex-1 bg-[#030D4F] text-white px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#051675] transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-900/10">
                                <i className="fas fa-download"></i> Descargar PDF
                            </button>
                            <button className="flex-1 bg-white text-[#030D4F] border-2 border-[#030D4F] px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-all flex items-center justify-center gap-3">
                                <i className="fas fa-share-alt"></i> Compartir Crónica
                            </button>
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: MULTIMEDIA & SIDENOTES */}
                    <div className="lg:w-2/5 flex flex-col gap-12">

                        {/* WIDGET MULTIMEDIA */}
                        <div className="sticky top-40">
                            {activeNews.videoUrl && (
                                <div className="flex bg-[#030D4F] p-1 rounded-2xl mb-6 shadow-xl">
                                    <button
                                        onClick={() => setMediaMode('photos')}
                                        className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${mediaMode === 'photos' ? 'bg-[#AEDD2B] text-[#030D4F]' : 'text-white/60 hover:text-white'}`}
                                    >
                                        Gala de Fotos
                                    </button>
                                    <button
                                        onClick={() => setMediaMode('video')}
                                        className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${mediaMode === 'video' ? 'bg-[#AEDD2B] text-[#030D4F]' : 'text-white/60 hover:text-white'}`}
                                    >
                                        🎥 Ver Video
                                    </button>
                                </div>
                            )}

                            <div className="overflow-hidden">
                                {mediaMode === 'video' && activeNews.videoUrl ? (
                                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video bg-black relative border-4 border-white shadow-blue-900/10">
                                        <iframe
                                            width="100%" height="100%"
                                            src={activeNews.videoUrl}
                                            title="YouTube" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen className="absolute inset-0"
                                        ></iframe>
                                    </div>
                                ) : (
                                    <ImageCarousel images={activeNews.images} />
                                )}
                            </div>

                            {/* LEYENDA TIPO PERIÓDICO */}
                            <div className="mt-6 p-8 bg-white border-l-4 border-[#030D4F] shadow-sm rounded-r-3xl">
                                <h4 className="text-[10px] font-black text-[#030D4F] uppercase tracking-widest mb-3 font-sans">Evidencia Visual</h4>
                                <p className="text-sm text-gray-500 italic leading-relaxed">
                                    {mediaMode === 'video'
                                        ? "Material audiovisual exclusivo capturado por el equipo de comunicaciones del VRI durante la jornada."
                                        : "Secuencia fotográfica que documenta los momentos clave de esta importante actividad académica."}
                                </p>
                            </div>

                            {/* SIDENOTE - CITA DESTACADA */}
                            <div className="mt-12 bg-[#030D4F] rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
                                <i className="fas fa-quote-right absolute top-6 right-8 text-white/10 text-7xl"></i>
                                <h4 className="text-[#AEDD2B] text-[10px] font-black uppercase tracking-widest mb-6 font-sans">Nota del Editor</h4>
                                <p className="text-xl font-bold leading-relaxed relative z-10 italic">
                                    "Esta investigación representa un hito para la universidad, marcando el inicio de una nueva era en la divulgación científica regional."
                                </p>
                                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#AEDD2B] text-[#030D4F] flex items-center justify-center font-black">V</div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Vicerrectorado de Investigación</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* EXPLORAR MÁS - FOOTER DE NOTICIAS */}
                <div className="mt-32 pt-16 border-t-8 border-[#030D4F] flex flex-col md:flex-row items-center justify-between gap-12 font-sans">
                    <div className="max-w-md">
                        <h4 className="text-3xl font-black text-[#030D4F] tracking-tighter mb-4">Continúa la Lectura</h4>
                        <p className="text-gray-500 text-sm font-medium">No te pierdas las crónicas anteriores de nuestra casa de estudios. Cada edición guarda un avance de nuestra comunidad.</p>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={prevNews}
                            disabled={currentIndex === 0}
                            className="group px-10 py-6 rounded-3xl border-2 border-[#030D4F] text-[#030D4F] font-black text-xs uppercase tracking-widest hover:bg-[#030D4F] hover:text-white transition-all disabled:opacity-30 flex items-center gap-3"
                        >
                            <i className="fas fa-arrow-left"></i> Anterior
                        </button>
                        <button
                            onClick={nextNews}
                            disabled={currentIndex === noticiasData.length - 1}
                            className="group px-10 py-6 rounded-3xl bg-[#030D4F] text-white font-black text-xs uppercase tracking-widest shadow-2xl shadow-blue-900/20 hover:bg-[#051675] hover:-translate-y-1 transition-all disabled:opacity-30 flex items-center gap-3"
                        >
                            Siguiente <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Noticias;
