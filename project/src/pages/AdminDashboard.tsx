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
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-lg text-neutral-800 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-primary-dark" />
                Wait Time Trend
              </h3>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary-dark">Today</button>
                <button className="px-3 py-1 text-xs rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200">Week</button>
                <button className="px-3 py-1 text-xs rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200">Month</button>
              </div>
            </div>
            
            <div className="h-64 relative">
              {/* Simple chart visualization */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between h-48">
                {waitTimeTrend.map((value, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className={`w-12 rounded-t-sm ${
                        value > 25 ? 'bg-error' : value > 20 ? 'bg-warning' : 'bg-success'
                      }`}
                      style={{ height: `${(value / 30) * 100}%` }}
                    ></div>
                    <div className="text-xs text-neutral-600 mt-1">{index + 9}:00</div>
                  </div>
                ))}
              </div>
              
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-neutral-500">
                <div>30m</div>
                <div>20m</div>
                <div>10m</div>
                <div>0m</div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-5">
            <h3 className="font-medium text-lg text-neutral-800 mb-4">Anomaly Alert</h3>
            
            <div className="p-4 bg-error/10 border border-error/20 rounded-lg mb-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-error/20 flex items-center justify-center mr-3 flex-shrink-0">
                  <Bell className="w-5 h-5 text-error" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-800">Unusual Queue Growth</h4>
                  <p className="text-sm text-neutral-600 mt-1">
                    The queue size has increased by 40% in the last hour, which is outside normal patterns.
                  </p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-xs text-neutral-500">30 minutes ago</span>
                    <button className="text-sm text-primary-dark hover:text-accent flex items-center">
                      Investigate
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="font-medium text-lg text-neutral-800 mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left p-3 flex items-center bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors duration-200">
                <Users className="w-5 h-5 mr-3 text-primary-dark" />
                <span>Add service agent</span>
              </button>
              <button className="w-full text-left p-3 flex items-center bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors duration-200">
                <Bell className="w-5 h-5 mr-3 text-primary-dark" />
                <span>Send queue update</span>
              </button>
              <button className="w-full text-left p-3 flex items-center bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors duration-200">
                <Clock className="w-5 h-5 mr-3 text-primary-dark" />
                <span>Adjust wait time estimate</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <AppointmentsTable />
      </div>
    </div>
  );
};

export default AdminDashboard;