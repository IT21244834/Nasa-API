import React from 'react'

const RenderPhotos = ( { currentPage, photos, photosPerPage } ) => {


    const renderPhotos = () => {

        const indexOfLastPhoto = currentPage * photosPerPage;
        const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
        const currentPhotos = photos.slice( indexOfFirstPhoto, indexOfLastPhoto );

        return currentPhotos.map((photo) => {

            return(<div className="rounded-lg animate__animated animate__fadeInUp" key={photo.id}>
                <img id={photo.id} src={photo.img_src} alt={photo.earth_date} className="rounded-lg" />
            </div>);

        });


    }

  return (

    <div className='grid grid-cols-2 md:grid-cols-3 gap-4 m-8'>
    { renderPhotos() }
    </div>
    
  )
}

export default RenderPhotos