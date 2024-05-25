import React from 'react'

const Explanation = ( { apodData, animation}) => {
  return (
    <div className={`fixed bottom-20 inset-x-0 p-3 bg-gray-950 bg-opacity-75 animate__animated ${animation ? 'animate__fadeInUp':'animate__fadeOutDown'} `}>
                    <div className="text-slate-50 mb-3">{apodData && apodData.explanation}</div>
                    <div className='flex justify-between'>

                    <div className="text-slate-50 inline">{apodData && apodData.date}</div>
                        <div className="text-slate-50 inline">{apodData && apodData.copyright}</div>

                    </div>
                   
             </div>
  )
}

export default Explanation