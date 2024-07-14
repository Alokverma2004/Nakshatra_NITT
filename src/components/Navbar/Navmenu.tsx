import { useEffect } from "react";
import "./Navmenu.css";

interface NavmenuInterface {
   isMenuOpen: boolean;
   setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navmenu({ isMenuOpen, setMenuOpen }: NavmenuInterface) {   

   useEffect(() => {
      document.body.style.overflow = isMenuOpen ? "hidden" : "visible";
   }, [isMenuOpen])

   return (
      <div
         className={
            isMenuOpen
               ? "navmenu menu-drop-animation"
               : "navmenu reverse-menu-drop-animation"
         }
      >
         <a href="#about" onClick={() => setMenuOpen(false)}>
            About
         </a>
         <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
         </a>
         <a href="#events" onClick={() => setMenuOpen(false)}>
            Events
         </a>
         <a href="#achievements" onClick={() => setMenuOpen(false)}>
            Achievements
         </a>
         <a href="#members" onClick={() => setMenuOpen(false)}>
            Members
         </a>
      </div>
   );
}

export default Navmenu;
