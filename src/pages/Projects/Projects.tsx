import React, { useState } from "react";
import "./Projects.css";
import tele from "../../assets/images/projects/telescope.jpg";
import rover from "../../assets/images/projects/rover.jpg";
import astro from "../../assets/images/projects/astronomical.jpg";
import fpga from "../../assets/images/projects/fpga.jpg";
import high_reso from "../../assets/images/projects/high_resolu_img.jpg";
import holo from "../../assets/images/projects/hologram.jpg";
import spec from "../../assets/images/projects/spectro.jpg";
import photo from "../../assets/images/projects/photometric.jpg";

// Reusable ProjectCard Component
interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => setShowFullText(!showFullText);

  const isLongText = description.length > 150; // Adjust the threshold as needed
  const displayedText = showFullText ? description : `${description.slice(0, 165)}...`;

  return (
    <div className="layout-container">
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <div className="text-content">
        <h2 className="proheading">{title}</h2>
        <p className="paragraph">{displayedText}</p>
        {isLongText && (
          <button className="read-more-button" onClick={toggleText}>
            {showFullText ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects">
      <h1>Technical Domain</h1>

      {/* Telescope Projects */}
      <span className="projecttelescope">Telescope</span>
      <div className="wholecontainer">
        <ProjectCard
          image={tele}
          title="Refractor Telescope"
          description={`Built an 18x telescope with a 450mm focal length objective lens and 25mm eyepiece.
            Used to observe the moons of Jupiter.
            Used to look at the active regions of the Sun with a solar filter.`}
        />
        <ProjectCard
          image={spec}
          title="Spectrometer"
          description={`Building a spectrometer from scratch using a 15000lpi diffraction grating and Raspberry Pi5.
            Will run on an open-source Python tool to analyze spectral data acquired using our telescopes.`}
        />
        <ProjectCard
          image={holo}
          title="Hologram"
          description={`A novel method to project three-dimensional objects into a smoke screen using lasers is being explored.
            Simple methods were also tested.`}
        />
      </div>

      {/* Hardware Projects */}
      <span className="projecthardware">Hardware</span>
      <div className="wholecontainer">
        <ProjectCard
          image={fpga}
          title="FPGA-based PID Controller for Temperature Regulation"
          description={`A Basys 3 FPGA board regulates the temperature of a rocket payload.
            It adjusts the heating or cooling based on Proportional, Integral, and Derivative calculations ensuring stable conditions for sensitive equipment.
            Potential applications in rocket and satellite technologies.`}
        />
        <ProjectCard
          image={rover}
          title="Rover"
          description={`Design and experiments for a rover with sensor modules for variables like pressure,
            temperature composition underway.
            It will also have modules for object detection, terrain modeling, etc.`}
        />
      </div>

      {/* Software Projects */}
      <span className="projectsoftware">Software</span>
      <div className="wholecontainer">
        <ProjectCard
          image={high_reso}
          title="High-Resolution Imaging"
          description={`High-resolution imaging is crucial in astronomy to observe fine details and gain insights into phenomena like galaxy formation, star evolution, and planetary features.
            This model reconstructs high-resolution images from low-resolution inputs using Super-Resolution Generative Adversarial Network (SRGAN) architecture.
            Training with Binary Cross-Entropy and Mean Squared Error losses, this model is optimized specifically for astronomical image reconstruction, addressing unique challenges like noise and limited high-resolution data.`}
        />
        <ProjectCard
          image={astro}
          title="Astronomical Object Detection"
          description={`Large amounts of data are collected through telescopes all over the world. They produce images that contain various celestial bodies such as stars, galaxies, nebulae, etc.
            A Convolutional Neural Network (CNN) is used to recognize patterns in these images.
            This enables us to identify distant objects based on their shape and brightness (light curve values), leading to more effective space exploration.
            An autoencoder helps in compressing large astronomical images, making the storage and transmission more efficient.
            Random forest methods will also be tested to handle multidimensional features.`}
        />
        <ProjectCard
          image={photo}
          title="Photometric Redshift Estimation"
          description={`Photometric redshift estimation leverages multiband photometry to efficiently approximate galaxy and quasar redshifts, bypassing the time-intensive spectroscopic methods, particularly for faint objects.
            This approach supports large-scale studies of the universe's structure and cosmic evolution by analyzing galaxy distributions and properties across redshifts.
            Utilizing a Random Forest (RF) algorithm enhanced with a Gaussian Mixture Model (GMM), the method provides probabilistic redshift predictions, incorporating measurement uncertainties for more robust results.
            The integration of RF and GMM ensures better uncertainty representation, essential for handling the complexities of galaxy survey datasets.`}
        />
      </div>
    </div>
  );
};

export default Projects;
