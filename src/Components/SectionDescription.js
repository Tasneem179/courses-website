import './SectionDescription.css'

const SectionDescription = (props)=>{
  return (
    <div>
                <h2 className="protext fw-bold">
                       { props.sectionName}
                    </h2>
                    <div className="d-md-flex">
                        <span className="SectionDescriptionColor">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                            eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in
                            velit fringilla feugiat senectus in.</span>
                        <button
                            className="nav-link  btn btn-border border border-1  protext px-md-3   px-2 mb-5  text-nowrap fw-bold  mt-3 mt-md-0  py-2"
                            href="#">View All</button>


                    </div>
    </div>
  );
}

export default SectionDescription;