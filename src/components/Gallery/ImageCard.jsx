import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const ImageCard = ({ search }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const apiKey = "LdmawpiugbPaHgUah1ugD1YI9rSfyohIL4lbyXTP9nVtfiOV3SkEFh5k";
  const apiUrl = "https://api.pexels.com/v1/search";
  const isGallery = useLocation().pathname === "/gallery"; // use useLocation to get the current pathname

  useEffect(() => {
    const axiosConfig = {
      headers: {
        Authorization: apiKey,
      },
    };

    // Function to fetch images based on the query
    const fetchImages = (query) => {
      axios
        .get(apiUrl, {
          params: {
            query: query,
          },
          headers: axiosConfig.headers,
        })
        .then((response) => {
          const photos = response.data.photos;
          setImages(photos);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data from Pexels API:", error);
          setIsLoading(false);
        });
    };

    if (search === "") {
      // Fetch default images
      fetchImages("all");
    } else {
      // Fetch images based on the search query
      fetchImages(search);
    }

    if (isGallery) {
      // Fetch gallery images
      fetchImages("all");
    }
  }, [search, isGallery]);

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

  const handleTouchStart = (e, index) => {
    e.preventDefault();
    e.persist();
    e.target.addEventListener(
      "touchmove",
      (touchMoveEvent) => handleTouchMove(touchMoveEvent, index),
      {
        passive: false,
      }
    );
  };

  const handleTouchMove = (e, index) => {
    e.preventDefault();
    const touch = e.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    if (target && target.classList.contains("image-card")) {
      handleDrop(e, index);
    }
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    e.target.removeEventListener("touchmove", handleTouchMove);
  };

  return (
    <>
      {isLoading ? (
        <div>
          <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-t-transparent border-solid animate-spin  rounded-full border-primary border-8 h-64 w-64"></div>
          </div>
        </div>
      ) : (
        <>
          {images.map((image, index) => (
            <div
              key={image.id}
              draggable="true"
              onTouchStart={(e) => handleTouchStart(e, index)}
              onTouchEnd={handleTouchEnd}
              className="image-card w-[200px] xs:w-auto sm:w-[200px] h-[300px] mx-auto md:w-[230px]"
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
      )}
    </>
  );
};

export default ImageCard;
