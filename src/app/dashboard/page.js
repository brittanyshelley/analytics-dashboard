// app/dashboard/page.js
import { Suspense } from 'react';
import VMwareData from './VMwareData'; // Correct: Default import
import SolarWindsData from './SolarWindsData'; // Correct: Default import
import UptrendsData from './UptrendsData'; // Correct: Default import

export default function DashboardPage() {
  return (
    <div className="dashboard">
      <h1 className="text-2xl font-bold mb-4">Custom Dashboard</h1>
      <Suspense fallback={<p>Loading VMware data...</p>}>
        <VMwareData />
      </Suspense>
      <Suspense fallback={<p>Loading SolarWinds data...</p>}>
        <SolarWindsData />
      </Suspense>
      <Suspense fallback={<p>Loading Uptrends data...</p>}>
        <UptrendsData />
      </Suspense>
    </div>
  );
}
