import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, CheckCircle, BarChart3, ChevronRight, BellRing } from 'lucide-react';
import UpcomingAppointment from '../components/Dashboard/UpcomingAppointment';
import { Appointment } from '../types';

const UserDashboard = () => {
  // Mock data for upcoming appointments
  const upcomingAppointments = [
    {
      id: '1',
      serviceName: 'City General Hospital',
      serviceType: 'Healthcare',
      purpose: 'General Consultation',
      location: 'Downtown',
      date: '2025-06-15',
      time: '10:30 AM',
      qrCode: 'qr-1234',
    },
    {
      id: '2',
      serviceName: 'First National Bank',
      serviceType: 'Banking',
      purpose: 'Loan Application',
      location: 'Financial District',
      date: '2025-06-18',
      time: '2:00 PM',
      qrCode: 'qr-5678',
    },
  ];
  
  // Mock data for past visits
  const pastVisits = [
    {
      id: '1',
      serviceName: 'Government Services Office',
      purpose: 'Passport Renewal',
      date: '2025-05-28',
      waitTime: 15,
    },
    {
      id: '2',
      serviceName: 'City General Hospital',
      purpose: 'Vaccination',
      date: '2025-05-10',
      waitTime: 10,
    },
    {
      id: '3',
      serviceName: 'Credit Union West',
      purpose: 'Account Inquiry',
      date: '2025-05-05',
      waitTime: 5,
    },
  ];
  
  // Mock data for suggestions
  const suggestions = [
    {
      id: '1',
      title: 'Avoid the Monday rush',
      description: 'City General Hospital has 40% shorter wait times on Wednesdays.',
      icon: <Clock className="w-5 h-5" />,
    },
    {
      id: '2',
      title: 'Time for a check-up?',
      description: "It's been 6 months since your last medical check-up.",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      id: '3',
      title: 'Banking made easier',
      description: 'Try the new mobile banking service at First National Bank.',
      icon: <CheckCircle className="w-5 h-5" />,
    },
  ];
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-neutral-800">My Dashboard</h1>
          <p className="text-neutral-600">Manage your appointments and view wait time insights</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="btn-primary">Book New Appointment</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium text-neutral-800">Upcoming Appointments</h2>
              <Link to="/booking" className="text-sm text-primary-dark hover:text-accent flex items-center">
                Book New
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            
            {upcomingAppointments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {upcomingAppointments.map(appointment => (
                  <UpcomingAppointment key={appointment.id} appointment={appointment} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-8 text-center">
                <Calendar className="w-12 h-12 mx-auto text-neutral-400 mb-2" />
                <h3 className="text-lg font-medium text-neutral-800 mb-1">No Upcoming Appointments</h3>
                <p className="text-neutral-600 mb-4">You don't have any scheduled appointments yet.</p>
                <Link to="/booking" className="btn-primary">Book an Appointment</Link>
              </div>
            )}
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium text-neutral-800">Past Visits</h2>
              <button className="text-sm text-primary-dark hover:text-accent flex items-center">
                View All
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
              <table className="min-w-full divide-y divide-neutral-200">
                <thead className="bg-neutral-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Purpose
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Wait Time
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  {pastVisits.map((visit) => (
                    <tr key={visit.id} className="hover:bg-neutral-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-neutral-800">{visit.serviceName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-neutral-600">{visit.purpose}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-neutral-600">{formatDate(visit.date)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-neutral-600">{visit.waitTime} min</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-medium text-neutral-800">Insights & Suggestions</h2>
                <BarChart3 className="w-5 h-5 text-neutral-600" />
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
                {suggestions.map((suggestion, index) => (
                  <div 
                    key={suggestion.id} 
                    className={`p-4 ${index !== suggestions.length - 1 ? 'border-b border-neutral-200' : ''}`}
                  >
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          {suggestion.icon}
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-neutral-800">{suggestion.title}</h3>
                        <p className="text-sm text-neutral-600 mt-1">{suggestion.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-medium text-neutral-800">Notifications</h2>
                <BellRing className="w-5 h-5 text-neutral-600" />
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-5">
                <div className="space-y-4">
                  <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                    <p className="text-sm font-medium text-neutral-800">
                      Upcoming appointment reminder
                    </p>
                    <p className="text-sm text-neutral-600 mt-1">
                      Your appointment at City General Hospital is tomorrow at 10:30 AM.
                    </p>
                    <div className="mt-2 text-xs text-neutral-500">2 hours ago</div>
                  </div>
                  
                  <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg">
                    <p className="text-sm font-medium text-neutral-800">
                      Wait time alert
                    </p>
                    <p className="text-sm text-neutral-600 mt-1">
                      First National Bank currently has shorter than usual wait times.
                    </p>
                    <div className="mt-2 text-xs text-neutral-500">Yesterday</div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <button className="text-sm text-primary-dark hover:text-accent">
                      View All Notifications
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
