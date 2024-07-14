import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faInstagram,
   faXTwitter,
   faMedium,
   faYoutube,
   faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./SocialHandles.css";

interface SocialHandlesInterface {
   isVisible?: Boolean;
}

function SocialHandles({ isVisible }: SocialHandlesInterface) {
   return (
      <div className={isVisible ? "socials-main" : "socials-main hide-socials"}>
         <a href="https://www.instagram.com/nakshatra_nitt/">
            <FontAwesomeIcon icon={faInstagram} className="socials-icon" />
         </a>
         <a href="https://twitter.com/NakshatraNITT">
            <FontAwesomeIcon icon={faXTwitter} className="socials-icon" />
         </a>
         <a href="https://medium.com/nakshatra">
            <FontAwesomeIcon icon={faMedium} className="socials-icon" />
         </a>
         <a href="https://www.youtube.com/channel/UCetB13q6XVirl8Ijf8tJToA">
            <FontAwesomeIcon icon={faYoutube} className="socials-icon" />
         </a>
         <a href="https://www.linkedin.com/company/nakshatra-nit-trichy">
            <FontAwesomeIcon icon={faLinkedin} className="socials-icon" />
         </a>
      </div>
   );
}

export default SocialHandles;
