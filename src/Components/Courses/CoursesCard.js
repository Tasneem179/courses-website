import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardLink,
    ListGroup,
    ListGroupItem,
    Button
  } from "reactstrap";
 
import './CoursesCard.css'
  
  const CoursesCard = (props) => {
    return (
      
        <Card className="border-0 rounded mb-3 p-4 course-card">
            
            <img alt="Sample" src={`data:image/jpeg;base64,${props.courseImage}`} className="rounded" />
           
       
        <CardBody>
          <div className="d-md-flex justify-content-between ">

           <div>
              <div className="divcard me-1"> {props.duration} </div>
              <div className="divcard"> {props.level} </div>
           </div>
             
            <div className="protext fw-bold ">
              <small>{props.instructor}</small>
            </div>

          </div>
          <CardSubtitle className="mb-2  lead protext fw-bold mt-2">
           {props.courseName}
          </CardSubtitle>
          <CardText className="protext-cards">
          {props.description}
          </CardText>
          <div>
            <button href="#" className="card-link p-2 w-100  protext-cards btn-cards">Get it Now</button>
          </div>
        </CardBody>
      </Card>
    );
  };
  
  export default CoursesCard;


  
  