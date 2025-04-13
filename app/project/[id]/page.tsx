"use client";

import { useSearchParams, useRouter } from 'next/navigation';

export default function ProjectDetails() {
  const router = useRouter();
  const searchParams = useSearchParams(); // get everything from ?...

  const title = searchParams.get("title") || "";
  const detailedImage = searchParams.get("detailedImage") || "";
  const detailedDescription = searchParams.get("detailedDescription") || "";
  const link = searchParams.get("link") || "";
  const isPdf = searchParams.get("isPdf") === "true";

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">{title}</h1>

      <div className="row justify-content-center">
        <div className="col-12 col-md-8 mb-4">
          <div className="card shadow-sm">
            {isPdf ? (
              <iframe title={title} src={detailedImage} className="card-img-top detailed-image" />
            ) : (
              <img src={detailedImage} className="card-img-top detailed-image h-100" alt="Project Clip" />
            )}
          </div>
        </div>

        <div className="col-12 col-md-8 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <p>{detailedDescription}</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-8 text-center">
          {link && (
            <a href={link} className="btn btn-primary mb-3" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          )}
          <br />
          <button className="btn btn-secondary" onClick={() => router.push('/')}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
