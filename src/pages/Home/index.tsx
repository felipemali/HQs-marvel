import { marvelComicsMock } from "../../api/comicsMock";
import { useDispatch } from "react-redux";
import { Form } from "../../components/Form";
import { useEffect } from "react";
import { Pagination } from "../../components/Pagination";
import { useAppSelector } from "../../hooks";
import { setComics } from "../../redux/store/marvelSlice";

export type setFiltersProps = {
  orderBy: string;
  orientation: string;
};

const Home = () => {
  const comics = useAppSelector((state) => state.marvel.comics);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setComics(marvelComicsMock));
  }, [dispatch]);

  return (
    <>
      <Form />
      <Pagination comics={comics} />
    </>
  );
};

export default Home;
