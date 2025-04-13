"use client";

import { useRouter } from 'next/navigation';
import projects from './components/projects.json';
import ProjectCard from './components/ProjectCard';

export default function Landing() {
  const router = useRouter();

  interface Project{
    id: string
    title: string
    previewImage: string
    detailedImage: string
    detailedDescription: string
    link: string
    isPdf: boolean
  }

  const cards = projects.map((project: Project) => (
    <div key={project.id} className="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex">
      <ProjectCard
        id={project.id}
        title={project.title}
        previewImage={project.previewImage}
        detailedImage={project.detailedImage}
        detailedDescription={project.detailedDescription}
        link={project.link}
        isPdf={project.isPdf}
      />
    </div>
  ));

  return (
    <div className="container py-5 landing-background">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary display-3">Austin Villanueva's Portfolio</h1>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <button className="btn btn-primary px-4 py-2" onClick={() => router.push('/resume')}>
            View Resume
          </button>
          <button className="btn btn-outline-secondary px-4 py-2" onClick={() => router.push('/about')}>
            About Me
          </button>
        </div>
      </div>

      {/* Intro Section */}
      <div className="text-center mb-5">
        <p className="lead text-muted">
          I'm a second-year Computer Science major at the University of Central Florida.
          I'm passionate about full stack development and machine learning.
          In my free time, I enjoy watching sports, working on personal coding projects, and collecting fragrances.
        </p>
      </div>

      {/* Projects Section */}
      <h3 className="mb-4 text-center text-primary">Projects</h3>
      <div className="row d-flex justify-content-center gx-4 gy-4">
        {cards}
      </div>

      {/* Contact Section */}
      <div className="text-center mb-4 py-5">
        <h3 className="text-primary">Contact</h3>
        <div className="d-flex justify-content-center gap-5">
          <div className="card p-3" style={{ maxWidth: "200px" }}>
            <h5>Email</h5>
            <p className="mb-0">au563482@ucf.edu</p>
          </div>
          <div className="card p-3" style={{ maxWidth: "200px" }}>
            <h5>GitHub</h5>
            <a href="https://github.com/avillann00" className="btn btn-outline-primary w-100">GitHub Profile</a>
          </div>
          <div className="card p-3" style={{ maxWidth: "200px" }}>
            <h5>LinkedIn</h5>
            <a href="https://www.linkedin.com/in/austin-villanueva-56abbb2b2" className="btn btn-outline-primary w-100">LinkedIn Profile</a>
          </div>
        </div>
      </div>
    </div>
  );
}
