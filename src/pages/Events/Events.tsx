import "./Events.css";
import InfoCard from "../../components/InfoCard/InfoCard";
import { eventDetails } from "./eventDetails";

export const Events = () => {
    return (
        <div id="events">
            <h1>Events</h1>
            <div id="events-cards-container">
                {eventDetails.map((event) => (
                    <InfoCard
                        key={event.title}
                        imgPath={event.imgPath}
                        title={event.title}
                        content={event.content}
                    />
                ))}
            </div>
        </div>
    );
};
