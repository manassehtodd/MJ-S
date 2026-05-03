import { useState } from 'react';
import { MapPin, Phone } from 'lucide-react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const contactDetails = [
    {
        icon: <MapPin className="w-5 h-5 text-gold" />,
        label: 'Visit Us',
        value: '180 Abuloma Road, Rivers State, Nigeria',
    },
    {
        icon: <Phone className="w-5 h-5 text-gold" />,
        label: 'Call or WhatsApp',
        value: '+234 806 163 5254',
        href: 'https://wa.me/2348061635254',
    },
    {
        icon: <FaInstagram className="w-5 h-5 text-gold" />,
        label: 'Instagram',
        value: '@mandjstitches',
        href: 'https://www.instagram.com/mandjstitches',
    },
    {
        icon: <FaFacebookF className="w-5 h-5 text-gold" />,
        label: 'Facebook',
        value: 'M&J Stitches',
        href: 'https://www.facebook.com/MandJStitches',
    },
];

function Contact() {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        style: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (!form.name || !form.phone) return;
        const text = `Hi, I'm ${form.name}. ${form.style ? `I'm interested in a ${form.style}.` : ''} ${form.message ? form.message : ''} My phone number is ${form.phone}.`;
        const url = `https://wa.me/2348061635254?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
        setSubmitted(true);
    };

    return (
        <main id="contact" className="min-h-screen bg-dark pt-32 pb-24 px-6 md:px-16 lg:px-24">

            {/* Page Header */}
            <div className="mb-16">
                <div className="w-fit border border-gold/40 px-4 py-1 mb-6">
                    <span className="text-xs text-gold tracking-widest uppercase">Contact Us</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                    <h1 className="text-5xl md:text-6xl text-cream leading-tight">
                        LET'S BUILD SOMETHING FOR YOU
                    </h1>
                    <p className="text-cream/50 text-sm leading-relaxed max-w-sm md:text-right md:ml-auto">
                        Every great outfit starts with a conversation. Reach out and tell us what you have in mind — we'll take it from there.
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gold/20 mb-16" />

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Left — Contact Info */}
                <div className="flex flex-col gap-12">

                    {/* Contact Details */}
                    <div className="flex flex-col gap-8">
                        {contactDetails.map((detail) => (
                            <div key={detail.label} className="flex items-start gap-4">
                                <div className="mt-1">{detail.icon}</div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs text-gold tracking-widest uppercase">{detail.label}</span>
                                    {detail.href ? (
                                        
                                            <a href={detail.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-cream/70 text-sm hover:text-gold transition-colors duration-300"
                                        >
                                            {detail.value}
                                        </a>
                                    ) : (
                                        <span className="text-cream/70 text-sm">{detail.value}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gold/20" />

                    {/* How it works */}
                    <div className="flex flex-col gap-6">
                        <span className="text-xs text-gold tracking-widest uppercase">How It Works</span>
                        {[
                            { step: '01', text: 'Reach out via the form or WhatsApp with what you have in mind.' },
                            { step: '02', text: 'We schedule a fitting consultation to take your measurements.' },
                            { step: '03', text: 'You pick your fabric, style, and any custom details.' },
                            { step: '04', text: 'We build it. You wear it.' },
                        ].map((item) => (
                            <div key={item.step} className="flex items-start gap-4">
                                <span className="text-2xl text-gold/30 font-bold">{item.step}</span>
                                <p className="text-cream/50 text-sm leading-relaxed mt-1">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* Image */}
                    <div className="overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&auto=format&fit=crop&q=60"
                            alt="M&J Stitches"
                            className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>

                </div>

                {/* Right — Form */}
                <div className="flex flex-col gap-6">
                    <span className="text-xs text-gold tracking-widest uppercase mb-2">Send a Message</span>

                    {submitted ? (
                        <div className="border border-gold/40 px-6 py-16 flex flex-col items-center justify-center gap-4 text-center h-full">
                            <div className="w-12 h-12 border border-gold flex items-center justify-center">
                                <span className="text-gold text-xl">✓</span>
                            </div>
                            <span className="text-cream text-sm tracking-widest uppercase">Message Sent</span>
                            <span className="text-cream/40 text-xs max-w-xs leading-relaxed">
                                WhatsApp has been opened with your message. M&J Stitches will get back to you shortly.
                            </span>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="mt-4 text-xs text-gold tracking-widest uppercase hover:underline"
                            >
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name *"
                                value={form.name}
                                onChange={handleChange}
                                className="bg-dark-card border border-gold/20 text-cream text-sm px-4 py-4 placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors duration-300"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Your Phone Number *"
                                value={form.phone}
                                onChange={handleChange}
                                className="bg-dark-card border border-gold/20 text-cream text-sm px-4 py-4 placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors duration-300"
                            />
                            <select
                                name="style"
                                value={form.style}
                                onChange={handleChange}
                                className="bg-dark-card border border-gold/20 text-cream text-sm px-4 py-4 focus:outline-none focus:border-gold transition-colors duration-300 appearance-none"
                            >
                                <option value="" className="text-cream/30">What are you interested in?</option>
                                <option value="Suit">Suit</option>
                                <option value="Senator">Senator</option>
                                <option value="Kaftan">Kaftan</option>
                                <option value="Woko">Woko</option>
                                <option value="Etibo">Etibo</option>
                                <option value="Don">Don</option>
                                <option value="Classic Shirt">Classic Shirt</option>
                                <option value="Couture piece">Couture</option>
                                <option value="Vintage style">Vintage</option>
                            </select>
                            <textarea
                                name="message"
                                placeholder="Tell us more about what you want (optional)"
                                value={form.message}
                                onChange={handleChange}
                                rows={6}
                                className="bg-dark-card border border-gold/20 text-cream text-sm px-4 py-4 placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                            />
                            <p className="text-cream/30 text-xs">* Required fields</p>
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

        </main>
    );
}

export default Contact;