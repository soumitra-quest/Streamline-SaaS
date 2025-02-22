import { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { format } from 'date-fns';

const Dashboard = () => {
  const [timeRange] = useState('weekly');

  const revenueData = {
    weekly: {
      dates: Array.from({ length: 7 }, (_, i) => 
        format(new Date(Date.now() - i * 24 * 60 * 60 * 1000), 'MMM dd')
      ).reverse(),
      values: [4200, 4500, 4800, 4300, 4900, 5200, 5000]
    }
  };

  const option = {
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: revenueData[timeRange].dates
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: revenueData[timeRange].values,
      type: 'line',
      smooth: true,
      lineStyle: {
        color: '#2563eb'
      },
      areaStyle: {
        color: '#93c5fd',
        opacity: 0.3
      }
    }]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <StatCard title="Revenue" value="$24,500" change="+12%" />
        <StatCard title="Users" value="1,234" change="+8%" />
        <StatCard title="Projects" value="45" change="+15%" />
        <StatCard title="Tasks" value="189" change="+5%" />
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Revenue Overview</h2>
        <ReactECharts option={option} style={{ height: '400px' }} />
      </div>
    </div>
  );
};

const StatCard = ({ title, value, change }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-gray-500 text-sm">{title}</h3>
    <div className="flex items-baseline mt-2">
      <p className="text-2xl font-semibold">{value}</p>
      <span className="ml-2 text-green-500 text-sm">{change}</span>
    </div>
  </div>
);

export default Dashboard;