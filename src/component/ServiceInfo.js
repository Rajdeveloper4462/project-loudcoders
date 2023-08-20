import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ServiceInfo = () => {
  return (
    <>
      <h1 className="text-center text-4xl">Our Services</h1>
      <div className="flex h-full w-full justify-around flex-wrap px-5">
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              React Web Development
            </Typography>
            <Typography>
              React is a popular JavaScript library for building dynamic and
              interactive user interfaces for web development.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>
              <Link to="/Services">Read More</Link>
            </Button>
          </CardFooter>
        </Card>{" "}
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Designing
            </Typography>
            <Typography>
              A good UI/UX helps you to inhance your business Applications, and
              provide a better appearance to your business.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>
              <Link to="/Services">Read More</Link>
            </Button>
          </CardFooter>
        </Card>{" "}
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Flutter App Development
            </Typography>
            <Typography>
              Flutter helps you to build your business Applications which works
              on crossplatform like Android and IOS.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>
              <Link to="/Services">Read More</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Advance Web Development
            </Typography>
            <Typography>
              Advanced web development encompasses complex techniques and
              technologies to build highly interactive, efficient, and
              feature-rich websites and applications.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>
              <Link to="/Services">Read More</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Digital Marketing
            </Typography>
            <Typography>
              Digital marketing involves promoting products or services using
              online channels to reach and engage a target audience, aiming to
              achieve business objectives.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>
              <Link to="/Services">Read More</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              social Media Marketing
            </Typography>
            <Typography>
              Social media marketing is promoting and engaging with audiences on
              social platforms to increase brand visibility, engage customers,
              and drive business goals.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>
              <Link to="/Services">Read More</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default ServiceInfo;
