function Hero() {
    const person2Photo = 'https://plus.unsplash.com/premium_photo-1718737640478-93fbf909c478?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fE5pZ2VyaWElMjBwZW9wbGUlMjBmYXNoaW9ufGVufDB8fDB8fHww';
    const person1Photo = 'https://plus.unsplash.com/premium_photo-1718275466762-f92cffbbae21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fE5pZ2VyaWElMjBwZW9wbGUlMjBmYXNoaW9ufGVufDB8fDB8fHww';

    return (
        <section className="min-h-screen bg-dark pt-24 px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                {/* Left Column */}
                <div className="flex flex-col gap-6">
                    {/* Tags */}
                    <div className="w-fit border border-gold/40 px-4 py-1">
                        <ul className="flex gap-3 text-xs text-gold tracking-widest uppercase">
                            <li>Exclusive</li>
                            <li>• Elegant</li>
                            <li>• Timeless</li>
                        </ul>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl text-cream leading-tight">
                        DEFINE YOUR ELEGANCE, EMBRACE YOUR TRUE STYLE
                    </h1>

                    {/* Bottom Image */}
                    <div className="overflow-hidden">
                        <img
                            src={person2Photo}
                            alt="Bespoke fashion"
                            className="w-full h-72 object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-8 md:pt-16">
                    {/* Tagline + CTA */}
                    <div className="flex flex-col items-end gap-4 text-right">
                        <p className="text-cream/70 text-sm leading-relaxed max-w-xs">
                            Discover the confidence that comes from wearing what truly defines you.
                        </p>
                        
                            <a href="https://wa.me/2348061635254"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-gold text-dark text-xs tracking-widest uppercase font-semibold hover:bg-gold-light transition-all duration-300"
                        >
                            Contact the Tailor
                        </a>
                    </div>

                    {/* Top Image */}
                    <div className="overflow-hidden">
                        <img
                            src={person1Photo}
                            alt="Fashion model"
                            className="w-full h-105 object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;