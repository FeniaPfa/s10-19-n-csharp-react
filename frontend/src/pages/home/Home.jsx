import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveIndex } from '../../features/nav/navSlice';
import SeeCategories from '../../components/SeeCategories/SeeCategories';

// import ProductDay from '../../components/Sections/ProductDay'
import { CardSlider } from '../../components/CardSlider/CardSlider';
import Banner from '../../components/banner/Banner';

import Features from '../../components/Sections/Features';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveIndex('home'));
    return () => {
      setActiveIndex(null);
    };
  }, []);

  return (
    <div className="mt-[0] w-[100%] font-parrafo text-[2rem]">
      <Banner />
      <Features />
      <SeeCategories />
      {/* <ProductDay /> */}
      <CardSlider />
    </div>
  );
};

export default Home;
