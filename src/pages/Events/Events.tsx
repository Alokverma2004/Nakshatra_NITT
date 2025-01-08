import React, { useState, useEffect } from 'react';
import './Events.css';
import spaceDay0 from "../../assets/images/events/nsd/nsd_7.jpg";
import spaceDay1 from "../../assets/images/events/nsd/nsd_1.png";
import spaceDay2 from "../../assets/images/events/nsd/nsd_2.png";
import spaceDay3 from "../../assets/images/events/nsd/nsd_3.png";
import spaceDay4 from "../../assets/images/events/nsd/nsd_4.png";
import spaceDay5 from "../../assets/images/events/nsd/nsd_5.png";
import spaceDay6 from "../../assets/images/events/nsd/nsd_6.png";
import spaceWeek1 from "../../assets/images/events/wsw/wsw1.jpg";
import spaceWeek2 from "../../assets/images/events/wsw/wsw2.jpg";
import spaceWeek3 from "../../assets/images/events/wsw/wsw3.jpg";
import spaceWeek4 from "../../assets/images/events/wsw/wsw4.jpg";
import spaceWeek5 from "../../assets/images/events/wsw/wsw5.jpg";
// import spaceWeek6 from "../../assets/images/events/wsw/wsw6.jpg";
interface EventCardProps {
  images: string[];
  title: string;
  content: string;
  isLong?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ images, title, content, isLong = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const shortContent = isLong ? content.substring(0, 150) + "..." : content;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card-main">
      <div className="carousel-container">
        <div 
          className="carousel-track" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <div key={idx} className="carousel-slide">
              <img src={img} alt={`${title} ${idx + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-button prev" onClick={prevSlide}>&#10094;</button>
        <button className="carousel-button next" onClick={nextSlide}>&#10095;</button>
        <div className="carousel-dots">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>
          {showMore || !isLong ? content : shortContent}
          {isLong && (
            <span 
              className="read-more" 
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? " Show Less" : " Read More"}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

const eventDetails = [
  {
    images: [spaceDay0,spaceDay1, spaceDay2, spaceDay3,spaceDay4, spaceDay5,spaceDay6],
    title: "National Space Day",
    content: `Department of Physics and Nakshatra jointly organized events to celebrate the success of
    India's Chandrayan 3 mission. More than 100 students participated in online contests and lectures.
    Smt. S. Sweet Annie Grace from the propulsion division at ISRO had inaugurated the
    celebration with a brief talk on some of the key aspects of Chandrayan 3 mission.`,
    isLong: true,
  },
  {
    images: [spaceWeek1, spaceWeek2, spaceWeek3,spaceWeek4, spaceWeek5],
    title: "World Space Week",
    content: `World Space Week is celebrated between October 4 and October 10, every year.
    Nakshatra organized the following list of events:
    1. Guest Lectures in collaboration with Pragyan (Mr. Alikhan Basheer, Optical Engineer at
    IIA Bengaluru, Dr. C. Joseph Prabagar, Advisor at the Tamil Nadu Astronomy & Science
    Society (TASS), Mr. S. Sriram, Program Manager at GalaxEye Space)
    2. Student Lecture on Stellar Evolution
    3. Trajectron: Workshop x Contest on Orbital Mechanics
    4. Astrolytica Quiz.`,
    isLong: true,
  },
];

export const Events: React.FC = () => {
  return (
    <div id="events">
      <h1>Major Events</h1>
      <div id="events-cards-container">
        {eventDetails.map((event) => (
          <EventCard key={event.title} {...event} />
        ))}
      </div>
    </div>
  );
};
export default Events;