"use client";

import { useRouter } from 'next/navigation';

export default function About() {
  const router = useRouter();

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">About Me</h1>

      <div className="text-center mb-5">
        <p className="lead">
          I'm a second-year Computer Science major at the University of Central Florida.
          I'm passionate about full stack development and machine learning.
          In my free time, I enjoy watching sports, working on personal projects, and collecting fragrances.
        </p>
      </div>

      <div className="row">
        {/* Related Coursework */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Related Coursework</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Data Structures and Algorithms</li>
                <li className="list-group-item">Advanced Data Structures and Algorithms</li>
                <li className="list-group-item">Object-Oriented Programming</li>
                <li className="list-group-item">Calculus 1</li>
                <li className="list-group-item">Calculus 2</li>
                <li className="list-group-item">Intro to Discrete Structures</li>
                <li className="list-group-item">Probability and Statistics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Technologies</h3>
              <ul className="list-group list-group-flush">
                {[
                  "Django", "Flask", "React", "PostgreSQL", "MySQL",
                  "Numpy", "Pandas", "Matplotlib", "Seaborn",
                  "Scikit-learn", "TensorFlow", "Git", "LaTeX",
                  "Markdown", "VSCode", "Vim/Nvim"
                ].map((tech, index) => (
                  <li className="list-group-item" key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Languages</h3>
              <ul className="list-group list-group-flush">
                {["Python", "JavaScript", "TypeScript", "Java", "SQL", "C"].map((lang, index) => (
                  <li className="list-group-item" key={index}>{lang}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={() => router.push('/')}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

