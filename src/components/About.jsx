import logo from '/src/assets/mj_logo.png';

function About() {
    const stats = [
        { value: '500+', label: 'Happy Customers' },
        { value: '10+', label: 'Years Experience' },
        { value: '12+', label: 'Style Categories' },
    ];

    const services = [
        'Suits', 'Senators', 'Classic Shirts',
        'Kaftan', 'Woko', 'Couture',
        'Etibo', 'Don', 'Vintage',
    ];

    return (
        <section id="about" className="bg-dark py-24 px-6 md:px-16 lg:px-24">

            {/* Section Tag */}
            <div className="w-fit border border-gold/40 px-4 py-1 mb-6">
                <span className="text-xs text-gold tracking-widest uppercase">About Us</span>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left — Image */}
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&auto=format&fit=crop&q=60"
                        alt="M&J Stitches Tailor at work"
                        className="w-full h-[550px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    {/* Floating Logo */}
                    <div className="absolute -bottom-6 -right-6 bg-dark-card p-4 border border-gold/20">
                        <img src={logo} alt="M&J Stitches Logo" className="w-20 h-20 object-contain" />
                    </div>
                </div>

                {/* Right — Content */}
                <div className="flex flex-col gap-8">
                    <h2 className="text-4xl md:text-5xl text-cream leading-tight">
                        CRAFTED FOR THE MAN WHO KNOWS WHAT HE WANTS
                    </h2>

                    <p className="text-cream/70 text-sm leading-relaxed">
                        M&J Stitches was built on a simple belief — every man deserves clothing that fits his body, 
                        his personality, and his moment. Based in Port Harcourt, Rivers State, we specialize in 
                        bespoke menswear that blends traditional craftsmanship with modern style.
                    </p>

                    <p className="text-cream/70 text-sm leading-relaxed">
                        From sharp ceremonial suits to classic native wear, every piece that leaves our hands 
                        is made to order. No shortcuts. No compromises. Just clothing built around you.
                    </p>

                    {/* Services Grid */}
                    <div>
                        <span className="text-xs text-gold tracking-widest uppercase mb-4 block">What We Make</span>
                        <div className="grid grid-cols-3 gap-2">
                            {services.map((service) => (
                                <div
                                    key={service}
                                    className="border border-gold/20 px-3 py-2 text-xs text-cream/70 tracking-widest uppercase text-center hover:border-gold hover:text-gold transition-all duration-300"
                                >
                                    {service}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 border-t border-gold/20 pt-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex flex-col gap-1">
                                <span className="text-3xl text-gold">{stat.value}</span>
                                <span className="text-xs text-cream/50 tracking-widest uppercase">{stat.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <a
                        href="https://wa.me/2348061635254"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit px-6 py-3 border border-gold text-gold text-xs tracking-widest uppercase hover:bg-gold hover:text-dark transition-all duration-300"
                    >
                        Book a Fitting
                    </a>
                </div>
            </div>

        </section>
    );
}

export default About;