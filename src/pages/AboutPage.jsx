import React, { useEffect } from 'react';

// Componente de Tarjeta Moderna con Foto al Final
const ModernTeamCard = ({ title, firstName, lastName, role, colorClass = "bg-[#02416D]", image }) => (
    <div className={`relative ${colorClass} rounded-3xl p-8 overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] group`}>

        {/* Decoración de Fondo Animada */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-black/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>

        {/* Línea decorativa superior */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#AEDD2B] to-transparent opacity-70"></div>

        {/* Contenido de Texto */}
        <div className="relative z-10 text-center mb-6">
            {/* Título Profesional */}
            <div className="inline-block mb-3">
                <span className="text-[#AEDD2B] font-black text-sm tracking-[0.3em] uppercase px-4 py-1.5 bg-white/10 rounded-full border border-[#AEDD2B]/30 backdrop-blur-sm">
                    {title}
                </span>
            </div>

            {/* Nombre Completo */}
            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3 group-hover:scale-105 transition-transform duration-300">
                {firstName}
                <br />
                {lastName}
            </h3>

            {/* Cargo/Rol */}
            <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-px w-8 bg-white/30"></div>
                <p className="text-white/90 font-semibold text-sm uppercase tracking-wider">
                    {role}
                </p>
                <div className="h-px w-8 bg-white/30"></div>
            </div>
        </div>

        {/* Foto al Final */}
        <div className="relative z-10 flex justify-center">
            <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 group-hover:border-[#AEDD2B]/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                {image ? (
                    <img src={image} alt={`${firstName} ${lastName}`} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-gray-400">
                        <i className="fas fa-user-circle text-7xl"></i>
                    </div>
                )}
            </div>
        </div>

        {/* Efecto de brillo en hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
);

// Sección de Oficina Mejorada con Jerarquía (Jefe arriba)
const OfficeSection = ({ title, description, members, icon, accentColor = "text-[#066699]", bgColor = "bg-white" }) => {
    const leader = members[0];
    const staff = members.slice(1);

    return (
        <div className="mb-24 last:mb-0">
            {/* Header de Sección con Diseño Moderno */}
            <div className={`${bgColor} rounded-3xl p-8 md:p-12 shadow-xl mb-12 relative overflow-hidden`}>
                <div className={`absolute top-0 right-0 w-64 h-64 ${accentColor.replace('text-', 'bg-')}/5 rounded-full -translate-y-1/2 translate-x-1/2`}></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                    <div className={`w-20 h-20 rounded-2xl ${accentColor.replace('text-', 'bg-')} shadow-2xl flex items-center justify-center text-white text-3xl flex-shrink-0 transform hover:rotate-12 transition-transform duration-300`}>
                        <i className={`fas ${icon}`}></i>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-3xl md:text-4xl font-black text-[#02416D] mb-3">{title}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
                    </div>
                </div>
            </div>

            {/* Jefe de Oficina (Centrado y Destacado) */}
            <div className="flex justify-center mb-12">
                <div className="w-full max-w-sm">
                    <ModernTeamCard
                        title={leader.title}
                        firstName={leader.firstName}
                        lastName={leader.lastName}
                        role={leader.role}
                        colorClass={leader.color}
                        image={leader.image}
                    />
                </div>
            </div>

            {/* Grid de Miembros (Flex para centrado perfecto) */}
            {staff.length > 0 && (
                <div className="flex flex-wrap justify-center gap-8">
                    {staff.map((member, idx) => (
                        <div key={idx} className="w-full max-w-sm">
                            <ModernTeamCard
                                title={member.title}
                                firstName={member.firstName}
                                lastName={member.lastName}
                                role={member.role}
                                colorClass={member.color}
                                image={member.image}
                            />
                        </div>
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
        { title: "LIC.", firstName: "Juan", lastName: "Pérez", role: "Jefe de Repositorio", color: "bg-[#066699]" },
        { title: "ING.", firstName: "Maria", lastName: "Lopez", role: "Analista de Metadatos", color: "bg-[#0A5483]" },
        { title: "TEC.", firstName: "Carlos", lastName: "Ruiz", role: "Soporte Digital", color: "bg-[#02416D]" },
    ];

    const magazineMembers = [
        { title: "DRA.", firstName: "Ana", lastName: "Torres", role: "Editora Jefe", color: "bg-[#066699]" },
        { title: "LIC.", firstName: "Pedro", lastName: "Diaz", role: "Corrector de Estilo", color: "bg-[#0A5483]" },
    ];

    const pgiMembers = [
        { title: "MSC.", firstName: "Luis", lastName: "Ramos", role: "Coordinador PGI", color: "bg-[#02416D]" },
        { title: "ECO.", firstName: "Sofia", lastName: "Mendoza", role: "Monitor de Proyectos", color: "bg-[#066699]" },
        { title: "CONT.", firstName: "Jorge", lastName: "Torres", role: "Gestor Financiero", color: "bg-[#0A5483]" },
        { title: "ASIST.", firstName: "Elena", lastName: "Paredes", role: "Secretaria", color: "bg-[#066699]" },
    ];

    const ethicsMembers = [
        { title: "DR.", firstName: "Roberto", lastName: "Castro", role: "Presidente", color: "bg-[#02416D]" },
        { title: "DRA.", firstName: "Carmen", lastName: "Vargas", role: "Secretaria Técnica", color: "bg-[#0A5483]" },
        { title: "ABOG.", firstName: "Miguel", lastName: "Sanchez", role: "Asesor Legal", color: "bg-[#066699]" },
    ];

    const diiMembers = [
        { title: "DR.", firstName: "Director", lastName: "DII", role: "Director General", color: "bg-[#02416D]" },
        { title: "LIC.", firstName: "Jefe", lastName: "Gestión", role: "Gestión Administrativa", color: "bg-[#0A5483]" },
        { title: "ING.", firstName: "Soporte", lastName: "IDI", role: "Jefe Area IDI", color: "bg-[#066699]" },
        { title: "LIC.", firstName: "Comunicaciones", lastName: "VRI", role: "Imagen Institucional", color: "bg-[#0A5483]" },
    ];

    const tiMembers = [
        { title: "ING.", firstName: "Jefe", lastName: "TI", role: "Director TI", color: "bg-[#0A5483]" },
        { title: "ING.", firstName: "Desarrollador", lastName: "Web", role: "Desarrollador", color: "bg-[#066699]" },
        { title: "TEC.", firstName: "Redes", lastName: "Sistemas", role: "Infraestructura", color: "bg-[#066699]" },
    ];

    return (
        <div className="pb-24 bg-[#F8F8EC] min-h-screen font-sans">

            {/* Header Ultra Moderno con Gradiente Azul */}
            <div className="relative bg-gradient-to-br from-[#02416D] via-[#0A5483] to-[#066699] pt-48 pb-32 overflow-hidden mb-20">
                {/* Elementos decorativos animados */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#AEDD2B] rounded-full mix-blend-overlay filter blur-[150px] opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#066699] rounded-full mix-blend-overlay filter blur-[120px] opacity-30"></div>

                {/* Patrón de puntos */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-block mb-6 animate-fade-in">
                        <span className="py-2 px-6 rounded-full bg-[#AEDD2B]/20 border-2 border-[#AEDD2B]/40 text-[#AEDD2B] font-black tracking-[0.3em] uppercase text-xs backdrop-blur-sm">
                            Vicerrectorado de Investigación
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight leading-none">
                        Nuestro
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AEDD2B] to-white">Equipo</span>
                    </h1>

                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-px w-16 bg-white/30"></div>
                        <i className="fas fa-users text-[#AEDD2B] text-2xl"></i>
                        <div className="h-px w-16 bg-white/30"></div>
                    </div>

                    <p className="text-blue-100 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
                        El talento humano que impulsa la <span className="text-[#AEDD2B] font-semibold">excelencia científica</span> y el <span className="text-[#AEDD2B] font-semibold">desarrollo tecnológico</span> de la Universidad Nacional del Altiplano.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl">

                {/* 01. NIVEL DIRECTIVO */}
                <section className="mb-32">
                    <div className="text-center mb-16 relative">
                        <span className="text-9xl font-black text-[#02416D]/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none">01</span>
                        <div className="inline-block relative">
                            <h2 className="text-5xl font-black text-[#02416D] relative z-10 mb-4">
                                Nivel Directivo
                            </h2>
                            <div className="h-2 w-32 bg-gradient-to-r from-[#AEDD2B] to-[#066699] mx-auto rounded-full"></div>
                        </div>
                    </div>

                    {/* Vicerrector - Destacado */}
                    <div className="max-w-md mx-auto mb-16">
                        <ModernTeamCard
                            title="DR."
                            firstName="Vicerrector"
                            lastName="Investigación"
                            role="Alta Dirección"
                            colorClass="bg-gradient-to-br from-[#02416D] to-[#0A5483]"
                        />
                    </div>

                    {/* Área de TI */}
                    <div className="bg-white rounded-3xl p-10 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#066699]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10 text-center mb-12">
                            <div className="inline-block mb-4">
                                <div className="w-20 h-20 bg-gradient-to-br from-[#066699] to-[#0A5483] rounded-2xl flex items-center justify-center text-white text-3xl shadow-2xl mx-auto transform hover:rotate-12 transition-transform duration-300">
                                    <i className="fas fa-network-wired"></i>
                                </div>
                            </div>
                            <h3 className="text-4xl font-black text-[#02416D] mb-2">Área de TI</h3>
                            <p className="text-gray-500 font-semibold uppercase tracking-widest text-sm">Soporte Tecnológico Integral</p>
                        </div>

                        {/* Jefe TI Centrado */}
                        <div className="flex justify-center mb-8">
                            <div className="w-full max-w-sm">
                                <ModernTeamCard
                                    title={tiMembers[0].title}
                                    firstName={tiMembers[0].firstName}
                                    lastName={tiMembers[0].lastName}
                                    role={tiMembers[0].role}
                                    colorClass={tiMembers[0].color}
                                />
                            </div>
                        </div>

                        {/* Resto del equipo TI */}
                        <div className="grid md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
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
                <section className="mb-32">
                    <div className="text-center mb-16 relative">
                        <span className="text-9xl font-black text-[#02416D]/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none">02</span>
                        <div className="inline-block relative">
                            <h2 className="text-5xl font-black text-[#02416D] relative z-10 mb-4">
                                Dirección de Institutos
                            </h2>
                            <div className="h-2 w-32 bg-gradient-to-r from-[#066699] to-[#0A5483] mx-auto rounded-full"></div>
                        </div>
                    </div>

                    {/* Director DII Centrado */}
                    <div className="flex justify-center mb-12">
                        <div className="w-full max-w-sm">
                            <ModernTeamCard
                                title={diiMembers[0].title}
                                firstName={diiMembers[0].firstName}
                                lastName={diiMembers[0].lastName}
                                role={diiMembers[0].role}
                                colorClass={diiMembers[0].color}
                            />
                        </div>
                    </div>

                    {/* Resto del equipo DII */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {diiMembers.slice(1).map((member, i) => (
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
                </section>

                {/* 03. OFICINAS DE PRODUCCIÓN CIENTÍFICA */}
                <section>
                    <div className="text-center mb-20 relative">
                        <span className="text-9xl font-black text-[#02416D]/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none">03</span>
                        <div className="inline-block relative">
                            <h2 className="text-5xl font-black text-[#02416D] relative z-10 mb-4">
                                Producción Científica
                            </h2>
                            <div className="h-2 w-32 bg-gradient-to-r from-[#AEDD2B] to-[#066699] mx-auto rounded-full"></div>
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
