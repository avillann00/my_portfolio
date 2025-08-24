"use client";

import { useRouter } from "next/navigation";
import Menu from "../components/Menu";

export default function Resume() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900 px-4 py-10 flex flex-col items-center text-center">
      <Menu />

      <h1 className="text-4xl font-bold text-green-400 drop-shadow-[0_0_6px_rgba(34,197,94,0.9)] mb-6">
        Austin Villanueva&apos;s Resume
      </h1>

      {/* Embedded Resume PDF */}
      <div className="w-full max-w-4xl rounded-lg overflow-hidden border border-green-700/40 bg-gray-800/90 shadow-[0_0_20px_rgba(34,197,94,0.6)] mb-8">
        <iframe
          title="Resume"
          src="/resume.pdf"
          className="w-full h-[80vh] bg-black/40"
          style={{ border: "none" }}
        />
      </div>

      {/* Go back button */}
      <button
        onClick={() => router.back()}
        className="px-6 py-2 rounded-lg font-semibold text-green-300 bg-gray-800 border border-green-500/50 shadow-[0_0_12px_rgba(34,197,94,0.8)] hover:shadow-[0_0_20px_rgba(34,197,94,1)] transition"
      >
        Go Back
      </button>
    </div>
  );
}

