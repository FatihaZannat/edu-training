import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Service = ({event}) => {
   const {name, id , picture,location} = event
    return (
        <div className="card w-96  bg-base-100 shadow-xl">
  <figure><img src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Location : {location}</p>
    <div className="card-actions justify-end">
        <Link to={`/service/detail/${id}`}>
      <button className="btn btn-primary">Show Details</button>
      </Link>
    </div>
  </div>
</div>
    );
};

Service.propTypes = {
    event: PropTypes.node
}
export default Service;