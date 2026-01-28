import React, { useEffect } from 'react';

// Componente de Tarjeta Moderna con Foto al Final
const ModernTeamCard = ({ title, firstName, lastName, role, colorClass = "bg-[#02416D]", image }) => (
    <div className="card-border-container w-[280px] flex-shrink-0 group">
        {/* Border Glow Animation */}
        <div className="card-border-glow animate-border-spin group-hover:duration-700"></div>

        {/* Main Card Content */}
        <div className={`relative w-full ${colorClass} rounded-[2rem] overflow-hidden shadow-lg transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] cursor-pointer z-10`}>
            {/* Imagen Vertical con Zoom en Hover - Original Oscuro */}
            <div className="relative h-[420px] overflow-hidden bg-[#0a1128]">
                {image ? (
                    <img
                        src={image}
                        alt={`${firstName} ${lastName}`}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-white/10">
                        <i className="fas fa-user-circle text-8xl mb-4 group-hover:scale-110 transition-transform duration-700"></i>
                        <span className="text-[10px] font-black tracking-[0.3em] uppercase">Investigador</span>
                    </div>
                )}

                {/* Overlay Gradient Premium (Original Oscuro para contraste) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Título (GRADO) - AHORA MÁS VISIBLE - IZQUIERDA */}
                <div className="absolute top-6 left-6 transform group-hover:-translate-y-1 transition-transform duration-500">
                    <span className="px-5 py-2 rounded-full bg-[#AEDD2B] text-[#02416D] font-black text-xs uppercase tracking-[0.2em] shadow-[0_10px_20px_rgba(174,221,43,0.3)] border border-white/20">
                        {title}
                    </span>
                </div>

                {/* Texto sobre la imagen (IZQUIERDA) */}
                <div className="absolute bottom-8 left-8 right-8 z-10 text-left transform group-hover:translate-x-2 transition-all duration-500">
                    <div className="mb-3 overflow-hidden">
                        <h3 className="text-2xl font-black text-white leading-tight tracking-tight">
                            <span className="block transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-500">{firstName}</span>
                            <span className="text-[#AEDD2B] block transform translate-y-0 group-hover:translate-y-1 transition-transform duration-500 opacity-90">{lastName}</span>
                        </h3>
                    </div>

                    <div className="flex flex-col items-start gap-2">
                        <div className="w-12 h-0.5 bg-gradient-to-r from-[#AEDD2B] to-transparent group-hover:w-24 transition-all duration-700"></div>
                        <p className="text-white/70 font-bold text-[10px] uppercase tracking-[0.25em]">
                            {role}
                        </p>
                    </div>
                </div>
            </div>

            {/* Efecto de Escaneo de Brillo al pasar el cursor */}
            <div className="absolute -inset-full h-full w-1/2 z-20 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:animate-shine pointer-events-none"></div>
        </div>
    </div>
);

