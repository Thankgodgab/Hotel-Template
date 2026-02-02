import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="relative">
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
                <div className="absolute inset-0 bg-slate-200">
                    {/* Placeholder for Hero Image */}
                    <div className="w-full h-full bg-gradient-to-tr from-slate-900 to-slate-800 flex items-center justify-center text-slate-700 text-9xl font-black">STAY</div>
                </div>

                <div className="relative z-20 text-center text-white px-4">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Luxury Meets Comfort</h1>
                    <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90 font-medium">Book your stay at GrandStay and experience a new level of hospitality.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link to="/rooms" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-blue-500/20">
                            Check Availability
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Premium Services</h2>
                    <p className="text-slate-500 max-w-lg mx-auto">We provide the best services to make your stay memorable and comfortable.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {['Free WiFi', '24/7 Service', 'Luxury Spa'].map((service) => (
                        <div key={service} className="p-8 rounded-3xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all group">
                            <div className="w-14 h-14 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <div className="w-6 h-6 bg-current rounded-sm"></div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">{service}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">Experience world-class {service.toLowerCase()} throughout your stay at our hotel.</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
