import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Layouts
import AdminLayout from './shared/layouts/AdminLayout';
import PublicLayout from './shared/layouts/PublicLayout';

// Admin Pages
import Dashboard from './apps/admin/pages/Dashboard';
import Bookings from './apps/admin/pages/Bookings';
import Rooms from './apps/admin/pages/Rooms';
import Guests from './apps/admin/pages/Guests';
import Reports from './apps/admin/pages/Reports';
import Settings from './apps/admin/pages/Settings';

// Public Pages
import Home from './apps/public/pages/Home';
import RoomList from './apps/public/pages/RoomList';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/auth" element={<AuthPage />} />

          {/* Guest Side (Public Website) */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="rooms" element={<RoomList />} />
            <Route path="booking/:id" element={<div className="p-20 text-center">Booking Form Page (Coming Soon)</div>} />
            <Route path="about" element={<div className="p-20 text-center">About Us Page (Coming Soon)</div>} />
            <Route path="contact" element={<div className="p-20 text-center">Contact Page (Coming Soon)</div>} />
          </Route>

          {/* Staff Side (Internal Admin App) - Protected */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            {/* Overview - Admin Only */}
            <Route index element={
              <ProtectedRoute allowedRoles={['admin']}>
                <Dashboard />
              </ProtectedRoute>
            } />

            {/* Common Routes - Admin & Sales Person */}
            <Route path="bookings" element={
              <ProtectedRoute allowedRoles={['admin', 'sales_person']}>
                <Bookings />
              </ProtectedRoute>
            } />
            <Route path="rooms" element={
              <ProtectedRoute allowedRoles={['admin', 'sales_person']}>
                <Rooms />
              </ProtectedRoute>
            } />
            <Route path="guests" element={
              <ProtectedRoute allowedRoles={['admin', 'sales_person']}>
                <Guests />
              </ProtectedRoute>
            } />

            {/* Admin Only Routes */}
            <Route path="reports" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <Reports />
              </ProtectedRoute>
            } />
            <Route path="settings" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <Settings />
              </ProtectedRoute>
            } />
          </Route>

          {/* Redirects */}
          <Route path="/dashboard" element={<Navigate to="/admin" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;