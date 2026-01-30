import React, { useState, useEffect, useRef } from 'react';
import { noticiasData, convocatoriasData } from '../../data/actividadesData';
import { normativaData } from '../../data/normativaData';
import { innovacionData } from '../../data/innovacionData';
import { RENACYT_DATA } from '../../data/renacytData';
import { INSTITUTOS_DATA } from '../../data/institutosData';
import { GROUPS_DATA } from '../../data/groupsData';
import { SEMILLEROS_DATA } from '../../data/semillerosData';

// Datos estáticos de secciones y servicios del portal
const SITE_SECTIONS = [
    { title: 'Inicio / Home', keywords: 'inicio home principal portada', link: '#', type: 'Sección', icon: 'fa-home' },
    { title: 'Nosotros / Autoridades', keywords: 'nosotros mision vision objetivos autoridades equipo', link: '#nosotros', type: 'Sección', icon: 'fa-users' },
    { title: 'Revistas Científicas', keywords: 'revistas publicaciones papers articulos journals', link: '#revistas', type: 'Sección', icon: 'fa-book-open' },
    { title: 'Actividades y Eventos', keywords: 'actividades eventos agenda calendario posters cronograma', link: '#actividades', type: 'Sección', icon: 'fa-calendar-alt' },
    { title: 'Noticias y Actualidad', keywords: 'noticias novedades diario periodico actualidad', link: '#noticias', type: 'Sección', icon: 'fa-newspaper' },
    { title: 'Convocatorias y Fondos', keywords: 'convocatorias fondos concursos financiamiento becas', link: '#convocatorias', type: 'Sección', icon: 'fa-bullhorn' },
    { title: 'Normativa y Reglamentos', keywords: 'normativa reglamentos leyes directivas resoluciones documentos', link: '#normativa', type: 'Sección', icon: 'fa-gavel' },
    { title: 'Innovación y Transferencia', keywords: 'innovacion transferencia patentes propiedad intelectual indcopi', link: '#innovacion', type: 'Sección', icon: 'fa-lightbulb' },
    { title: 'Investigadores RENACYT', keywords: 'investigadores docentes renacyt concytec cientificos', link: '#renacyt', type: 'Sección', icon: 'fa-user-tie' },
    { title: 'Instituto de Investigación (IDI)', keywords: 'instituto investigacion idi', link: '#idi', type: 'Sección', icon: 'fa-flask' },
    { title: 'Grupos de Investigación', keywords: 'grupos investigacion equipos lines', link: '#grupos', type: 'Sección', icon: 'fa-users-cog' },
    { title: 'Semilleros de Investigación', keywords: 'semilleros estudiantes jovenes', link: '#semilleros', type: 'Sección', icon: 'fa-seedling' },
    { title: 'Institutos Facultativos', keywords: 'institutos facultades centros', link: '#institutos', type: 'Sección', icon: 'fa-university' },
    { title: 'Comité de Ética', keywords: 'etica comite bioetica evaluacion', link: 'https://vriunap.pe/etica', type: 'Enlace Externo', icon: 'fa-balance-scale' },
    { title: 'Incubadora de Empresas', keywords: 'incubadora empresas emprendimiento incunalab negocios', link: 'https://www.incunalab.com/', type: 'Enlace Externo', icon: 'fa-rocket' },
    { title: 'Plataforma FEDU', keywords: 'fedu fondo editorial libro publicaciones', link: 'https://vriunap.pe/fedu/', type: 'Plataforma', icon: 'fa-book' },
    { title: 'Repositorio Institucional', keywords: 'repositorio tesis trabajos academicos', link: 'https://repositorio.unap.edu.pe/home', type: 'Plataforma', icon: 'fa-archive' },
    { title: 'Mesa de Partes Virtual', keywords: 'mesa partes tramite documento expediente', link: 'https://tramites.unap.edu.pe/', type: 'Servicio', icon: 'fa-envelope-open-text' },
    { title: 'PGI - Gestión de Investigación', keywords: 'pgi sistema gestion plataforma proyectos', link: 'https://pgi.vriunap.pe/home', type: 'Plataforma', icon: 'fa-laptop-code' },
    { title: 'Turnitin', keywords: 'turnitin antiplagio similitud', link: 'https://unap.turnitin.com/home/sign-in', type: 'Servicio', icon: 'fa-check-double' }
];

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

    // Función para normalizar texto (quitar tildes y caracteres especiales)
    const normalizeText = (text) => {
        if (!text) return '';
        return text.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();
    };

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.length < 2) {
            setResults([]);
            return;
        }

        const searchTerm = normalizeText(value);
        const searchWords = searchTerm.split(/\s+/).filter(word => word.length > 0);
        const searchResults = [];

        const checkMatch = (text) => {
            if (!text) return false;
            const normalizedTarget = normalizeText(text);
            return searchWords.every(word => normalizedTarget.includes(word));
        };

        // 0. Secciones del Sitio (Alta Prioridad)
        SITE_SECTIONS.forEach(section => {
            if (checkMatch(section.title) || checkMatch(section.keywords)) {
                searchResults.push({ ...section, score: 10 });
            }
        });

        // 1. Noticias
        noticiasData.forEach(item => {
            if (checkMatch(item.title) || checkMatch(item.excerpt)) {
                searchResults.push({ type: 'Noticia', title: item.title, link: '#noticias', icon: 'fa-newspaper', score: 5 });
            }
        });

        // 2. Convocatorias
        convocatoriasData.forEach(item => {
            if (checkMatch(item.title) || checkMatch(item.description)) {
                searchResults.push({ type: 'Convocatoria', title: item.title, link: '#convocatorias', icon: 'fa-file-invoice-dollar', score: 6 });
            }
        });

        // 3. Normativa (Reglamentos y Directivas)
        [...normativaData.directivas, ...normativaData.reglamentos].forEach(item => {
            if (checkMatch(item.title) || checkMatch(item.description)) {
                searchResults.push({ type: 'Normativa', title: item.title, link: '#normativa', icon: 'fa-file-pdf', score: 4 });
            }
        });

        // 4. Innovación
        [...innovacionData.patentes, ...innovacionData.transferencia].forEach(item => {
            if (checkMatch(item.title) || checkMatch(item.description)) {
                searchResults.push({ type: 'Innovación', title: item.title, link: '#innovacion', icon: 'fa-lightbulb', score: 4 });
            }
        });
        innovacionData.vinculacion.forEach(item => {
            if (checkMatch(item.project) || checkMatch(item.company)) {
                searchResults.push({ type: 'Vinculación', title: item.project, link: '#innovacion', icon: 'fa-handshake', score: 3 });
            }
        });

        // 5. Investigadores (RENACYT)
        RENACYT_DATA.docentesRenacyt.forEach(fac => {
            fac.docentes.forEach(doc => {
                if (checkMatch(doc.nombre)) {
                    searchResults.push({ type: 'Investigador', title: doc.nombre, link: '#renacyt', icon: 'fa-user-tie', score: 8 });
                }
            });
        });

        // 6. Institutos de Investigación
        [...INSTITUTOS_DATA.reconocidos2025, ...INSTITUTOS_DATA.reconocidos2024].forEach(item => {
            if (checkMatch(item.nombre) || checkMatch(item.responsable) || checkMatch(item.facultad)) {
                searchResults.push({ type: 'Instituto', title: item.nombre, link: '#institutos', icon: 'fa-monument', score: 7 });
            }
        });
        INSTITUTOS_DATA.financiados2025.forEach(item => {
            if (checkMatch(item.proyecto) || checkMatch(item.instituto)) {
                searchResults.push({ type: 'Proyecto Instituto', title: item.proyecto, link: '#institutos', icon: 'fa-flask', score: 5 });
            }
        });

        // 7. Grupos de Investigación
        [...GROUPS_DATA.reconocidos2025, ...GROUPS_DATA.reconocidos2024].forEach(item => {
            if (checkMatch(item.grupo) || checkMatch(item.responsable) || (item.integrantes && item.integrantes.some(int => checkMatch(int)))) {
                searchResults.push({ type: 'Grupo de Investigación', title: item.grupo, link: '#grupos', icon: 'fa-users', score: 7 });
            }
        });
        [...GROUPS_DATA.financiados2025, ...GROUPS_DATA.financiados2024].forEach(item => {
            if (checkMatch(item.proyecto) || checkMatch(item.investigador)) {
                searchResults.push({ type: 'Proyecto Grupo', title: item.proyecto, link: '#grupos', icon: 'fa-microscope', score: 5 });
            }
        });

        // 8. Semilleros
        SEMILLEROS_DATA.reconocidos2025.forEach(item => {
            if (checkMatch(item.nombre) || (item.investigadores && item.investigadores.some(int => checkMatch(int))) || checkMatch(item.escuela)) {
                searchResults.push({ type: 'Semillero', title: item.nombre, link: '#semilleros', icon: 'fa-seedling', score: 6 });
            }
        });

        // Eliminar duplicados y Ordenar
        const seen = new Set();
        const uniqueResults = searchResults.filter(item => {
            const k = `${item.type}-${item.title}`;
            return seen.has(k) ? false : seen.add(k);
        });

        setResults(uniqueResults.sort((a, b) => b.score - a.score).slice(0, 15)); // Mostrar hasta 15 resultados
    };

    const handleResultClick = (link) => {
        if (link.startsWith('http')) {
            window.open(link, '_blank', 'noopener,noreferrer');
        } else {
            window.location.hash = link;
        }
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#030D4F]/80 backdrop-blur-md animate-fade-in shadow-2xl">
            <div className="bg-white w-full max-w-3xl rounded-[2.5rem] shadow-2xl overflow-hidden relative animate-modern-reveal">

                {/* Header del Buscador */}
                <div className="p-8 border-b border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-[#AEDD2B] text-[#030D4F] flex items-center justify-center shadow-lg transform -rotate-6">
                                <i className="fas fa-search text-xl"></i>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-[#030D4F] tracking-tighter leading-none">Buscador VRI</h3>
                                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Inteligencia Artificial</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 rounded-full bg-gray-50 text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all flex items-center justify-center"
                        >
                            <i className="fas fa-times text-xl"></i>
                        </button>
                    </div>

                    <div className="relative group">
                        <i className="fas fa-search absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-[#AEDD2B] transition-colors"></i>
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={handleSearch}
                            placeholder="¿Qué estás buscando? (Ej. Convocatorias, Renacyt, Tesis...)"
                            className="w-full pl-14 pr-4 py-5 bg-gray-50 border-2 border-transparent focus:border-[#AEDD2B] rounded-2xl focus:outline-none focus:bg-white transition-all text-xl font-medium text-[#030D4F] shadow-inner"
                        />
                    </div>
                </div>

                {/* Resultados o Sugerencias */}
                <div className="p-8 h-[60vh] overflow-y-auto custom-scrollbar">
                    {results.length > 0 ? (
                        <div className="space-y-3">
                            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4 sticky top-0 bg-white z-10 py-2">
                                Encontrados ({results.length})
                            </h4>
                            {results.map((result, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => handleResultClick(result.link)}
                                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-blue-50/50 cursor-pointer border border-transparent hover:border-blue-100 transition-all group animate-slide-up"
                                    style={{ animationDelay: `${idx * 0.05}s` }}
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-gray-50 text-[#030D4F] flex items-center justify-center group-hover:bg-[#030D4F] group-hover:text-[#AEDD2B] transition-all shrink-0 shadow-sm">
                                        <i className={`fas ${result.icon} text-lg`}></i>
                                    </div>
                                    <div className="flex-1 min-w-0 pt-1">
                                        <div className="flex justify-between items-start">
                                            <span className={`inline-block px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-widest mb-1 ${result.type.includes('Sección') ? 'bg-[#030D4F] text-white' : 'bg-gray-100 text-gray-500'}`}>
                                                {result.type}
                                            </span>
                                            {result.link.startsWith('http') && <i className="fas fa-external-link-alt text-[10px] text-gray-300"></i>}
                                        </div>
                                        <h5 className="text-base font-bold text-[#030D4F] leading-tight group-hover:text-[#051675] mb-1">
                                            {result.title}
                                        </h5>
                                        {result.keywords && (
                                            <p className="text-[10px] text-gray-400 line-clamp-1 italic">
                                                Relacionado: {result.keywords.split(' ').slice(0, 3).join(', ')}...
                                            </p>
                                        )}
                                    </div>
                                    <i className="fas fa-chevron-right text-gray-200 group-hover:text-[#AEDD2B] transition-all self-center"></i>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center opacity-80">
                            {query.length >= 2 ? (
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <i className="fas fa-search-minus text-4xl text-gray-300"></i>
                                    </div>
                                    <h3 className="text-lg font-bold text-[#030D4F] mb-2">No encontramos resultados</h3>
                                    <p className="text-gray-400 text-sm max-w-xs mx-auto">
                                        No hay coincidencias para "<span className="text-[#030D4F] font-bold">{query}</span>". Intenta con términos más generales.
                                    </p>
                                </div>
                            ) : (
                                <div className="w-full">
                                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6 text-center">Accesos Rápidos</h4>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                        {[
                                            { label: 'Renacyt', link: '#renacyt', icon: 'fa-user-graduate', desc: 'Investigadores' },
                                            { label: 'Convocatorias', link: '#convocatorias', icon: 'fa-bullhorn', desc: 'Fondos 2026' },
                                            { label: 'Reglamentos', link: '#normativa', icon: 'fa-gavel', desc: 'Normativa' },
                                            { label: 'FEDU', link: 'https://vriunap.pe/fedu/', icon: 'fa-book', desc: 'Fondo Editorial' },
                                            { label: 'Mesa de Partes', link: 'https://tramites.unap.edu.pe/', icon: 'fa-envelope-open-text', desc: 'Trámites' },
                                            { label: 'PGI', link: 'https://pgi.vriunap.pe/home', icon: 'fa-laptop-code', desc: 'Gestión' }
                                        ].map(tag => (
                                            <div
                                                key={tag.label}
                                                onClick={() => handleResultClick(tag.link)}
                                                className="flex flex-col items-center p-6 bg-gray-50 rounded-3xl cursor-pointer hover:bg-[#AEDD2B]/10 hover:border-[#AEDD2B]/30 border border-transparent transition-all group text-center"
                                            >
                                                <i className={`fas ${tag.icon} text-2xl text-[#030D4F]/30 group-hover:text-[#030D4F] mb-3 transition-colors`}></i>
                                                <span className="text-xs font-bold text-[#030D4F] mb-1">{tag.label}</span>
                                                <span className="text-[9px] text-gray-400 uppercase tracking-tight">{tag.desc}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Footer del Modal */}
                <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center px-8">
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                        Vicerrectorado de Investigación - UNAP
                    </p>
                    <div className="flex gap-2 text-[10px] text-gray-400">
                        <span><kbd className="bg-white px-2 py-0.5 rounded border border-gray-200 font-sans">ESC</kbd> cerrar</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
