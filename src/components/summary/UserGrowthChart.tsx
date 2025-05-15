import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { TUserYear } from '../../types/year.type';



const barDataByYear: Record<string, TUserYear[]> = {
  "2023": [
    { month: 'Jan', users: 300 },
    { month: 'Feb', users: 250 },
    { month: 'Mar', users: 400 },
    { month: 'Apr', users: 350 },
    { month: 'May', users: 500 },
    { month: 'Jun', users: 480 },
    { month: 'Jul', users: 520 },
    { month: 'Aug', users: 600 },
    { month: 'Sep', users: 450 },
    { month: 'Oct', users: 700 },
    { month: 'Nov', users: 620 },
    { month: 'Dec', users: 750 },
  ],
  "2024": [
    { month: 'Jan', users: 400 },
    { month: 'Feb', users: 380 },
    { month: 'Mar', users: 420 },
    { month: 'Apr', users: 460 },
    { month: 'May', users: 500 },
    { month: 'Jun', users: 600 },
    { month: 'Jul', users: 650 },
    { month: 'Aug', users: 680 },
    { month: 'Sep', users: 700 },
    { month: 'Oct', users: 740 },
    { month: 'Nov', users: 800 },
    { month: 'Dec', users: 850 },
  ],
  "2025": [
    { month: 'Jan', users: 450 },
    { month: 'Feb', users: 480 },
    { month: 'Mar', users: 500 },
    { month: 'Apr', users: 900 },
    { month: 'May', users: 650 },
    { month: 'Jun', users: 700 },
    { month: 'Jul', users: 350 },
    { month: 'Aug', users: 800 },
    { month: 'Sep', users: 420 },
    { month: 'Oct', users: 670 },
    { month: 'Nov', users: 900 },
    { month: 'Dec', users: 950 },
  ],
};

const UserGrowthChart = () => {
  const [selectedYear, setSelectedYear] = useState('2025');
  const barData = barDataByYear[selectedYear];

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">User Growth</h2>
        <select
          className="border rounded px-2 py-1"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {Object.keys(barDataByYear).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={barData}
            margin={{ top: 5, right: 30, left: 20, bottom: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis
              domain={[0, 1000]}
              ticks={[0, 200, 400, 600, 800, 1000]}
              tickFormatter={(value) =>
                new Intl.NumberFormat('en').format(value)
              }
            />
            <Tooltip
              formatter={(value) => [
                new Intl.NumberFormat('en').format(value as number),
                'users',
              ]}
              cursor={{ fill: '#f0f0f0' }}
            />
            <Bar dataKey="users" fill="#0A0A0A" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserGrowthChart;
