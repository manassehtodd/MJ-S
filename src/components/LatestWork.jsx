import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navigation } from "swiper/modules";
import { useState } from "react";
import { Link } from 'react-router-dom';

const latestWorks = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60',
        name: 'Classic Suit',
        category: 'Formal',
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1594938298603-5bc3d1e9e68f?w=600&auto=format&fit=crop&q=60',
        name: 'Senator Wear',
        category: 'Native',
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&auto=format&fit=crop&q=60',
        name: 'Kaftan',
        category: 'Native',
    },
    {
        id: 4,
        img: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&auto=format&fit=crop&q=60',
        name: 'Ceremonial Suit',
        category: 'Formal',
    },
    {
        id: 5,
        img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop&q=60',
        name: 'Vintage Style',
        category: 'Vintage',
    },
];

function LatestWork() {
    const [swiperInstance, setSwiperInstance] = useState(null);

    return (
        <section className="min-h-screen bg-dark-section py-24 px-6 md:px-16 lg:px-24">

            {/* Section Tag */}
            <div className="w-fit border border-gold/40 px-4 py-1 mb-6">
                <span className="text-xs text-gold tracking-widest uppercase">Latest Works</span>
            </div>

            {/* Section Header */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <h2 className="text-4xl md:text-5xl text-cream leading-tight">
                    RECENT WORK, HAPPY CUSTOMERS
                </h2>
                <div className="flex flex-col items-start md:items-end gap-4 md:text-right">
                    <p className="text-cream/70 text-sm leading-relaxed max-w-xs">
                        Tailored to match each customer's needs and preferences — from the material down to the final stitch.
                    </p>
                    
                        <Link to="/contact"
                        className="px-6 py-3 bg-gold text-dark text-xs tracking-widest uppercase font-semibold hover:bg-gold/80 transition-all duration-300"
                    >
                        Contact the Tailor
                    </Link>
                </div>
            </div>

            {/* Swiper */}
            <div className="relative">
                <Swiper
                    modules={[Navigation]}
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                    slidesPerView={1}
                    spaceBetween={16}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    className="w-full"
                >
                    {latestWorks.map((work) => (
                        <SwiperSlide key={work.id}>
                            <div className="flex flex-col gap-3 group cursor-pointer">
                                <div className="overflow-hidden">
                                    <img
                                        src={work.img}
                                        alt={work.name}
                                        className="w-full h-80 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-cream text-sm tracking-widest uppercase">{work.name}</span>
                                    <span className="text-gold/60 text-xs tracking-widest uppercase">{work.category}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation — bottom right */}
                <div className="flex justify-end gap-3 mt-6">
                    <button
                        onClick={() => swiperInstance?.slidePrev()}
                        className="w-10 h-10 flex items-center justify-center border border-cream/30 text-cream hover:border-gold hover:text-gold transition-all duration-300"
                    >
                        ←
                    </button>
                    <button
                        onClick={() => swiperInstance?.slideNext()}
                        className="w-10 h-10 flex items-center justify-center border border-cream/30 text-cream hover:border-gold hover:text-gold transition-all duration-300"
                    >
                        →
                    </button>
                </div>
            </div>

        </section>
    );
}

export default LatestWork;