import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../features/category/categorySlice';

const Contain = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <main className="main overflow-hidden box-border flex flex-col gap-8">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Contain;
