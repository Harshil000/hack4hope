import React from 'react';
import { MapPin } from 'lucide-react';

const QueueMap: React.FC = () => {
  // This would ideally use a real map library like Mapbox or Google Maps
  return (
    <div className="bg-neutral-100 rounded-xl overflow-hidden relative h-[400px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-neutral-600">
          <MapPin className="h-12 w-12 mx-auto mb-2 text-primary-dark" />
          <p className="font-medium">Interactive Map View</p>
          <p className="text-sm mt-1">Showing service centers near you</p>
        </div>
      </div>
      
      {/* Map pins would be positioned absolutely */}
      <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative group">
          <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center shadow-md cursor-pointer">
            <span className="text-white text-xs font-medium">H</span>
          </div>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-32 bg-white p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <p className="text-xs font-medium">City Hospital</p>
            <p className="text-xs text-neutral-600">~15 min wait</p>
          </div>
        </div>
      </div>
      
      <div className="absolute top-2/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative group">
          <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center shadow-md cursor-pointer">
            <span className="text-white text-xs font-medium">B</span>
          </div>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-32 bg-white p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <p className="text-xs font-medium">First National Bank</p>
            <p className="text-xs text-neutral-600">~25 min wait</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueueMap;