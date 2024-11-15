// app/api/uptrends/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  const apiUrl = 'https://api.uptrends.com/path_to_resource'; // Replace with actual endpoint
  const { UPTRENDS_API_KEY } = process.env;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${UPTRENDS_API_KEY}`,
      },
    });
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch Uptrends data' }, { status: 500 });
  }
}
