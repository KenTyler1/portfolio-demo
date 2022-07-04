import "./footer.css";

import { BsMouse, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import {
  TiSocialDribbble,
  TiSocialYoutube,
  TiSocialGithub,
} from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        That's all
        <a href="#home">
          <h2>
            <BsMouse /> -scroll up-
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://www.instagram.com/tang.giakhanh/">
          <BsInstagram className="social" />
        </a>
        <a href="https://www.facebook.com/Tonykhanh.vn">
          <FaFacebookF className="social" />
        </a>
        <a href="https://dribbble.com/TonyKhanh">
          <TiSocialDribbble className="social" />
        </a>
        <a href="https://www.youtube.com/channel/UCKIY0XnP6off0x-PwmuSCSA">
          <TiSocialYoutube className="social" />
        </a>
        <a href="https://github.com/KenTyler1">
          <TiSocialGithub className="social" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
