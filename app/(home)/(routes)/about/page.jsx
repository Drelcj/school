import React from 'react';

function About() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-orange-500">About Us</h1>
        <p className="text-lg text-gray-700 mb-10">
          {/* Replace this paragraph with your actual descriptive text */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus sapien eu neque sagittis, ut ullamcorper lectus condimentum.
        </p>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-orange-500">Our Mission</h2>
          <ul className="list-disc pl-8">
            <li className="mb-4">Feature 1: Provide high-quality products and services.</li>
            <li className="mb-4">Feature 2: Empower customers to achieve their goals.</li>
            <li>Feature 3: Foster a positive and inclusive environment.</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-orange-500">Meet the Team</h2>
          {/* Replace this with your team member profiles */}
          <div className="flex items-center mb-4">
            <img src="/images/team-member-1.jpg" alt="Team Member 1" className="w-24 h-24 rounded-full mr-4" />
            <div>
              <h3 className="text-lg font-bold text-gray-900">Sophia Ossai</h3>
              <p className="text-gray-600">Principal</p>
            </div>
          </div>
          {/* Add more team members as needed */}
        </div>
      </div>
    </section>
  );
}

export default About;
