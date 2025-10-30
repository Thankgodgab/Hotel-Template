import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../images/logo-white.webp";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="bg-black px-6 py-5 relative">
            <nav className="flex justify-between items-center">
                {/* Logo */}
                <div>
                    <img src={logo} alt="logo" className="w-28" />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-10 text-white">
                    <li>Home</li>
                    <li>Rooms</li>
                    <li>Reservation</li>
                    <li>Pages</li>
                    <li>News</li>
                    <li>Contact</li>
                </ul>

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <button className="border-yellow-500 border px-4 py-2 text-white hover:bg-yellow-500 hover:text-black transition">
                        Book A Room
                    </button>
                </div>

                {/* Mobile Toggle Button */}
                <div className="md:hidden text-white z-50" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>


            </nav>

            {/* Mobile Menu (Slide from Right) */}
            <div
                className={`fixed top-15 right-0 h-full w-3/4 bg-black text-white flex flex-col p-10 gap-6 transition-transform duration-500 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"
                    } z-50`} 
            >
                <ul className="flex flex-col gap-6 text-lg">
                    <li>Home</li>
                    <li>Rooms</li>
                    <li>Reservation</li>
                    <li>Pages</li>
                    <li>News</li>
                    <li>Contact</li>
                </ul>
                <button className="border-yellow-500 border px-6 py-2 hover:bg-yellow-500 hover:text-black transition">
                    Book A Room
                </button>
            </div>

            {/* Overlay behind the menu */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
                    onClick={toggleMenu}
                ></div>
            )}

        </header>
    );
};

export default Navbar;
