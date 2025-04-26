import React from 'react';
import { TrendingUp, TrendingDown, Users, Clock, AlertTriangle } from 'lucide-react';

interface QueueStatsProps {
  stats: {
    currentWaitTime: number;
    averageWaitTime: number;
    peopleInQueue: number;
    servingRate: number;
    anomalies: number;
  };
}

const QueueStats: React.FC<QueueStatsProps> = ({ stats }) => {
  const { currentWaitTime, averageWaitTime, peopleInQueue, servingRate, anomalies } = stats;
  
  const isWaitTimeIncreasing = currentWaitTime > averageWaitTime;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="card p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-neutral-600">Current Wait Time</p>
            <p className="text-2xl font-medium mt-1">{currentWaitTime} min</p>
            
            <div className="mt-2 flex items-center">
              {isWaitTimeIncreasing ? (
                <>
                  <TrendingUp className="w-4 h-4 text-error mr-1" />
                  <span className="text-xs text-error">
                    {(currentWaitTime - averageWaitTime).toFixed(1)} min above average
                  </span>
                </>
              ) : (
                <>
                  <TrendingDown className="w-4 h-4 text-success mr-1" />
                  <span className="text-xs text-success">
                    {(averageWaitTime - currentWaitTime).toFixed(1)} min below average
                  </span>
                </>
              )}
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Clock className="w-5 h-5 text-primary-dark" />
          </div>
        </div>
      </div>
      
      <div className="card p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-neutral-600">People in Queue</p>
            <p className="text-2xl font-medium mt-1">{peopleInQueue}</p>
            
            <div className="mt-2 flex items-center">
              <span className="text-xs text-neutral-500">
                Serving ~{servingRate} people/hour
              </span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
            <Users className="w-5 h-5 text-secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueueStats;