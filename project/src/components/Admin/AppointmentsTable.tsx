import React , {useState , useRef} from 'react';
import { Check, X, Clock } from 'lucide-react';

interface Appointment {
  id: string;
  name: string;
  time: string;
}

const AppointmentsTable: React.FC = () => {
  const [getSlider, setGetSlider] = useState<Boolean>(false)
  // Mock appointments data
  const appointments: Appointment[] = [
    { id: '1', name: 'John Smith', time: '9:30 AM'},
    { id: '2', name: 'Alice Johnson', time: '10:00 AM' },
    { id: '3', name: 'Robert Davis',  time: '10:30 AM' },
    { id: '4', name: 'Emily Wilson',  time: '11:00 AM' },
    { id: '5', name: 'Michael Brown', time: '11:30 AM' },
  ];

  const nameref = useRef<HTMLInputElement>(null)
  const mailref = useRef<HTMLInputElement>(null)
  const timeref = useRef<HTMLInputElement>(null)

  const giveAppointment = async() => {
    const response = await fetch('http://localhost:3000/appointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

      }),
    });

    if (response.ok) {
      console.log('Appointment added successfully!');
    } else {
      console.error('Failed to add appointment.');
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-neutral-200 relative overflow-hidden">
      <div className="p-5 border-b border-neutral-200">
        <h3 className="font-medium text-lg text-neutral-800">Today's Appointments</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className={`min-w-full divide-y divide-neutral-200 ${getSlider ? 'blur-lg' : ''} tramsition-all duration-500 ease-in-out`}>
          <thead className="bg-neutral-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                Time
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
                  <div className="flex items-center text-sm text-neutral-600">
                    <Clock className="w-4 h-4 mr-1 text-neutral-400" />
                    {appointment.time}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-2">
                  </div>
                </td>
              </tr>
            ))}
            <tr className=''>
              <td className='m-3 btn-primary cursor-pointer' onClickCapture={() => {setGetSlider(true)}}>Add User</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={`absolute h-[100%] w-[35%] bg-slate-400 top-0 left-0 ${!getSlider ? 'ml-[-50%]' : 'ml-[30%]'} transition-all duration-500 ease-in-out shadow-lg border border-neutral-950`}>
        <div className='flex justify-end'>
          <button onClick={() => {setGetSlider(false)}} className='m-3 btn-primary'>Close</button>
        </div>
        <div className='flex flex-col items-center justify-center h-full'>
          <h1 className='text-2xl font-bold text-white'>Add Appointment</h1>
          <input ref={nameref} type="text" placeholder="Enter Name" className="mt-4 p-2 rounded-md border border-neutral-300" />
          <input ref={timeref} type="time" placeholder="Enter Time" className="mt-4 p-2 rounded-md border border-neutral-300" />
          <input ref={mailref} type="text" placeholder="Enter mail" className="mt-4 p-2 rounded-md border border-neutral-300" />
          <button onClick={giveAppointment} className='m-3 btn-primary'>Add Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsTable;