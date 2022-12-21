import React from "react";
import "./Contact.css";
import Clicker from "../../components/Clicker/Clicker";
import Container from "../../components/Container/Container";
import Input, { Textarea } from "../../components/UserInput/UserInput";
import Service from "../../components/Service/Service";

// images
import frontend from "../../images/services/frontend.png";
import backend from "../../images/services/backend.png";
import deployment from "../../images/services/deployment.png";
import fullstack from "../../images/services/fullstack.png";
const Contact = () => {
  return (
    <div>
      <div className="contact-form-container">
        <Container
          heading={"Contact Us"}
          icon={"bx bx-right-arrow-alt"}
          button={<Clicker name={"Submit"} />}
          content={
            <div className="contact-form">
              <div className="contact-form-services">
                <Service
                  image={fullstack}
                  service={"Fullstack Development"}
                  description={
                    "Refers to the development of both front end(client side) and back end(server side) portions of web application."
                  }
                />
                <Service
                  image={frontend}
                  service={"Frontend Development"}
                  description={
                    "Front-end web development is the development of the graphical user interface of a website, so that users can view and interact with that website."
                  }
                />
                <Service
                  image={backend}
                  service={"Backend Development"}
                  description={
                    "Back-end development means working on server-side software, which focuses on everything you can't see on a website."
                  }
                />
                <Service
                  image={deployment}
                  service={"Web Deployment"}
                  description={
                    "Deployment is the mechanism through which applications, modules, updates, and patches are delivered from developers to users."
                  }
                />
              </div>
              <form>
                <Input label={"Fullname"} />
                <Input label={"Email"} type="email" />
                <Input label={"Phone no"} type="number" />
                <Textarea label={"Message"} />
              </form>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Contact;
