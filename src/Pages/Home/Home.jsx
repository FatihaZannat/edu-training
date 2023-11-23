
import Plans from '../../Component/Plans/Plans';
import banneer3 from '../../assets/rear-view-asian-audience-joining-listening-speaker-talking-stage-seminar_41418-3963.jpg'
import Services from '../Services/Services';
const Home = () => {
    return (
        <>
            <div className=' my-20 flex bg-gray-100 justify-between'>
                <img src={banneer3} alt="" />
                <div className='text-5xl p-8'>
                    <h1 className='text-center my-4'>wellcome to </h1>
                    <h1>our <span className='text-blue-300'>Edu-event</span> website</h1>
                    <p className='text-xl pt-8'>we are working for educational event as like Workshops and Webinars, Career Fairs, Educational Conferences, Training Programs, etc. </p>
                </div>

            </div>
            <h1 className="text-5xl text-center m-12">Plans & Pricings</h1>
            <div className='flex justify-around '>
                <Plans quality={'basic'} price={90} ></Plans>
                <Plans quality={'premium'} price={53} ></Plans>
                <Plans quality={'advanced'} price={10} ></Plans>
                <Plans quality={'DEVELOPER'} price={35}></Plans>
            </div>

            <Services></Services>
        </>

    );
};

export default Home; 