"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to Main page after component mounts
    router.push('/main');
  }, [router]);

  return null; // Render nothing, just redirect
}
