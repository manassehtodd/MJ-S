import logo from '/src/assets/mj_logo.png';

function Footer() {
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Collections', href: '/collections' },
        { name: 'Contact', href: '#contact' },
    ];

    const services = [
        'Suits', 'Senators', 'Classic Shirts',
        'Kaftan', 'Woko', 'Couture',
        'Etibo', 'Don', 'Vintage',
    ];

    return (
        <footer className="bg-dark border-t border-gold/20">

            {/* Big Brand Name */}
            <div className="overflow-hidden border-b border-gold/20">
                <h1
                    className="text-[20vw] font-bold text-transparent leading-none tracking-tighter select-none py-4 px-6"
                    style={{
                        WebkitTextStroke: '1px #D4AF37',
                    }}
                >
                    M&J STITCHES
                </h1>
            </div>

            {/* Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-16 lg:px-24 py-16">

                {/* Brand Column */}
                <div className="flex flex-col gap-4 md:col-span-1">
                    <img src={logo} alt="M&J Stitches" className="w-16 h-16 object-contain" />
                    <p className="text-cream/50 text-xs leading-relaxed max-w-xs">
                        Bespoke menswear tailored to your body, your personality, and your moment. Based in Port Harcourt, Rivers State.
                    </p>
                    {/* Socials */}
                    <div className="flex gap-4 mt-2">
                        
                            <a href="https://www.facebook.com/M&J STITCHES"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-cream/40 tracking-widest uppercase hover:text-gold transition-colors duration-300"
                        >
                            Facebook
                        </a>
                        
                            <a href="https://www.instagram.com/mandjstitches"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-cream/40 tracking-widest uppercase hover:text-gold transition-colors duration-300"
                        >
                            Instagram
                        </a>
                    </div>
                </div>

                {/* Nav Links */}
                <div className="flex flex-col gap-4">
                    <span className="text-xs text-gold tracking-widest uppercase mb-2">Navigate</span>
                    {navLinks.map((link) => (
                        
                            <a key={link.name}
                            href={link.href}
                            className="text-xs text-cream/50 tracking-widest uppercase hover:text-gold transition-colors duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Services */}
                <div className="flex flex-col gap-4">
                    <span className="text-xs text-gold tracking-widest uppercase mb-2">What We Make</span>
                    {services.map((service) => (
                        <span
                            key={service}
                            className="text-xs text-cream/50 tracking-widest uppercase"
                        >
                            {service}
                        </span>
                    ))}
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-4">
                    <span className="text-xs text-gold tracking-widest uppercase mb-2">Find Us</span>
                    <p className="text-xs text-cream/50 leading-relaxed">
                        180 Abuloma Road, <br /> Rivers State, Nigeria
                    </p>
                    
                        <a href="https://wa.me/2348061635254"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-cream/50 tracking-widest hover:text-gold transition-colors duration-300"
                    >
                        +234 806 163 5254
                    </a>
                    
                        <a href="https://wa.me/2348061635254"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit mt-2 px-6 py-3 bg-gold text-dark text-xs tracking-widest uppercase font-semibold hover:bg-gold/80 transition-all duration-300"
                    >
                        Book a Fitting
                    </a>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gold/20 px-6 md:px-16 lg:px-24 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <span className="text-xs text-cream/30 tracking-widest">
                    © {new Date().getFullYear()} M&J Stitches. All rights reserved.
                </span>
                <span className="text-xs text-cream/30 tracking-widest">
                    Fashion Escapism
                </span>
            </div>

        </footer>
    );
}

export default Footer;