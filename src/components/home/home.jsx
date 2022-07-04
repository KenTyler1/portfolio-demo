import "./home.css";
import img from "../props/img2.jpg";
import Buttons from "../button/button";
import { BsMouse } from "react-icons/bs";

function Home() {
  return (
    <div id="home" className="container home-container">
      <div className="Logo">
        <div className="main-img active">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
        <img src={img} alt="" />
      </div>
      <a href="#footer" className="scroll-down">
        <hr />
        <h5>scroll down</h5>
        <BsMouse className="scroll" />
        <hr />
      </a>
      <h2>
        <span id="text-decoration">About Me</span> <br />
        <p id="text-center">I am the final year student who has spent 4 years during my university time studying hard and imporving my skills in my major's Computer Science.</p>
        <p id="text-center">With diligence, hard work, research and the ability to read and understand English documents well. I believe that I will develop on my own career path.</p>
      </h2>
      <Buttons />
    </div>
  );
}

// const toggle = document.querySelector(".main-img");

// toggle?.addEventListener("click", () => {
//   toggle.classList.toggle("active");
// });

export default Home;
