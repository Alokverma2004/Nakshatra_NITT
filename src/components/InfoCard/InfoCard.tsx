import "./InfoCard.css";

interface InfoCardInterface {
   imgPath: string;
   title: string;
   content: string;
}

function InfoCard({ imgPath, title, content }: InfoCardInterface) {
   return (
      <div className="card-main">
         <img src={imgPath} alt="no support" />
         <div className="card-text glassmorphism">
            <h4>{title}</h4>
            <p>{content}</p>
         </div>
      </div>
   );
}

export default InfoCard;
