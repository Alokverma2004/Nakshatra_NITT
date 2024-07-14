import { useRef } from "react";
import "./LandingPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Title from "../../components/Title/Title";
import Moon from "../../components/Moon/Moon";
import SocialHandles from "../../components/SocialHandles/SocialHandles";
import useOnScreen from "../../hooks/useOnScreen";

function LandingPage() {
   const ref = useRef<HTMLDivElement>(null);
   const isVisible = useOnScreen(ref);

   return (
      <div ref={ref} className="landing-main">
         <Navbar />
         <Title />
         <SocialHandles isVisible={isVisible} />
         <Moon />
      </div>
   );
}

export default LandingPage;
