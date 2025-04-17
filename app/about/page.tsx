"use client";

import { useRouter } from 'next/navigation';
import Menu from '../components/Menu';

export default function About() {
  const router = useRouter();

  return (
    <div className="min-h-screen px-6 py-10 bg-blue-300 flex flex-col items-center">
      <Menu />
      <h1 className="text-4xl font-bold text-gray-800 mb-8">About Austin Villanueva</h1>

      <div className="w-full max-w-3xl space-y-8">

        {/* Intro */}
        <div className="flex flex-col gap-4 bg-white shadow-md rounded-lg p-6"> 
          <p className="text-gray-700 text-lg">
            I am currently enrolled at the University of Central Florida where I am pursuing a Bachelors of Science in Computer Science and a Minor in 
            Mathematics.
          </p>
          <p className="text-gray-700 text-lg">
            I am mainly proficient in Python, Java, JavaScript, and SQL for my languages where I also use Django, React.js, Next.js, Express.js, PostgreSQL,
            and MongoDB for my frameworks.
            I am working on building my full stack development skills by building useful and complete applications to be an effective software engineer.
            
          </p>
          <p className="text-gray-700 text-lg">
            Besides full stack engineering, I also am pursuing machine learning and artificial intelligence on the side by integrating various techniques 
            into the applications that I&apos;m building.
            I also am trying to incorporate other software engineering practices like deployment using Vercel and containerization using Docker.
          </p>
          <p className="text-gray-700 text-lg">
            In my free time, I enjoy watching sports and working out.
            I actually used to be on the varsity basketball team in highschool so I try to still stay active when I can.
            I am a big fan of most Florida sport teams which I enjoy watching with my family.
            I love to watch the Rays, Lightning, Magic, and Bucs and I hope that they continue to have success because I believe that on any given night we 
            can compete with the best. 
          </p>
          <p className="text-gray-700 text-lg">
            I am a very big friends and family person who understands the meaning of commitment and hard work.
            I appreciate my parents a lot as they made me into the person who I am today.
            As often as I can I try to visit my friends and family so that I can spend time with them.
            My hometown is north Tampa, Florida so it is not too far away but I miss them very much.
          </p>
        </div>

        {/* Coursework */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Related Coursework</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Data Structures and Algorithms</li>
            <li>Advanced Data Structures and Algorithms</li>
            <li>Object-Oriented Programming</li>
            <li>Calculus 1</li>
            <li>Calculus 2</li>
            <li>Intro to Discrete Structures</li>
            <li>Probability and Statistics</li>
            <li>Technical Writing</li>
          </ul>
        </div>

        {/* Technologies */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technologies</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-700">
            {[
              "Django", "Flask", "React.js", "Next.js", "Express.js", "MongoDB", "PostgreSQL", "MySQL",
              "Numpy", "Pandas", "Matplotlib", "Seaborn",
              "Scikit-learn", "TensorFlow", "Git", "LaTeX",
              "Markdown", "VSCode", "Vim/Nvim"
            ].map((tech, index) => (
              <li key={index}>• {tech}</li>
            ))}
          </ul>
        </div>

        {/* Languages */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Languages</h3>
          <ul className="flex flex-wrap gap-4 text-gray-700">
            {["Python", "JavaScript", "TypeScript", "Java", "SQL", "C", "HTML", "CSS"].map((lang, index) => (
              <li key={index} className="bg-blue-100 px-3 py-1 rounded-full text-sm font-medium">
                {lang}
              </li>
            ))}
          </ul>
        </div>

        {/* Back Button */}
        <div className="flex justify-center">
          <button 
            onClick={() => router.back()}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
