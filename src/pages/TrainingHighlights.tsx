import React from "react";

const TrainingHighlightsPage = () => (
  <main className="max-w-3xl mx-auto p-8 font-sans">
    <h1 className="text-4xl font-bold mb-6 text-center">Training Highlights</h1>
    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
      <li>Azure Fundamentals Certification (in progress)</li>
      <li>AI for Beginners Course (Microsoft Learn)</li>
      <li>React & TypeScript Bootcamp</li>
    </ul>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Behind the Scenes</h2>
      <p className="text-gray-700 leading-relaxed">
        Curious about how this website was created? Learn about the AI tools and techniques used in its development.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-semibold mb-2">How This Site Was Built Using AI</h2>
      <p className="text-gray-700 leading-relaxed mb-2">Coming Soon</p>
      <p className="text-gray-700 leading-relaxed">
        Project showcases, learning logs, and practical AI applications will be featured here.
      </p>
    </section>
  </main>
);

export default TrainingHighlightsPage;
