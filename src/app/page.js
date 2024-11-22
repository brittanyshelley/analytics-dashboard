// app/page.js
import Link from 'next/link';
import MonitorGroupStatus from '../components/MonitorGroupStatus';


export default function HomePage() {
  const monitorGroupIds = [
    '6516dc88-29d9-45d8-9844-f1cf0b91e2f7'
  ];
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
