import React from 'react';

const Rooms = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-slate-800">Room Inventory</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="h-32 bg-slate-200"></div>
                    <div className="p-4">
                        <h3 className="font-bold">Deluxe Suite</h3>
                        <p className="text-sm text-slate-500">Room 101 - 105</p>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-green-600 font-semibold">$150/night</span>
                            <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600">Available</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rooms;
