
import "./index.css"
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { PiCopyrightThin } from "react-icons/pi";

const Projects=() => {
    return(
      <div className='project-container'>
       <h1 className="title-project">
        Projects
       </h1>

       <div className="project-container-1">
        <img src="https://creative-palmier-2cfa5f.netlify.app/image/project.png" className="project-img" alt="project"/>
        <div className="project-details">
          <h1 className="project-name">Project Name</h1>
          <p className="para">I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</p>
          <button type="button" className="view-btn">View Project</button>
        </div>
       </div>

       <div className="project-container-2">
         <div className="project-details">
          <h1 className="project-name">Project Name</h1>
          <p className="para">I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</p>
          <button type="button" className="view-btn">View Project</button>
        </div>
        <img src="https://creative-palmier-2cfa5f.netlify.app/image/project1.png" className="project-img"  alt="project"/>
      
       </div>

       <div className="project-container-3">
        <img src="https://creative-palmier-2cfa5f.netlify.app/image/project3.png" className="project-img"  alt="project"/>
        <div className="project-details">
          <h1 className="project-name">Project Name</h1>
          <p className="para">I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</p>
          <button type="button" className="view-btn">View Project</button>
        </div>
       </div>

       <div className="social-icons-container">
       <AiFillInstagram  className="icon"/>
        <FaLinkedin className="icon" />
       <IoMdMail className="icon"/>
       </div>
       <p className="copy-text">Copyright <PiCopyrightThin className="copy-icon"/> 2024. All rights reserved</p>

      </div>
    )
  }


export default Projects