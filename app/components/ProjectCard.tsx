"use client";

import { useRouter } from 'next/navigation';

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
          `/project/${id}?title=${encodeURIComponent(title)}&detailedImage=${encodeURIComponent(
            detailedImage
          )}&detailedDescription=${encodeURIComponent(
            detailedDescription
          )}&link=${encodeURIComponent(link)}&isPdf=${String(isPdf)}`
        )
      }
      className="w-full bg-white rounded-xl shadow-md overflow-hidden transition transform hover:scale-[1.02] hover:shadow-lg focus:outline-none"
    >
      <div className="flex flex-col">
        {previewImage && (
          <img
            src={previewImage}
            alt={`Preview of ${title}`}
            className="h-48 w-full object-contain"
          />
        )}
        <div className="p-4 text-left">
          <h5 className="text-lg font-semibold text-gray-800">{title}</h5>
        </div>
      </div>
    </button>
  );
}
