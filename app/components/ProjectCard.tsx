"use client";

import { useRouter } from "next/navigation";

interface Project {
  id: string;
  title: string;
  previewImage: string;
  detailedImage: string;
  detailedDescription: string;
  link: string;
  isPdf: boolean;
}

export default function ProjectCard({
  id,
  title,
  previewImage,
  detailedImage,
  detailedDescription,
  link,
  isPdf,
}: Project) {
  const router = useRouter();

  return (
    <button
      onClick={() =>
        router.push(
          `/projects/${id}?title=${encodeURIComponent(
            title
          )}&detailedImage=${encodeURIComponent(
            detailedImage
          )}&detailedDescription=${encodeURIComponent(
            detailedDescription
          )}&link=${encodeURIComponent(link)}&isPdf=${String(isPdf)}`
        )
      }
      className="
        w-full
        rounded-xl
        border border-green-700/40
        bg-gray-900/90
        shadow-[0_0_15px_rgba(34,197,94,0.6)]
        overflow-hidden
        transition
        transform
        hover:scale-[1.03]
        hover:shadow-[0_0_25px_rgba(34,197,94,1)]
        focus:outline-none
      "
    >
      <div className="flex flex-col">
        {previewImage && (
          <img
            src={previewImage}
            alt={`Preview of ${title}`}
            className="h-48 w-full object-contain bg-black/40"
          />
        )}
        <div className="p-4 text-left">
          <h5 className="text-lg font-bold text-green-400 drop-shadow-[0_0_6px_rgba(34,197,94,0.9)]">
            {title}
          </h5>
        </div>
      </div>
    </button>
  );
}

