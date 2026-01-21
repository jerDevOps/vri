import React, { useState, useEffect } from 'react';

const NavLink = ({ href, children, hasDropdown }) => (
    <div className="relative group h-full flex items-center">
        <a href={href} className="flex items-center text-sm font-medium hover:text-unap-blue transition-colors px-3 py-2 cursor-pointer">
            {children}
            {hasDropdown && <i className="fas fa-chevron-down ml-1 text-xs opacity-70"></i>}
        </a>
        {hasDropdown && (
            <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-b-lg py-2 hidden group-hover:block border-t-2 border-unap-gold animate-fade-in z-50">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-unap-blue">Comité de Ética</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-unap-blue">Institutos</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-unap-blue">Innovación</a>
            </div>
        )}
    </div>
);

const Header = ({ onSearchClick }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-2 shadow-lg text-gray-800' : 'bg-transparent py-4 text-white'}`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo Area */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-unap-blue to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            <span className="font-serif">U</span>
                        </div>
                        <div className="leading-tight">
                            <h1 className={`font-bold text-lg tracking-tight ${scrolled ? 'text-unap-blue' : 'text-white'}`}>
                                VRI UNAP
                            </h1>
                            <p className={`text-[10px] uppercase tracking-wider font-semibold ${scrolled ? 'text-gray-500' : 'text-gray-300'}`}>
                                Vicerrectorado de Investigación
                            </p>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <nav className={`hidden lg:flex items-center gap-1 ${scrolled ? 'text-gray-600' : 'text-white'}`}>
                        <NavLink href="#">Inicio</NavLink>
                        <NavLink href="#" hasDropdown>Direcciones</NavLink>
                        <NavLink href="#">Publicaciones</NavLink>
                        <NavLink href="#">Normativa</NavLink>
                        <NavLink href="#">Servicios</NavLink>
                        <NavLink href="#">Convocatorias</NavLink>

                        <div className={`w-px h-6 mx-3 ${scrolled ? 'bg-gray-300' : 'bg-white/30'}`}></div>

                        <button onClick={onSearchClick} className={`p-2 rounded-full transition-colors ${scrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'}`}>
                            <i className="fas fa-search"></i>
                        </button>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`lg:hidden p-2 text-xl ${scrolled ? 'text-unap-blue' : 'text-white'}`}
                    >
                        <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-xl lg:hidden animate-fade-in border-t border-gray-100 flex flex-col py-2">
                    {['Inicio', 'Direcciones', 'Publicaciones', 'Normativa', 'Servicios', 'Convocatorias'].map((item) => (
                        <a key={item} href="#" className="px-6 py-3 text-gray-700 font-medium hover:bg-blue-50 hover:text-unap-blue border-b border-gray-50 last:border-0">
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
