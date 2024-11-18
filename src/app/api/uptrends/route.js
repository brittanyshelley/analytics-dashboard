// app/api/uptrends/route.js
// import { NextResponse } from 'next/server';

// export async function GET() {
//   const apiUrl = 'https://api.uptrends.com/path_to_resource'; // Replace with actual endpoint
//   const { UPTRENDS_API_KEY } = process.env;

//   try {
//     const response = await fetch(apiUrl, {
//       headers: {
//         Authorization: `Bearer ${UPTRENDS_API_KEY}`,
//       },
//     });
//     const data = await response.json();
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to fetch Uptrends data' }, { status: 500 });
//   }
// }
import { fetchUptrendsData } from '../../../utils/uptrendsApi';

export async function GET(request) {
  try {
    // Example: Fetch all monitors
    const endpoint = '/monitors'; // Change this to the desired endpoint
    const data = await fetchUptrendsData(endpoint);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
