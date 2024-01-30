import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assests/style.css'
import './assests/images/Logo.png'
import Header from './Components/Header';
import Hero from './Components/Hero';
import BenefitsSection from './Components/Benefits/BenefitsSection';
import './App.css';
import TestimonialssSection from './Components/Testimonials/TestimonialsSection';
import CoursesSection from './Components/Courses/CoursesSection';
import Footer from './Components/Footer/Footer';
import FAQ from './Components/FAQ/FAQ';
import Prices from './Components/Prices/Prices';

import img1 from './assests/images/card-Image1.png'
import img2 from './assests/images/card-Image2.png'
import img3 from './assests/images/card-Image3.png'
import img4 from './assests/images/card-Image4.png'
import img5 from './assests/images/card-Image5.png'
import img6 from './assests/images/card-Image6.png'

const courses = [
  {
    image:img1,
    duration: "4 weeks",
    level: "Beginner",
    instructor:"By John Smith",
    name:"Web Design Fundamentals",
    description:`Learn the fundamentals of web design, including
    HTML, CSS, and responsive design principles. Develop the skills to create
    visually appealing and user-friendly websites.`
    
  },
  {
    image:img2,
    duration: "6 weeks",
    level: "Intermediate",
    instructor:"By Emily Johnson",
    name:"UI/UX Design",
    description:`Master the art of creating intuitive user
    interfaces (UI) and enhancing user experiences (UX). Learn design principles,
    wireframing, prototyping, and usability testing techniques.`
    
  },
  {
    image:img3,
    duration: "8 weeks",
    level: "Intermediate",
    instructor:"By David Brown",
    name:"Mobile App Development",
    description:`Dive into the world of mobile app development.
    Learn to build native iOS and Android applications using industry-leading
    frameworks like Swift and Kotlin.`
    
  },
  {
    image:img4,
    duration: "10 weeks",
    level: "Beginner",
    instructor:"By Sarah Thompson",
    name:"Graphic Design for Beginners",
    description:`Discover the fundamentals of graphic design,
    including typography, color theory, layout design, and image manipulation
    techniques. Create visually stunning designs for print and digital media.`
    
  },
  {
    image:img5,
    duration: "10 weeks",
    level: "Intermediate",
    instructor:"By Michael Adams",
    name:" Front-End Web Development",
    description:`Become proficient in front-end web development.
    Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React.
    Build interactive and responsive websites.`
    
  },
  {
    image:img6,
    duration: "6 weeks",
    level: "Advanced",
    instructor:"By Jennifer Wilson",
    name:"Advanced JavaScript",
    description:`Take your JavaScript skills to the next level.
    Explore advanced concepts like closures, prototypes, asynchronous programming,
    and ES6 features. Build complex applications with confidence.`
    
  },

 
];

function App() {
  return (
    <div className="App">
     {/* Header (top banner / nav bar) */}
     <Header/>

     {/* Hero Section */}
     <Hero/>

     {/* Benefits Section */}
     <BenefitsSection/>

     {/* Courses Section */}
     <CoursesSection coursesList={courses}/>

     {/* Testimonials Section */}
     <TestimonialssSection/>

     {/* Pricing Section */}
     <Prices/>
     {/* FAQ Section */}
     <FAQ/>
     
     {/* footer */}
     <Footer/>


    </div>
  );
}

export default App;


/*
 <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-primary">
          TASneem hassan mohamed  said<code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header> */