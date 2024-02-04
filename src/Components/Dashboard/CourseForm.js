import "./CourseForm.css";
import { Row, Col } from "reactstrap";
import { useState ,useEffect} from "react";
import axios from "axios";
const CourseForm = (props) => {
    const [course_name, setName] = useState("");
    const [course_instructor, setInstructor] = useState("");
    const [course_description, setDescription] = useState("");
    const [course_level, setLevel] = useState("");
    const [course_duration, setDuration] = useState("");
    const [course_img, setImage] = useState("");
  
    useEffect(() => {
      // Set initial values if editing
      if (props.courseToEdit) {
        const {
          name,
          instructor,
          description,
          level,
          duration,
          img,
        } = props.courseToEdit;
  
        setName(name || "");
        setInstructor(instructor || "");
        setDescription(description || "");
        setLevel(level || "");
        setDuration(duration || "");
        setImage(img );
      }
    }, [props.courseToEdit]);
  
   
function imgHandler(event) {
    const imgFile = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = () => {
      compressImage(reader.result);
    };
  
    reader.readAsDataURL(imgFile);
  }
  
  function compressImage(dataUrl) {
    const img = new Image();
    img.src = dataUrl;
  
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
  
      // Set the canvas dimensions to the original image size
      canvas.width = img.width;
      canvas.height = img.height;
  
      // Draw the image on the canvas
      ctx.drawImage(img, 0, 0);
  
      // Compress the image by converting it to Blob with a specified quality
      canvas.toBlob(
        (blob) => {
          const reader = new FileReader();
  
          reader.onloadend = () => {
            // Convert the compressed image to base64
            const compressedBase64Image = reader.result.split(',')[1];
            setImage(compressedBase64Image);
          };
  
          // Read the compressed image Blob as data URL
          reader.readAsDataURL(blob);
        },
        'image/jpeg', // Specify the image format (adjust as needed)
        0.8 // Specify the quality (0.0 to 1.0)
      );
    };
  }
  
   
   





   function instructorHandler(event)
   {
    setInstructor(event.target.value);
    
   }

   function nameHandler(event)
   {
    setName(event.target.value);

   }

   function descriptionHandler(event)
   {
    setDescription(event.target.value);

   }

   function durationHandler(event)
   {
    setDuration(event.target.value);

   }

   function levelHandler(event)
   {
    setLevel(event.target.value);

   }

   function submitHandler(event) {
    event.preventDefault();

    const course = {
      img: course_img,
      duration: course_duration,
      level: course_level,
      instructor: course_instructor,
      name: course_name,
      description: course_description,
    };

    if (props.courseToEdit) {
      // If courseToEdit exists, it's editing, call onEditCourse
      props.onEditCourse(props.courseToEdit.id, course);
    } else {
      // If courseToEdit doesn't exist, it's adding, call onAddCourse
      props.onAddCourse(course);
    }

    props.onCancel();
  }
  return (
    <div className="mt-5">
      <form className="my-5" onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <Row>
            <Col md={6} className="my-1">
              <div className="new-expense__control">
                <label>Course Image</label>
                <input type="file"
                
                onChange={imgHandler} />
              </div>
            </Col>
            <Col md={6}className="my-1">
              <div className="new-expense__control">
                <label>Course Instructor</label>
                <input type="text" 
                 value={course_instructor} 
                onChange={instructorHandler}/>
              </div>
            </Col>
            <Col md={6}className="my-1">
              <div className="new-expense__control">
                <label>Course Name</label>
                <input type="text"
                  value={course_name} 
                 onChange={nameHandler}/>
              </div>
            </Col>
            <Col md={6}className="my-1">
              <div className="new-expense__control">
                <label>Course Description</label>
                <textarea 
                  value={course_description} 
                type="text" className="  rounded" style={{width:"320px" , border:" 1px solid #ccc"}} onChange={descriptionHandler}/>
              </div>
            </Col>
           
            <Col md={6} className="my-1">
              {" "}
              <div className="new-expense__control">
                <label>Course Duration</label>
                <input type="text"
                  value={course_duration} 
                   onChange={durationHandler}/>
              </div>
            </Col>

            <Col md={6} className="my-1">
              {" "}
              <div className="new-expense__control">
                <label>Course Level</label>
                <input type="text" 
                  value={course_level} 
                  onChange={levelHandler}/>
              </div>
            </Col>

          </Row>
        </div>
        <div className="new-expense__actions">
          <button
            type="submit"
            className=" btn btn-border border border-1  protext px-md-3   px-2 mb-5  text-nowrap fw-bold mt-5  py-2"
          >
             {props.courseToEdit ? "Update Course" : "Add Course"}
          </button>
          <button
            onClick={props.onCancel}
            className=" btn btn-border border border-1  protext px-md-3   px-2 mb-5  text-nowrap fw-bold mt-5  py-2 ms-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseForm;
