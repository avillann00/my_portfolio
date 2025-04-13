"use client";

import { useRouter } from 'next/navigation';

export default function Resume() {
  const router = useRouter();

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">My Resume</h1>

      {/* Embed the Resume PDF with a styled iframe */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <iframe 
                className="resume w-100" 
                title="Resume" 
                src="/resume.pdf" 
                style={{ height: '80vh', border: 'none' }} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Go back button */}
      <div className="text-center mt-4">
        <button 
          className="btn btn-primary" 
          onClick={() => router.push('/')}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
