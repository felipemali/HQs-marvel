import Characters from "../../components/Character";
import { Form } from "../../components/Form";
import { marvelCharacters } from "../../api/characters";

export type setFiltersProps = {
  orderBy: string;
  orientation: string;
};

const Home = () => {
  console.log(marvelCharacters);
  return (
    <>
      <Form />
      <Characters characters={marvelCharacters} />
    </>
  );
};

export default Home;
