import React, { useState, useEffect } from 'react';

const DropdownMenu = ({ items, isSub = false }) => (
    <div className={`absolute ${isSub ? 'top-0 left-full border-l-2' : 'top-full left-0 border-t-2'} w-64 bg-white shadow-2xl rounded-lg py-2 border-unap-gold z-50`}>
        {items.map((item, index) => (
            <div key={index} className="relative px-1 [&:hover>div]:visible [&:hover>div]:opacity-100 [&:hover>div]:translate-x-0">
                <a
                    href={item.href || '#'}
                    className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-unap-blue rounded-md transition-colors"
                >
                    <span className="truncate mr-2">{item.label}</span>
                    {item.subItems && <i className="fas fa-chevron-right text-[10px] opacity-40"></i>}
                </a>
                {item.subItems && (
                    <div className="absolute top-0 left-full border-l-2 invisible opacity-0 translate-x-3 transition-all duration-200 z-50">
                        <DropdownMenu items={item.subItems} isSub={true} />
                    </div>
                )}
            </div>
        ))}
    </div>
);

const NavLink = ({ href, children, hasDropdown, dropdownItems = [] }) => (
    <div className="relative h-full flex items-center [&:hover>div]:visible [&:hover>div]:opacity-100 [&:hover>div]:translate-y-0">
        <a href={href} className="flex items-center text-sm font-medium hover:text-unap-blue transition-colors px-3 py-2 cursor-pointer">
            {children}
            {hasDropdown && <i className="fas fa-chevron-down ml-1 text-xs opacity-70"></i>}
        </a>
        {hasDropdown && dropdownItems.length > 0 && (
            <div className="absolute top-full left-0 invisible opacity-0 translate-y-2 transition-all duration-200 z-50">
                <DropdownMenu items={dropdownItems} />
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
                        <img src="/src/assets/logovri.png" alt="Logo" className="h-12 w-auto object-contain" />
                    </div>

                    {/* Desktop Nav */}
                    <nav className={`hidden lg:flex items-center gap-1 ${scrolled ? 'text-gray-600' : 'text-white'}`}>
                        <NavLink href="#" hasDropdown dropdownItems={[{ label: 'Revistas Científicas', href: '#' }]}>Publicaciones</NavLink>
                        <NavLink href="#" hasDropdown dropdownItems={[
                            {
                                label: 'Actividades',
                                href: '#',
                                subItems: [
                                    { label: 'Posters', href: '#' },
                                    { label: 'Cronograma de Actividades', href: '#' }
                                ]
                            },
                            { label: 'Noticias y Eventos', href: '#' }
                        ]}>VRI</NavLink>
                        <NavLink href="#">Nosotros</NavLink>
                        <NavLink href="#">Convocatorias</NavLink>
                        <NavLink href="#" hasDropdown dropdownItems={[
                            { label: 'Comité Institucional de Ética', href: '#', subItems: [{ label: 'Comité', href: '#' }, { label: 'Reglamentos', href: '#' }, { label: 'Investigación', href: '#' }, { label: 'Cronograma', href: '#' }, { label: 'Proyectos', href: '#' }] },
                            {
                                label: 'Instituto de Investigación',
                                href: '#',
                                subItems: [
                                    {
                                        label: 'Como investigamos',
                                        href: '#',
                                        subItems: [
                                            { label: 'Grupos', href: '#' },
                                            { label: 'Semilleros', href: '#' },
                                            { label: 'Institutos', href: '#' },
                                            { label: 'RENACYT', href: '#' }
                                        ]
                                    },
                                    { label: 'Sub Unidad de publicaciones', href: '#' },
                                    { label: 'Repositorio', href: '#' },
                                    { label: 'Plataforma de Gestión de la Investigación', href: '#' }
                                ]
                            },
                            {
                                label: 'Innovación y Transferencia', href: '#', subItems: [
                                    { label: 'Patentes', href: '#' }, { label: 'Transferencia', href: '#' }, { label: 'Vinculación Empresarial', href: '#' }]
                            },
                            {
                                label: 'Incubadora de Empresas', href: '#', subItems: [
                                    { label: 'Equipos', href: '#' },
                                    { label: 'Iniciativas', href: '#' }
                                ]
                            }
                        ]}>Direcciones</NavLink>
                        <NavLink href="#" hasDropdown dropdownItems={[
                            { label: 'Publicaciones', href: '#' },
                            { label: 'Reglamentos', href: '#' }]}>Normativa y Gestión</NavLink>
                        <NavLink href="#">Noticias</NavLink>
                        <NavLink href="#" hasDropdown dropdownItems={[
                            { label: 'FEDU', href: '#' },
                            { label: 'Repositorio', href: '#' },
                            { label: 'Cursos y Eventos', href: '#' },
                            { label: 'Plataforma de Gestión de la Investigación', href: '#' },
                            { label: 'Turniting', href: '#' }]}>Servicios</NavLink>
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
