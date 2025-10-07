import logo from './logo.svg';
import './App.css';
import react from 'react';
import myPhoto from './IMG_9241.JPG';

function App() {
  return (
   
        <div className="App">
            <div className="Nav-bar">
              <nav className="Navbar">

              <p>Samhitha Basireddy</p>
              <a href="About Me">About me</a>
              <a href="Skills">Skills</a>
              <a href="Education">Education</a>
              <a href="Projects">Projects</a>
              <a href="Certificates">Certificates</a>
              </nav>
            </div>
            <div className="Intro">
             
                
              
            
            <div className="Image">
              <img src={myPhoto} alt="Samhitha Basireddy" width="400" height="400"/>
            </div>
            <div className="Info">
              <h2>Hey, I’m Samhitha</h2>
              <p>a passionate learner and creative individual who loves turning ideas into reality. I enjoy exploring new technologies, improving my skills every day, and bringing a blend of creativity and logic into everything I do. Welcome to my portfolio!</p>
            </div>
            </div>
            
              
               </div>
            
            
  );
}

export default App;
