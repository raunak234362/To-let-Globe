import { Route, Routes } from "react-router-dom";

import NavBar from "./NavBar";
import Contact from "./contact/Contact";
import Service from "./service/Service";
import Blog from "./blog/Blog";
import PropertyListing from "./property/PropertyListing";
import { AboutUs } from "./About/AboutUs";
import Landing from "./Landing";

const Page = () => {
  return (
    <div className="">
      <div>
        <NavBar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/property" element={<PropertyListing />} />
        </Routes>
      </div>
    </div>
  );
};

export default Page;
