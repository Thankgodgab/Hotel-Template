import React from 'react';
import Sidebar from '../../apps/admin/components/Sidebar';
import Navbar from '../../apps/admin/components/Navbar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex">
            <Sidebar />
            <div className="flex-1 ml-64">
                <Navbar />
                <main className="max-w-[1600px] mx-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
