import React from 'react';
import './carrusel.css';
import ReactImageGallery from 'react-image-gallery';

const img =[
      {
        original: 'https://i0.wp.com/plus.cusica.com/wp-content/uploads/2021/05/esteman-svan.jpg?fit=1024%2C1024&ssl=1',
      },
      {
        original: 'https://m.media-amazon.com/images/I/7158K4fHzbL._SL1200_.jpg',
      },
      {
        original: 'https://blogmistermusic.files.wordpress.com/2020/01/rare.jpg',
      },
      {
        original: 'https://m.media-amazon.com/images/I/81Ds-3oOFFS._SS500_.jpg',
      },
      {
        original: 'https://www.eluniverso.com/resizer/t8ORNxpltABXt_12f7svT4y4RZk=/670x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/LYSPWWSOQRD3RIUNK5UP64SAUE.jpg',
      },
]

const MyGallery = ()=>{
      return(
        <ReactImageGallery items={img} autoPlay additionalClass = "carousel"/>
      )
  }
export default MyGallery;