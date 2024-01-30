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
                                        class=" p-2 w-100   border-0 Loginbtn rounded-bottom ">Get it
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
                                        class=" p-2 w-100   border-0 Loginbtn rounded-bottom ">Get it
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


//  <div class="container mx-auto">

// <div class="mt-5">
//     <h2 class="protext fw-bold">
//     </h2>
//     <div class="d-md-flex">
//         <div> <span style="color: #59595A ;" class="mb-2">Lorem ipsum dolor sit amet consectetur. Tempus
//                 tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
//                 eget
//                 habitasse in velit fringilla feugiat senectus in.</span>
//         </div>

//         <div class="divcard mb-5 mt-3 mt-md-0 d-md-flex mx-auto d-block ">

//             <button type="button" class="btn Loginbtn text-white">Monthly</button>
//             <button type="button" class="btn ">Yearly</button>

//         </div>
//     </div>

//     <div class="bg-white  rounded p-mob-lap ">
//         <div class="container">
//             <div class="row">


//                 <div class="col-md-6 mb-3">
//                     <div class="card mb-5 mb-lg-0 btn-border rounded-xl">
//                         <div class="card-body  btn-border rounded-xl">
//                             <div class="pricingheader protext ">
//                                 <p>Free Plan</p>
//                             </div>
//                             <div class="text-center mb-4"> 
//                                 <span class="protext  display-4 fw-bold">$0</span>
//                                 <small class="protext-cards  fw-bold">/month</small>
//                             </div>
                       
//                             <div class="container-lg"> 
                                
//                               <div class="divcard m-2 P-0 ">

//                                 <div class="text-center protext  p-3">Available Features</div>
//                                 <div class="container">
//                                     <ul class="p-0">
//                                          <!--inclusive-->
//                                         <li>

//                                             <div class="divList mb-2">
//                                                 <!-- div included bdal elly ta7taha -->
//                                                 <div class="rounded   mx-2 p-2 px-auto  "
//                                                     style="background-color: #FFF4E5 ; width: fit-content; ">
//                                                     <i class="bi bi-check2"></i>
//                                                 </div>
//                                                 <span class="font-mob-lap" >
//                                                     Access to selected free courses.
//                                                 </span>
//                                             </div>
//                                         </li>
//                                         <li>

//                                             <div class="divList mb-2">
//                                                 <!-- div included bdal elly ta7taha -->
//                                                 <div class="rounded   mx-2 p-2 px-auto  "
//                                                     style="background-color: #FFF4E5 ; width: fit-content; ">
//                                                     <i class="bi bi-check2"></i>
//                                                 </div>
//                                                 <span class="font-mob-lap" >
//                                                     Limited course materials and resources.
//                                                 </span>
//                                             </div>
//                                         </li>
//                                         <li>

//                                             <div class="divList mb-2">
//                                                 <!-- div included bdal elly ta7taha -->
//                                                 <div class="rounded   mx-2 p-2 px-auto  "
//                                                     style="background-color: #FFF4E5 ; width: fit-content; ">
//                                                     <i class="bi bi-check2"></i>
//                                                 </div>
//                                                 <span class="font-mob-lap" >
//                                                     Basic community support.
//                                                 </span>
//                                             </div>
//                                         </li>
//                                         <li>

//                                             <div class="divList mb-2">
//                                                 <!-- div included bdal elly ta7taha -->
//                                                 <div class="rounded   mx-2 p-2 px-auto  "
//                                                     style="background-color: #FFF4E5 ; width: fit-content; ">
//                                                     <i class="bi bi-check2"></i>
//                                                 </div>
//                                                 <span class="font-mob-lap" >
//                                                     No certification upon completion.
//                                                 </span>
//                                             </div>
//                                         </li>
//                                         <li>

//                                             <div class="divList mb-2">
//                                                 <!-- div included bdal elly ta7taha -->
//                                                 <div class="rounded   mx-2 p-2 px-auto  "
//                                                     style="background-color: #FFF4E5 ; width: fit-content; ">
//                                                     <i class="bi bi-check2"></i>
//                                                 </div>
//                                                 <span class="font-mob-lap" >
//                                                     Ad-supported platform.
//                                                 </span>
//                                             </div>
//                                         </li>
//                                         <!--exclusive-->
//                                         <li>
//                                             <div class="divList mb-2">
//                                                 <div class="card-border p-2 rounded mx-2">
//                                                     <i class="bi bi-x-lg"></i>
//                                                 </div>
//                                                 <span class="font-mob-lap"> Access to exclusive Pro
//                                                     Plan
//                                                     community forums.
//                                                 </span>
//                                             </div>
//                                         </li>
//                                         <li>
//                                             <div class="divList">
//                                                 <div class="card-border p-2 rounded mx-2">
//                                                     <i class="bi bi-x-lg"></i>
//                                                 </div>
//                                                 <span class="font-mob-lap"> Early access to new courses and updates.
//                                                 </span>
//                                             </div>
//                                         </li>

//                                     </ul>
//                                 </div>
                                
                               





//                                 <button href="#"
//                                     class=" p-2 w-100   border-0 Loginbtn rounded-bottom ">Get it
//                                     Now</button>

