import React from 'react'
import { useState, useEffect } from 'react'
import marsPhoto from '../assets/Mars2.jpg'
import FilterSelection from '../components/filterSelection'
import RenderPhotos from '../components/RenderPhotos'
import Pagination from '../components/Pagination'
import Spinners from '../components/Spinners'

const MRP = () => {

    //const [ date, setDate ] = useState('2015');
    const [ camera, setCamera] = useState(null);
    const [ photos, setPhotos ] = useState([]);
    const [ currentPage, setCurrentPage] = useState(1);
    const photosPerPage = 6;
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect( () => {

        const fetchPhotos = async() => {

            try{

                let apiUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos';
                
                if( camera ){

                    apiUrl += `?sol=1000&camera=${camera}&page=${currentPage}&api_key=H8VH28AIqKHcQIvrhjU7w86i2om8uqOzSl03yFhc`;
                

                }
                else{

                    apiUrl += `?sol=1000&api_key=H8VH28AIqKHcQIvrhjU7w86i2om8uqOzSl03yFhc`;

                }

                const res = await fetch(apiUrl);


                if(!res.ok){

                    throw new Error( "Failed to fetch data" );

                }

                const data = await res.json();
                setPhotos(data.photos);
                setIsLoading(false);
            }
            catch(error){

                console.error(error);

            }

        }

        fetchPhotos();


    },[camera, currentPage]);

    const handlePageChange = (page) => {

        setCurrentPage(page);

    };

    

 
    




  return ( 

    <div className='w-full min-h-screen bg-no-repeat bg-center bg-cover bg-fixed' style={{ backgroundImage: `url(${marsPhoto})` }} >

        <h1 className='text-white text-4xl font-extrabold leading-none tracking-tight text-center mb-8  animate__animated animate__fadeInUp'>On Mars</h1>

        <div className='text-white m-8 text-center animate__animated animate__fadeInUp'>
            Welcome to our Mars photo gallery! Explore captivating snapshots captured by NASA's Curiosity rover as it roams the Red Planet's rugged terrain. Immerse yourself in the otherworldly landscapes and marvel at the wonders of Mars through the lens of cutting-edge technology. From breathtaking panoramas of the Martian landscape to up-close views of intriguing rock formations, each image offers a glimpse into the mysteries of our neighboring planet. Join us on this cosmic journey and witness the beauty and majesty of Mars as never before.

        </div>
  
                <FilterSelection setCamera={setCamera} setCurrentPage={setCurrentPage}/>

                { isLoading ? ( <Spinners /> ) : (
                    <>
                        <RenderPhotos currentPage={currentPage} photos={photos} photosPerPage={photosPerPage}/>               
                
                        <Pagination handlePageChange={handlePageChange} currentPage={currentPage} photos={photos} photosPerPage={photosPerPage} />
                    </>
                    )
                }

    </div>
        
  )
}

export default MRP