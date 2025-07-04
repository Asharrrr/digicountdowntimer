// app/not-found.tsx
import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6 text-lg">Sorry, the page you're looking for doesn't exist.</p>
      <Link href="/" className="text-blue-400 hover:text-blue-300 underline">
        Go back home
      </Link>
    </div>
  );
}
