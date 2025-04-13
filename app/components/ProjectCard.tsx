"use client";

import { useRouter } from 'next/navigation';

interface Project{
  id: string;
  title: string;
  previewImage: string;
  detailedImage: string;
  detailedDescription: string;
  link: string;
  isPdf: boolean;
}

export default function ProjectCard({ id, title, previewImage, detailedImage, detailedDescription, link, isPdf }: Project){
  const router = useRouter()

  return (
    <button
      onClick={() => router.push(`/project/${id}?title=${title}&detailedImage=${detailedImage}&detailedDescription=${detailedDescription}&link=${link}&isPdf=${isPdf}`)}
    >
      <div className="card project-card shadow-sm border-0 text-center h-100">
        <img src={previewImage} className="card-img-top preview-image mx-auto mt-3" alt="Preview" />
        <div className="card-body p-2">
          <h5 className="card-title mb-0">{title}</h5>
        </div>
      </div>
    </button>
  );
}
