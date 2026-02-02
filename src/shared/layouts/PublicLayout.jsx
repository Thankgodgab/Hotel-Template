import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const PublicLayout = () => {
    return (
        <div className="min-h-screen bg-white">
            <nav className="h-20 border-b border-slate-100 flex items-center justify-between px-8 md:px-16 sticky top-0 bg-white/80 backdrop-blur-md z-50">
                <Link to="/" className="text-2xl font-black text-blue-600 tracking-tight">
                    GRANDSTAY
                </Link>
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
                    <Link to="/rooms" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Our Rooms</Link>
                    <Link to="/about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">About Us</Link>
                    <Link to="/contact" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Contact</Link>
                </div>
                <Link to="/rooms" className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                    Book Now
                </Link>
            </nav>
            <main>
                <Outlet />
            </main>
            <footer className="bg-slate-900 text-slate-400 py-12 px-8 md:px-16 mt-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-white text-xl font-bold mb-4">GRANDSTAY</h3>
                        <p className="max-w-xs">Experience luxury and comfort like never before. Your home away from home.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-white">Home</Link></li>
                            <li><Link to="/rooms" className="hover:text-white">Rooms</Link></li>
                            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Support</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-8 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© 2026 GrandStay Hotel. All rights reserved.</p>
                    <Link to="/admin" className="text-slate-600 hover:text-slate-400">Staff Login</Link>
                </div>
            </footer>
        </div>
    );
};

export default PublicLayout;
