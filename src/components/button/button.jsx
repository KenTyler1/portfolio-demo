import "./button.css";

function Buttons() {
  return (
    <div className="container button-contain">
      <a href="#about" className="btn pri">
        Learn more 
      </a>
      <span id="margin">|</span>
      <a href="#contact" className="btn sec">
        Get in touch
      </a>
    </div>
  );
}

export default Buttons;
