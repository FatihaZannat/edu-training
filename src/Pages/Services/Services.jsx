import { useLoaderData } from "react-router-dom";
import Service from "../Service/Service";

const Services = () => {
    const data = useLoaderData()
    console.log(data.events);
    return (
        <div className="grid grid-cols-3 gap-5">
            {
                data.events.map(event => <Service key={event.id} event={event}></Service>)
            }
        </div>
    );
};

export default Services;