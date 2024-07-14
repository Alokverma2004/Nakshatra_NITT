import { useState } from "react";
import rocket from "../../assets/images/rocket.png";
import logo from "../../assets/images/nakshatra-logo.png";
import "./Title.css";

function Title() {
   const [rocketLandStatus, setRocketLandStatus] = useState(false);

   return (
      <div className="title-main">
         {!rocketLandStatus && (
            <img
               src={rocket}
               alt="not supported"
               className="rocket"
               onAnimationEnd={() => setRocketLandStatus(true)}
            />
         )}

         <div
            className={
               !rocketLandStatus
                  ? "title-container title-not-visible"
                  : "title-container title-visible"
            }
         >
            <img src={logo} alt="not supported" className="nakshatra-logo" />
            <h1>Nakshatra</h1>
            <p>The astronomy and science club of nitt</p>
            <button className="join-btn">Join</button>
         </div>
      </div>
   );
}

export default Title;
