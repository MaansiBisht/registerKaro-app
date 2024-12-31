import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  const { id } = await params ;

  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const API_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  try {
    // Fetch company details
    const companyResponse = await fetch(`${SUPABASE_URL}/rest/v1/companies_t?id=eq.${id}`, {
      headers: {
        apikey: API_KEY,
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    if (!companyResponse.ok) {
      const errorText = await companyResponse.text();
      console.error('Company fetch error:', errorText);
      return NextResponse.json({ error: 'Failed to fetch company details' }, { status: companyResponse.status });
    }

    const companyData = await companyResponse.json();
    if (!Array.isArray(companyData) || companyData.length === 0) {
      return NextResponse.json({ error: 'Company not found' }, { status: 404 });
    }

    const company = companyData[0];

    // Fetch directors associated with the company
    const directorsResponse = await fetch(`${SUPABASE_URL}/rest/v1/directors_t?company_id=eq.${id}`, {
      headers: {
        apikey: API_KEY,
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    if (!directorsResponse.ok) {
      const errorText = await directorsResponse.text();
      console.error('Directors fetch error:', errorText);
      return NextResponse.json({ error: 'Failed to fetch directors' }, { status: directorsResponse.status });
    }

    const directors = await directorsResponse.json();

    // Return combined data
    return NextResponse.json({ company, directors });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
