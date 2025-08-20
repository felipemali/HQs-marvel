import { useDispatch } from "react-redux";
import { Form } from "../../components/Form";
import { useEffect } from "react";
import { Pagination } from "../../components/Pagination";
import { useAppSelector } from "../../hooks";
import { setComics } from "../../redux/store/marvelSlice";
import {
  MarvelComicRarity,
  MarvelComicsAPIResponse,
} from "../../models/comics";

export type setFiltersProps = {
  orderBy: string;
  orientation: string;
};

const Home = () => {
  const comics = useAppSelector(
    (state) => state.marvel.comics
  ) as MarvelComicsAPIResponse<MarvelComicRarity> | null;
  const search = useAppSelector((state) => state.marvel.search);
  const currentPage = useAppSelector((state) => state.marvel.currentPage);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `https://hqs-marvel.onrender.com/api/comics?page=${currentPage}&limit=14&search=${search}`
    )
      .then((res) => res.json())
      .then((data: MarvelComicsAPIResponse<MarvelComicRarity>) => {
        dispatch(setComics(data));
      });
  }, [dispatch, currentPage, search]);

  return (
    <>
      <Form />
      <Pagination comics={comics} />
    </>
  );
};

export default Home;
