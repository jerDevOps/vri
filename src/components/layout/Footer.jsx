import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t-[6px] border-unap-gold text-slate-300 pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-6 text-white">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-unap-blue font-bold text-2xl shadow">U</div>
                            <div>
                                <h4 className="font-bold text-xl leading-none font-serif">VRI UNAP</h4>
                                <span className="text-[10px] opacity-70 uppercase tracking-widest">Excelencia Académica</span>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed mb-6 text-slate-400">
                            Liderando la investigación científica en el altiplano peruano para el mundo. Innovación, ética y compromiso social.
                        </p>
                        <div className="flex gap-4">
                            {['facebook-f', 'twitter', 'linkedin-in', 'youtube'].map(icon => (
                                <a key={icon} href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-unap-gold hover:text-white transition-all hover:-translate-y-1">
                                    <i className={`fab fa-${icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg relative inline-block">
                            Enlaces Rápidos
                            <span className="absolute -bottom-2 left-0 w-10 h-1 bg-unap-gold rounded-full"></span>
                        </h4>
                        <ul className="space-y-3 text-sm">
                            {['Plataforma PILAR', 'Repositorio Institucional', 'Reglamento de Investigación', 'Docentes Renacyt', 'Mesa de Partes Virtual'].map(link => (
                                <li key={link}>
                                    <a href="#" className="hover:text-unap-gold transition-colors flex items-center group">
                                        <i className="fas fa-chevron-right text-[10px] mr-2 opacity-50 group-hover:translate-x-1 transition-transform"></i>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg relative inline-block">
                            Contacto
                            <span className="absolute -bottom-2 left-0 w-10 h-1 bg-unap-gold rounded-full"></span>
                        </h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-4">
                                <i className="fas fa-map-marker-alt mt-1 text-unap-gold"></i>
                                <span>Av. Floral N° 1153, Ciudad Universitaria.<br />Puno - Perú, 21001</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <i className="fas fa-phone-alt text-unap-gold"></i>
                                <span>(051) 365054 - Anexo 123</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <i className="fas fa-envelope text-unap-gold"></i>
                                <span>vicerrectorado.investigacion@unap.edu.pe</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg relative inline-block">
                            Boletín VRI
                            <span className="absolute -bottom-2 left-0 w-10 h-1 bg-unap-gold rounded-full"></span>
                        </h4>
                        <p className="text-xs mb-4">Recibe las últimas convocatorias y noticias en tu correo.</p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Ingresa tu correo"
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-unap-gold text-white transition-colors"
                            />
                            <button className="w-full bg-unap-gold hover:bg-yellow-600 text-white font-bold py-3 rounded-lg text-sm transition-colors shadow-lg">
                                Suscribirme
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <p>© 2026 Universidad Nacional del Altiplano. Todos los derechos reservados.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Políticas de Privacidad</a>
                        <a href="#" className="hover:text-white transition-colors">Términos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
