import { NextResponse } from 'next/server';
import pool from '@/app/lib/db';

export async function GET(request, { params }) {
  const { id } = await params;

  try {
    // Fetch company details
    const companyResult = await pool.query('SELECT * FROM companies WHERE id = $1', [id]);
    if (companyResult.rows.length === 0) {
      return NextResponse.json({ error: 'Company not found' }, { status: 404 });
    }
    const company = companyResult.rows[0];

    // Fetch directors associated with the company
    const directorsResult = await pool.query(
      'SELECT name AS director_name FROM directors WHERE company_id = $1',
      [id]
    );

    const directors = directorsResult.rows;

    return NextResponse.json({ company, directors });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
