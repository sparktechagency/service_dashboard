import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { TBookingYear } from '../../types/year.type';



const bookingsDataByYear : Record<string, TBookingYear[]> = {
    2023: [
      { month: 'Jan', bookings: 400 },
      { month: 'Feb', bookings: 300 },
      { month: 'Mar', bookings: 200 },
      { month: 'Apr', bookings: 450 },
      { month: 'May', bookings: 620 },
      { month: 'Jun', bookings: 510 },
      { month: 'Jul', bookings: 710 },
      { month: 'Aug', bookings: 650 },
      { month: 'Sep', bookings: 430 },
      { month: 'Oct', bookings: 550 },
      { month: 'Nov', bookings: 480 },
      { month: 'Dec', bookings: 600 },
    ],
    2024: [
      { month: 'Jan', bookings: 500 },
      { month: 'Feb', bookings: 350 },
      { month: 'Mar', bookings: 280 },
      { month: 'Apr', bookings: 600 },
      { month: 'May', bookings: 700 },
      { month: 'Jun', bookings: 800 },
      { month: 'Jul', bookings: 750 },
      { month: 'Aug', bookings: 670 },
      { month: 'Sep', bookings: 540 },
      { month: 'Oct', bookings: 610 },
      { month: 'Nov', bookings: 450 },
      { month: 'Dec', bookings: 720 },
    ],
    2025: [
      { month: 'Jan', bookings: 500 },
      { month: 'Feb', bookings: 350 },
      { month: 'Mar', bookings: 280 },
      { month: 'Apr', bookings: 720 },
      { month: 'May', bookings: 640 },
      { month: 'Jun', bookings: 900 },
      { month: 'Jul', bookings: 850 },
      { month: 'Aug', bookings: 790 },
      { month: 'Sep', bookings: 680 },
      { month: 'Oct', bookings: 590 },
      { month: 'Nov', bookings: 610 },
      { month: 'Dec', bookings: 880 },
    ],
  };
  

const BookingOverviewChart = () => {
  const [selectedYear, setSelectedYear] = useState('2025');

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
  };
  const data = bookingsDataByYear[selectedYear];

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Booking Overview</h2>
        <select
          className="border rounded px-2 py-1"
          value={selectedYear}
          onChange={handleYearChange}
        >
          {Object.keys(bookingsDataByYear).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#007bff" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#007bff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="bookings"
              stroke="#007bff"
              fillOpacity={1}
              fill="url(#colorBookings)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BookingOverviewChart;
