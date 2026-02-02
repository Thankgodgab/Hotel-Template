import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Calendar, Bed, Users, Settings, LogOut, BarChart3 } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';

const Sidebar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/auth');
    };

    const allNavItems = [
        { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/admin', roles: ['admin'] },
        { icon: <Calendar size={20} />, label: 'Bookings', path: '/admin/bookings', roles: ['admin', 'sales_person'] },
        { icon: <Bed size={20} />, label: 'Rooms', path: '/admin/rooms', roles: ['admin', 'sales_person'] },
        { icon: <Users size={20} />, label: 'Guests', path: '/admin/guests', roles: ['admin', 'sales_person'] },
        { icon: <BarChart3 size={20} />, label: 'Reports', path: '/admin/reports', roles: ['admin'] },
        { icon: <Settings size={20} />, label: 'Settings', path: '/admin/settings', roles: ['admin'] },
    ];

    const filteredNavItems = allNavItems.filter(item =>
        !item.roles || item.roles.includes(user?.role)
    );

    return (
        <aside className="w-64 bg-slate-900 text-slate-300 h-screen fixed left-0 top-0 flex flex-col z-50">
            <div className="p-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-lg">L</div>
                    Luxe Hotel
                </h2>
            </div>

            <nav className="flex-1 mt-4">
                {filteredNavItems.map((item) => (
                    <NavLink
                        key={item.label}
                        to={item.path}
                        end={item.path === '/admin'}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-6 py-3 transition-colors ${isActive ? 'bg-blue-600 text-white border-r-4 border-white' : 'hover:bg-slate-800'
                            }`
                        }
                    >
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-slate-800 space-y-2">
                {user && (
                    <div className="px-2 py-2 mb-2">
                        <p className="text-white font-semibold text-sm truncate">{user.name}</p>
                        <p className="text-slate-500 text-xs uppercase tracking-wider">{user.role?.replace('_', ' ')}</p>
                    </div>
                )}
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-2 py-2 w-full text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                    <LogOut size={20} />
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;

