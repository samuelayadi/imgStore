import React from 'react'
import ImageCard from './ImageCard'

const ImageCardContainer = (props) => {
  const searches = props.search
  return (
    <section className="container mx-auto">
      <p className=" text-lg text-primary lg:text-2xl px-3">Images</p>
      <div className="grid xs:grid-cols-2 container mx-auto gap-5 py-10 sm:gap-12 sm:grid-cols-2 md:grid-cols-3 sm:px-8 lg:grid-cols-4 xl:grid-cols-5">
        <ImageCard search={searches}/>
      </div>
    </section>
  );
}

export default ImageCardContainer