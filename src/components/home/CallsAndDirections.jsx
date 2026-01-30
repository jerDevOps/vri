import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { MOCK_DATA } from '../../data/mockData';
import { convocatoriasData } from '../../data/actividadesData';

const CallsAndDirections = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Calls List */}
                    <div className="lg:w-2/3">
                        <SectionTitle
                            title="Convocatorias"
                            subtitle="Postula a fondos concursables y oportunidades de desarrollo."
                        />
                        <div className="space-y-4">
                            {convocatoriasData.map((call, idx) => (
                                <div
                                    key={call.id}
                                    className="group bg-white border border-gray-100 rounded-2xl p-4 md:p-6 hover:border-unap-blue/30 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-center gap-4 md:gap-6 reveal"
                                    style={{ transitionDelay: `${idx * 100}ms` }}
                                >
                                    {/* Status Box */}
                                    <div className={`flex flex-col items-center justify-center p-3 rounded-xl min-w-[80px] ${call.state === 'Cerrado' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                                        <i className={`fas text-xl mb-1 ${call.state === 'Cerrado' ? 'fa-lock' : 'fa-check-circle'}`}></i>
                                        <span className="text-[10px] font-bold uppercase">{call.state}</span>
                                    </div>

                                    <div className="flex-1 text-center md:text-left">
                                        <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-unap-blue transition-colors">
                                            {call.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start text-sm text-gray-500 mt-2">
                                            <span className="bg-gray-100 px-2 py-0.5 rounded text-xs font-medium text-gray-600">{call.type}</span>
                                            <span className="flex items-center"><i className="far fa-calendar-alt mr-1.5"></i> Cierre: <span className="font-semibold text-gray-700 ml-1">{call.closeDate}</span></span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-3 justify-center">
                                        <Button
                                            variant={call.state === 'Cerrado' ? 'danger' : 'ingresar'}
                                            className="whitespace-nowrap flex-shrink-0 text-sm"
                                            href={call.state === 'Cerrado' ? null : call.url}
                                            disabled={call.state === 'Cerrado'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {call.state === 'Cerrado' ? 'Cerrado' : 'Ingresar'}
                                        </Button>
                                        <Button
                                            variant="secondary"
                                            className="whitespace-nowrap flex-shrink-0 text-sm"
                                            href={call.basesUrl || "#"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fas fa-file-pdf mr-2"></i> Bases
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center md:text-left">
                            <a href="#convocatorias" className="inline-flex items-center font-semibold text-unap-blue hover:text-unap-gold transition-colors">
                                Ver histórico de convocatorias <i className="fas fa-long-arrow-alt-right ml-2"></i>
                            </a>
                        </div>
                    </div>

                    {/* Sidebar: Directions */}
                    <div className="lg:w-1/3">
                        <div className="bg-gray-50 rounded-3xl p-8 sticky top-24 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 font-serif">Direcciones</h3>
                            <div className="grid gap-4">
                                {MOCK_DATA.directions.map((dir) => (
                                    <a
                                        key={dir.id}
                                        href={dir.url || "#"}
                                        className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group border border-transparent hover:border-unap-blue/20"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-blue-50 text-unap-blue flex items-center justify-center group-hover:bg-unap-blue group-hover:text-white transition-colors mr-4">
                                            <i className={`fas ${dir.icon}`}></i>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 group-hover:text-unap-blue transition-colors text-sm">{dir.title}</h4>
                                            <p className="text-xs text-gray-500">{dir.desc}</p>
                                        </div>
                                        <i className="fas fa-chevron-right ml-auto text-gray-300 group-hover:text-unap-blue opacity-0 group-hover:opacity-100 transition-all"></i>
                                    </a>
                                ))}
                            </div>
                            <div className="mt-8 p-4 bg-unap-blue/5 rounded-xl border border-unap-blue/10">
                                <h4 className="font-bold text-unap-blue mb-2 text-sm"><i className="fas fa-headset mr-2"></i>¿Necesitas ayuda?</h4>
                                <p className="text-xs text-gray-600 mb-3">Contacta con nuestra mesa de ayuda para investigadores.</p>
                                <a href="https://vriunap.pe/mesa-partes/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-unap-blue hover:underline">Ir a Soporte</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallsAndDirections;
