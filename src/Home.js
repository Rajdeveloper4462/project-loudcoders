import React from "react";
import { NavbarSimple } from "./component/Navbar";
import { Button } from "@material-tailwind/react";
import ServiceInfo from "./component/ServiceInfo";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavbarSimple />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              LOUD Coders is a group .
              <br className="hidden lg:inline-block" />
              We provide services to build your things
            </h1>
            <p className="mb-8 leading-relaxed">
              LOUD coders is a group of freelancers facility which helps you to
              create business platforms like Websites , Mobile Applications and better visual interphase .
              And also help to boost your business platforms with the help of marketing Services . 
            </p>
            <div className="flex justify-center">
              <Link to="/Services">
              <Button color="blue">Services</Button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/loudHero2.avif"
            />
          </div>
        </div>
      </section>
      <ServiceInfo />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="loudHero3.avif"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Why LOUD Coders ?
            </h1>
            <p className="mb-8 leading-relaxed">
              LOUD coders offer a wide range of services across various
              industries, including writing, design, programming, marketing,
              Application development and more. You should communicate clearly
              with us to understand what facilities are included in the services
              and to ensure that your needs are met.
            </p>
            <div className="flex justify-center">
              <Button color="blue">
                <Link to="/About">About us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
