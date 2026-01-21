import React from 'react';

const SearchModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-6 relative animate-slide-up">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
                    <i className="fas fa-times text-xl"></i>
                </button>
                <h3 className="text-xl font-bold text-unap-blue mb-4">¿Qué estás buscando?</h3>
                <div className="relative">
                    <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    <input
                        type="text"
                        placeholder="Buscar proyectos, investigadores, noticias..."
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-unap-blue/50 text-lg"
                        autoFocus
                    />
                </div>
                <div className="mt-6">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Sugerencias</h4>
                    <div className="flex flex-wrap gap-2">
                        {['Convocatorias 2026', 'Reglamento', 'Renacyt', 'Tesis', 'Revistas'].map(tag => (
                            <span key={tag} className="px-3 py-1 bg-blue-50 text-unap-blue text-sm rounded-full cursor-pointer hover:bg-blue-100 transition-colors">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
