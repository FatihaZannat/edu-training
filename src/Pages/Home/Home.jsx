
import Plans from '../../Component/Plans/Plans';
import banneer3 from '../../assets/rear-view-asian-audience-joining-listening-speaker-talking-stage-seminar_41418-3963.jpg'
const Home = () => {
    return (
        <>
        <div className=' my-20 flex bg-gray-100 justify-between'>
            <img  src={banneer3} alt="" />
            <div className='text-5xl p-8'>
                <h1 className='text-center my-4'>wellcome to </h1>
                <h1>our <span className='text-blue-300'>Edu-event</span> website</h1>
               <p className='text-xl pt-8'>we are working for educational event as like Workshops and Webinars, Career Fairs, Educational Conferences, Training Programs, etc. </p>
                </div>
                
            </div>
            <div className='flex'>
            <Plans price={10}></Plans>
            <Plans price={345}></Plans>
            </div>
        </>
        
    );
};

export default Home; 