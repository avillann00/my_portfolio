"use client";

import { useSearchParams, useRouter } from 'next/navigation';

export default function ProjectDetails() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const title = searchParams.get("title") || "";
  const detailedImage = searchParams.get("detailedImage") || "";
  const detailedDescription = searchParams.get("detailedDescription") || "";
  const link = searchParams.get("link") || "";
  const isPdf = searchParams.get("isPdf") === "true";

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">{title}</h1>

        <div className="w-full flex justify-center">
          {isPdf ? (
            <iframe
              title={title}
              src={detailedImage}
              className="w-full h-[500px] rounded-md border border-gray-200"
            />
          ) : (
            <img
              src={detailedImage}
              alt="Project Clip"
              className="w-full max-h-[500px] object-contain rounded-md border"
            />
          )}
        </div>

        <div className="text-gray-700 text-base leading-relaxed">
          <p>{detailedDescription}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center inline-block px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              View Project
            </a>
          )}
          <button
            onClick={() => router.back()}
            className="text-center inline-block px-6 py-2 rounded-lg bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
