import Navigation from '../Navigation'
import AddProject from '../AddProject';
import "./index.css"
const About = () => {
  return (
    <div className='container'>
      <div className="nav-bar">
      <Navigation />
      </div>
      <div className='content'>
      <div className="text-side">
          <h1 className='role'>FULL STACK DEVELOPER</h1>
          <h1 className='name'>Hello, my name is <br/> Manjunath Matapathi</h1>
          <p className='about-text'>I'm a recent graduate excited about software development. Eager to apply my skills and learn from experienced professionals in the software industry.</p>

          <div className="btn-container">
            <button type="button" className="project-btn">Projects</button>
            <button type="button" className="linkedin-btn">Linkedin</button>
          </div>
     </div>
     <div className='image-container'>
      <img src='https://creative-palmier-2cfa5f.netlify.app/image/profile.png' alt='protfolio' className='portfolio-image' />
     </div>
      </div>
    <AddProject />
    </div>
  );
};

export default About;