
import React from 'react';

// Define the interface for timer data
interface Timer {
  keyword: string;
  durationMinutes: number;
  durationSeconds: number;
  durationHours: number;
}

// Timer data array with precise calculations
const timerData: Timer[] = [
  { keyword: '5 second countdown timer', durationMinutes: 5 / 60, durationSeconds: 5, durationHours: 5 / 3600 },
  { keyword: '10 second countdown timer', durationMinutes: 10 / 60, durationSeconds: 10, durationHours: 10 / 3600 },
  { keyword: '15 second countdown', durationMinutes: 15 / 60, durationSeconds: 15, durationHours: 15 / 3600 },
  { keyword: '20 second countdown timer', durationMinutes: 20 / 60, durationSeconds: 20, durationHours: 20 / 3600 },
  { keyword: '30 second countdown timer', durationMinutes: 30 / 60, durationSeconds: 30, durationHours: 30 / 3600 },
  { keyword: '45 second countdown', durationMinutes: 45 / 60, durationSeconds: 45, durationHours: 45 / 3600 },
  { keyword: '60 second countdown timer', durationMinutes: 60 / 60, durationSeconds: 60, durationHours: 60 / 3600 },
  { keyword: '1 minute timer', durationMinutes: 1, durationSeconds: 60, durationHours: 1 / 60 },
  { keyword: 'one minute timer', durationMinutes: 1, durationSeconds: 60, durationHours: 1 / 60 },
  { keyword: '1 minute countdown timer', durationMinutes: 1, durationSeconds: 60, durationHours: 1 / 60 },
  { keyword: '1 minute timer with alarm', durationMinutes: 1, durationSeconds: 60, durationHours: 1 / 60 },
  { keyword: '1 minute visual timer', durationMinutes: 1, durationSeconds: 60, durationHours: 1 / 60 },
  { keyword: '2 minute timer', durationMinutes: 2, durationSeconds: 120, durationHours: 2 / 60 },
  { keyword: 'two minute timer', durationMinutes: 2, durationSeconds: 120, durationHours: 2 / 60 },
  { keyword: '2 minute countdown timer', durationMinutes: 2, durationSeconds: 120, durationHours: 2 / 60 },
  { keyword: '2 minute timer with music', durationMinutes: 2, durationSeconds: 120, durationHours: 2 / 60 },
  { keyword: '2 minute timer with alarm', durationMinutes: 2, durationSeconds: 120, durationHours: 2 / 60 },
  { keyword: '3 minute timer', durationMinutes: 3, durationSeconds: 180, durationHours: 3 / 60 },
  { keyword: 'three minute timer', durationMinutes: 3, durationSeconds: 180, durationHours: 3 / 60 },
  { keyword: '3 minute countdown timer', durationMinutes: 3, durationSeconds: 180, durationHours: 3 / 60 },
  { keyword: '3 minute timer with music', durationMinutes: 3, durationSeconds: 180, durationHours: 3 / 60 },
  { keyword: '3 minute visual timer', durationMinutes: 3, durationSeconds: 180, durationHours: 3 / 60 },
  { keyword: '4 minute timer', durationMinutes: 4, durationSeconds: 240, durationHours: 4 / 60 },
  { keyword: '4 minute countdown timer', durationMinutes: 4, durationSeconds: 240, durationHours: 4 / 60 },
  { keyword: '4 minute visual timer', durationMinutes: 4, durationSeconds: 240, durationHours: 4 / 60 },
  { keyword: '5 minute timer', durationMinutes: 5, durationSeconds: 300, durationHours: 5 / 60 },
  { keyword: 'five minute timer', durationMinutes: 5, durationSeconds: 300, durationHours: 5 / 60 },
  { keyword: '5 minute countdown timer', durationMinutes: 5, durationSeconds: 300, durationHours: 5 / 60 },
  { keyword: '5 minute timer with music', durationMinutes: 5, durationSeconds: 300, durationHours: 5 / 60 },
  { keyword: '5 minute visual timer', durationMinutes: 5, durationSeconds: 300, durationHours: 5 / 60 },
  { keyword: '6 minute timer', durationMinutes: 6, durationSeconds: 360, durationHours: 6 / 60 },
  { keyword: '6 minute countdown timer', durationMinutes: 6, durationSeconds: 360, durationHours: 6 / 60 },
  { keyword: '7 minute timer', durationMinutes: 7, durationSeconds: 420, durationHours: 7 / 60 },
  { keyword: '7 minute countdown timer', durationMinutes: 7, durationSeconds: 420, durationHours: 7 / 60 },
  { keyword: '7.5 minute timer', durationMinutes: 7.5, durationSeconds: 450, durationHours: 7.5 / 60 },
  { keyword: '8 minute timer', durationMinutes: 8, durationSeconds: 480, durationHours: 8 / 60 },
  { keyword: '8 minute countdown timer', durationMinutes: 8, durationSeconds: 480, durationHours: 8 / 60 },
  { keyword: '9 minute timer', durationMinutes: 9, durationSeconds: 540, durationHours: 9 / 60 },
  { keyword: '9 minute countdown timer', durationMinutes: 9, durationSeconds: 540, durationHours: 9 / 60 },
  { keyword: '10 minute timer', durationMinutes: 10, durationSeconds: 600, durationHours: 10 / 60 },
  { keyword: 'ten minute timer', durationMinutes: 10, durationSeconds: 600, durationHours: 10 / 60 },
  { keyword: '10 minute countdown timer', durationMinutes: 10, durationSeconds: 600, durationHours: 10 / 60 },
  { keyword: '10 minute timer with alarm', durationMinutes: 10, durationSeconds: 600, durationHours: 10 / 60 },
  { keyword: '10 minute visual timer', durationMinutes: 10, durationSeconds: 600, durationHours: 10 / 60 },
  { keyword: '11 minute timer', durationMinutes: 11, durationSeconds: 660, durationHours: 11 / 60 },
  { keyword: '12 minute timer', durationMinutes: 12, durationSeconds: 720, durationHours: 12 / 60 },
  { keyword: '12 minute countdown timer', durationMinutes: 12, durationSeconds: 720, durationHours: 12 / 60 },
  { keyword: '13 minute timer', durationMinutes: 13, durationSeconds: 780, durationHours: 13 / 60 },
  { keyword: '13 minute countdown timer', durationMinutes: 13, durationSeconds: 780, durationHours: 13 / 60 },
  { keyword: '14 minute timer', durationMinutes: 14, durationSeconds: 840, durationHours: 14 / 60 },
  { keyword: '14 minute countdown timer', durationMinutes: 14, durationSeconds: 840, durationHours: 14 / 60 },
  { keyword: '15 minute timer', durationMinutes: 15, durationSeconds: 900, durationHours: 15 / 60 },
  { keyword: 'fifteen minute timer', durationMinutes: 15, durationSeconds: 900, durationHours: 15 / 60 },
  { keyword: '15 minute countdown timer', durationMinutes: 15, durationSeconds: 900, durationHours: 15 / 60 },
  { keyword: '15 minute timer with alarm', durationMinutes: 15, durationSeconds: 900, durationHours: 15 / 60 },
  { keyword: '15 minute visual timer', durationMinutes: 15, durationSeconds: 900, durationHours: 15 / 60 },
  { keyword: '16 minute timer', durationMinutes: 16, durationSeconds: 960, durationHours: 16 / 60 },
  { keyword: '17 minute timer', durationMinutes: 17, durationSeconds: 1020, durationHours: 17 / 60 },
  { keyword: '18 minute timer', durationMinutes: 18, durationSeconds: 1080, durationHours: 18 / 60 },
  { keyword: '19 minute timer', durationMinutes: 19, durationSeconds: 1140, durationHours: 19 / 60 },
  { keyword: '20 minute timer', durationMinutes: 20, durationSeconds: 1200, durationHours: 20 / 60 },
  { keyword: 'twenty minute timer', durationMinutes: 20, durationSeconds: 1200, durationHours: 20 / 60 },
  { keyword: '20 minute countdown timer', durationMinutes: 20, durationSeconds: 1200, durationHours: 20 / 60 },
  { keyword: '20 minute timer with music', durationMinutes: 20, durationSeconds: 1200, durationHours: 20 / 60 },
  { keyword: '20 minute visual timer', durationMinutes: 20, durationSeconds: 1200, durationHours: 20 / 60 },
  { keyword: '21 minute timer', durationMinutes: 21, durationSeconds: 1260, durationHours: 21 / 60 },
  { keyword: '22 minute timer', durationMinutes: 22, durationSeconds: 1320, durationHours: 22 / 60 },
  { keyword: '24 minute timer', durationMinutes: 24, durationSeconds: 1440, durationHours: 24 / 60 },
  { keyword: '25 minute timer', durationMinutes: 25, durationSeconds: 1500, durationHours: 25 / 60 },
  { keyword: '25 minute countdown timer', durationMinutes: 25, durationSeconds: 1500, durationHours: 25 / 60 },
  { keyword: '30 minute timer', durationMinutes: 30, durationSeconds: 1800, durationHours: 30 / 60 },
  { keyword: 'thirty minute timer', durationMinutes: 30, durationSeconds: 1800, durationHours: 30 / 60 },
  { keyword: '30 minute countdown timer', durationMinutes: 30, durationSeconds: 1800, durationHours: 30 / 60 },
  { keyword: '30 minute timer with alarm', durationMinutes: 30, durationSeconds: 1800, durationHours: 30 / 60 },
  { keyword: '30 minute visual timer', durationMinutes: 30, durationSeconds: 1800, durationHours: 30 / 60 },
  { keyword: '35 minute timer', durationMinutes: 35, durationSeconds: 2100, durationHours: 35 / 60 },
  { keyword: '40 minute timer', durationMinutes: 40, durationSeconds: 2400, durationHours: 40 / 60 },
  { keyword: '40 minute countdown timer', durationMinutes: 40, durationSeconds: 2400, durationHours: 40 / 60 },
  { keyword: '45 minute timer', durationMinutes: 45, durationSeconds: 2700, durationHours: 45 / 60 },
  { keyword: '45 minute countdown timer', durationMinutes: 45, durationSeconds: 2700, durationHours: 45 / 60 },
  { keyword: '50 minute timer', durationMinutes: 50, durationSeconds: 3000, durationHours: 50 / 60 },
  { keyword: '55 minute timer', durationMinutes: 55, durationSeconds: 3300, durationHours: 55 / 60 },
  { keyword: '60 minute timer', durationMinutes: 60, durationSeconds: 3600, durationHours: 60 / 60 },
  { keyword: '60 minute countdown timer', durationMinutes: 60, durationSeconds: 3600, durationHours: 60 / 60 },
  { keyword: '1 hour timer', durationMinutes: 60, durationSeconds: 3600, durationHours: 60 / 60 },
  { keyword: '1 hour countdown timer', durationMinutes: 60, durationSeconds: 3600, durationHours: 60 / 60 },
  { keyword: '90 minute timer', durationMinutes: 90, durationSeconds: 5400, durationHours: 90 / 60 },
  { keyword: '90 minute countdown timer', durationMinutes: 90, durationSeconds: 5400, durationHours: 90 / 60 },
  { keyword: '1 hour 30 minute timer', durationMinutes: 90, durationSeconds: 5400, durationHours: 90 / 60 },
  { keyword: '2 hour timer', durationMinutes: 120, durationSeconds: 7200, durationHours: 120 / 60 },
  { keyword: '2 hour countdown timer', durationMinutes: 120, durationSeconds: 7200, durationHours: 120 / 60 },
  { keyword: '3 hour timer', durationMinutes: 180, durationSeconds: 10800, durationHours: 180 / 60 },
  { keyword: '3 hour countdown timer', durationMinutes: 180, durationSeconds: 10800, durationHours: 180 / 60 },
  { keyword: '4 hour timer', durationMinutes: 240, durationSeconds: 14400, durationHours: 240 / 60 },
  { keyword: '4 hour countdown timer', durationMinutes: 240, durationSeconds: 14400, durationHours: 240 / 60 },
  { keyword: '5 hour timer', durationMinutes: 300, durationSeconds: 18000, durationHours: 300 / 60 },
  { keyword: '6 hour timer', durationMinutes: 360, durationSeconds: 21600, durationHours: 360 / 60 },
  { keyword: '8 hour timer', durationMinutes: 480, durationSeconds: 28800, durationHours: 480 / 60 },
];

