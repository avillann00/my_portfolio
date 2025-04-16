"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function Menu(){

  const router = useRouter();
  const path = usePathname();
  const [shown, setShown] = useState(false);

  return(
    <div className="absolute left-10">
      <button
        onClick={() => setShown(prev => !prev)}
        className="font-bold text-black p-3 text-lg rounded-md border border-gray-300 bg-white shadow hover:bg-gray-100 transition"
      >
        ☰
      </button>

      {shown && (
        <div className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg ring-1 ring-gray-200 z-10">
          {path !== '/' && <button
            onClick={() => router.push('/')}
            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
          >
            Home
          </button>}
          <button
            onClick={() => router.push('/about')}
            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
          >
            About Me
          </button>
          <button
            onClick={() => router.push('/resume')}
            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
          >
            Resume
          </button>
          
          <button
            onClick={() => router.push('/project')}
            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
          >
            Projects
          </button>
        </div>
      )}
    </div>
  );
}
