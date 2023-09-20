import React, {useState, useEffect} from 'react';
import Navbar from '../../components/SharedLayout/Navbar';
import AddFile from '../../components/Gallery/AddFile';
import ImageCardContainer from '../../components/Gallery/ImageCardContainer';
import Footer from '../../components/SharedLayout/Footer';

const Gallery = () => {

  return (
    <div>
      <Navbar />
      <AddFile />
      <ImageCardContainer/>
      <Footer />
    </div>
  );
}

export default Gallery