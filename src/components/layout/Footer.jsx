import React from 'react';
import footerBg from '../../assets/portada_footer.jpg';

const Footer = () => {
    return (
        <footer className="relative bg-[#020817] text-slate-300 pt-24 pb-12 overflow-hidden border-t border-white/5">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Imagen más visible (sin opacidad reducida excesiva) */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
                    style={{
                        backgroundImage: `url(${footerBg})`,
                    }}
                ></div>

                {/* Overlay oscuro en punto medio para equilibrio entre imagen y texto */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/90 via-[#020817]/80 to-[#020817]/90"></div>

                {/* Destellos de luz sutiles */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#AEDD2B]/5 rounded-full blur-[128px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">

                    {/* COLUMNA 1: Brand & Social */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
                        <a href="#" onClick={() => window.scrollTo(0, 0)} className="block transition-transform hover:scale-105 active:scale-95 duration-500">
                            {/* Logo manteniendo tamaño original */}
                            <img
                                src="src/assets/vrionly.png"
                                alt="VRI UNAP"
                                className="h-24 md:h-40 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                            />
                        </a>
                        <p className="text-sm leading-relaxed text-slate-300 font-light drop-shadow-md">
                            Liderando la investigación científica en el altiplano peruano para el mundo. <span className="text-white font-medium">Innovación, ética y compromiso social.</span>
                        </p>

                        {/* Redes Sociales Premium */}
                        <div className="flex gap-3">
                            {[
                                { icon: 'facebook-f', href: 'https://www.facebook.com/vriunpuno', color: 'hover:bg-[#1877F2]' },
                                { icon: 'twitter', href: 'https://twitter.com/unapuno', color: 'hover:bg-black' },
                                { icon: 'linkedin-in', href: 'https://www.linkedin.com/school/universidad-nacional-del-altiplano/', color: 'hover:bg-[#0A66C2]' },
                                { icon: 'youtube', href: 'https://www.youtube.com/@vriunap3317', color: 'hover:bg-[#FF0000]' }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${social.color}`}
                                >
                                    <i className={`fab fa-${social.icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* COLUMNA 2: Enlaces Rápidos */}
                    <div className="lg:pl-8">
                        <h4 className="text-white font-bold mb-8 text-lg flex flex-col gap-2 drop-shadow-md">
                            Enlaces Rápidos
                            <span className="w-12 h-1 bg-gradient-to-r from-[#AEDD2B] to-transparent rounded-full"></span>
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { label: 'Plataforma PGI', href: 'https://pgi.vriunap.pe/home' },
                                { label: 'Repositorio Institucional', href: 'https://repositorio.unap.edu.pe/home' },
                                { label: 'Reglamentos VRI', href: '#normativa' },
                                { label: 'Docentes Renacyt', href: '#renacyt' },
                                { label: 'Mesa de Partes Virtual', href: 'https://tramites.unap.edu.pe/' }
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <a href={link.href} className="group flex items-center text-sm text-slate-300 hover:text-white transition-colors duration-300 hover:translate-x-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#AEDD2B]/80 mr-3 group-hover:bg-[#AEDD2B] group-hover:scale-125 transition-all"></span>
                                        <span className="drop-shadow-sm">{link.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMNA 3: Contacto */}
                    <div>
                        <h4 className="text-white font-bold mb-8 text-lg flex flex-col gap-2 drop-shadow-md">
                            Contacto
                            <span className="w-12 h-1 bg-gradient-to-r from-unap-gold to-transparent rounded-full"></span>
                        </h4>
                        <ul className="space-y-6 text-sm text-slate-300">
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-[#AEDD2B]/20 flex items-center justify-center shrink-0 group-hover:bg-[#AEDD2B]/30 transition-colors border border-[#AEDD2B]/30">
                                    <i className="fas fa-map-marker-alt text-[#AEDD2B]"></i>
                                </div>
                                <span className="mt-2 drop-shadow-sm">Av. Floral N° 1153, Ciudad Universitaria.<br />Puno - Perú, 21001</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-unap-gold/20 flex items-center justify-center shrink-0 group-hover:bg-unap-gold/30 transition-colors border border-unap-gold/30">
                                    <i className="fas fa-phone-alt text-unap-gold"></i>
                                </div>
                                <span className="drop-shadow-sm">(051) 365054 - Anexo 123</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/30 transition-colors border border-blue-500/30">
                                    <i className="fas fa-envelope text-blue-400"></i>
                                </div>
                                <span className="break-all drop-shadow-sm">vicerrectorado.investigacion@unap.edu.pe</span>
                            </li>
                        </ul>
                    </div>

                    {/* COLUMNA 4: Google Map */}
                    <div>
                        <h4 className="text-white font-bold mb-8 text-lg flex flex-col gap-2 drop-shadow-md">
                            Ubicación
                            <span className="w-12 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full"></span>
                        </h4>
                        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 h-64 w-full relative group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d309.5748635014625!2d-70.01685358809463!3d-15.824855255807098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915d69b86255bb29%3A0xe619a47a79d60362!2sVicerrectorado%20de%20Investigacion%20UNA%20Puno!5e1!3m2!1ses-419!2spe!4v1769138546450!5m2!1ses-419!2spe"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación VRI UNAP"
                                className="transition-all duration-700 opacity-90 group-hover:opacity-100"
                            ></iframe>
                            {/* Overlay decorativo */}
                            <div className="absolute inset-0 border-4 border-white/10 pointer-events-none rounded-2xl"></div>
                        </div>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
                    <p className="font-medium drop-shadow-md">© 2026 Universidad Nacional del Altiplano. <span className="hidden md:inline">|</span> Todos los derechos reservados.</p>

                    <div className="flex gap-8 mt-6 md:mt-0">
                        <a href="#" className="hover:text-[#AEDD2B] transition-colors relative group drop-shadow-md">
                            Políticas de Privacidad
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#AEDD2B] transition-all group-hover:w-full"></span>
                        </a>
                        <a href="#" className="hover:text-unap-gold transition-colors relative group drop-shadow-md">
                            Términos de Uso
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-unap-gold transition-all group-hover:w-full"></span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
