import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const {id} = useParams()
    const numId = parseInt(id)
    const events = useLoaderData()
    
    const event = events.events.find(event => event.id === numId)
    const { picture, location, name , description, organizer} = event

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={picture} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>Location : {location}</p>
          <p>Organizer: {organizer}</p>
        </div>
      </div>
    );
};

export default Details;