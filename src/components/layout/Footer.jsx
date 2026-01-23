import React from 'react';
import footerBg from '../../assets/portada_footer.jpg';

const Footer = () => {
    return (
        <footer className="relative bg-slate-900 border-t-[6px] border-unap-gold text-slate-300 pt-20 pb-10 overflow-hidden">
            {/* Background Image Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-60"
                style={{
                    backgroundImage: `url(${footerBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="absolute inset-0 bg-slate-900/60"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-6">
                            <img src="/vrionly.png" alt="VRI UNAP" className="h-40 w-auto object-contain mx-auto" />
                        </div>
                        <p className="text-sm leading-relaxed mb-6 text-slate-400 max-w-xs">
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

                    {/* Google Map */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg relative inline-block">
                            Ubicación
                            <span className="absolute -bottom-2 left-0 w-10 h-1 bg-unap-gold rounded-full"></span>
                        </h4>
                        <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-700 h-64 w-full group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d309.5748635014625!2d-70.01685358809463!3d-15.824855255807098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915d69b86255bb29%3A0xe619a47a79d60362!2sVicerrectorado%20de%20Investigacion%20UNA%20Puno!5e1!3m2!1ses-419!2spe!4v1769138546450!5m2!1ses-419!2spe"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación VRI UNAP"
                                className="transition-all duration-500"
                            ></iframe>
                        </div>
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
