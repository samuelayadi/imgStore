import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const ImageCard = ({ search }) => {
  const [images, setImages] = useState([]);
  const apiKey = "LdmawpiugbPaHgUah1ugD1YI9rSfyohIL4lbyXTP9nVtfiOV3SkEFh5k";
  const apiUrl = "https://api.pexels.com/v1/search";
  const isGallery = location.pathname === "/gallery";

  useEffect(() => {
    const axiosConfig = {
      headers: {
        Authorization: apiKey,
      },
    };

    if (search === "") {
      axios
        .get(apiUrl, {
          params: {
            query: "all",
          },
          headers: axiosConfig.headers,
        })
        .then((response) => {
          const photos = response.data.photos;
          setImages(photos);
        })
        .catch((error) => {
          console.error(
            "Error fetching default images from Pexels API:",
            error
          );
        });
    } else {
      axios
        .get(apiUrl, {
          params: {
            query: search,
          },
          headers: axiosConfig.headers,
        })
        .then((response) => {
          const photos = response.data.photos;
          setImages(photos);
        })
        .catch((error) => {
          console.error("Error fetching data from Pexels API:", error);
        });
    }

    if (isGallery) {
      axios
        .get(apiUrl, {
          params: {
            query: "all",
          },
          headers: axiosConfig.headers,
        })
        .then((response) => {
          const photos = response.data.photos;
          setImages(photos);
        })
        .catch((error) => {
          console.error(
            "Error fetching default images from Pexels API:",
            error
          );
        });
    }
  }, [search]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("imageIndex", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, newIndex) => {
    e.preventDefault();
    const imageIndex = e.dataTransfer.getData("imageIndex");
    const updatedImages = [...images];
    const [movedImage] = updatedImages.splice(imageIndex, 1);
    updatedImages.splice(newIndex, 0, movedImage);
    setImages(updatedImages);
  };


  return (
    <>
      {images.map((image, index) => (
        <div
          key={image.id}
          draggable="true"
          className="w-[200px] xs:w-auto sm:w-[200px] h-[300px] mx-auto md:w-[230px]"
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
        >
          <Link to={image.url}>
            <img
              src={image.src.medium}
              alt={`Image ${image.alt}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </Link>
        </div>
      ))}
    </>
  );
};
export default ImageCard;
