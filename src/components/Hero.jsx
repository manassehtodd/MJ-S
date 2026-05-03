import { Link } from 'react-router-dom';

function Hero() {
    const person2Photo = 'https://plus.unsplash.com/premium_photo-1718737640478-93fbf909c478?w=600&auto=format&fit=crop&q=60';
    const person1Photo = 'https://plus.unsplash.com/premium_photo-1718275466762-f92cffbbae21?w=600&auto=format&fit=crop&q=60';

    return (
        <section className="min-h-screen bg-dark pt-24 px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                {/* Left Column */}
                <div className="flex flex-col gap-6">
                    <div className="w-fit border border-gold/40 px-4 py-1">
                        <ul className="flex md:gap-3 gap-0.5 text-xs text-gold tracking-widest uppercase">
                            <li>Exclusive</li>
                            <li>• Elegant</li>
                            <li>• Timeless</li>
                        </ul>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl text-cream leading-tight">
                        DEFINE YOUR ELEGANCE, EMBRACE YOUR TRUE STYLE
                    </h1>

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
                    <div className="flex flex-col items-end gap-4 text-right">
                        <p className="text-cream/70 text-sm leading-relaxed max-w-xs">
                            Discover the confidence that comes from wearing what truly defines you.
                        </p>

                        <Link
                            to="/contact"
                            className="px-6 py-3 bg-gold text-dark text-xs tracking-widest uppercase font-semibold hover:bg-gold-light transition-all duration-300"
                        >
                            Contact the Tailor
                        </Link>
                    </div>

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