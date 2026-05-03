import { Link } from 'react-router-dom';

import collections from '../data/collections';
function Collections() {
    return (
        <main className="min-h-screen bg-dark pt-32 pb-24 px-6 md:px-16 lg:px-24">

            {/* Page Header */}
            <div className="mb-16">
                <div className="w-fit border border-gold/40 px-4 py-1 mb-6">
                    <span className="text-xs text-gold tracking-widest uppercase">Our Collections</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                    <h1 className="text-5xl md:text-6xl text-cream leading-tight">
                        EVERYTHING WE MAKE
                    </h1>
                    <p className="text-cream/50 text-sm leading-relaxed max-w-sm md:text-right md:ml-auto">
                        Every style is made to order. Pick what speaks to you and reach out — we'll handle the rest.
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gold/20 mb-16" />

            {/* Collections Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {collections.map((item) => (
                    <Link
                        to={`/collections/${item.id}`}
                        key={item.id}
                        className="group flex flex-col gap-4 cursor-pointer"
                    >
                        {/* Image */}
                        <div className="overflow-hidden">
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-96 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            />
                        </div>

                        {/* Card Info */}
                        <div className="flex flex-col gap-2 border-b border-gold/10 pb-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-cream text-lg tracking-widest uppercase">
                                    {item.name}
                                </h2>
                                <span className="text-gold/50 text-xs tracking-widest uppercase">
                                    {item.category}
                                </span>
                            </div>
                            <p className="text-cream/40 text-xs leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                        {/* View Link */}
                        <span className="text-xs text-gold tracking-widest uppercase group-hover:underline transition-all duration-300">
                            More Details →
                        </span>
                    </Link>
                ))}
            </div>

        </main>
    );
}

export default Collections;