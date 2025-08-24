"use client";

import { useSearchParams, useRouter } from 'next/navigation';
import Menu from '@/app/components/Menu';

export default function ProjectDetails() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const title = searchParams.get("title") || "";
  const detailedImage = searchParams.get("detailedImage") || "";
  const detailedDescription = searchParams.get("detailedDescription") || "";
  const link = searchParams.get("link") || "";
  const isPdf = searchParams.get("isPdf") === "true";

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_center,#1a1a1a_0%,#000_100%)] px-4 py-10 sm:px-6 lg:px-8 text-green-300">
      <div className="max-w-4xl mx-auto bg-black/70 rounded-xl border border-green-400/30 shadow-[0_0_20px_rgba(0,255,100,0.5)] p-6 space-y-6">
        <Menu />
        <h1 className="text-3xl font-bold text-green-300 text-center drop-shadow-[0_0_15px_rgba(0,255,100,0.8)]">
          Austin Villanueva&apos;s {title} Project
        </h1>

        <div className="w-full flex flex-col justify-center gap-4"> 
          <div className="text-green-200 text-base leading-relaxed space-y-4">
            {detailedDescription.split('\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {isPdf ? (
            <iframe
              title={title}
              src={detailedImage}
              className="w-full h-[500px] rounded-md border border-green-500/40"
            />
          ) : (
            <img
              src={detailedImage}
              alt="Project Clip"
              className="w-full max-h-[500px] object-contain rounded-md border border-green-500/40"
            />
          )}

          {title === 'Job Materials' && 
            <iframe 
              title={title}
              src="/resume.pdf"
              className="w-full h-[500px] rounded-md border border-green-500/40"
            />
          }
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center inline-block px-6 py-2 rounded-lg bg-green-600 text-black font-medium hover:bg-green-400 hover:shadow-[0_0_20px_rgba(0,255,100,0.8)] transition"
            >
              View Project
            </a>
          )}
          <button
            onClick={() => router.back()}
            className="text-center inline-block px-6 py-2 rounded-lg bg-gray-800 text-green-300 font-medium hover:bg-gray-700 hover:shadow-[0_0_20px_rgba(0,255,100,0.6)] transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

