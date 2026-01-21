import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const InstitutionalStats = () => {
    return (
        <section className="py-20 bg-unap-navy relative overflow-hidden text-white">
            {/* Decorative Blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-unap-skyBlue/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-unap-yellow/10 rounded-full blur-[80px] -ml-20 -mb-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <SectionTitle
                    title={<span className="text-white">Excelencia en Cifras</span>}
                    subtitle={<span className="text-unap-skyBlue">Resultados que demuestran nuestro compromiso con el desarrollo de la región.</span>}
                    centered
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { label: 'Inversión 2025', val: 'S/ 12M', icon: 'fa-chart-line', color: 'text-unap-yellow' },
                        { label: 'Tesis Publicadas', val: '1,450', icon: 'fa-graduation-cap', color: 'text-unap-skyBlue' },
                        { label: 'Artículos Indexados', val: '320', icon: 'fa-scroll', color: 'text-white' },
                        { label: 'Patentes Registradas', val: '12', icon: 'fa-award', color: 'text-unap-yellow' },
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center hover:bg-white/10 transition-colors reveal">
                            <div className={`text-4xl mb-4 ${stat.color}`}>
                                <i className={`fas ${stat.icon}`}></i>
                            </div>
                            <div className="text-4xl font-bold mb-2 font-serif">{stat.val}</div>
                            <div className="text-unap-skyBlue text-sm uppercase tracking-wider font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstitutionalStats;
