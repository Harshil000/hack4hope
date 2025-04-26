import React, { useState } from 'react';
import { ArrowLeft, Building2, Clock, Calendar, Users, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import TimeSlotPicker from '../components/Booking/TimeSlotPicker';

const BookingPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const centerId = queryParams.get('center');
  
  // Selected service center (could fetch this based on centerId)
  const selectedCenter = {
    id: centerId || '1',
    name: centerId === '2' ? 'First National Bank' : 'City General Hospital',
    type: centerId === '2' ? 'Banking' : 'Healthcare',
    location: centerId === '2' ? 'Financial District' : 'Downtown',
    currentWaitTime: centerId === '2' ? 25 : 15,
    peopleInQueue: centerId === '2' ? 18 : 12,
    services: [
      { id: '1', name: centerId === '2' ? 'Account Opening' : 'General Consultation', duration: 20 },
      { id: '2', name: centerId === '2' ? 'Loan Application' : 'Vaccination', duration: 15 },
      { id: '3', name: centerId === '2' ? 'Investment Advice' : 'Medical Certificate', duration: 30 },
    ],
  };
  
  const [selectedService, setSelectedService] = useState(selectedCenter.services[0].id);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link to="/" className="flex items-center text-neutral-600 hover:text-primary-dark">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Service Centers
        </Link>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                <Building2 className="w-5 h-5 text-primary-dark" />
              </div>
              <div>
                <h1 className="text-2xl font-medium text-neutral-800">{selectedCenter.name}</h1>
                <p className="text-neutral-600">{selectedCenter.type}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-neutral-600 mr-2" />
              <div>
                <div className="text-xs text-neutral-500">Current Wait</div>
                <div className="font-medium">{selectedCenter.currentWaitTime} min</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <Users className="w-5 h-5 text-neutral-600 mr-2" />
              <div>
                <div className="text-xs text-neutral-500">Queue Size</div>
                <div className="font-medium">{selectedCenter.peopleInQueue} people</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-neutral-600 mr-2" />
              <div>
                <div className="text-xs text-neutral-500">Location</div>
                <div className="font-medium">{selectedCenter.location}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
            <div className="p-5 border-b border-neutral-200">
              <h3 className="font-medium text-lg text-neutral-800 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-primary-dark" />
                Select Service
              </h3>
            </div>
            
            <div className="p-5">
              <div className="space-y-3">
                {selectedCenter.services.map(service => (
                  <label
                    key={service.id}
                    className={`block p-3 border rounded-lg cursor-pointer transition-colors duration-200 ${
                      selectedService === service.id
                        ? 'border-primary-dark bg-primary/5'
                        : 'border-neutral-200 hover:border-primary hover:bg-neutral-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="service"
                        value={service.id}
                        checked={selectedService === service.id}
                        onChange={() => setSelectedService(service.id)}
                        className="mr-3 text-primary-dark focus:ring-primary-dark"
                      />
                      <div>
                        <div className="font-medium">{service.name}</div>
                        <div className="text-sm text-neutral-600">Duration: ~{service.duration} min</div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
              
              <div className="mt-6">
                <h4 className="text-sm font-medium mb-2">Service Description</h4>
                <p className="text-sm text-neutral-600">
                  {selectedService === '1' ? (
                    centerId === '2' ? 
                    'Open a new bank account with personalized assistance from our customer service representatives.' :
                    'General medical consultation for non-emergency health concerns with our healthcare professionals.'
                  ) : selectedService === '2' ? (
                    centerId === '2' ?
                    'Apply for personal or business loans with guidance on finding the right options for your needs.' :
                    'Get vaccinated against various diseases including seasonal flu, COVID-19, and others.'
                  ) : (
                    centerId === '2' ?
                    'Receive professional advice on investment opportunities and financial planning from our experts.' :
                    'Get a medical certificate for school, work, or other administrative purposes.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <TimeSlotPicker />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;