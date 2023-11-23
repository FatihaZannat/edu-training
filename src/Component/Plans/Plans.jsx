import { MdOutlineDone } from "react-icons/md";
import PropTypes from 'prop-types';
const Plans = ({price,quality}) => {
    return (
        <div>
            

            <div className="card bg-gray-50 gap-2 m-1 w-80">
                <h1 className="text-center text-2xl my-3">{quality}</h1>
                <h1 className="text-center text-4xl my-3">$ {price}</h1>
                <p className="text-center text-sm text-gray-200 my-3">per month</p>
                <hr />
                <ul>
                <div className="flex justify-center mb-4 gap-2 items-center">  <MdOutlineDone/>  <li>visit 1 event</li></div>
                <div className="flex justify-center mb-4 gap-2 items-center">  <MdOutlineDone/>  <li>2 tickets included</li></div>
                <div className="flex justify-center mb-4  gap-2 items-center">  <MdOutlineDone/>  <li>meet our speakers</li></div>
                <div className="flex justify-center mb-4 gap-2 items-center">  <MdOutlineDone/>  <li>free online account</li></div>
                <div className="flex justify-center mb-4 gap-2 items-center">  <MdOutlineDone/>  <li>free entrance</li></div>
                </ul>
                <button className="btn mt-10">shop now</button>
            </div>
        </div>
    );
};

Plans.propTypes = {
    price: PropTypes.number,
    quality : PropTypes.string
}
export default Plans;