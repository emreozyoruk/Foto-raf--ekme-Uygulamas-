import React from 'react'

 function ImageItem({gönderilenFoto}) {
    console.log(gönderilenFoto)
  return (
    <div>
<img src=      {gönderilenFoto.urls.small}  alt={gönderilenFoto.alt_description} />    </div>
  )
}
export default ImageItem ; 
