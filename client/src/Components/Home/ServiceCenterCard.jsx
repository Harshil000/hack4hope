import React from 'react';
import { ArrowRight, Users, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
// import { ServiceCenter } from '../../types';

const ServiceCenterCard = ({ serviceCenter }) => {
  const { id, name, type, location, currentWaitTime, peopleInQueue, isOpen } = serviceCenter;

  // Determine wait time styling based on length
  const getWaitTimeStyle = () => {
    if (currentWaitTime < 15) return 'text-success';
    if (currentWaitTime < 30) return 'text-warning';
    return 'text-error';
  };

  return (
    <div className="card group">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-lg text-neutral-800">{name}</h3>
            <div className="flex items-center text-sm text-neutral-600 mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{location}</span>
            </div>
          </div>
          <span className={`badge ${isOpen ? 'badge-success' : 'badge-error'}`}>
            {isOpen ? 'Open' : 'Closed'}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="flex flex-col">
            <span className="text-xs text-neutral-500 mb-1">Wait Time</span>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1 text-neutral-600" />
              <span className={`font-medium ${getWaitTimeStyle()}`}>
                {currentWaitTime} mins
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-neutral-500 mb-1">Queue Size</span>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1 text-neutral-600" />
              <span className="font-medium">{peopleInQueue} people</span>
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-between items-center">
          <span className="text-xs px-2 py-1 bg-neutral-100 rounded-full text-neutral-600">
            {type}
          </span>
          <Link
            to={`/booking?center=${id}`}
            className="flex items-center text-sm font-medium text-primary-dark group-hover:text-accent transition-colors duration-200"
          >
            Book Slot
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCenterCard;
