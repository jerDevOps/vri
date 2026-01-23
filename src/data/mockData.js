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
            title: 'I Expo Investigación Estudianttil',
            category: 'Investigación',
            date: '20 Dic, 2025',
            excerpt: 'La Universidad Nacional del Altiplano, comprometida con la promoción de la investigación formativa y el fortalecimiento del pensamiento científico, organiza la Expo Investigación Estudiantil UNA 2025, con el propósito de divulgar los resultados de los trabajos de investigación realizados por los estudiantes y fomentar su participación activa en la generación de conocimiento orientado al desarrollo sostenible de la región y del país.',
            image: 'https://scontent.flim14-1.fna.fbcdn.net/v/t39.30808-6/600354191_1274914568003019_2305140449770710833_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGv-GCGuWk7kCcQm6-mcNxXRUkLdbDYMrBFSQt1sNgysF32v5glibWYBXTfJhKJBYdjNE_D4qse8Sn5caiKi6pR&_nc_ohc=OxLnLlupGCsQ7kNvwG7UUfp&_nc_oc=AdkZ7Ubv9bq0NW8Z2aBY4MwtaW1LtTzDyzoQuquebxyNG_B_Nczor4FMV-6Ek6XtqfU&_nc_zt=23&_nc_ht=scontent.flim14-1.fna&_nc_gid=73xrNQNfljm7w-8mwVKVbA&oh=00_AfrBoY6i411DUbkTxPzEHeK81BBh53_EohUfVHNmoFxTqQ&oe=6978BD27',
            badgeColor: 'bg-unap-blue',
            url: 'https://vriunap.pe/'
        },
        {
            id: 2,
            title: 'XI Concurso: Mi proyecto de Tesis en un Póster y Póster Científico',
            category: 'Institucional',
            date: '18 Ene, 2026',
            excerpt: 'La iniciativa busca potenciar la etapa de elaboración de las tesis, promoviendo una sólida cultura de investigación que contribuya al avance del conocimiento en diversas áreas académicas, impulsando el trabajo en equipo y la colaboración multidisciplinaria.',
            image: 'https://portal.unap.edu.pe/sites/default/files/2025-12/bb.jpg',
            badgeColor: 'bg-unap-green',
            url: 'https://vriunap.pe/'
        },
        {
            id: 3,
            title: 'III Congreso de Iniciación Científica en la UNA PUNO',
            category: 'Investigación',
            date: '16 Dic, 2025',
            excerpt: 'La Universidad Nacional del Altiplano de Puno, inauguró el “III Congreso de Iniciación Científica”, un espacio académico diseñado para fomentar y visibilizar la investigación formativa. El evento, que se desarrollará durante los días 15 y 16 de diciembre, es organizado por la Universidad Nacional del Altiplano Puno, a través de su Vicerrectorado de Investigación y congregará a la comunidad universitaria en torno a la divulgación del conocimiento.',
            image: 'https://scontent.flim20-1.fna.fbcdn.net/v/t39.30808-6/600994171_1295983405900701_1326655095269647153_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Mh5vVCY032oQ7kNvwGWgaS7&_nc_oc=Adm8awH-OdDJ2ogDk2We6OOYRFfkjiAz9-ikJi-dTRO8Nb1GzPQ7NkP16aNcpkG0bzQ&_nc_zt=23&_nc_ht=scontent.flim20-1.fna&_nc_gid=eySZbEgujB7c2oEHs3tj9Q&oh=00_Afobmpmk-CnPwnGG-IwHXOJ2W6uprtT2gbVeSO2skzLfjQ&oe=69782BC5',
            badgeColor: 'bg-unap-gold',
            url: 'https://vriunap.pe/'
        },
    ],
    calls: [
        {
            id: 1,
            title: 'Convocatoria 2025: Docente Investigador - UNA PUNO',
            closeDate: '31-Ene-2026',
            type: 'Investigación',
            state: 'Activa',
            url: 'https://vriunap.pe/sigiu/login/',
            basesUrl: 'https://drive.google.com/file/d/1SriGeCgw-AfkWRhTjBmg2SpcYCKCBCDk/view?fbclid=IwY2xjawPfR4tleHRuA2FlbQIxMABicmlkETFub09Ta2RHRDQwR1liSGZSc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvnGmDQ0EaAuUSxF8u_UJgleIEqzuX7xlHRJn2WYPQrwlO1mpNkJuq24NGuK_aem_4lveUr0U7NAWuGL2NsxeaA'
        },
        {
            id: 2,
            title: 'I Expo Investigación Estudiantil UNA PUNO 2025',
            closeDate: '10-Dic-2025',
            type: 'Publicación',
            state: 'Cerrado',
            url: 'https://vriunap.pe/',
            basesUrl: '#'
        },
        {
            id: 3,
            title: 'Concurso Póster Científico UNA PUNO',
            closeDate: '10-Dic-2025',
            type: 'Capacitación',
            state: 'Cerrado',
            url: 'https://vriunap.pe/',
            basesUrl: 'https://vriunap.pe/'
        },
        {
            id: 4,
            title: 'Concurso mi Proyecto de Tesis en un Póster',
            closeDate: '10-Dic-2025',
            type: 'Concurso',
            state: 'Cerrado',
            url: 'https://vriunap.pe/',
            basesUrl: 'https://vriunap.pe/'
        },
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
