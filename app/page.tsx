"use client";

import { useRouter } from 'next/navigation';
import projects from './components/projects.json';
import ProjectCard from './components/ProjectCard';

export default function Landing() {
  const router = useRouter();

  interface Project {
    id: string;
    title: string;
    previewImage: string;
    detailedImage: string;
    detailedDescription: string;
    link: string;
    isPdf: boolean;
  }

  const cards = projects.slice(0, 6).map((project: Project) => (
    <div key={project.id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
      <ProjectCard {...project} />
    </div>
  ));

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-4 sm:px-8 py-8">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Austin Villanueva&apos;s Portfolio</h1>
        <div className="space-x-4">
          <button
            onClick={() => router.push('/resume')}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            View Resume
          </button>
          <button
            onClick={() => router.push('/about')}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
          >
            About Me
          </button>
        </div>
      </header>

      {/* Intro */}
      <section className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-lg leading-relaxed">
          I&apos;m a second-year Computer Science major at the University of Central Florida.
          I&apos;m passionate about full stack development and machine learning. In my free time,
          I enjoy watching sports, working on personal coding projects, and collecting fragrances.
        </p>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h3 className="text-2xl font-semibold text-center mb-8">Projects</h3>
        <div className="flex flex-wrap justify-center">
          {cards}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-center">Contact</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center text-center">
          <div>
            <h5 className="text-lg font-medium">Email</h5>
            <p className="text-gray-600">au563482@ucf.edu</p>
          </div>
          <div>
            <h5 className="text-lg font-medium">GitHub</h5>
            <a
              href="https://github.com/avillann00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub Profile
            </a>
          </div>
          <div>
            <h5 className="text-lg font-medium">LinkedIn</h5>
            <a
              href="https://www.linkedin.com/in/austin-villanueva-56abbb2b2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
