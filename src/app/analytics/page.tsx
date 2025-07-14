'use client';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const departments = ['Engineering', 'Marketing', 'HR', 'Design'];
const avgRatings = [4.2, 3.8, 4.0, 3.5];
const bookmarkTrends = [12, 19, 3, 5, 2, 3];



export default function AnalyticsPage() {

  const deptChartData = {
  labels: departments,
  datasets: [
    {
      label: 'Avg Ratings',
      data: avgRatings,
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
    },
  ],
  };

  const trendChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Bookmark Trends',
        data: bookmarkTrends,
        fill: false,
        borderColor: '#36A2EB',
        tension: 0.3,
      },
    ],
  };

  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">📊 Analytics Dashboard</h1>

      <div className="mb-10">
        <h2 className="text-xl mb-2">Department-wise Average Ratings</h2>
        <Bar data={deptChartData} />
      </div>

      <div>
        <h2 className="text-xl mb-2">Bookmark Trends</h2>
        <Line data={trendChartData} />
      </div>
    </div>
  );
}