"use client";

import Menu from './components/Menu';

export default function Landing() {

  return (
    <div className="min-h-screen bg-blue-300 text-gray-800 px-4 sm:px-8 py-8">
      {/* Header */}
      <header className="text-center mb-10 flex flex-col items-center">
        <Menu />
        <h1 className="text-4xl font-bold mb-4">Austin Villanueva&apos;s Portfolio</h1>
      </header>

      {/* Intro */}
      <section className="max-w-3xl mx-auto text-left mb-12 bg-white p-8 rounded-lg shadow-md flex flex-col gap-4">
        <p className="text-lg leading-relaxed">
          Hello! My name is Austin Villanueva I&apos;m a second-year Computer Science major at the University of Central Florida.
        </p>
        <p className="text-lg leading-relaxed">
          I am currently a Software Development Intern at Playtoon and a Stocker/Forklift Driver at Costco Wholesale.
        </p>
        <p className="text-lg leading-relaxed">
          The purpose of this portfolio is to showcase my skills, experiences, and projects. 
        </p>
        <p className='text-lg leading-relaxed'>
          To navigate my portfolio, select the menu button on the top left.
        </p>
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