//                             </div>
//                         </div>
                              
                         




//                             <!-- <hr>
//                             <ul class="fa-ul">
//                                 <li><span class="fa-li"><i class="fas fa-check"></i></span>Single User</li>
//                                 <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Storage</li>
//                                 <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public
//                                     Projects</li>
//                                 <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access
//                                 </li>
//                                 <li class="text-muted"><span class="fa-li"><i
//                                             class="fas fa-times"></i></span>Unlimited
//                                     Private Projects</li>
//                                 <li class="text-muted"><span class="fa-li"><i
//                                             class="fas fa-times"></i></span>Dedicated
//                                     Phone Support</li>
//                                 <li class="text-muted"><span class="fa-li"><i
//                                             class="fas fa-times"></i></span>Free Subdomain
//                                 </li>
//                                 <li class="text-muted"><span class="fa-li"><i
//                                             class="fas fa-times"></i></span>Monthly Status
//                                     Reports</li>
//                             </ul>
//                             <div class="d-grid">
//                                 <a href="#" class="btn btn-primary text-uppercase">Button</a>
//                             </div> -->
//                         </div>
//                     </div>
//                 </div>

//                 <div class="col-md-6 mb-3">
//                     <div class=" mb-5 mb-lg-0 btn-border rounded-xl">
//                         <div class="card-body btn-border rounded-xl ">
//                             <div class="pricingheader protext ">
//                                 <p>Pro Plan</p>
//                             </div>
//                             <div class="text-center mb-4"> <span
//                                     class="protext  display-4 fw-bold">$79</span>
//                                 <small class="protext-cards  fw-bold">/month</small>
//                             </div>
//                             <div class="container-lg">
//                                 <div class="divcard m-2 P-0 ">

//                                     <div class="text-center protext  p-3">Available Features</div>
//                                   <div class="container">
//                                     <ul class="p-0">
//                                         <!--inclusive-->
//                                         <li>

//                                             <div class="divList mb-2">
                                             
//                                                 <div class="rounded   mx-2 p-2 px-auto  "
//                                                     style="background-color: #FFF4E5 ; width: fit-content; ">
//                                                     <i class="bi bi-check2"></i>
//                                                 </div>
//                                                 <span class="font-mob-lap">
//                                                     Unlimited access to all courses.
//                                                 </span>
//                                             </div>
//                                         </li>
//                                         <li>

//                                             <div class="divList mb-2">
                                             
//                                                 <div class="rounded   mx-2 p-2 px-auto  "
//                                                     style="background-color: #FFF4E5 ; width: fit-content; ">
//                                                     <i class="bi bi-check2"></i>
//                                                 </div>
//                                                 <span class="font-mob-lap">
//                                                     Unlimited course materials and resources.
//                                                 </span>
//                                             </div>
//                                         </li>
//                                         <li>

//                                             <div class="divList mb-2">
                                             
//                                                 <div class="rounded   mx-2 p-2 px-auto  "
//                                                     style="background-color: #FFF4E5 ; width: fit-content; ">
//                                                     <i class="bi bi-check2"></i>
//                                                 </div>
//                                                 <span class="font-mob-lap">
//                                                     Priority support from instructors.
//                                                 </span>
//                                             </div>
//                                         </li>
//                                         <li>

//                                             <div class="divList mb-2">
                                             
//                                                 <div class="rounded   mx-2 p-2 px-auto  "
//                                                     style="background-color: #FFF4E5 ; width: fit-content; ">
//                                                     <i class="bi bi-check2"></i>
//                                                 </div>
//                                                 <span class="font-mob-lap">
//                                                     Course completion certificates.
//                                                 </span>
//                                             </div>
//                                         </li>
//                                         <li>

//                                             <div class="divList mb-2">
                                             
//                                                 <div class="rounded   mx-2 p-2 px-auto  "
//                                                     style="background-color: #FFF4E5 ; width: fit-content; ">
//                                                     <i class="bi bi-check2"></i>
//                                                 </div>
//                                                 <span class="font-mob-lap">
//                                                     Ad-free experience.
//                                                 </span>
//                                             </div>
//                                         </li>
//                                         <li>

//                                             <div class="divList mb-2">
                                             
//                                                 <div class="rounded   mx-2 p-2 px-auto  "
//                                                     style="background-color: #FFF4E5 ; width: fit-content; ">
//                                                     <i class="bi bi-check2"></i>
//                                                 </div>
//                                                 <span class="font-mob-lap">
//                                                     Access to exclusive Pro Plan community forums.
//                                                 </span>
//                                             </div>
//                                         </li>
//                                         <li>

//                                             <div class="divList mb-2">
                                             
//                                                 <div class="rounded   mx-2 p-2 px-auto  "
//                                                     style="background-color: #FFF4E5 ; width: fit-content; ">
//                                                     <i class="bi bi-check2"></i>
//                                                 </div>
//                                                 <span class="font-mob-lap">
//                                                    Early access to new courses and updates.
//                                                 </span>
//                                             </div>
//                                         </li>
//                                     </ul>
//                                   </div>
                                        
                                





//                                     <button href="#"
//                                         class=" p-2 w-100   border-0 Loginbtn rounded-bottom ">Get it
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