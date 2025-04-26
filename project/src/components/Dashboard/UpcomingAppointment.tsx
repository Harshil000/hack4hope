import React from 'react';
import { Calendar, Clock, MapPin, X, Edit2 } from 'lucide-react';
import { Appointment } from '../../types';

interface UpcomingAppointmentProps {
  appointment: Appointment;
}

const UpcomingAppointment: React.FC<UpcomingAppointmentProps> = ({ appointment }) => {
  const { serviceName, location, date, time, qrCode } = appointment;
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  };
  
  return (
    <div className="card">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-lg text-neutral-800">{serviceName}</h3>
          <div className="flex space-x-2">
            <button className="p-1 rounded-full hover:bg-error/10 hover:text-error">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-neutral-600 mt-1">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{location}</span>
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2 text-primary-dark" />
            <div>
              <div className="text-xs text-neutral-500">Time</div>
              <div className="font-medium">{time}</div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-2">
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointment;