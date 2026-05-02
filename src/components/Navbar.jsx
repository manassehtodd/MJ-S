import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '/src/assets/mj_logo.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Collections', href: '/collections' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-dark/80 backdrop-blur-sm border-b border-gold/20">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">

                    {/* Logo */}
                    <img src={logo} alt="M&J Stitches" className="h-10 w-auto" />

                    {/* Desktop Nav Links */}
                    <ul className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                
                                    <a href={link.href}
                                    className="text-cream text-sm tracking-widest uppercase hover:text-gold transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    
                        <a href="https://wa.me/2348061635254"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:block px-5 py-2 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-dark transition-all duration-300"
                    >
                        Book a Fitting
                    </a>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-cream"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </nav>

            {/* Mobile Fullscreen Menu — outside nav entirely */}
            {isOpen && (
                <div className="fixed inset-0 bg-dark/90 backdrop-blur-md z-100 flex flex-col justify-center items-center gap-10">
                    
                    {/* Close Button */}
                    <button
                        className="absolute top-5 right-6 text-cream"
                        onClick={() => setIsOpen(false)}
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {navLinks.map((link) => (
                        
                            <a key={link.name}
                            href={link.href}
                            className="text-cream text-3xl tracking-widest uppercase hover:text-gold transition-colors duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}

                    
                        <a href="https://wa.me/2348061635254"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 border border-gold text-gold text-sm tracking-widest uppercase text-center hover:bg-gold hover:text-dark transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                    >
                        Book a Fitting
                    </a>
                </div>
            )}
        </>
    );
}

export default Navbar;