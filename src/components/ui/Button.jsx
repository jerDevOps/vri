import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm text-sm";
    const variants = {
        primary: "bg-unap-blue text-white hover:bg-blue-900 shadow-unap-blue/30",
        secondary: "bg-white text-unap-blue border border-unap-blue hover:bg-blue-50",
        gold: "bg-unap-gold text-white hover:bg-yellow-600 shadow-yellow-500/30",
        outline: "bg-transparent border border-white text-white hover:bg-white/10"
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
