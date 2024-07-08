import { Route, Routes } from "react-router-dom";
import {NavBar, Contact, AboutUs} from "./index"
import Service from "./service/Service";
import Blog from "./blog/Blog";
import PropertyListing from "./property/PropertyListing";

import Landing from "./Landing";

const Layout = () => {
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

export default Layout;
