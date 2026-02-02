import React from 'react';

const Bookings = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-slate-800">Bookings Management</h1>
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50">
                        <tr>
                            <th className="p-4 text-sm font-semibold text-slate-600">Guest</th>
                            <th className="p-4 text-sm font-semibold text-slate-600">Room</th>
                            <th className="p-4 text-sm font-semibold text-slate-600">Check-in</th>
                            <th className="p-4 text-sm font-semibold text-slate-600">Check-out</th>
                            <th className="p-4 text-sm font-semibold text-slate-600">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t border-slate-100">
                            <td className="p-4 text-sm">John Doe</td>
                            <td className="p-4 text-sm">Room 204 (Deluxe)</td>
                            <td className="p-4 text-sm">Oct 24, 2023</td>
                            <td className="p-4 text-sm">Oct 28, 2023</td>
                            <td className="p-4 text-sm"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">Confirmed</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;
