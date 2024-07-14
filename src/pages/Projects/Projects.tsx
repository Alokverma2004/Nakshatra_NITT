import "./Projects.css";

const Projects = () => {
   return (
      <div id="projects">
         <h1>Our Projects</h1>
         <span className="projecthardware">Domain: Hardware</span>
         <p className="glassmorphism">
         
            With the introduction of the technical teams , our combined efforts
            led us to participate in Sangam, the inter collegiate technical
            competition of NITT for the first time. Some of the projects and
            plans which we have developed are as follows :-
            <br />
            <br />
            <b>AstroTrack Navigator</b> : This project aims at autonomously detecting and following colored tracks using color sensors, OpenCV, and a PID controller. Color sensors detect tracks, while a camera captures images processed by OpenCV to identify the track position. The PID controller adjusts navigation for precise movement, showcasing integrated hardware and software for autonomous navigation in robotics and space exploration.
            <br />
            <br />
            <b>Digital Temperature controller</b> : This project aims at developing a digital PID controller with an actuator interface ASIC for temperature control. Xilinx Vivado is used to design a system that integrates sensors, actuators, and digital control methods to stabilize temperatures effectively.
         </p>
         <span className="projectsoftware ">Domain: Software</span>
         <p className="glassmorphism">
         
            With the introduction of the technical teams , our combined efforts
            led us to participate in Sangam, the inter collegiate technical
            competition of NITT for the first time. Some of the projects and
            plans which we have developed are as follows :-
            <br />
            <br />
            <b>Photometric Redshift estimation</b> : Photometric redshift estimation is much faster and reliable especially for analysing a large number of galaxies when compared to spectroscopic redshifts. This project aims at employing machine learning techniques to automate and improve the accuracy of redshift estimations which allow us to probe for the distances of galaxies as we observe in their past.
            <br />
            <br />
            <b>Astronomical object detection</b> : Object detection has been a challenging task when it comes to noisy astronomical images. This project aims at automating and improving the accuracy of object detection using machine learning techniques. Object detection will help astronomers discover and track celestial bodies.
            <br />
            <br />
            <b>High resolution image reconstruction</b> : More often than not, astronomical images lack detail and contrast due to practical limitations in the telescopes used for observations. Certain algorithms can deconvolve and reconstruct images at higher resolutions. This project aims at employing these Super-resolution techniques to recontruct astronomical images.
         </p>
         <span className="projecttelescope">Domain: Telescope</span>
         <p className="glassmorphism">
         
            With the introduction of the technical teams , our combined efforts
            led us to participate in Sangam, the inter collegiate technical
            competition of NITT for the first time. Some of the projects and
            plans which we have developed are as follows :-
            {/* <br /> */}
            <br />
            <b>18x Refractor</b> :This project aims at building a 500 mm refractor telescope with a 450 mm focal length objective lens and a 25 mm eyepiece. The telescope will be used to observe the moon and the planets. A solar filter will be used for observing the sun safely. The design features a lightweight tube, precise lens mounting, a focuser mechanism, and a stable tripod.
            {/* <br /> */}
            <br />
            <b>Reflector</b> : This project aims at building a larger reflector type telescope for parallel observations with our 10in 1.2 m focal length reflector. Two mirrors (Primary and Secondary) will be used to direct the light to the eyepiece, allowing us to obtain larger magnifications.
         </p>
      </div>
   );
};

export default Projects;
