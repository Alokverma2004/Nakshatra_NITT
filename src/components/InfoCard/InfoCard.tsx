import { useState } from "react";
import "./InfoCard.css";
interface InfoCardProps {
   imgPath: string;
   title: string;
   content: string;
   isLong?: boolean; // Optional, as it's not required in all cases
   isLinked?: boolean; // Optional, determines if title should be clickable
   link?: string; // Optional, LinkedIn or other URL
}

const InfoCard: React.FC<InfoCardProps> = ({ imgPath, title, content, isLong = false, isLinked = false, link }) => {
   const [showMore, setShowMore] = useState(false);

   const shortContent = isLong ? content.substring(0, 150) + "..." : content;

   return (
      <div className="card-main">
         <img src={imgPath} alt={title} />
         <h2>
            {isLinked && link ? (
               <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
               >
                  {title}
               </a>
            ) : (
               title
            )}
         </h2>
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
   );
};

export default InfoCard;
