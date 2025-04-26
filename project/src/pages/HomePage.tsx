import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import ServiceCenterCard from '../components/Home/ServiceCenterCard';
import QueueMap from '../components/Home/QueueMap';
import { ServiceCenter } from '../types';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Mock data for service centers
  const serviceCenters: ServiceCenter[] = [
    {
      id: '1',
      name: 'City General Hospital',
      type: 'Healthcare',
      location: 'Downtown',
      currentWaitTime: 15,
      peopleInQueue: 12,
      isOpen: true,
    },
    {
      id: '2',
      name: 'First National Bank',
      type: 'Banking',
      location: 'Financial District',
      currentWaitTime: 25,
      peopleInQueue: 18,
      isOpen: true,
    },
    {
      id: '3',
      name: 'Government Services Office',
      type: 'Government',
      location: 'Civic Center',
      currentWaitTime: 45,
      peopleInQueue: 32,
      isOpen: true,
    },
    {
      id: '4',
      name: 'Community Health Clinic',
      type: 'Healthcare',
      location: 'Westside',
      currentWaitTime: 10,
      peopleInQueue: 5,
      isOpen: true,
    },
    {
      id: '5',
      name: 'Regional Transit Office',
      type: 'Government',
      location: 'Transport Hub',
      currentWaitTime: 30,
      peopleInQueue: 22,
      isOpen: false,
    },
    {
      id: '6',
      name: 'Credit Union West',
      type: 'Banking',
      location: 'Westside Mall',
      currentWaitTime: 5,
      peopleInQueue: 3,
      isOpen: true,
    },
  ];

  const types = Array.from(new Set(serviceCenters.map(center => center.type)));

  const filteredCenters = serviceCenters.filter(center => {
    const matchesSearch = center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      center.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType ? center.type === selectedType : true;
    return matchesSearch && matchesType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* <div className="bg-primary-dark text-white rounded-2xl p-8 mb-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold mb-4">
            Skip the wait, save your time
          </h1>
          <p className="text-primary/80 mb-6">
            Waitless uses real-time data and AI to help you find the shortest queues and book appointments at service centers near you.
          </p>

          <div className="relative">
            <input
              type="text"
              placeholder="Search for a service center or location"
              className="w-full py-3 px-5 pl-12 rounded-lg text-neutral-800 focus:outline-none focus:ring-2 focus:ring-white/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-neutral-500" />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {types.map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(selectedType === type ? null : type)}
                className={`px-3 py-1 rounded-full text-sm ${selectedType === type
                  ? 'bg-white text-primary-dark'
                  : 'bg-primary/20 text-white hover:bg-primary/30'
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div> */}

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium text-neutral-800">
              Service Centers Near You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredCenters.map(center => (
              <ServiceCenterCard key={center.id} serviceCenter={center} />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="sticky top-24">
            <h2 className="text-xl font-medium text-neutral-800 mb-4">
              Queue Map
            </h2>
            <QueueMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
