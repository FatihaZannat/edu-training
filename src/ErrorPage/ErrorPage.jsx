import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className="w-2/3 my-24  mx-auto">
            <h1 className="text-7xl text-center my-4">404</h1>
            <h2 className="text-3xl text-center my-4">Page {error.statusText}</h2>
            <h2 className="text-xl text-center my-4">the page you are looking for doesn't exist or other 
                <br /> error occured. Go to <Link  className="text-blue-600" to='/'>Home page</Link ></h2>
        </div>
    );
};

export default ErrorPage;