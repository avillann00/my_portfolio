"use client";

import { useRouter } from 'next/navigation';
import Menu from '../components/Menu';

export default function Resume() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 flex flex-col items-center">
      <Menu />
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Austin Villanueva&apos;s Resume</h1>

      {/* Embedded Resume PDF */}
      <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg bg-white border mb-8">
        <iframe 
          title="Resume"
          src="/resume.pdf"
          className="w-full h-[80vh]"
          style={{ border: 'none' }}
        />
      </div>

      {/* Go back button */}
      <button 
        onClick={() => router.back()}
        className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
      >
        Go Back
      </button>
    </div>
  );
}
