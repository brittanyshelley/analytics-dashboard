// app/page.js
import Link from 'next/link';
import MonitorGroupStatus from '../components/MonitorGroupStatus';


export default function HomePage() {
  // Read monitor group IDs from environment variables
  const monitorGroupIds = process.env.NEXT_PUBLIC_MONITOR_GROUP_IDS
    ? process.env.NEXT_PUBLIC_MONITOR_GROUP_IDS.split(',')
    : [];

  return (
    <div className="home">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Custom Dashboard</h1>
      <p className="text-lg mb-4">
        This dashboard integrates VMware, SolarWinds, and Uptrends data for centralized monitoring.
      </p>
      <MonitorGroupStatus groupIds={monitorGroupIds} />
      <Link href="/dashboard" className="text-blue-600 underline">
        Go to Dashboard
      </Link>
    </div>
  );
}