// Sección de Oficina Mejorada con Jerarquía (Jefe arriba)
const OfficeSection = ({ title, description, members, icon, accentColor = "text-[#066699]", bgColor = "bg-white" }) => {
    const leader = members[0];
    const staff = members.slice(1);

    return (
        <div className="mb-20 last:mb-0">
            {/* Header de Sección más delegado/fino */}
            <div className={`${bgColor} rounded-[2rem] p-6 md:p-8 shadow-lg mb-10 relative overflow-hidden border border-gray-100`}>
                <div className={`absolute top-0 right-0 w-32 h-32 ${accentColor.replace('text-', 'bg-')}/5 rounded-full -translate-y-1/2 translate-x-1/2`}></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                    <div className={`w-14 h-14 rounded-xl ${accentColor.replace('text-', 'bg-')} shadow-lg flex items-center justify-center text-white text-xl flex-shrink-0 transform hover:rotate-6 transition-transform duration-300`}>
                        <i className={`fas ${icon}`}></i>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-[#030D4F] mb-1">{title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">{description}</p>
                    </div>
                </div>
            </div>

            {/* Jefe de Oficina (Más cerca del equipo) */}
            <div className="flex justify-center mb-4 text-center">
                <ModernTeamCard
                    title={leader.title}
                    firstName={leader.firstName}
                    lastName={leader.lastName}
                    role={leader.role}
                    colorClass={leader.color}
                    image={leader.image}
                />
            </div>

            {/* Grid de Miembros (Ahora Juntos) */}
            {staff.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2">
                    {staff.map((member, idx) => (
                        <ModernTeamCard
                            key={idx}
                            title={member.title}
                            firstName={member.firstName}
                            lastName={member.lastName}
                            role={member.role}
                            colorClass={member.color}
                            image={member.image}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Datos con formato mejorado: título, nombre, apellido, cargo
    const repoMembers = [
        { title: "ING.", firstName: "Alain Paul", lastName: "Herrera Urtiaga", role: "Jefe de Repositorio Institucional", color: "bg-[#030D4F]", image: "src/assets/encargados/jefe_repo.png" },
        { title: "ING.", firstName: "Maria", lastName: "Lopez", role: "Analista de Metadatos", color: "bg-[#051675]" },
        { title: "TEC.", firstName: "Carlos", lastName: "Ruiz", role: "Soporte Digital", color: "bg-[#030D4F]" },
    ];

    const magazineMembers = [
        { title: "DR.", firstName: "Geny Francisco", lastName: "Cardenas P.", role: "Director de la Revista de Investigación", color: "bg-[#030D4F]", image: "src/assets/encargados/jefe_publi.png" },
        { title: "LIC.", firstName: "Pedro", lastName: "Diaz", role: "Corrector de Estilo", color: "bg-[#051675]" },
    ];

    const pgiMembers = [
        { title: "ING.", firstName: "Julio César", lastName: "Tisnado Ramos", role: "Jefe de la Sub Unidad de Plataforma de Investigación y Desarrollo", color: "bg-[#030D4F]", image: "src/assets/encargados/jefe_pgi.png" },
        { title: "ECO.", firstName: "Sofia", lastName: "Mendoza", role: "Monitor de Proyectos", color: "bg-[#030D4F]" },
        { title: "CONT.", firstName: "Jorge", lastName: "Torres", role: "Gestor Financiero", color: "bg-[#051675]" },
        { title: "ASIST.", firstName: "Elena", lastName: "Paredes", role: "Secretaria", color: "bg-[#030D4F]" },
    ];

    const ethicsMembers = [
        { title: "DRA.", firstName: "Edith", lastName: "Tello Castro", role: "Presidente", color: "bg-[#030D4F]", image: "src/assets/encargados/jefe_etica.png" },
        { title: "DRA.", firstName: "Carmen", lastName: "Vargas", role: "Secretaria Técnica", color: "bg-[#051675]" },
        { title: "ABOG.", firstName: "Miguel", lastName: "Sanchez", role: "Asesor Legal", color: "bg-[#030D4F]" },
    ];

    const diiMembers = [
        { title: "DR.", firstName: "Israel", lastName: "Lima Medina", role: "Director del Instituto de Investigación", color: "bg-[#030D4F]", image: "src/assets/encargados/jefe_idi.png" },
        { title: "LIC.", firstName: "Jefe", lastName: "Gestión", role: "Gestión Administrativa", color: "bg-[#051675]" },
        { title: "ING.", firstName: "Soporte", lastName: "IDI", role: "Jefe Area IDI", color: "bg-[#030D4F]" },
        { title: "LIC.", firstName: "Comunicaciones", lastName: "VRI", role: "Imagen Institucional", color: "bg-[#051675]" },
    ];

    const tiMembers = [
        { title: "ING.", firstName: "Romel Percy", lastName: "Melgarejo Bolivar", role: "Director TI", color: "bg-[#030D4F]", image: "src/assets/encargados/jefe_ti.png" },
        { title: "ING.", firstName: "Desarrollador", lastName: "Web", color: "bg-[#051675]", role: "Desarrollador" },
        { title: "TEC.", firstName: "Redes", lastName: "Sistemas", color: "bg-[#051675]", role: "Infraestructura" },
    ];

    return (
        <div className="pb-24 bg-white min-h-screen font-sans">

            {/* Header Ultra Moderno con Imagen y Superposición Azul - Recto */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#030D4F] mb-12">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="src/assets/logos.png"
                        alt="Nuestro Equipo Background"
                        className="w-full h-full object-cover opacity-100 transition-opacity duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#030D4F]/90 via-[#030D4F]/60 to-[#030D4F]/30"></div>
                </div>

                {/* Decorative Celeste Glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 z-10"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-300/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 z-10"></div>

                <div className="container mx-auto px-4 relative z-20 text-center">
                    <div className="inline-block mb-4 animate-fade-in">
                        <span className="py-1.5 px-5 rounded-full bg-white/10 border border-white/20 text-white font-black tracking-[0.3em] uppercase text-[10px] backdrop-blur-md">
                            Vicerrectorado de Investigación
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-none animate-modern-reveal">
                        Nuestro <span className="text-[#AEDD2B]">Equipo</span>
                    </h1>

                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-px w-16 bg-white/20"></div>
                        <i className="fas fa-users text-[#AEDD2B] text-2xl"></i>
                        <div className="h-px w-16 bg-white/20"></div>
                    </div>

                    <p className="text-blue-50 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed animate-slide-up">
                        El talento humano que impulsa la <span className="text-[#AEDD2B] font-semibold">excelencia científica</span> y el <span className="text-[#AEDD2B] font-semibold">desarrollo tecnológico</span> institucional.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 max-w-7xl">

                {/* 01. NIVEL DIRECTIVO */}
                <section className="mb-24">
                    <div className="text-center mb-12 relative">
                        <span className="text-7xl font-black text-[#030D4F]/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none">01</span>
                        <div className="inline-block relative">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#030D4F] relative z-10 mb-2">
                                Nivel Directivo
                            </h2>
                            <div className="h-1.5 w-20 bg-gradient-to-r from-[#AEDD2B] to-[#030D4F] mx-auto rounded-full"></div>
                        </div>
                    </div>

                    {/* Vicerrector - Destacado (Fino) */}
                    <div className="mb-12 flex justify-center">
                        <ModernTeamCard
                            title="DR."
                            firstName="Ariel"
                            lastName="Velazco"
                            role="Vicerrector de Investigación"
                            colorClass="bg-gradient-to-br from-[#030D4F] to-[#051675]"
                            image="src/assets/encargados/jefe_vri.png"
                        />
                    </div>

                    {/* Área de TI */}
                    <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden border border-gray-100">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#030D4F]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10 text-center mb-12">
                            <div className="inline-block mb-4">
                                <div className="w-20 h-20 bg-gradient-to-br from-[#030D4F] to-[#051675] rounded-2xl flex items-center justify-center text-white text-3xl shadow-2xl mx-auto transform hover:rotate-12 transition-transform duration-300">
                                    <i className="fas fa-network-wired"></i>
                                </div>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#030D4F] mb-2">Área de TI</h3>
                            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Soporte Tecnológico Integral</p>
                        </div>

                        {/* Jefe TI Centrado */}
                        <div className="flex justify-center mb-8">
                            <ModernTeamCard
                                title={tiMembers[0].title}
                                firstName={tiMembers[0].firstName}
                                lastName={tiMembers[0].lastName}
                                role={tiMembers[0].role}
                                colorClass={tiMembers[0].color}
                                image={tiMembers[0].image}
                            />
                        </div>

                        {/* Resto del equipo TI (Ahora Juntos) */}
                        <div className="flex flex-wrap justify-center gap-2 max-w-6xl mx-auto">
                            {tiMembers.slice(1).map((member, i) => (
                                <ModernTeamCard
                                    key={i}
                                    title={member.title}
                                    firstName={member.firstName}
                                    lastName={member.lastName}
                                    role={member.role}
                                    colorClass={member.color}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* 02. DIRECCIÓN DE INSTITUTOS */}
                <section className="mb-24">
                    <div className="text-center mb-12 relative">
                        <span className="text-7xl font-black text-[#030D4F]/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none">02</span>
                        <div className="inline-block relative">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#030D4F] relative z-10 mb-2">
                                Instituto de Investigación
                            </h2>
                            <div className="h-1.5 w-24 bg-gradient-to-r from-[#030D4F] to-[#051675] mx-auto rounded-full"></div>
                        </div>
                    </div>

                    {/* Director DII Centrado */}
                    <div className="flex justify-center mb-10">
                        <ModernTeamCard
                            title={diiMembers[0].title}
                            firstName={diiMembers[0].firstName}
                            lastName={diiMembers[0].lastName}
                            role={diiMembers[0].role}
                            colorClass={diiMembers[0].color}
                            image={diiMembers[0].image}
                        />
                    </div>

                    {/* Resto del equipo DII - Juntos */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {diiMembers.slice(1).map((member, i) => (
                            <ModernTeamCard
                                key={i}
                                title={member.title}
                                firstName={member.firstName}
                                lastName={member.lastName}
                                role={member.role}
                                colorClass={member.color}
                                image={member.image}
                            />
                        ))}
                    </div>
                </section>

                {/* 03. OFICINAS DE PRODUCCIÓN CIENTÍFICA */}
                <section>
                    <div className="text-center mb-16 relative">
                        <span className="text-7xl font-black text-[#030D4F]/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none">03</span>
                        <div className="inline-block relative">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#030D4F] relative z-10 mb-2">
                                Producción Científica
                            </h2>
                            <div className="h-1.5 w-28 bg-gradient-to-r from-[#AEDD2B] to-[#030D4F] mx-auto rounded-full"></div>
                        </div>
                    </div>

                    <OfficeSection
                        title="Oficina de Repositorio Institucional"
                        description="Equipo encargado de gestionar la visibilidad, preservación y acceso a la producción académica y científica de la universidad."
                        icon="fa-server"
                        members={repoMembers}
                        accentColor="text-[#AEDD2B]"
                    />

                    <OfficeSection
                        title="Oficina de Revistas de Investigación"
                        description="Responsables de la edición, indización y publicación de las revistas científicas de la UNAP."
                        icon="fa-book-open"
                        members={magazineMembers}
                        accentColor="text-[#066699]"
                    />

                    <OfficeSection
                        title="Oficina de Gestión de la Investigación (PGI)"
                        description="Administración de concursos, seguimiento de proyectos y gestión financiera de la investigación."
                        icon="fa-chart-pie"
                        members={pgiMembers}
                        accentColor="text-[#0A5483]"
                    />

                    <OfficeSection
                        title="Comité Institucional de Ética"
                        description="Vigilancia de los estándares éticos y bioéticos en el desarrollo de las investigaciones."
                        icon="fa-balance-scale"
                        members={ethicsMembers}
                        accentColor="text-[#02416D]"
                    />
                </section>

            </div>
        </div>
    );
};

export default AboutPage;
