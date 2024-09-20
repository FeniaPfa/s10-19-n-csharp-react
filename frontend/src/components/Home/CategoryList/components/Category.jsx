import { useNavigate } from 'react-router-dom';

export function Category({ imgUrl, id, category }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/category/${id}`);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <div
      onClick={handleNavigate}
      className="flex flex-col  bg-slate-100 shadow-slate-300 shadow-sm hover:shadow-greyCustom hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
    >
      <img
        src={imgUrl}
        alt={`Category ${id} image`}
        className="w-full aspect-square object-cover"
      />
      <h3 className="my-4 text-base md:text-2xl font-medium">{category}</h3>
    </div>
  );
}
