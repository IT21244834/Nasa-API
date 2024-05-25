import React from 'react'

const Pagination = ({handlePageChange, currentPage, photos, photosPerPage}) => {

    const pageNumbers = [];
    const totalPages = Math.ceil( photos.length/ photosPerPage );

    const startPage = Math.max( 1, currentPage - 5 );
    const endPage = Math.min( currentPage + 5, totalPages );

    for( let i=startPage; i <= endPage; i++ ){

        pageNumbers.push(   
            <li key={i} className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === i ? 'font-bold' : ''}`} onClick={ ()=> handlePageChange(i)}>{i}</li>
        );

    }


  return (
    <nav aria-label="Page navigation example justify-center">
                    <ul class="flex items-center -space-x-px h-8 text-sm justify-center"> 
                            <li>
                                <div  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"onClick={ ()=> handlePageChange((currentPage) - 1)}>
                                    <span className="sr-only">Previous</span>
                                    <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                                    </svg>
                                </div>
                            </li>
                            {pageNumbers}
                            <li>
                                <div className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={ ()=> handlePageChange((currentPage) + 1)}>
                                    <span className="sr-only">Next</span>
                                    <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                    </svg>
                                </div>
                            </li>
                    </ul>
                </nav>
  )
}

export default Pagination