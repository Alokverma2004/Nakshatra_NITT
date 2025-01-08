import "./Members.css";
import InfoCard from "../../components/InfoCard/InfoCard";
import { membersDetails } from "./memberDetails";

export const Members = () => {
    return (
        <div id="members">
            <h1>Core Members</h1>
            <div id="members-cards-container">
                {membersDetails.map((member) => (
                    <InfoCard
                        key={member.name}
                        imgPath={member.imgPath}
                        title={member.name}
                        content={member.position}
                        isLinked={true} // Adding a new prop to enable LinkedIn behavior
                        link={member.linkedin} // Pass LinkedIn link if needed
                    />
                ))}
            </div>
        </div>
    );
};
