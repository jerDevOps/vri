import React from 'react';
import { MOCK_DATA } from '../../data/mockData';

const QuickAccess = () => {
    return (
        <section className="relative z-20 mt-8 pb-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {MOCK_DATA.quickAccess.map((item, idx) => (
                        <a
                            key={item.id}
                            href={item.url || '#'}
                            target={item.url?.startsWith('http') ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group border border-gray-100 reveal block"
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            <div className={`${item.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
                                <i className={`fas ${item.icon}`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-unap-blue transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                                {item.desc}
                            </p>
                            <div className="mt-auto">
                                <span className="text-unap-blue text-sm font-semibold flex items-center group-hover:gap-2 transition-all">
                                    Acceder <i className="fas fa-arrow-right ml-2 text-xs"></i>
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickAccess;
