import React from 'react';

const SectionTitle = ({ title, subtitle, centered = false }) => (
    <div className={`mb-10 ${centered ? 'text-center' : ''} reveal`}>
        <h2 className="text-3xl md:text-4xl font-bold text-unap-navy mb-3 font-serif relative inline-block">
            {title}
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-unap-yellow rounded-full"></span>
        </h2>
        {subtitle && <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
);

export default SectionTitle;
