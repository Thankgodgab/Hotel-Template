import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';

const Navbar = () => {
    const { user } = useAuth();

    return (
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
            <div className="flex items-center gap-4 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 w-96">
                <Search size={18} className="text-slate-400" />
                <input
                    type="text"
                    placeholder="Search for bookings, guests..."
                    className="bg-transparent border-none outline-none text-sm w-full"
                />
            </div>

            <div className="flex items-center gap-6">
                <button className="relative text-slate-500 hover:text-slate-800 transition-colors">
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center border-2 border-white">3</span>
                </button>

                <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
                    <div className="text-right">
                        <p className="text-sm font-bold text-slate-800">{user?.name || 'Guest User'}</p>
                        <p className="text-xs text-slate-500 capitalize">{user?.role?.replace('_', ' ') || 'Staff'}</p>
                    </div>
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                        <User size={20} />
                    </div>
                </div>
            </div>
        </header>
    );
};


export default Navbar;
