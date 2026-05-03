import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { collections } from '../data/collections';
import { ArrowLeft } from 'lucide-react';

function CollectionDetails() {
    const { id } = useParams();
    const item = collections.find((c) => c.id === id);
    const [activeImg, setActiveImg] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: '',
        phone: '',
        message: '',
    });

    if (!item) {
        return (
            <main className="min-h-screen bg-dark flex flex-col items-center justify-center gap-6">
                <h1 className="text-4xl text-cream">Collection not found.</h1>
                <Link
                    to="/collections"
                    className="text-xs text-gold tracking-widest uppercase hover:underline"
                >
                    ← Back to Collections
                </Link>
            </main>
        );
    }

    const allImages = [item.img, ...item.gallery];

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (!form.name || !form.phone) return;
        const message = `Hi, I'm ${form.name}. I'm interested in your ${item.name} collection.${form.message ? ` ${form.message}` : ''} My phone number is ${form.phone}.`;
        const url = `https://wa.me/2348061635254?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        setSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-dark pt-32 pb-24 px-6 md:px-16 lg:px-24">

            {/* Back Link */}
            <Link
                to="/collections"
                className="flex items-center gap-2 text-xs text-cream/50 tracking-widest uppercase hover:text-gold transition-colors duration-300 mb-12"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Collections
            </Link>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Left — Images */}
                <div className="flex flex-col gap-4">
                    {/* Main Image */}
                    <div className="overflow-hidden">
                        <img
                            src={allImages[activeImg]}
                            alt={item.name}
                            className="w-full h-130 object-cover transition-all duration-500"
                        />
                    </div>
                    {/* Thumbnail Gallery */}
                    <div className="grid grid-cols-4 gap-2">
                        {allImages.map((img, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveImg(index)}
                                className={`overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                                    activeImg === index
                                        ? 'border-gold'
                                        : 'border-transparent'
                                }`}
                            >
                                <img
                                    src={img}
                                    alt={`${item.name} ${index + 1}`}
                                    className="w-full h-20 object-cover hover:scale-105 transition-all duration-500"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right — Details + Form */}
                <div className="flex flex-col gap-8">

                    {/* Category Tag */}
                    <div className="w-fit border border-gold/40 px-4 py-1">
                        <span className="text-xs text-gold tracking-widest uppercase">{item.category}</span>
                    </div>

                    {/* Name */}
                    <h1 className="text-5xl text-cream leading-tight">{item.name.toUpperCase()}</h1>

                    {/* Full Description */}
                    <p className="text-cream/60 text-sm leading-relaxed">{item.fullDescription}</p>

                    {/* Details List */}
                    <div className="flex flex-col gap-3 border-t border-gold/20 pt-6">
                        <span className="text-xs text-gold tracking-widest uppercase mb-2">What to Expect</span>
                        {item.details.map((detail, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <span className="text-gold mt-1">—</span>
                                <span className="text-cream/60 text-sm">{detail}</span>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="flex flex-col gap-4 border-t border-gold/20 pt-6">
                        <span className="text-xs text-gold tracking-widest uppercase mb-2">Book This Style</span>

                        {submitted ? (
                            <div className="border border-gold/40 px-6 py-8 text-center flex flex-col gap-2">
                                <span className="text-cream text-sm tracking-widest uppercase">Message Sent</span>
                                <span className="text-cream/50 text-xs">We've opened WhatsApp for you. M&J Stitches will get back to you shortly.</span>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="bg-dark-card border border-gold/20 text-cream text-sm px-4 py-3 placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors duration-300"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Your Phone Number"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="bg-dark-card border border-gold/20 text-cream text-sm px-4 py-3 placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors duration-300"
                                />
                                <textarea
                                    name="message"
                                    placeholder="Any specific details or requests? (optional)"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="bg-dark-card border border-gold/20 text-cream text-sm px-4 py-3 placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                                />
                                <button
                                    onClick={handleSubmit}
                                    className="px-6 py-4 bg-gold text-dark text-xs tracking-widest uppercase font-semibold hover:bg-gold/80 transition-all duration-300"
                                >
                                    Send via WhatsApp
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            </div>

        </main>
    );
}

export default CollectionDetails;