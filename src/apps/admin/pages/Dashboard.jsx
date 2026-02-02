import React from 'react';
import { TrendingUp, Bed, Users, CreditCard } from 'lucide-react';

const Dashboard = () => {
    const stats = [
        { label: 'Total Bookings', value: '128', icon: <TrendingUp className="text-blue-600" />, trend: '+12% from last week' },
        { label: 'Available Rooms', value: '45', icon: <Bed className="text-green-600" />, trend: '5 rooms under maintenance' },
        { label: 'Check-ins Today', value: '12', icon: <Users className="text-purple-600" />, trend: '8 already arrived' },
        { label: 'Revenue (MTD)', value: '$12,450', icon: <CreditCard className="text-orange-600" />, trend: '+5.4% from last month' },
    ];

    return (
        <div className="p-8 space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Dashboard Overview</h1>
                <p className="text-slate-500">Welcome back! Here's what's happening today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-slate-50 rounded-xl">
                                {stat.icon}
                            </div>
                            <span className="text-xs font-medium text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                                Active
                            </span>
                        </div>
                        <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                        <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
                        <p className="text-xs text-slate-400 mt-4 flex items-center gap-1">
                            {stat.trend}
                        </p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-80 flex flex-col items-center justify-center text-slate-400">
                    <TrendingUp className="w-12 h-12 mb-2 opacity-20" />
                    <p className="font-medium text-slate-500">Occupancy Forecast</p>
                    <p className="text-sm">Graph visualization data loading...</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-80 flex flex-col items-center justify-center text-slate-400">
                    <Users className="w-12 h-12 mb-2 opacity-20" />
                    <p className="font-medium text-slate-500">Guest Interaction Flow</p>
                    <p className="text-sm">Real-time data visualization...</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

