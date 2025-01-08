import "./Achievements.css";
import React from 'react';
import newsletter from "../../assets/images/projects/newsletter.jpg";
export const Achievements = () => {
  return (
    <div id="newsletter">
    <h1 id="newsletter-heading">NewsLetter</h1>
    <div className="magazine-container">
  
      <div className="magazine-grid">
        {/* Left column with image */}
        <div className="image-container">
          {/* <div className="image-wrapper"> */}
            <img 
              src={newsletter}
              alt="Magazine cover"
              className="magazine-image"
            />
          {/* </div> */}
        </div>
        <div className="content-container">
          {/* Heading */}
          <h1 className="magazine-heading">
            VYOMIKA: Astronomy Magazine
          </h1>

          {/* Paragraph */}
          <div className="magazine-content">
            <p>
              Introducing the inaugural edition of VYOMIKA, the exclusive bi-yearly astronomy magazine of the Nakshatra. This initiative represents a thoughtful effort to present the complexities of the cosmos in an engaging, simplified manner. Rather than relying on conventional formats, VYOMIKA aims to break down intricate astronomical concepts into easily digestible content, appealing to a wide audience. The magazine features a curated selection of recent developments in space research, must-know astronomical facts, lesser-known phenomena, interesting space tidbits, interactive activities, and highlights from the club's own events. Every aspect of the magazine has been carefully crafted to convey a shared passion for astronomy and to showcase the wonders of space.
            </p>
            <p className="note">
              NOTE: While every article has been meticulously fact-checked to ensure accuracy, VYOMIKA remains open to feedback and suggestions from its readers, fostering an environment of continuous improvement. The goal is to make each edition a space where the shared fascination with the universe can thrive, inspiring further exploration and curiosity about the cosmos.
            </p>
          </div>

          {/* Buttons */}
          <div className="button-container">
              <a 
                href="https://drive.google.com/drive/u/5/folders/13Gx0eItrzCbg_qzFRRMk5a9XDVMFw1hT" 
                className="button primary-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Magazine
              </a>
              <a 
                href="https://heyzine.com/flip-book/1c1d107e9a.html" 
                className="button secondary-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flipbook link
              </a>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};
