import React from 'react';
import { Link } from 'react-router-dom';

const RoomList = () => {
    const rooms = [
        { id: 1, name: 'Standard Room', price: 120, type: 'Standard', image: 'S' },
        { id: 2, name: 'Deluxe Suite', price: 250, type: 'Deluxe', image: 'D' },
        { id: 3, name: 'Presidential Suite', price: 500, type: 'Presidential', image: 'P' },
        { id: 4, name: 'Executive Room', price: 180, type: 'Executive', image: 'E' },
    ];

    return (
        <div className="py-20 px-8 md:px-16 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">Available Rooms</h1>
                    <p className="text-slate-500">Pick the perfect space for your stay.</p>
                </div>
                <div className="flex gap-4">
                    <select className="px-4 py-2 rounded-lg border border-slate-200 outline-none text-sm">
                        <option>All Types</option>
                        <option>Standard</option>
                        <option>Deluxe</option>
                    </select>
                    <select className="px-4 py-2 rounded-lg border border-slate-200 outline-none text-sm">
                        <option>Sort by Price</option>
                        <option>Low to High</option>
                        <option>High to Low</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {rooms.map((room) => (
                    <div key={room.id} className="group flex flex-col md:flex-row bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
                        <div className="w-full md:w-1/2 h-64 md:h-auto bg-slate-100 flex items-center justify-center text-7xl font-black text-slate-200 group-hover:scale-105 transition-transform duration-700">
                            {room.image}
                        </div>
                        <div className="w-full md:w-1/2 p-10 flex flex-col justify-between">
                            <div>
                                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold mb-4 tracking-wider uppercase">{room.type}</span>
                                <h3 className="text-2xl font-bold mb-2 text-slate-900">{room.name}</h3>
                                <p className="text-slate-500 text-sm mb-6 leading-relaxed">Relax in our spacious {room.name} featuring modern amenities and breathtaking views.</p>
                                <div className="flex flex-wrap gap-4 mb-8 text-xs text-slate-400 font-medium">
                                    <span className="flex items-center gap-1">🛏️ 2 Beds</span>
                                    <span className="flex items-center gap-1">🚿 1 Bath</span>
                                    <span className="flex items-center gap-1">📺 TV & WiFi</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-auto">
                                <div>
                                    <span className="text-3xl font-black text-slate-900">${room.price}</span>
                                    <span className="text-sm text-slate-400 font-medium tracking-tight ml-1">/ night</span>
                                </div>
                                <Link to={`/booking/${room.id}`} className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:w-32 hover:rounded-xl transition-all group/btn overflow-hidden relative">
                                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 group-hover/btn:opacity-0 group-hover/btn:scale-0">→</span>
                                    <span className="opacity-0 font-bold whitespace-nowrap transition-all duration-300 group-hover/btn:opacity-100">BOOK</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoomList;
