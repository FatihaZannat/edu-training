import { useLoaderData } from "react-router-dom";
import Service from "../Service/Service";

const Services = () => {
    const data = useLoaderData()
    // console.log(data.events);
    return (
      <>
        <h1 className="text-3xl mt-32 text-center">Our Services</h1>
       <div className="grid grid-cols-3 gap-10 my-20">
            {
                data.events.map(event => <Service key={event.id} event={event}></Service>)
            }
        </div></>
    );
};

export default Services;