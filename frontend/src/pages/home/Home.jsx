import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveIndex } from '../../features/nav/navSlice';
import Banner from '../../components/Home/banner/Banner';
import Features from '../../components/Home/Features';
import { CategoryList } from '../../components/Home/CategoryList/CategoryList';
import { CardSlider } from '../../components/Home/CardSlider/CardSlider';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveIndex('home'));
    return () => {
      setActiveIndex(null);
    };
  }, []);

  return (
    <div className="w-full">
      <Banner />
      <Features />
      <CategoryList />
      <CardSlider />
    </div>
  );
};

export default Home;
