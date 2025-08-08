import { marvelCharacters } from "../../api/characters";
import { useDispatch } from "react-redux";
import { setCharacters } from "../../redux/store/marvelSlice";
import { Form } from "../../components/Form";
import { useEffect } from "react";
import { Pagination } from "../../components/Pagination";
import { useAppSelector } from "../../hooks";

export type setFiltersProps = {
  orderBy: string;
  orientation: string;
};

const Home = () => {
  const characters = useAppSelector((state) => state.marvel.characters);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCharacters(marvelCharacters));
  }, [dispatch]);

  return (
    <>
      <Form setCharacters={setCharacters} characters={characters} />
      <Pagination characters={characters} />
    </>
  );
};

export default Home;
