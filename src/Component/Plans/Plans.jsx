
const Plans = ({price}) => {
    return (
        <div>
            <h1 className="3xl">Plans & Pricings</h1>

            <div>
                <h1>basic</h1>
                <h1>$ {price}</h1>
                <p>per month</p>
                <hr />
                <ul>
                    <li>visit 1 event</li>
                    <li>visit 1 event</li>
                    <li>visit 1 event</li>
                    <li>visit 1 event</li>
                    <li>visit 1 event</li>
                </ul>
                <button>shop now</button>
            </div>
        </div>
    );
};

export default Plans;