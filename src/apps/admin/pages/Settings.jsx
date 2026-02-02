import React from 'react';
import { Settings as SettingsIcon, Bell, Shield, Globe, Palette } from 'lucide-react';

const Settings = () => {
    return (
        <div className="p-6 space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">System Settings</h1>
                <p className="text-gray-500">Manage your hotel configuration and account preferences.</p>
            </div>

            <div className="max-w-4xl space-y-4">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden text-brand-secondary">
                    <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2 font-semibold">
                        <Shield className="w-4 h-4 text-blue-600" /> Security & Access
                    </div>
                    <div className="p-6 space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="font-medium">Two-Factor Authentication</h4>
                                <p className="text-sm text-gray-500">Add an extra layer of security to your account.</p>
                            </div>
                            <div className="w-12 h-6 bg-gray-200 rounded-full cursor-pointer relative transition-colors">
                                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                            <div>
                                <h4 className="font-medium">Role Permissions</h4>
                                <p className="text-sm text-gray-500">Configure what sales personnel can access.</p>
                            </div>
                            <button className="text-blue-600 font-semibold text-sm hover:underline">Configure</button>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden text-brand-secondary">
                    <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2 font-semibold">
                        <Bell className="w-4 h-4 text-orange-600" /> Notifications
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            <label className="flex items-center gap-3">
                                <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300 text-blue-600" />
                                <span className="text-sm">Email notifications for new bookings</span>
                            </label>
                            <label className="flex items-center gap-3">
                                <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300 text-blue-600" />
                                <span className="text-sm">Alerts for low inventory/amenities</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
