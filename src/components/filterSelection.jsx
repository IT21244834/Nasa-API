import React from 'react'

const filterSelection = ( { setCamera, setCurrentPage } ) => {
  return (
        <div className='md:container md:mx-auto px-4  animate__animated animate__fadeInUp'>
        <form className="max-w-sm mx-auto">
        <label htmlFor="cameras"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">Select a camera</label>
        <select id="cameras"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={ (e) => { setCamera(e.target.value); setCurrentPage(1); }}>
            <option selected value="">All</option>
            <option value="FHAZ">Front Hazard Avoidance Camera (FHAZ)</option>
            <option value="NAVCAM">Navigation Camera (NAVCAM)</option>
            <option value="FR">Mast Camera (MAST)</option>
            <option value="MAST">Chemistry and Camera Complex(CHEMCAM)</option>
            <option value="MAHLI">Mars Hand Lens Image(MAHLI)</option>
            <option value="MARDI">Mars Descent Imager(MARDI)</option>
            <option value="RHAZ">Rear Hazard Avoidance Camera(RHAZ)</option>
        </select>
        </form>
    </div>
  )
}

export default filterSelection