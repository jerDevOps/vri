export const MOCK_DATA = {
    stats: [
        { id: 1, label: 'Proyectos de Investigación', value: 156, icon: 'fa-microscope' },
        { id: 2, label: 'Publicaciones Científicas', value: 324, icon: 'fa-book-journal-whills' },
        { id: 3, label: 'Investigadores Renacyt', value: 215, icon: 'fa-user-graduate' },
        { id: 4, label: 'Convenios Internacionales', value: 52, icon: 'fa-handshake' },
    ],
    quickAccess: [
        { id: 1, title: 'Convocatorias Activas', desc: 'Fondos concursables y oportunidades.', icon: 'fa-bullhorn', color: 'bg-unap-navy', text: 'text-white', url: '#' },
        { id: 2, title: 'Repositorio de Tesis', desc: 'Producción intelectual UNAP.', icon: 'fa-database', color: 'bg-unap-yellow', text: 'text-unap-navy', url: 'https://repositorio.unap.edu.pe/home' },
        { id: 3, title: 'Revistas Científicas', desc: 'Publicaciones indexadas.', icon: 'fa-newspaper', color: 'bg-unap-skyBlue', text: 'text-unap-navy', url: 'https://revistas.unap.edu.pe/epg/index.php/investigaciones/index' },
        { id: 4, title: 'Eventos', desc: 'Seminarios y talleres.', icon: 'fa-calendar-check', color: 'bg-unap-red', text: 'text-white', url: 'https://vriunap.pe/cursos/' },
    ],
    news: [
        {
            id: 1,
            title: 'UNAP logra financiamiento histórico para 15 proyectos',
            category: 'Institucional',
            date: '20 Ene, 2026',
            excerpt: 'El Vicerrectorado de Investigación anuncia los ganadores del concurso anual de proyectos con inversión en equipamiento de punta.',
            image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            badgeColor: 'bg-unap-blue'
        },
        {
            id: 2,
            title: 'Hallazgo científico en plantas medicinales andinas',
            category: 'Investigación',
            date: '18 Ene, 2026',
            excerpt: 'Investigadores del Instituto de Altura descubren propiedades antioxidantes únicas en especies nativas.',
            image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            badgeColor: 'bg-unap-green'
        },
        {
            id: 3,
            title: 'Convocatoria de becas internacionales 2026',
            category: 'Movilidad',
            date: '15 Ene, 2026',
            excerpt: 'Abiertas las postulaciones para estancias de investigación en universidades de Europa y Norteamérica.',
            image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            badgeColor: 'bg-unap-gold'
        },
    ],
    calls: [
        { id: 1, title: 'Fondos FEDU 2026 - Investigación Básica', closeDate: '2026-02-28', type: 'Investigación', state: 'Activa' },
        { id: 2, title: 'Publicación de Libros Universitarios', closeDate: '2026-03-15', type: 'Publicación', state: 'Activa' },
        { id: 3, title: 'Semilleros de Investigación - Fase I', closeDate: '2026-01-30', type: 'Capacitación', state: 'Por vencer' },
        { id: 4, title: 'Equipamiento de Laboratorios', closeDate: '2026-04-10', type: 'Infraestructura', state: 'Activa' },
    ],
    directions: [
        { id: 1, title: 'Ética en Investigación', icon: 'fa-scale-balanced', desc: 'Comité de Ética' },
        { id: 2, title: 'Inclusividad', icon: 'fa-hands-holding-circle', desc: 'Responsabilidad Social' },
        { id: 3, title: 'Institutos', icon: 'fa-building-columns', desc: 'Centros de Investigación' },
        { id: 4, title: 'Innovación', icon: 'fa-lightbulb', desc: 'Transferencia Tecnológica' },
        { id: 5, title: 'Transparencia', icon: 'fa-magnifying-glass-chart', desc: 'Datos Abiertos' },
    ],
    events: [
        { id: 1, day: '25', month: 'ENE', title: 'Taller de Redacción Científica', time: '10:00 AM', location: 'Auditorio Magna', type: 'Taller' },
        { id: 2, day: '05', month: 'FEB', title: 'II Congreso Internacional de IA', time: '09:00 AM', location: 'Virtual', type: 'Congreso' },
        { id: 3, day: '12', month: 'FEB', title: 'Feria de Patentes y Prototipos', time: '11:00 AM', location: 'Plaza Principal', type: 'Feria' },
    ]
};
