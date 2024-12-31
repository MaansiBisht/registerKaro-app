import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: POSTGRES_DB,
  password:POSTGRES_PASSWORD,
  port: 5432,
});

async function checkConnection() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Database connected:', res.rows[0]);
  } catch (error) {
    console.error('Database connection failed:', error);
    pool.end(); 
  }
}

checkConnection();

export default pool;
