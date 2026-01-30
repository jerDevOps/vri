import React from 'react';
import { eventosData } from '../../data/actividadesData';

const EventsSection = () => {
    // Tomar solo los próximos eventos para la agenda del inicio
    const agendaEventos = eventosData.filter(evt => evt.estado === 'Próximo').slice(0, 3);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 reveal">
                    <h2 className="text-3xl font-bold text-gray-800 font-serif">Agenda VRI</h2>
                    <p className="text-gray-500 mt-2">Participa en nuestros próximos eventos académicos</p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                    <div className="w-full max-w-3xl space-y-6">
                        {agendaEventos.map((evt) => (
                            <div key={evt.id} className="bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center gap-6 md:gap-8 group reveal">

                                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex flex-col items-center justify-center border border-gray-200 group-hover:border-unap-blue group-hover:from-unap-blue group-hover:to-blue-700 transition-all group-hover:text-white">
                                    <span className="text-3xl font-bold leading-none">{evt.day}</span>
                                    <span className="text-xs font-bold uppercase tracking-widest mt-1">{evt.month}</span>
                                </div>

                                <div className="flex-1 text-center sm:text-left">
                                    <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase rounded-full mb-2">{evt.tipo}</span>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-unap-blue transition-colors">{evt.actividad}</h3>
                                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
                                        <span className="flex items-center justify-center sm:justify-start"><i className="far fa-clock mr-2 text-unap-gold"></i> {evt.hora}</span>
                                        <span className="flex items-center justify-center sm:justify-start"><i className="fas fa-map-pin mr-2 text-unap-gold"></i> {evt.lugar}</span>
                                    </div>
                                </div>

                                <a href="#actividades" className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-unap-blue group-hover:border-unap-blue group-hover:text-white transition-all">
                                    <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
