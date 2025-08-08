import {
  CharactersContainer,
  CharacterCard,
  CharacterCardContainer,
} from "./styles";

import {
  MarvelAPIResponse,
  MarvelCharacter,
} from "../../../../models/Characters";
import { Caption } from "../../../../components/Caption";
import { useNavigate } from "react-router-dom";

type CharactersProps = {
  character: MarvelCharacter;
};
export default function Characters({ character }: CharactersProps) {
  const navigate = useNavigate();
  return (
    <CharacterCard
      onClick={() =>
        navigate(`/detalhes/${character.name}`, { state: { character } })
      }
      key={character.id}
      className="characterCard"
      style={{
        background: `url(${character.thumbnail.path}) no-repeat center`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <Star color="yellow" />
          Raro */}
      <Caption>{character.name}</Caption>
    </CharacterCard>
  );
}
