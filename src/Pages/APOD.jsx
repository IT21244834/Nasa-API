import React, { useState, useEffect } from 'react';
import Explanation from '../components/Explanation';

const APOD = () => {
    const [apodData, setApodData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const[ isInfoVisible, setIsInfoVisible] = useState(false);

    const fetchAPODData = async () => {
        try {
            const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=H8VH28AIqKHcQIvrhjU7w86i2om8uqOzSl03yFhc');
            const data = await response.json();
            setApodData(data);
        } catch (error) {
            console.error('Error fetching data', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchAPODData();
    }, []);

    const toggleInfo = () =>{

        setIsInfoVisible(!isInfoVisible);

    }

    return (
        <div className="relative min-h-screen bg-cover bg-center flex flex-col justify-between" style={{ backgroundImage: `url(${apodData && apodData.hdurl})` }}>
            <div className={`absolute text-center py-2 px-4  transition-opacity ${isLoading ? 'opacity-0' : 'opacity-100'} animate__animated animate__fadeInLeft`}>
                <h1 className="text-white text-4xl font-extrabold leading-none tracking-tight">{apodData && apodData.title}</h1>
            </div>
            {isInfoVisible && (
                <Explanation apodData={apodData} animation={isInfoVisible} />
            )}

            {!isInfoVisible && (
               <Explanation apodData={apodData} animation={isInfoVisible} />
            )}

            
            <button className='fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ' onClick={toggleInfo}>
                {isInfoVisible ? 'Hide Info' : 'See info'}
            </button>
        </div>
    );
};

export default APOD;
