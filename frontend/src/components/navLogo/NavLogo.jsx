import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setActiveIndex } from '../../features/nav/navSlice';

const NavLogo = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setActiveIndex(null))
  //   return () => { setActiveIndex(null) }
  // }, [])
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setActiveIndex('home'));
    navigate('/');
  };

  return (
    <button
      className="logoContainer font-title text-[40px] text-primary grid place-content-center"
      onClick={handleClick}
    >
      <span className="capitalize font-title">GreenEats</span>
    </button>
  );
};

export default NavLogo;
