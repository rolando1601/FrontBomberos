import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Welcome to Next.js!</h1>
        <Image src="/images/vercel.png" alt="Vercel Logo" width={72} height={16} />
      </div>
    </main>
  );
}