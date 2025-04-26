import React from 'react';
import { Check, X, Clock } from 'lucide-react';

interface Appointment {
  id: string;
  name: string;
  service: string;
  time: string;
  status: 'checked-in' | 'waiting' | 'completed' | 'no-show';
}

const AppointmentsTable: React.FC = () => {
  // Mock appointments data
  const appointments: Appointment[] = [
    { id: '1', name: 'John Smith', service: 'Account Opening', time: '9:30 AM', status: 'checked-in' },
    { id: '2', name: 'Alice Johnson', service: 'Loan Application', time: '10:00 AM', status: 'waiting' },
    { id: '3', name: 'Robert Davis', service: 'Deposit', time: '10:30 AM', status: 'completed' },
    { id: '4', name: 'Emily Wilson', service: 'Account Inquiry', time: '11:00 AM', status: 'no-show' },
    { id: '5', name: 'Michael Brown', service: 'Credit Card', time: '11:30 AM', status: 'waiting' },
  ];
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'checked-in':
        return <span className="badge bg-primary/10 text-primary-dark">Checked In</span>;
      case 'waiting':
        return <span className="badge bg-warning/10 text-warning">Waiting</span>;
      case 'completed':
        return <span className="badge bg-success/10 text-success">Completed</span>;
      case 'no-show':
        return <span className="badge bg-error/10 text-error">No Show</span>;
      default:
        return null;
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
      <div className="p-5 border-b border-neutral-200">
        <h3 className="font-medium text-lg text-neutral-800">Today's Appointments</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-neutral-200">
          <thead className="bg-neutral-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                Service
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                Time
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-neutral-200">
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="hover:bg-neutral-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-neutral-800">{appointment.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-neutral-600">{appointment.service}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-neutral-600">
                    <Clock className="w-4 h-4 mr-1 text-neutral-400" />
                    {appointment.time}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(appointment.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-2">
                    <button
                      className="p-1 rounded-full bg-success/10 text-success hover:bg-success/20"
                      title="Mark as complete"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                    <button
                      className="p-1 rounded-full bg-error/10 text-error hover:bg-error/20"
                      title="Mark as no-show"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-4 border-t border-neutral-200 flex justify-between items-center">
        <div className="text-sm text-neutral-600">
          Showing <span className="font-medium">5</span> of <span className="font-medium">24</span> appointments
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-neutral-300 rounded text-sm text-neutral-700 hover:bg-neutral-50">
            Previous
          </button>
          <button className="px-3 py-1 bg-primary-dark text-white rounded text-sm hover:bg-primary-dark/90">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsTable;