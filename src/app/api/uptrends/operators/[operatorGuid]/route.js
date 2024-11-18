import axios from 'axios';

export async function GET(req) {
  const { operatorGuid } = req.params || {};

  if (!operatorGuid) {
    return new Response(
      JSON.stringify({ error: 'Missing operator GUID' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const username = process.env.UPTRENDS_API_USERNAME;
  const password = process.env.UPTRENDS_API_PASSWORD;

  if (!username || !password) {
    return new Response(
      JSON.stringify({ error: 'Missing API credentials' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const encodedCredentials = Buffer.from(`${username}:${password}`).toString('base64');

  try {
    const response = await axios.get(`https://api.uptrends.com/v4/Operator/${operatorGuid}`, {
      headers: {
        Authorization: `Basic ${encodedCredentials}`,
      },
    });

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(`Error fetching operator ${operatorGuid}:`, error.response?.data || error.message);
    return new Response(
      JSON.stringify({ error: error.response?.data || error.message }),
      { status: error.response?.status || 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
