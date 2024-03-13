import { useState, useEffect } from "react";
import Header from "../Header";
import Hero from "../Hero";
import BenefitsSection from "../Benefits/BenefitsSection";
import CoursesSection from "../Courses/CoursesSection";
import TestimonialssSection from "../Testimonials/TestimonialsSection";
import Prices from "../Prices/Prices";
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";
const MainContent = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setLoding] = useState(false);
  useEffect(() => {
    setLoding(true);
    fetch("https://65ba227ab4d53c0665522152.mockapi.io/courses")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedDataCourses = data.map((CourseData) => {
          return {
            id: CourseData.id,
            description: CourseData.description,
            name: CourseData.name,
            instructor: CourseData.instructor,
            level: CourseData.level,
            duration: CourseData.duration,
            image: CourseData.img,
          };
        });
        setCourses(transformedDataCourses);
      });
    setLoding(false);
  }, []);
  return (
    <>
      {/* Header (top banner / nav bar) */}
      <Header />
      {/* Hero Section */}
      <Hero />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Courses Section */}
      <section>
        {isLoading && <p>Loding.....</p>}
        {!isLoading && courses.length > 0 && (
          <CoursesSection coursesList={courses} />
        )}
        {/* {!isLoading && courses.length ===0  && <p>No Courses Found</p>} */}
      </section>

      {/* Testimonials Section */}
      <TestimonialssSection />

      {/* Pricing Section */}
      <Prices />
      {/* FAQ Section */}
      <FAQ />
      {/* footer */}
      <Footer />
    </>
  );
};

export default MainContent;
