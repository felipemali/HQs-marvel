import Characters from "./components/Character";
import { Form } from "../../components/Form";
import { marvelCharacters } from "../../api/characters";
import { useEffect, useState } from "react";
import { MarvelAPIResponse } from "../../models/Characters";
import { Pagination } from "../../components/Pagination";

export type setFiltersProps = {
  orderBy: string;
  orientation: string;
};

const Home = () => {
  const [characters, setCharacters] =
    useState<MarvelAPIResponse>(marvelCharacters);

  useEffect(() => {
    if (characters === undefined) {
      setCharacters(marvelCharacters);
    }
    console.log("marvelCharacters", marvelCharacters);
  }, []);
  return (
    <>
      <Form setCharacters={setCharacters} characters={characters} />
      <Pagination characters={characters} />
    </>
  );
};

export default Home;
