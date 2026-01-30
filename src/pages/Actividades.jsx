import React, { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { postersData, eventosData } from '../data/actividadesData';

const EventModal = ({ event, onClose }) => {
    if (!event) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-[#030D4F]/80 backdrop-blur-md animate-fade-in"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl animate-slide-up flex flex-col md:flex-row border border-white/20">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all flex items-center justify-center border border-white/30"
                >
                    <i className="fas fa-times"></i>
                </button>

                {/* Left Side: Banner & Speaker info */}
                <div className="md:w-5/12 relative">
                    <div className="h-64 md:h-full relative overflow-hidden">
                        <img
                            src={event.banner || event.image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800'}
                            alt={event.actividad}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#030D4F] via-[#030D4F]/40 to-transparent"></div>

                        <div className="absolute bottom-10 left-10 right-10">
                            <span className="bg-[#AEDD2B] text-[#030D4F] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block shadow-lg">
                                {event.tipo}
                            </span>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-xl">
                                    <i className="fas fa-microphone"></i>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider">Ponente</span>
                                    <span className="text-white font-bold text-sm tracking-tight">{event.ponente || 'VRI UNAP'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Details & Actions */}
                <div className="md:w-7/12 p-10 md:p-14 bg-white">
                    <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-[#030D4F]/40 uppercase mb-4">
                        <i className="far fa-calendar-alt text-[#AEDD2B]"></i>
                        Detalles del Evento
                    </div>

                    <h2 className="text-3xl font-bold text-[#030D4F] mb-6 leading-tight tracking-tight">
                        {event.actividad}
                    </h2>

                    <div className="grid grid-cols-2 gap-8 mb-8">
                        <div>
                            <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Fecha y Hora</span>
                            <div className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                    <i className="far fa-clock"></i>
                                </div>
                                <span>{event.fecha} <span className="text-gray-400 font-normal">|</span> {event.hora}</span>
                            </div>
                        </div>
                        <div>
                            <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Lugar / Plataforma</span>
                            <div className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                <div className="w-8 h-8 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                                    <i className="fas fa-map-marker-alt text-xs"></i>
                                </div>
                                <span className="truncate">{event.lugar}</span>
                            </div>
                        </div>
                    </div>

                    <div className="mb-10">
                        <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Descripción</span>
                        <p className="text-gray-600 text-sm leading-relaxed font-medium">
                            {event.desc || 'Participe en esta importante actividad organizada por el Vicerrectorado de Investigación para el fortalecimiento de la comunidad académica universitaria.'}
                        </p>
                    </div>

                    <div className="grid gap-4">
                        <h4 className="text-xs font-bold text-[#030D4F] uppercase tracking-widest mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#AEDD2B]"></span> Acciones Disponibles
                        </h4>

                        <div className="flex flex-col sm:flex-row gap-4">
                            {event.linkRegistro && event.estado === 'Próximo' && (
                                <a
                                    href={event.linkRegistro}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-[#030D4F] text-white px-8 py-5 rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:bg-[#051675] transition-all shadow-xl shadow-blue-900/10 text-center flex items-center justify-center gap-3 group"
                                >
                                    Inscribirse Aquí
                                    <i className="fas fa-chevron-right transition-transform group-hover:translate-x-1"></i>
                                </a>
                            )}

                            {event.linkInteres && event.linkInteres !== '#' && (
                                <a
                                    href={event.linkInteres}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-white border-2 border-[#030D4F] text-[#030D4F] px-8 py-5 rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:bg-gray-50 transition-all text-center flex items-center justify-center gap-3"
                                >
                                    Ver Documentos
                                    <i className="fas fa-file-pdf"></i>
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex gap-2">
                            {event.tags && event.tags.map(tag => (
                                <span key={tag} className="text-[9px] font-bold text-gray-400 px-2 py-1 bg-gray-50 rounded-lg">#{tag}</span>
                            ))}
                        </div>
                        <span className="text-[10px] font-bold text-[#AEDD2B] uppercase tracking-widest">
                            {event.estado}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Actividades = () => {
    const [activeTab, setActiveTab] = useState('poster');
    const [filterCategory, setFilterCategory] = useState('todos');
    const [selectedEvent, setSelectedEvent] = useState(null);

    useScrollReveal();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const cronograma = eventosData;
    const posters = postersData;

    // Categorías únicas para filtros
    const categories = ['todos', ...new Set(cronograma.map(ev => ev.tipo.toLowerCase()))];

    return (
        <div className="pb-24 bg-white min-h-screen font-sans">

            {/* Modal de Evento */}
            {selectedEvent && (
                <EventModal
                    event={selectedEvent}
                    onClose={() => setSelectedEvent(null)}
                />
            )}

            {/* HERO SECTION */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#030D4F] mb-12">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1920"
                        alt="Actividades VRI Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#030D4F]/95 to-[#030D4F]/40"></div>
                </div>

                {/* Decorative Celeste Glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 z-10"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-300/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 z-10"></div>

                <div className="container mx-auto px-4 relative z-20 text-center">
                    <div className="inline-block mb-4 animate-fade-in">
                        <span className="py-2 px-6 rounded-full bg-white/10 border border-white/20 text-white font-black tracking-widest uppercase text-[10px] backdrop-blur-md">
                            Ecosistema de Investigación
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-modern-reveal">
                        Agenda & <span className="text-[#AEDD2B]">Divulgación</span>
                    </h1>
                    <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-light animate-slide-up">
                        Explora los próximos hitos científicos y la producción visual de nuestra comunidad académica.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 max-w-7xl reveal">

                {/* TABS NAVIGATION PREMIUM */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-2 mb-16 p-2 bg-gray-100 rounded-[2rem] max-w-2xl mx-auto reveal">
                    <button
                        onClick={() => setActiveTab('poster')}
                        className={`flex-1 w-full px-8 py-4 rounded-[1.5rem] font-bold transition-all duration-500 flex items-center justify-center gap-3 ${activeTab === 'poster'
                            ? 'bg-white text-[#030D4F] shadow-xl'
                            : 'text-gray-500 hover:text-[#030D4F]'}`}
                    >
                        <i className={`fas fa-palette ${activeTab === 'poster' ? 'text-[#AEDD2B]' : ''}`}></i>
                        Galería de Posters
                    </button>
                    <button
                        onClick={() => setActiveTab('cronograma')}
                        className={`flex-1 w-full px-8 py-4 rounded-[1.5rem] font-bold transition-all duration-500 flex items-center justify-center gap-3 ${activeTab === 'cronograma'
                            ? 'bg-white text-[#030D4F] shadow-xl'
                            : 'text-gray-500 hover:text-[#030D4F]'}`}
                    >
                        <i className={`fas fa-calendar-alt ${activeTab === 'cronograma' ? 'text-[#AEDD2B]' : ''}`}></i>
                        Agenda VRI
                    </button>
                </div>

                {/* POSTERS SECTION */}
                {activeTab === 'poster' && (
                    <div className="animate-fade-in">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {posters.map((poster) => (
                                <div key={poster.id} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
                                    <div className="relative h-72 overflow-hidden">
                                        <img src={poster.image} alt={poster.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#030D4F]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                            <button className="w-full bg-[#AEDD2B] text-[#030D4F] py-3 rounded-xl font-bold text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                                <i className="fas fa-expand-alt mr-2"></i> VER EN DETALLE
                                            </button>
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-[#AEDD2B] text-[#030D4F] text-[10px] font-black px-3 py-1 rounded-full uppercase">
                                                {poster.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="font-bold text-[#030D4F] text-lg mb-3 line-clamp-2 leading-tight">{poster.title}</h3>
                                        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#030D4F] text-xs font-bold">
                                                    {poster.author.charAt(0)}
                                                </div>
                                                <span className="text-xs text-gray-500 font-medium">{poster.author}</span>
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{poster.date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* CRONOGRAMA SECTION REDISEÑADA */}
                {activeTab === 'cronograma' && (
                    <div className="animate-fade-in grid lg:grid-cols-12 gap-12">

                        {/* PANEL IZQUIERDO: CALENDARIO Y FILTROS */}
                        <div className="lg:col-span-4 space-y-8">
                            <div className="bg-[#030D4F] rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-400/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                    <i className="fas fa-filter text-[#AEDD2B]"></i>
                                    Filtrar Agenda
                                </h3>
                                <div className="flex flex-wrap gap-2 text-sm">
                                    {categories.map(cat => (
                                        <button
                                            key={cat}
                                            onClick={() => setFilterCategory(cat)}
                                            className={`px-4 py-2 rounded-xl border transition-all uppercase text-[10px] font-bold tracking-widest ${filterCategory === cat
                                                ? 'bg-[#AEDD2B] border-[#AEDD2B] text-[#030D4F]'
                                                : 'border-white/20 text-white/60 hover:border-white'}`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                                <div className="mt-10 p-4 bg-white/5 rounded-2xl border border-white/10">
                                    <h4 className="text-xs font-bold text-[#AEDD2B] mb-2 uppercase tracking-tighter">Recordatorio</h4>
                                    <p className="text-xs text-white/70 leading-relaxed italic">
                                        "La investigación no es lo que sé, sino lo que estoy dispuesto a descubrir."
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100">
                                <h3 className="text-xl font-bold text-[#030D4F] mb-6 flex items-center gap-3">
                                    <i className="fas fa-info-circle text-[#030D4F]"></i>
                                    Asistencia
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <i className="fas fa-check text-[10px]"></i>
                                        </div>
                                        <p className="text-xs text-gray-600 font-medium">Todos los eventos virtuales se graban y suben al repositorio.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <i className="fas fa-id-card text-[10px]"></i>
                                        </div>
                                        <p className="text-xs text-gray-600 font-medium">Se otorgarán certificados de asistencia para congresos y talleres.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* PANEL DERECHO: LISTA DE EVENTOS EXPLICADA */}
                        <div className="lg:col-span-8 space-y-6">
                            {cronograma
                                .filter(ev => filterCategory === 'todos' || ev.tipo.toLowerCase() === filterCategory)
                                .map((evento) => (
                                    <div key={evento.id} className="group relative">
                                        <div className={`bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${evento.estado === 'Completado' ? 'grayscale opacity-70' : ''}`}>

                                            {/* Fecha Visual */}
                                            <div className="flex-shrink-0 w-24 h-24 rounded-3xl bg-gray-50 flex flex-col items-center justify-center border border-gray-100 group-hover:bg-[#030D4F] group-hover:text-white transition-colors">
                                                <span className="text-3xl font-black leading-none">{evento.day}</span>
                                                <span className="text-xs font-bold uppercase tracking-[0.2em] mt-1">{evento.month}</span>
                                            </div>

                                            {/* Contenido */}
                                            <div className="flex-1">
                                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${evento.estado === 'Completado' ? 'bg-gray-200 text-gray-500' : 'bg-blue-50 text-blue-600'
                                                        }`}>
                                                        {evento.tipo}
                                                    </span>
                                                    {evento.tags && evento.tags.map(tag => (
                                                        <span key={tag} className="text-[9px] font-bold text-gray-400 italic">#{tag}</span>
                                                    ))}
                                                </div>

                                                <h3 className="text-2xl font-bold text-[#030D4F] mb-3 group-hover:text-[#051675] tracking-tight">{evento.actividad}</h3>

                                                <p className="text-sm text-gray-500 mb-6 leading-relaxed max-w-2xl">
                                                    {evento.desc || 'No hay descripción disponible para este evento institucional del VRI.'}
                                                </p>

                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[#AEDD2B]">
                                                            <i className="fas fa-map-marker-alt text-xs"></i>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="text-[10px] uppercase text-gray-400 font-bold">Lugar</span>
                                                            <span className="text-[11px] font-bold text-gray-700">{evento.lugar}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[#AEDD2B]">
                                                            <i className="fas fa-microphone text-xs"></i>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="text-[10px] uppercase text-gray-400 font-bold">Ponente / Responsable</span>
                                                            <span className="text-[11px] font-bold text-gray-700">{evento.ponente || 'VRI UNAP'}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Acciones */}
                                                <div className="mt-8 flex flex-wrap gap-4">
                                                    <button
                                                        onClick={() => setSelectedEvent(evento)}
                                                        className="bg-[#030D4F] text-white px-6 py-3 rounded-xl text-xs font-bold hover:bg-[#AEDD2B] hover:text-[#030D4F] transition-all shadow-lg flex items-center gap-2"
                                                    >
                                                        <i className="fas fa-external-link-alt"></i> Participar / Ver más
                                                    </button>
                                                    <button className="bg-gray-100 text-[#030D4F] px-6 py-3 rounded-xl text-xs font-bold hover:bg-gray-200 transition-all flex items-center gap-2">
                                                        <i className="far fa-bell"></i> Recordatorio
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Status Ribon */}
                                            <div className={`absolute top-8 right-8 flex flex-col items-end`}>
                                                <span className={`text-[9px] font-black uppercase tracking-tighter ${evento.estado === 'Completado' ? 'text-gray-400' : 'text-[#AEDD2B]'
                                                    }`}>
                                                    {evento.estado}
                                                </span>
                                                <span className="text-xs font-bold text-gray-400">{evento.hora}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>

                    </div>
                )}

            </div>
        </div>
    );
};

export default Actividades;
