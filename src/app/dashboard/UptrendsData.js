// app/dashboard/UptrendsData.js
// import { use } from 'react';

// async function fetchUptrendsData() {
//   const res = await fetch('/api/uptrends');
//   if (!res.ok) throw new Error('Failed to fetch Uptrends data');
//   return res.json();
// }

// export default function UptrendsData() {
//   const data = use(fetchUptrendsData()); // Using `use` to handle data fetching with Suspense

//   return (
//     <div className="data-section">
//       <h2 className="text-xl font-semibold">Uptrends Data</h2>
//       <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// }
async function getUptrendsData() {
  const response = await fetch('/api/uptrends', { cache: 'no-store' });

  if (!response.ok) {
    throw new Error('Failed to fetch Uptrends data');
  }

  return response.json();
}

export default async function UptrendsData() {
  const data = await getUptrendsData();

  return (
    <div className="uptrends-data">
      <h2 className="text-xl font-semibold mb-2">Uptrends Data</h2>
      <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
