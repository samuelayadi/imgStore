import React, { useState, useEffect } from "react";
import { BsFillEnvelopeFill, BsPersonRolodex } from "react-icons/bs";
import { BiSolidLockAlt } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);


  // Function to Handle Signup
  const Signup = (e) => {
    setIsLoading(true);
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setIsLoading(false);
        navigate("/gallery");
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setIsLoading(false);
        setErrorStatus(true);
      });
  };

  return (
    <div>
      <p className="text-center text-3xl text-secondary mb-10">
        Img<span className="text-primary">Store</span>
      </p>
      <form
        action=""
        className="bg-darkBlue px-8 py-10 rounded-lg flex flex-col space-y-7 justify-center w-[90vw] mx-auto sm:w-[80vw]  md:w-[60vw] lg:w-[50vw] xl:w-[40vw] 2xl:w-[30vw]"
        onSubmit={Signup}
      >
        <p className="text-2xl w-full">
          <span className="text-3xl text-secondary">C</span>reate Account
        </p>

        <fieldset className="flex items-center">
          <label
            htmlFor=""
            className="ml-3 text-grey absolute text-2xl text-white"
          >
            <BsFillEnvelopeFill />
          </label>
          <input
            type="email"
            className="pl-12 pr-4 py-2 bg-transparent border-grey border rounded-lg w-full focus:outline-none focus:border-primary"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>

        <fieldset className="flex items-center">
          <label
            htmlFor=""
            className="ml-3 text-grey absolute text-2xl text-white"
          >
            <BiSolidLockAlt />
          </label>
          <input
            type="password"
            className="pl-12 pr-4 py-2 bg-transparent border-grey border rounded-lg w-full focus:outline-none focus:border-primary"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>

        <button className="mt-7 px-10 py-2 bg-secondary flex justify-center items-center rounded-lg hover:transition-all duration-900 hover:scale-95 xs:w-[60%]">
          {isLoading ? (
            <>
              <div className="relative mx-auto">
                <div className="w-5 h-5 border-white border-4 rounded-full"></div>
                <div className="w-5 h-5 border-primary border-t-4 animate-spin rounded-full absolute left-0 top-0"></div>
              </div>
            </>
          ) : (
            <>Sign Up</>
          )}
        </button>
        <p className="text-lg">
          Already have an account?{" "}
          <Link className="text-primary" to="/">
            Login
          </Link>
        </p>

        {errorStatus && (
          <p className="flex items-center">
            <span className="text-2xl text-[red] pr-3">
              <MdCancel />
            </span>
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default SignupForm;
