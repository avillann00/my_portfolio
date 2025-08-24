"use client";

import { useRouter } from "next/navigation";
import Menu from "../components/Menu";

export default function About() {
  const router = useRouter();

  return (
    <div className="min-h-screen px-6 py-10 bg-black flex flex-col items-center text-white">
      <Menu />

      <h1 className="text-4xl font-bold mb-8 text-yellow-400 drop-shadow-[0_0_10px_rgba(255,255,120,0.8)]">
        About Austin Villanueva
      </h1>

      <div className="w-full max-w-3xl space-y-8">

        {/* Intro */}
        <div className="flex flex-col gap-4 bg-gray-900/80 shadow-lg rounded-lg p-6 border border-gray-700">
          <p className="text-gray-300 text-lg">
            I am currently enrolled at the University of Central Florida pursuing a Bachelors of Science in Computer Science and a Minor in Mathematics.
          </p>
          <p className="text-gray-300 text-lg">
            I am proficient in Python, Java, JavaScript, and SQL, using frameworks like Django, React.js, Next.js, Express.js, PostgreSQL, and MongoDB. I’m building full stack applications to become an effective software engineer.
          </p>
          <p className="text-gray-300 text-lg">
            I also explore machine learning and AI, integrating techniques into my projects, and practice deployment using Vercel and containerization using Docker.
          </p>
        </div>

        {/* Coursework */}
        <div className="bg-gray-900/80 shadow-lg rounded-lg p-6 border border-gray-700">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Related Coursework</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Data Structures and Algorithms</li>
            <li>Advanced Data Structures and Algorithms</li>
            <li>Object-Oriented Programming</li>
            <li>Calculus 1 & 2</li>
            <li>Intro to Discrete Structures</li>
            <li>Probability and Statistics</li>
            <li>Technical Writing</li>
          </ul>
        </div>

        {/* Technologies */}
        <div className="bg-gray-900/80 shadow-lg rounded-lg p-6 border border-gray-700">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Technologies</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-300">
            {[
              "Django","Flask","React.js","Next.js","Express.js","MongoDB","PostgreSQL","MySQL",
              "Numpy","Pandas","Matplotlib","Seaborn",
              "Scikit-learn","TensorFlow","Git","LaTeX","Markdown","VSCode","Vim/Nvim"
            ].map((tech, index) => (
              <li key={index}>• {tech}</li>
            ))}
          </ul>
        </div>

        {/* Languages */}
        <div className="bg-gray-900/80 shadow-lg rounded-lg p-6 border border-gray-700">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Languages</h3>
          <ul className="flex flex-wrap gap-4 text-gray-300">
            {["Python","JavaScript","TypeScript","Java","SQL","C","HTML","CSS"].map((lang, index) => (
              <li key={index} className="bg-green-800/70 px-3 py-1 rounded-full text-sm font-medium text-green-200">
                {lang}
              </li>
            ))}
          </ul>
        </div>

        {/* Back Button */}
        <div className="flex justify-center">
          <button 
            onClick={() => router.back()}
            className="mt-4 px-6 py-2 bg-green-800 text-green-200 rounded-lg 
                       hover:bg-green-700 hover:shadow-[0_0_15px_rgba(0,255,100,0.8)] transition transform hover:scale-105"
          >
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
}

