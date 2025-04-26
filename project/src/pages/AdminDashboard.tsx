import React, { useState } from 'react';
import { Calendar, Clock, Settings, Users, Bell, BarChart3, ArrowUpRight } from 'lucide-react';
import QueueStats from '../components/Admin/QueueStats';
import AppointmentsTable from '../components/Admin/AppointmentsTable';

const AdminDashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  
  // Mock data for queue stats
  const queueStats = {
    currentWaitTime: 25,
    averageWaitTime: 20,
    peopleInQueue: 18,
    servingRate: 12,
    anomalies: 1,
  };
  
  // Mock data for wait time trend
  const waitTimeTrend = [15, 18, 22, 25, 28, 24, 20, 18];
  
  // Format date for display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-neutral-800">Admin Dashboard</h1>
          <p className="text-neutral-600">Monitor and manage your service center queues</p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-5 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center">
            <Calendar className="w-6 h-6 text-primary-dark mr-3" />
            <h2 className="text-xl font-medium">{formatDate(selectedDate)}</h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center">
            <Clock className="w-5 h-5 text-primary-dark mr-2" />
            <span className="text-lg">Current Time: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-medium text-neutral-800 mb-4">Queue Statistics</h2>
        <QueueStats stats={queueStats} />
      </div>
      
      <div className="mb-8">
        <AppointmentsTable />
      </div>
    </div>
  );
};

export default AdminDashboard;