import { useEffect, useState } from "react";
import { HomeUp } from "./home/HomeUp";
// import { HomeDown } from "./home/HomeDown";

// import {Testimonial} from './testimonial';
// import { Blog } from './blog/blog'
// import Service from './service'

export const Homepage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={isScrolled ? "home scrolled" : "home"} id="home">
      
        <HomeUp />
      
      
    </section>
  );
};
