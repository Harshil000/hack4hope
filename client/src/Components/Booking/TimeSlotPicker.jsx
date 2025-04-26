import React, { useState } from 'react';
import { Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

// TimeSlot interface translated into plain JavaScript object structure (for reference only)
 // { id: string, time: string, available: boolean }

const TimeSlotPicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  
  // Generate dates for the next week
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });
  
  // Mock time slots
  const timeSlots = [
    { id: '1', time: '9:00 AM', available: true },
    { id: '2', time: '9:30 AM', available: true },
    { id: '3', time: '10:00 AM', available: false },
    { id: '4', time: '10:30 AM', available: true },
    { id: '5', time: '11:00 AM', available: true },
    { id: '6', time: '11:30 AM', available: false },
    { id: '7', time: '12:00 PM', available: true },
    { id: '8', time: '12:30 PM', available: false },
    { id: '9', time: '1:00 PM', available: true },
    { id: '10', time: '1:30 PM', available: true },
    { id: '11', time: '2:00 PM', available: true },
    { id: '12', time: '2:30 PM', available: false },
  ];
  
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };
  
  const isDateSelected = (date) => {
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
      <div className="p-5 border-b border-neutral-200">
        <h3 className="font-medium text-lg text-neutral-800 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-primary-dark" />
          Select Date & Time
        </h3>
      </div>
      
      {/* Date selection */}
      <div className="p-4 border-b border-neutral-200">
        <div className="flex justify-between items-center mb-4">
          <button className="p-1 rounded-full hover:bg-neutral-100">
            <ChevronLeft className="w-5 h-5 text-neutral-600" />
          </button>
          <h4 className="text-sm font-medium">
            {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h4>
          <button className="p-1 rounded-full hover:bg-neutral-100">
            <ChevronRight className="w-5 h-5 text-neutral-600" />
          </button>
        </div>
        
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {dates.map((date) => (
            <button
              key={date.toISOString()}
              onClick={() => setSelectedDate(date)}
              className={`flex-shrink-0 w-20 py-3 rounded-lg flex flex-col items-center ${
                isDateSelected(date)
                  ? 'bg-primary-dark text-white'
                  : 'bg-white border border-neutral-200 hover:border-primary-dark text-neutral-700'
              }`}
            >
              <span className="text-xs uppercase">
                {date.toLocaleDateString('en-US', { weekday: 'short' })}
              </span>
              <span className="text-lg font-medium mt-1">
                {date.getDate()}
              </span>
              <span className="text-xs">
                {date.toLocaleDateString('en-US', { month: 'short' })}
              </span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Time slot selection */}
      <div className="p-4">
        <h4 className="text-sm font-medium mb-3 flex items-center">
          <Clock className="w-4 h-4 mr-1 text-primary-dark" />
          Available Slots for {formatDate(selectedDate)}
        </h4>
        
        <div className="grid grid-cols-3 gap-2">
          {timeSlots.map((slot) => (
            <button
              key={slot.id}
              disabled={!slot.available}
              onClick={() => setSelectedTimeSlot(slot.id)}
              className={`py-2 px-1 rounded-lg text-sm font-medium transition-colors duration-200 ${
                selectedTimeSlot === slot.id
                  ? 'bg-primary-dark text-white'
                  : slot.available
                  ? 'bg-white border border-neutral-200 hover:border-primary-dark text-neutral-700'
                  : 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
              }`}
            >
              {slot.time}
            </button>
          ))}
        </div>
        
        <div className="mt-6">
          <button className="btn-primary w-full">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeSlotPicker;
