import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from '../ui/SectionTitle';

const StatCounter = ({ value, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);

    const numericPart = value.replace(/[^0-9]/g, '');
    const targetValue = parseInt(numericPart, 10);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentCount = Math.floor(easedProgress * targetValue);

            setCount(currentCount);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [hasStarted, targetValue, duration]);

    return (
        <span ref={countRef}>
            {count.toLocaleString()}
        </span>
    );
};

const InstitutionalStats = () => {
    return (
        <section className="py-20 bg-unap-navy relative overflow-hidden text-white">
            {/* Decorative Blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-unap-skyBlue/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-unap-yellow/10 rounded-full blur-[80px] -ml-20 -mb-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <SectionTitle
                    title={<span className="text-white">Excelencia en Cifras</span>}
                    subtitle={<span className="text-unap-skyBlue">Resultados que demuestran nuestro compromiso con el desarrollo de la región.</span>}
                    centered
                />

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
                    {[
                        { label: 'Inversión 2025', val: '12', prefix: 'S/ ', suffix: 'M', icon: 'fa-chart-line', color: 'text-unap-yellow' },
                        { label: 'Tesis Publicadas', val: '1450', prefix: '', suffix: '', icon: 'fa-graduation-cap', color: 'text-unap-skyBlue' },
                        { label: 'Artículos Indexados', val: '320', prefix: '', suffix: '', icon: 'fa-scroll', color: 'text-white' },
                        { label: 'Patentes Registradas', val: '12', prefix: '', suffix: '', icon: 'fa-award', color: 'text-unap-yellow' },
                    ].map((stat, idx) => (
                        <div key={idx} className="p-4 sm:p-8 text-center reveal">
                            <div className={`text-2xl sm:text-4xl mb-3 sm:mb-4 ${stat.color}`}>
                                <i className={`fas ${stat.icon}`}></i>
                            </div>
                            <div className="text-xl sm:text-4xl font-bold mb-1 sm:mb-2 font-serif text-white whitespace-nowrap">
                                {stat.prefix}<StatCounter value={stat.val} />{stat.suffix}
                            </div>
                            <div className="text-unap-skyBlue text-[10px] sm:text-sm uppercase tracking-wider font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default InstitutionalStats;
