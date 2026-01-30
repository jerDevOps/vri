import React, { useState, useEffect, useRef } from 'react';
import { noticiasData, eventosData, convocatoriasData } from '../../data/actividadesData';
import { normativaData } from '../../data/normativaData';
import { innovacionData } from '../../data/innovacionData';
import { RENACYT_DATA } from '../../data/renacytData';

const SearchModal = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        } else {
            setQuery('');
            setResults([]);
        }
    }, [isOpen]);

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.length < 2) {
            setResults([]);
            return;
        }

        const searchTerm = value.toLowerCase();
        const searchResults = [];

        // 1. Noticias
        noticiasData.forEach(item => {
            if (item.title.toLowerCase().includes(searchTerm) || item.excerpt.toLowerCase().includes(searchTerm)) {
                searchResults.push({ type: 'Noticia', title: item.title, link: '#noticias', icon: 'fa-newspaper' });
            }
        });

        // 2. Convocatorias
        convocatoriasData.forEach(item => {
            if (item.title.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm)) {
                searchResults.push({ type: 'Convocatoria', title: item.title, link: '#convocatorias', icon: 'fa-file-invoice-dollar' });
            }
        });

        // 3. Normativa (Reglamentos y Directivas)
        [...normativaData.directivas, ...normativaData.reglamentos].forEach(item => {
            if (item.title.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm)) {
                searchResults.push({ type: 'Normativa', title: item.title, link: '#normativa', icon: 'fa-file-pdf' });
            }
        });

        // 4. Innovación
        [...innovacionData.patentes, ...innovacionData.transferencia].forEach(item => {
            if (item.title.toLowerCase().includes(searchTerm) || (item.description && item.description.toLowerCase().includes(searchTerm))) {
                searchResults.push({ type: 'Innovación', title: item.title, link: '#innovacion', icon: 'fa-lightbulb' });
            }
        });
        innovacionData.vinculacion.forEach(item => {
            if (item.project.toLowerCase().includes(searchTerm) || item.company.toLowerCase().includes(searchTerm)) {
                searchResults.push({ type: 'Innovación', title: item.project, link: '#innovacion', icon: 'fa-handshake' });
            }
        });

        // 5. Investigadores (RENACYT)
        RENACYT_DATA.docentesRenacyt.forEach(fac => {
            fac.docentes.forEach(doc => {
                if (doc.nombre.toLowerCase().includes(searchTerm)) {
                    searchResults.push({ type: 'Investigador', title: doc.nombre, link: '#investigadores', icon: 'fa-user-tie' });
                }
            });
        });

        // Limitar resultados
        setResults(searchResults.slice(0, 8));
    };

    const handleResultClick = (link) => {
        window.location.hash = link;
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#030D4F]/80 backdrop-blur-md animate-fade-in shadow-2xl">
            <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden relative animate-modern-reveal">

                {/* Header del Buscador */}
                <div className="p-8 border-b border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#AEDD2B] text-[#030D4F] flex items-center justify-center shadow-lg">
                                <i className="fas fa-search"></i>
                            </div>
                            <h3 className="text-2xl font-black text-[#030D4F] tracking-tighter">Buscador Inteligente</h3>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 rounded-full bg-gray-50 text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all flex items-center justify-center"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>

                    <div className="relative">
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={handleSearch}
                            placeholder="Buscar reglamentos, noticias, investigadores..."
                            className="w-full pl-6 pr-4 py-5 bg-gray-50 border-2 border-transparent focus:border-[#AEDD2B] rounded-2xl focus:outline-none focus:bg-white transition-all text-xl font-medium text-[#030D4F]"
                        />
                    </div>
                </div>

                {/* Resultados o Sugerencias */}
                <div className="p-8 max-h-[60vh] overflow-y-auto no-scrollbar">
                    {results.length > 0 ? (
                        <div className="space-y-2">
                            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Resultados Encontrados</h4>
                            {results.map((result, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => handleResultClick(result.link)}
                                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 cursor-pointer border border-transparent hover:border-gray-100 transition-all group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-gray-100 text-[#030D4F] flex items-center justify-center group-hover:bg-[#030D4F] group-hover:text-white transition-all">
                                        <i className={`fas ${result.icon}`}></i>
                                    </div>
                                    <div className="flex-1">
                                        <span className="block text-[9px] font-black text-[#AEDD2B] uppercase tracking-widest leading-none mb-1">{result.type}</span>
                                        <h5 className="text-sm font-bold text-[#030D4F] line-clamp-1">{result.title}</h5>
                                    </div>
                                    <i className="fas fa-chevron-right text-gray-200 group-hover:text-[#030D4F] transition-all"></i>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>
                            {query.length >= 2 ? (
                                <div className="text-center py-10">
                                    <i className="fas fa-search-minus text-4xl text-gray-100 mb-4"></i>
                                    <p className="text-gray-400 text-sm font-bold">No se encontraron resultados para "{query}"</p>
                                </div>
                            ) : (
                                <>
                                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Búsquedas Populares</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {[
                                            { label: 'Renacyt', link: '#investigadores', icon: 'fa-user-graduate' },
                                            { label: 'Conv. 2026', link: '#convocatorias', icon: 'fa-hand-holding-usd' },
                                            { label: 'Reglamentos', link: '#normativa', icon: 'fa-book' },
                                            { label: 'Patentes', link: '#innovacion', icon: 'fa-lightbulb' },
                                            { label: 'Revistas', link: '#revistas', icon: 'fa-journal-whills' },
                                            { label: 'Noticias', link: '#noticias', icon: 'fa-newspaper' }
                                        ].map(tag => (
                                            <div
                                                key={tag.label}
                                                onClick={() => handleResultClick(tag.link)}
                                                className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl cursor-pointer hover:bg-[#AEDD2B]/10 hover:border-[#AEDD2B] border border-transparent transition-all group"
                                            >
                                                <i className={`fas ${tag.icon} text-[#030D4F] opacity-40 group-hover:opacity-100`}></i>
                                                <span className="text-xs font-bold text-[#030D4F]">{tag.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </div>

                {/* Footer del Modal */}
                <div className="p-6 bg-gray-50 border-t border-gray-100 text-center">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center justify-center gap-2">
                        Buscador del Sistema de Gestión de la Investigación VRI
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
