import React from "react";

export default function About() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-gray-100">
      <div className="container mx-auto px-6 text-gray-700 md:px-12 xl:px-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQuqeZJcbU0CCGuuvCcXUNWV6DUk32Z_
              lTA&s"
              alt="Startup Team"
              className="rounded-1xl shadow-lg w-full h-full"
            />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-3xl text-gray-900 font-extrabold md:text-5xl leading-tight">
              Build with Passion, Scale with Confidence
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              In the world of React development, innovation meets efficiency.
              Our team of dedicated developers crafts seamless digital
              experiences with cutting-edge technologies.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Whether you're launching a startup or scaling a business, our
              expertise ensures your vision becomes reality. Join us in shaping
              the future of web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
