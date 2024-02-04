import { Container ,Row ,Col ,Card ,CardBody } from "reactstrap";
import * as Icon from "react-bootstrap-icons";
const Prices = ()=>{
  return(
    <section id="pricing" className="mt-5">
      <Container className="mx-auto">
        <div className="mt-5 ">
          <h2 className="protext fw-bold text-start">
           Our Pricing
          </h2>
          <div className="d-md-flex text-start">
        <div> 
            <span style={{color: "#59595A" }} className="mb-2">Lorem ipsum dolor sit amet consectetur. Tempus
                tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
                eget habitasse in velit fringilla feugiat senectus in.
            </span>
        </div>

        <div className="divcard mb-5 mt-3 mt-md-0 d-md-flex mx-auto d-block ">

            <button type="button" className="btn Loginbtn text-white">Monthly</button>
            <button type="button" className="btn ">Yearly</button>

        </div>
          </div>
          <div className="bg-white  rounded p-mob-lap ">
             <Container>
                <Row>
                    <Col md={6} className="mb-3">
                    <Card className="mb-5 mb-lg-0 btn-border rounded-xl">
                       <CardBody className=" btn-border rounded-xl">
                            <div className="pricingheader protext ">
                                <p>Free Plan</p>
                            </div>
                            <div className="text-center mb-4"> 
                                <span className="protext  display-4 fw-bold">$0</span>
                                <small className="protext-cards  fw-bold">/month</small>
                            </div>
                            <Container fluid="lg">
                              <div className="divcard m-2 P-0 border-0 ">
                                 <div className="text-center protext  p-3">Available Features</div>
                              </div>
                              <Container>
                              <ul className="p-0 ">
                                       
                                        <li>

                                            <div className="divList mb-2">
                                             
                                                <div className="rounded   mx-2 p-2 px-auto  "
                                                    style={{backgroundColor: "#FFF4E5" , width: "fit-content"}}>
                                                    <Icon.Check2/>
                                                </div>
                                                <span className="font-mob-lap" >
                                                    Access to selected free courses.
                                                </span>
                                            </div>
                                        </li>
                                        <li>

                                            <div className="divList mb-2">
                                              
                                                <div className="rounded   mx-2 p-2 px-auto  "
                                                     style={{backgroundColor: "#FFF4E5" , width: "fit-content"}}>
                                                     <Icon.Check2/>
                                                </div>
                                                <span className="font-mob-lap" >
                                                    Limited course materials and resources.
                                                </span>
                                            </div>
                                        </li>
                                        <li>

                                            <div className="divList mb-2">
                                             
                                                <div className="rounded   mx-2 p-2 px-auto  "
                                                    style={{backgroundColor: "#FFF4E5" , width: "fit-content"}}>
                                                      <Icon.Check2/>
                                                </div>
                                                <span className="font-mob-lap" >
                                                    Basic community support.
                                                </span>
                                            </div>
                                        </li>
                                        <li>

                                            <div className="divList mb-2">
                                           
                                                <div className="rounded   mx-2 p-2 px-auto  "
                                                     style={{backgroundColor: "#FFF4E5" , width: "fit-content"}}>
                                                     <Icon.Check2/>
                                                </div>
                                                <span className="font-mob-lap" >
                                                    No certification upon completion.
                                                </span>
                                            </div>
                                        </li>
                                        <li>

                                            <div className="divList mb-2">
                                            
                                                <div className="rounded   mx-2 p-2 px-auto  "
                                                    style={{backgroundColor: "#FFF4E5" , width: "fit-content"}}>
                                                   <Icon.Check2/>
                                                </div>
                                                <span className="font-mob-lap" >
                                                    Ad-supported platform.
                                                </span>
                                            </div>
                                        </li>
                                  
                                        <li>
                                            <div className="divList mb-2">
                                                <div className="card-border p-2 rounded mx-2">
                                                    <Icon.XLg/>
                                                </div>
                                                <span className="font-mob-lap"> Access to exclusive Pro
                                                    Plan
                                                    community forums.
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="divList">
                                                <div className="card-border p-2 rounded mx-2">
                                                <Icon.XLg/>
                                                </div>
                                                <span className="font-mob-lap"> Early access to new courses and updates.
                                                </span>
                                            </div>
                                        </li>

                                    </ul>
                                    
                                    <button href="#"
                                        className=" p-2 w-100   border-0 Loginbtn rounded-bottom ">Get it
                                        Now</button>
                              </Container>
                            </Container>
                       </CardBody>
                    </Card>
                    </Col>
                    <Col md={6} className="mb-3">
                    <Card className="mb-5 mb-lg-0 btn-border rounded-xl">
                       <CardBody className=" btn-border rounded-xl">
                            <div className="pricingheader protext ">
                                <p>Pro Plan</p>
                            </div>
                            <div className="text-center mb-4"> 
                                <span className="protext  display-4 fw-bold">$79</span>
                                <small className="protext-cards  fw-bold">/month</small>
                            </div>
                            <Container fluid="lg">
                              <div className="divcard m-2 P-0 border-0 ">
                                 <div className="text-center protext  p-3">Available Features</div>
                              </div>
                              <Container>
                              <ul className="p-0 ">
                                       
                                        <li>

                                            <div className="divList mb-2">
                                             
                                                <div className="rounded   mx-2 p-2 px-auto  "
                                                    style={{backgroundColor: "#FFF4E5" , width: "fit-content"}}>
                                                    <Icon.Check2/>
                                                </div>
                                                <span className="font-mob-lap" >
                                                Unlimited access to all courses.
                                                </span>
                                            </div>
                                        </li>
                                        <li>

                                            <div className="divList mb-2">
                                              
                                                <div className="rounded   mx-2 p-2 px-auto  "
                                                     style={{backgroundColor: "#FFF4E5" , width: "fit-content"}}>
                                                     <Icon.Check2/>
                                                </div>
                                                <span className="font-mob-lap" >
                                                Priority support from instructors.
                                                </span>
                                            </div>
                                        </li>
                                        <li>

                                            <div className="divList mb-2">
                                             
                                                <div className="rounded   mx-2 p-2 px-auto  "
                                                    style={{backgroundColor: "#FFF4E5" , width: "fit-content"}}>
                                                      <Icon.Check2/>
                                                </div>
                                                <span className="font-mob-lap" >
                                                Unlimited course materials and resources.
                                                </span>
                                            </div>
                                        </li>
                                        <li>

                                            <div className="divList mb-2">
                                           
                                                <div className="rounded   mx-2 p-2 px-auto  "
                                                     style={{backgroundColor: "#FFF4E5" , width: "fit-content"}}>
                                                     <Icon.Check2/>
                                                </div>
                                                <span className="font-mob-lap" >
                                                Course completion certificates.
                                                </span>
                                            </div>
                                        </li>
                                        <li>

                                            <div className="divList mb-2">
                                            
                                                <div className="rounded   mx-2 p-2 px-auto  "
                                                    style={{backgroundColor: "#FFF4E5" , width: "fit-content"}}>
                                                   <Icon.Check2/>
                                                </div>
                                                <span className="font-mob-lap" >
                                                Ad-free experience.
                                                </span>
                                            </div>
                                        </li>
                                        <li>

                                         <div className="divList mb-2">

                                          <div className="rounded   mx-2 p-2 px-auto  "
                                            style={{backgroundColor: "#FFF4E5" , width: "fit-content"}}>
                                            <Icon.Check2/>
                                          </div>
                                         <span className="font-mob-lap" >
                                           Access to exclusive Pro Plan community forums.
                                         </span>

                                         </div>
                                        </li>
                                        <li>

                                            <div className="divList mb-2">

                                              <div className="rounded   mx-2 p-2 px-auto  "
                                                 style={{backgroundColor: "#FFF4E5" , width: "fit-content"}}>
                                              <Icon.Check2/>
                                              </div>
                                            <span className="font-mob-lap" >
                                              Early access to new courses and updates.
                                            </span>

                                            </div>
                                        </li>
                                  
                                

                                    </ul>

                                    <button href="#"
                                        className=" p-2 w-100   border-0 Loginbtn rounded-bottom ">Get it
                                        Now</button>
                              </Container>
                            </Container>
                       </CardBody>
                    </Card>
                    </Col>
                </Row>
             </Container>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Prices;


//  <div className="container mx-auto">

// <div className="mt-5">
//     <h2 className="protext fw-bold">
//     </h2>
//     <div className="d-md-flex">
//         <div> <span style="color: #59595A ;" className="mb-2">Lorem ipsum dolor sit amet consectetur. Tempus
//                 tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
//                 eget
//                 habitasse in velit fringilla feugiat senectus in.</span>
//         </div>

//         <div className="divcard mb-5 mt-3 mt-md-0 d-md-flex mx-auto d-block ">

//             <button type="button" className="btn Loginbtn text-white">Monthly</button>
//             <button type="button" className="btn ">Yearly</button>

//         </div>
//     </div>

//     <div className="bg-white  rounded p-mob-lap ">
//         <div className="container">
//             <div className="row">


//                 <div className="col-md-6 mb-3">
//                     <div className="card mb-5 mb-lg-0 btn-border rounded-xl">
//                         <div className="card-body  btn-border rounded-xl">
//                             <div className="pricingheader protext ">
//                                 <p>Free Plan</p>
//                             </div>
//                             <div className="text-center mb-4"> 
//                                 <span className="protext  display-4 fw-bold">$0</span>
//                                 <small className="protext-cards  fw-bold">/month</small>
//                             </div>
                       
//                             <div className="container-lg"> 
                                
//                               <div className="divcard m-2 P-0 ">

//                                 <div className="text-center protext  p-3">Available Features</div>
//                                 <div className="container">
//                                     <ul className="p-0">
//                                          <!--inclusive-->
//                                         <li>

//                                             <div className="divList mb-2">
//                                                 <!-- div included bdal elly ta7taha -->
//                                                 <div className="rounded   mx-2 p-2 px-auto  "
//                                                     style="background-color: #FFF4E5 ; width: fit-content; ">
//                                                     <i className="bi bi-check2"></i>
//                                                 </div>
//                                                 <span className="font-mob-lap" >
//                                                     Access to selected free courses.
//                                                 </span>
//                                             </div>
//                                         </li>
//                                         <li>

//                                             <div className="divList mb-2">
//                                                 <!-- div included bdal elly ta7taha -->
//                                                 <div className="rounded   mx-2 p-2 px-auto  "
//                                                     style="background-color: #FFF4E5 ; width: fit-content; ">
//                                                     <i className="bi bi-check2"></i>
//                                                 </div>
//                                                 <span className="font-mob-lap" >
//                                                     Limited course materials and resources.
//                                                 </span>
//                                             </div>
//                                         </li>
//                                         <li>

//                                             <div className="divList mb-2">
//                                                 <!-- div included bdal elly ta7taha -->
//                                                 <div className="rounded   mx-2 p-2 px-auto  "
//                                                     style="background-color: #FFF4E5 ; width: fit-content; ">
//                                                     <i className="bi bi-check2"></i>
//                                                 </div>
//                                                 <span className="font-mob-lap" >
//                                                     Basic community support.
//                                                 </span>
//                                             </div>
//                                         </li>
//                                         <li>

//                                             <div className="divList mb-2">
//                                                 <!-- div included bdal elly ta7taha -->
//                                                 <div className="rounded   mx-2 p-2 px-auto  "
//                                                     style="background-color: #FFF4E5 ; width: fit-content; ">
//                                                     <i className="bi bi-check2"></i>
//                                                 </div>
//                                                 <span className="font-mob-lap" >
//                                                     No certification upon completion.
//                                                 </span>
//                                             </div>
//                                         </li>
//                                         <li>

//                                             <div className="divList mb-2">
//                                                 <!-- div included bdal elly ta7taha -->
//                                                 <div className="rounded   mx-2 p-2 px-auto  "
//                                                     style="background-color: #FFF4E5 ; width: fit-content; ">
//                                                     <i className="bi bi-check2"></i>
//                                                 </div>
//                                                 <span className="font-mob-lap" >
//                                                     Ad-supported platform.
//                                                 </span>
//                                             </div>
//                                         </li>
//                                         <!--exclusive-->
//                                         <li>
//                                             <div className="divList mb-2">
//                                                 <div className="card-border p-2 rounded mx-2">
//                                                     <i className="bi bi-x-lg"></i>
//                                                 </div>
//                                                 <span className="font-mob-lap"> Access to exclusive Pro
//                                                     Plan
//                                                     community forums.
//                                                 </span>
//                                             </div>
//                                         </li>
//                                         <li>
//                                             <div className="divList">
//                                                 <div className="card-border p-2 rounded mx-2">
//                                                     <i className="bi bi-x-lg"></i>
//                                                 </div>
//                                                 <span className="font-mob-lap"> Early access to new courses and updates.
//                                                 </span>
//                                             </div>
//                                         </li>

//                                     </ul>
//                                 </div>
                                
                               





//                                 <button href="#"
//                                     className=" p-2 w-100   border-0 Loginbtn rounded-bottom ">Get it
//                                     Now</button>

//                             </div>
//                         </div>
                              
                         




//                             <!-- <hr>
//                             <ul className="fa-ul">
//                                 <li><span className="fa-li"><i className="fas fa-check"></i></span>Single User</li>
//                                 <li><span className="fa-li"><i className="fas fa-check"></i></span>5GB Storage</li>
//                                 <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public
//                                     Projects</li>
//                                 <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access
//                                 </li>
//                                 <li className="text-muted"><span className="fa-li"><i
//                                             className="fas fa-times"></i></span>Unlimited
//                                     Private Projects</li>
//                                 <li className="text-muted"><span className="fa-li"><i
//                                             className="fas fa-times"></i></span>Dedicated
//                                     Phone Support</li>
//                                 <li className="text-muted"><span className="fa-li"><i
//                                             className="fas fa-times"></i></span>Free Subdomain
//                                 </li>
//                                 <li className="text-muted"><span className="fa-li"><i
//                                             className="fas fa-times"></i></span>Monthly Status
//                                     Reports</li>
//                             </ul>
//                             <div className="d-grid">
//                                 <a href="#" className="btn btn-primary text-uppercase">Button</a>
//                             </div> -->
//                         </div>
//                     </div>
//                 </div>

//                 <div className="col-md-6 mb-3">
//                     <div className=" mb-5 mb-lg-0 btn-border rounded-xl">
//                         <div className="card-body btn-border rounded-xl ">
//                             <div className="pricingheader protext ">
//                                 <p>Pro Plan</p>
//                             </div>
//                             <div className="text-center mb-4"> <span
//                                     className="protext  display-4 fw-bold">$79</span>
//                                 <small className="protext-cards  fw-bold">/month</small>
//                             </div>
//                             <div className="container-lg">
//                                 <div className="divcard m-2 P-0 ">

//                                     <div className="text-center protext  p-3">Available Features</div>
//                                   <div className="container">
//                                     <ul className="p-0">
//                                         <!--inclusive-->
//                                         <li>

//                                             <div className="divList mb-2">
                                             
//                                                 <div className="rounded   mx-2 p-2 px-auto  "
//                                                     style="background-color: #FFF4E5 ; width: fit-content; ">
//                                                     <i className="bi bi-check2"></i>
//                                                 </div>
//                                                 <span className="font-mob-lap">
//                                                     Unlimited access to all courses.
//                                                 </span>
//                                             </div>
//                                         </li>
//                                         <li>

//                                             <div className="divList mb-2">
                                             
//                                                 <div className="rounded   mx-2 p-2 px-auto  "
//                                                     style="background-color: #FFF4E5 ; width: fit-content; ">
//                                                     <i className="bi bi-check2"></i>
//                                                 </div>
//                                                 <span className="font-mob-lap">
//                                                     Unlimited course materials and resources.
//                                                 </span>
//                                             </div>
//                                         </li>
//                                         <li>

//                                             <div className="divList mb-2">
                                             
//                                                 <div className="rounded   mx-2 p-2 px-auto  "
//                                                     style="background-color: #FFF4E5 ; width: fit-content; ">
//                                                     <i className="bi bi-check2"></i>
//                                                 </div>
//                                                 <span className="font-mob-lap">
//                                                     Priority support from instructors.
//                                                 </span>
//                                             </div>
//                                         </li>
//                                         <li>

//                                             <div className="divList mb-2">
                                             
//                                                 <div className="rounded   mx-2 p-2 px-auto  "
//                                                     style="background-color: #FFF4E5 ; width: fit-content; ">
//                                                     <i className="bi bi-check2"></i>
//                                                 </div>
//                                                 <span className="font-mob-lap">
//                                                     Course completion certificates.
//                                                 </span>
//                                             </div>
//                                         </li>
//                                         <li>

//                                             <div className="divList mb-2">
                                             
//                                                 <div className="rounded   mx-2 p-2 px-auto  "
//                                                     style="background-color: #FFF4E5 ; width: fit-content; ">
//                                                     <i className="bi bi-check2"></i>
//                                                 </div>
//                                                 <span className="font-mob-lap">
//                                                     Ad-free experience.
//                                                 </span>
//                                             </div>
//                                         </li>
//                                         <li>

//                                             <div className="divList mb-2">
                                             
//                                                 <div className="rounded   mx-2 p-2 px-auto  "
//                                                     style="background-color: #FFF4E5 ; width: fit-content; ">
//                                                     <i className="bi bi-check2"></i>
//                                                 </div>
//                                                 <span className="font-mob-lap">
//                                                     Access to exclusive Pro Plan community forums.
//                                                 </span>
//                                             </div>
//                                         </li>
//                                         <li>

//                                             <div className="divList mb-2">
                                             
//                                                 <div className="rounded   mx-2 p-2 px-auto  "
//                                                     style="background-color: #FFF4E5 ; width: fit-content; ">
//                                                     <i className="bi bi-check2"></i>
//                                                 </div>
//                                                 <span className="font-mob-lap">
//                                                    Early access to new courses and updates.
//                                                 </span>
//                                             </div>
//                                         </li>
//                                     </ul>
//                                   </div>
                                        
                                





//                                     <button href="#"
//                                         className=" p-2 w-100   border-0 Loginbtn rounded-bottom ">Get it
//                                         Now</button>

//                                 </div>
//                             </div>


                           
//                         </div>
//                     </div>
//                 </div>





//             </div>
//         </div>
     
//     </div>


// </div>


// </div> 