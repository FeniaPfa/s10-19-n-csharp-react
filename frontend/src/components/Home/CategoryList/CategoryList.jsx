import { Link } from 'react-router-dom';
import { Category } from './components/Category';

const CategoriesArray = [
  {
    id: 1,
    category: 'Ensaladas',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/greeneats-284af.appspot.com/o/categories%2Fensaladas.webp?alt=media&token=472740db-7e16-4bac-974d-e0d83cc055a4',
  },
  {
    id: 2,
    category: 'Bebidas',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/greeneats-284af.appspot.com/o/categories%2Fbebidas.webp?alt=media&token=8c75a548-3a92-4def-b6db-70a9a97d8856',
  },
  {
    id: 3,
    category: 'Sopas',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/greeneats-284af.appspot.com/o/categories%2Fsopas.webp?alt=media&token=9e11c4b4-88c0-4b7d-8c96-98bb7c0b49ff',
  },
  {
    id: 4,
    category: 'Pastas',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/greeneats-284af.appspot.com/o/categories%2Fpastas.webp?alt=media&token=aa587f5b-641b-48bd-82f7-e72498a45bed',
  },
  {
    id: 5,
    category: 'Carnes',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/greeneats-284af.appspot.com/o/categories%2Fasadito.webp?alt=media&token=4617286e-2486-450d-95bd-1dcdec5ce2bf',
  },
];

export function CategoryList() {
  const renderArray = CategoriesArray;

  return (
    <section className="text-center text-zinc-700 flex flex-col items-center gap-4 py-10 px-4">
      <h1 className="text-5xl font-semibold">Comprar por categorías</h1>
      <p className="text-lg text-zinc-500 font-medium">
        ¡Deléitate explorando nuestras categorías gastronómicas!
      </p>
      <div className="my-8 grid grid-cols-2 sm:grid-cols-5 gap-8 px-4">
        {renderArray.length > 0 &&
          renderArray.map(({ id, imgUrl, category }) => {
            return (
              <Category key={id} imgUrl={imgUrl} id={id} category={category} />
            );
          })}
      </div>

      <Link
        to="/category"
        className="rounded-md p-3 text-white text-xl bg-primary hover:bg-primary-600"
      >
        Explorar todas
      </Link>
    </section>
  );
}
