import React from "react";
import { Table, thead, th, td, tbody, tr } from "reactstrap";
import CourseForm from "./CourseForm";
import * as Icon from "react-bootstrap-icons";
import Footer from "../Footer/Footer";
import { useState ,useEffect} from "react";
import "./Dashboard.css";
import img1 from "../../assests/images/card-Image1.png";
import img2 from "../../assests/images/card-Image2.png";
import img3 from "../../assests/images/card-Image3.png";
import img4 from "../../assests/images/card-Image4.png";
import img5 from "../../assests/images/card-Image5.png";
import img6 from "../../assests/images/card-Image6.png";

// const courses = [
//   {
//     image:img1,
//     duration: "4 weeks",
//     level: "Beginner",
//     instructor:"By John Smith",
//     name:"Web Design Fundamentals",
//     description:`Learn the fundamentals of web design, including
//     HTML, CSS, and responsive design principles. Develop the skills to create
//     visually appealing and user-friendly websites.`

//   },
//   {
//     image:img2,
//     duration: "6 weeks",
//     level: "Intermediate",
//     instructor:"By Emily Johnson",
//     name:"UI/UX Design",
//     description:`Master the art of creating intuitive user
//     interfaces (UI) and enhancing user experiences (UX). Learn design principles,
//     wireframing, prototyping, and usability testing techniques.`

//   },
//   {
//     image:img3,
//     duration: "8 weeks",
//     level: "Intermediate",
//     instructor:"By David Brown",
//     name:"Mobile App Development",
//     description:`Dive into the world of mobile app development.
//     Learn to build native iOS and Android applications using industry-leading
//     frameworks like Swift and Kotlin.`

//   },
//   {
//     image:img4,
//     duration: "10 weeks",
//     level: "Beginner",
//     instructor:"By Sarah Thompson",
//     name:"Graphic Design for Beginners",
//     description:`Discover the fundamentals of graphic design,
//     including typography, color theory, layout design, and image manipulation
//     techniques. Create visually stunning designs for print and digital media.`

//   },
//   {
//     image:img5,
//     duration: "10 weeks",
//     level: "Intermediate",
//     instructor:"By Michael Adams",
//     name:" Front-End Web Development",
//     description:`Become proficient in front-end web development.
//     Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React.
//     Build interactive and responsive websites.`

//   },
//   {
//     image:img6,
//     duration: "6 weeks",
//     level: "Advanced",
//     instructor:"By Jennifer Wilson",
//     name:"Advanced JavaScript",
//     description:`Take your JavaScript skills to the next level.
//     Explore advanced concepts like closures, prototypes, asynchronous programming,
//     and ES6 features. Build complex applications with confidence.`

//   },

// ];

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setLoding] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
   const [courseToEdit, setCourseToEdit] = useState(null);

 
  const startAddingHandler = () => {
    setIsAdding(true);
  };

  const startEditingHandler = (course) => {
    setCourseToEdit(course);
    setIsAdding(true);
  };

  const stopAddingHandler = () => {
    setCourseToEdit(null);
    setIsAdding(false);
  };

 //get All Course 
 const fetchCourses = async () => {
    setLoding(true);
    try {
      const response = await fetch("https://65ba227ab4d53c0665522152.mockapi.io/courses");
      const data = await response.json();
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
    } catch (error) {
      console.error('Error fetching courses:', error.message);
    } finally {
      setLoding(false);
    }
  };
  
 useEffect(() => {
    fetchCourses();
      },[]);

 // add new course
  async function addCourseHandler(course_obj){
    try {
        const response = await fetch('https://65ba227ab4d53c0665522152.mockapi.io/courses', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(course_obj),
        });
  
        if (response.ok) {
          console.log('New course added successfully');
          fetchCourses();
          // You can handle further actions (e.g., redirect, show a success message)
        } else {
          console.error('Failed to add new course');
        }
      } catch (error) {
        console.error('Error:', error);
      }
  }

 // delete course by id


 // ...

 async function deleteCourseHandler(course_id) {
    try {
      const response = await fetch(
        `https://65ba227ab4d53c0665522152.mockapi.io/courses/${course_id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers you may need, such as authorization headers
          },
        }
      );
  
      if (response.ok) {
        console.log('Course deleted successfully');
        // Optionally, you can update your component state or trigger a re-fetch here
        // I'll assume you want to re-fetch the courses after deletion
        fetchCourses();
      } else {
        console.error('Failed to delete course');
      }
    } catch (error) {
      console.error('Error deleting course:', error.message);
    }
  }
  
  
// sdit course
async function editCourseHandler(course_id,course_obj)
{
    try {
        const response = await fetch(
          `https://65ba227ab4d53c0665522152.mockapi.io/courses/${course_id}`,
          {
            method: 'PUT', // Use PUT method for updating
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(course_obj),
          }
        );
  
        if (response.ok) {
          console.log('Course updated successfully');
          // Optionally, you can update your component state or trigger a re-fetch here
          // I'll assume you want to re-fetch the courses after updating
          fetchCourses();
        } else {
          console.error('Failed to update course');
        }
      } catch (error) {
        console.error('Error updating course:', error.message);
      }

}


  


  return (
    <>
      <div id="dashboard" className="m-3 Form wrapperDashboard">
        <h1 className="text-center protext-bold">Dashboard </h1>
        {!isAdding && (
          <div>
            <button
              onClick={startAddingHandler}
              className="nav-link  btn btn-border border border-1  protext px-md-3   px-2 mb-5  text-nowrap fw-bold  mt-5 mt-md-0  py-2 addButton"
            >
              Add New Course
            </button>
          </div>
        )}
        {isAdding && <CourseForm onCancel={stopAddingHandler} onAddCourse={addCourseHandler} courseToEdit={courseToEdit} onEditCourse={editCourseHandler}/>}

        {!isLoading && courses.length > 0 && (
         <Table striped>
         <thead>
           <tr>
             <th>#</th>
             <th>Img</th>
             <th>Name</th>
             <th>Instructor</th>
             <th>Level</th>
             <th>Duration</th>
             <th>Description</th>
             <th>Actions</th>
           </tr>
         </thead>
         <tbody>
           {courses.map((course, index) => (
             <tr key={index}>
               <td>{index + 1}</td>
               <td>
                 <img
                   src={`data:image/jpeg;base64,${course.image}`}
                   className="rounded"
                   style={{ width: "100px", height: "100px" }}
                 />
               </td>
               <td>{course.name}</td>
               <td>{course.instructor}</td>
               <td>{course.level}</td>
               <td>{course.duration}</td>
               <td>{course.description}</td>
               <td>
                 <div className="d-flex">
                   <button className="nav-link    px-md-3   px-2 mb-5   mt-5 mt-md-0  py-2 me-1"  onClick={() => startEditingHandler(course)}>
                     <Icon.PencilFill style={{ color: "green" }} />
                   </button>
                   <button className="nav-link    px-md-3   px-2 mb-5    mt-5 mt-md-0  py-2" onClick={() => deleteCourseHandler(course.id)}>
                     <Icon.Trash3 style={{ color: "red" }} />
                   </button>
                 </div>
               </td>
             </tr>
           ))}
         </tbody>
         </Table>
        )}
      
        {isLoading && <div className="text-center m-5 p-5"><h1 className="text-center m-5">Loding.....</h1></div>}
       
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
