import React from "react";
import { NavbarSimple } from "./component/Navbar";
import Footer from "./component/Footer";

const About = () => {
  return (
    <>
      <NavbarSimple />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About LOUD Coders
            </h1>
            <p className="mb-8 leading-relaxed text-lg">
              Welcome to{" "}
              <span className="text-teal-600 font-semibold">LOUD Coders !</span>{" "}
              We are a dedicated team of passionate and skilled freelancers,
              coming together to provide you with top-notch solutions for all
              your information technology and marketing needs. With a shared
              commitment to excellence and innovation, we aim to transform your
              ideas into reality and help your projects thrive.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/Aboutimg.jpg"
            />
          </div>
        </div>
      </section>
      <div className="container mx-auto flex flex-col px-4 mb-5">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Collaborative Spirit
        </h1>
        <p className="text-gray-600 text-lg">
          At LOUD Coders, collaboration is at the heart of everything we do. We
          believe in the power of synergy and the magic that happens when
          creative minds unite. Our team seamlessly combines individual
          strengths to deliver comprehensive solutions that exceed your
          expectations. With our finger on the pulse of the latest trends and
          technologies, we ensure that our skills remain current and our
          solutions are future-proof. We thrive on challenges and view them as
          opportunities to learn and grow.
        </p>
      </div>
      <div className="container mx-auto flex flex-col px-4 mb-5">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Let's Create Together
        </h1>
        <p className="text-gray-600 text-lg">
          Whether you're a startup looking to establish your online presence or
          a business aiming to elevate your brand, LOUD Coders is here to collaborate and make your aspirations a reality. Join
          us on this exciting journey and let's create something exceptional
          together. Connect with us today to discuss how we can contribute to
          your next project. Together, let's turn ideas into remarkable
          achievements.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