// Functional component to render the timer table
const TimerTable: React.FC = () => {
  return (
    <div className="bg-black text-white p-5 font-sans">
      <h2 className="text-4xl my-5 flex justify-center items-center font-bold text-gray-200">Timer Durations Table</h2>
      <table className="bg-gray-800 w-full max-w-3xl mx-auto border-collapse">
        <thead>
          <tr className="bg-gray-700">
            <th className="border border-gray-600 p-2 text-left text-white">Keyword</th>
            <th className="border border-gray-600 p-2 text-right text-white">Duration (Minutes)</th>
            <th className="border border-gray-600 p-2 text-right text-white">Duration (Seconds)</th>
            <th className="border border-gray-600 p-2 text-right text-white">Duration (Hours)</th>
          </tr>
        </thead>
        <tbody>
          {timerData.map((timer) => (
            <tr key={timer.keyword} className="bg-gray-800">
              <td className="border border-gray-600 p-2 text-left text-white">{timer.keyword}</td>
              <td className="border border-gray-600 p-2 text-right text-white">{timer.durationMinutes.toFixed(3)}</td>
              <td className="border border-gray-600 p-2 text-right text-white">{timer.durationSeconds}</td>
              <td className="border border-gray-600 p-2 text-right text-white">{timer.durationHours.toFixed(5)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimerTable;
