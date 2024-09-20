import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="w-full max-h-full h-[calc(100vh-100px)] flex flex-col justify-center items-center bg-primary gap-3">
      <h1 className="font-title text-[100px] font-bold">404 </h1>
      <h2 className="text-xl font-semibold">Opps! That page can't be found</h2>
      <p className="font-parrafo text-lg font-normal">
        The page you are looking for it maybe deleted
      </p>
      <Link
        to="/"
        className="mt-4 text-base font-semibold border-2 border-white px-[1.5rem] py-[.8rem] rounded-[7px] hover:text-secondary hover:bg-white hover:border-secondary transition-all duration-200 ease-in"
      >
        Go To Home
      </Link>
    </section>
  );
};

export default NotFound;
