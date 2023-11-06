import React from 'react'
import ImageItem from './ImageItem';

 function fotos({imagesPlaceHolder}) {
  return (
    <div className='imageList'>{imagesPlaceHolder.map((fotograf,index)=> {
      return  <ImageItem key={index}  gönderilenFoto = {fotograf} />

    })}</div>
  )
}
export default fotos;
