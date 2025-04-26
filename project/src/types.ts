export interface ServiceCenter {
  id: string;
  name: string;
  type: string;
  location: string;
  currentWaitTime: number;
  peopleInQueue: number;
  isOpen: boolean;
}

export interface Appointment {
  id: string;
  serviceName: string;
  serviceType: string;
  purpose: string;
  location: string;
  date: string;
  time: string;
  qrCode: string;
}