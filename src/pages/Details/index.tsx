import { useLocation } from "react-router-dom";
import { MarvelCharacter } from "../../models/Characters";
import { CharacterDetail } from "./CharacterDetail";

type DetailsProps = {
  character: MarvelCharacter;
};
const Details = () => {
  const location = useLocation();
  const { character }: DetailsProps = location.state || {};
  return <CharacterDetail character={character} />;
};
export default Details;
