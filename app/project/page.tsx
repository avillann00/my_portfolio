"use client";

import projects from '../components/projects.json';
import ProjectCard from '../components/ProjectCard';
import Menu from '../components/Menu';

export default function Projects(){
  interface Project {
    id: string;
    title: string;
    previewImage: string;
    detailedImage: string;
    detailedDescription: string;
    link: string;
    isPdf: boolean;
  }

  const cards = projects.slice(3, 6).map((project: Project) => (
    <div key={project.id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
      <ProjectCard {...project} />
    </div>
  ));

  return (
    <div className="min-h-screen bg-blue-300 text-gray-800 px-4 sm:px-8 py-8">

      <header className="text-center mb-10 flex flex-col items-center">
        <Menu />
        <h1 className="text-4xl font-bold mb-4">Austin Villanueva&apos;s Projects</h1>
      </header>

      {/* Projects */}
      <section className="mb-16">
        <div className="flex flex-wrap justify-center items-center">
          {cards}
        </div>
      </section>
    </div>
  )
}
