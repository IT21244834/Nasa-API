import React from 'react'
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/react';

const Spinners = () => {

    const override = css`
    display: block;
    margin: 0 auto;
`;


  return (
    <div className="flex justify-center items-center h-screen">
    <ClipLoader color={'#ffffff'} loading={true} css={override} size={50} />
  </div>
  )
}

export default Spinners