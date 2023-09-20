import React, { useState } from "react";
import ImageCardContainer from "../../components/Gallery/ImageCardContainer";
import Navbar from "../../components/SharedLayout/Navbar";
import Footer from "../../components/SharedLayout/Footer";
import Lottie from "lottie-react";
import animation from "../../assets/lottie/cama.json";
import { BsSearch } from "react-icons/bs";

const Home = () => {
  const [search, setSearch] = useState("");
    const [iterations, setIterations] = useState(0);

    const handleAnimationLooped = () => {
      // Update the number of iterations
      setIterations((prevIterations) => prevIterations + 1);
    };

  const handleSearch = (e) => {
    e.preventDefault();
  };
  
  return (
    <div>
      <Navbar />
      <div className="mt-">
        <Lottie
          animationData={animation}
          className="w-11/12 mx-auto sm:w-8/12 md:w-6/12 lg:w-3/12"
          loop={iterations < 1}
          onComplete={handleAnimationLooped}
        />

        <form
          onSubmit={handleSearch}
          className="flex items-center mx-auto flex-row justify-center mb-5 w-11/12 sm:w-9/12 md:w-7/12 lg:w-5/12"
        >
          <input
            type="text"
            className="pl-4 pr-4 py-2 bg-transparent border-grey border rounded-lg w-full mx-auto focus:outline-none focus:border-primary "
            placeholder="Search Image"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="-ml-16 text-xl px-4 py-1.5 bg-secondary rounded-lg">
            <BsSearch />
          </button>
        </form>
        <ImageCardContainer search={search} />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
