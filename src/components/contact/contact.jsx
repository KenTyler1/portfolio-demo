import "./contact.css";

import {
  AiOutlineYoutube,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
} from "react-icons/ai";


function Contact() {
    return ( 
        <div className="container contact-container">
            <h1>Contact me</h1>
            <div className="contact-links">
                <a href="https://www.youtube.com/channel/UCKIY0XnP6off0x-PwmuSCSA" className="contact youtube">
                    <AiOutlineYoutube className="icon" />
                    <h2>Youtube<span>Broadcast Yourself</span></h2>
                </a>

                <a href="/#" className="contact whatsapp">
                    <AiOutlineWhatsApp className="icon" />
                    <h2>Phone number<span>0328 688 481</span></h2>
                </a>

                <a href="https://www.instagram.com/tang.giakhanh/" className="contact instagram">
                    <AiOutlineInstagram className="icon" />
                    <h2>Instagram<span>Creative Ambition</span></h2>
                </a>
            </div>
        </div>
     );
}

export default Contact;