import React from "react";

export default function About() {
  return (
    <section className="p-40 bg-teal-500 text-white">
      <div className="container ">
        <h1 className="text-center text-5xl font-semibold">ABOUT COMPONENT</h1>
        <div className="about-info text-start flex gap-10 mt-10 text-lg">
          <div className="text-xl font-medium">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </div>
          <div className="text-xl font-medium ">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </div>
        </div>
      </div>
    </section>
  );
}
