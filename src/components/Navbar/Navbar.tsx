import { useState } from "react";
import "./Navbar.css";
import Navmenu from "./Navmenu";

function Navbar() {
   const [isMenuOpen, setMenuOpen] = useState(false);

   return (
      <>
         <ul className="navbar-main">
            <div className="navbar-container glassmorphism">
               <li>
                  <a href="#about">About</a>
               </li>
               <li>
                  <a href="#projects">Projects</a>
               </li>
               <li>
                  <a href="#events">Events</a>
               </li>
               <li>
                  <a href="#achievements">Achievements</a>
               </li>
               <li>
                  <a href="#members">Members</a>
               </li>
            </div>

            <div
               className="navmenu-btn"
               onClick={() => setMenuOpen(!isMenuOpen)}
            >
               <div
                  className={
                     !isMenuOpen ? "top-line" : "top-line top-line-menu-open"
                  }
               ></div>
               <div
                  className={
                     !isMenuOpen
                        ? "middle-line"
                        : "middle-line middle-line-menu-open"
                  }
               ></div>
               <div
                  className={
                     !isMenuOpen
                        ? "bottom-line"
                        : "bottom-line bottom-line-menu-open"
                  }
               ></div>
            </div>
         </ul>
         <Navmenu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      </>
   );
}

export default Navbar;
