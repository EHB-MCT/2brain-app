import React from 'react';
import '../css/AppDetailPage.css';
import { useParams } from 'react-router-dom';


const AppDetailPage = () => {
  const { id } = useParams();
  
  const appDetail = {
    id: id,
    name: 'Midjourney',
    description: 'Image gereation',
    images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
 
  };


  return (
    <div>
      <h1>{appDetail.name}</h1>
      <p>{appDetail.description}</p>
      <div>
        {appDetail.images.map((image, index) => (
          <img key={index} src={image} alt={`${appDetail.name} ${index}`} />
        ))}
      </div>
    </div>
  );
};


export default AppDetailPage;
