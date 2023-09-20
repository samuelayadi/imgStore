import React, { useState } from "react";
import Lottie from "lottie-react";
import animation from "../../assets/lottie/animation.json";

const AddFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
    }
  };

  return (
    <div className="relative mt-20 w-full px-2 pb-10">
      <div className="container mx-auto flex flex-col space-y-10 justify-around items-center lg:flex-row lg:space-y-0">
        <div className="lg:w-6/12 xl:w-4/12">
          <Lottie animationData={animation} autoplay loop className="" />
          <p className="text-2xl text-center mt-4 gradient-text lg:text-2xl">
            Showcase your works, High Photography Inspiration
          </p>
        </div>

        <div className="flex flex-col space-y-10 justify-center items-center">
          <label
            htmlFor="image"
            onChange={handleFileChange}
            className="w-full px-4 py-10 space-y-4 bg-darkBlue rounded-xl flex flex-col items-center justify-center xs:p-10 lg:py-20 lg:px-20 "
          >
            <input
              type="file"
              id="image"
              accept=".jpg, .jpeg, .png .avif .webp .gif"
              onChange={handleFileChange}
              className="text-md text-white relative w-64 file:py-5 file:mr-5 file:px-4 file:rounded-lg file:border-0 file:text-md file:bg-secondary file:text-white hover:file:scale-95"
            />
            <p className="text-md">Or</p>
            <p className="text-md">Drag and Drop Image</p>
          </label>
          <button
            className="gradient-border px-10 py-2 hover:bg-gradient-to-r hover:from-secondary hover:to-primary"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFile;
