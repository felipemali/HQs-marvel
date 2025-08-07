import {
  CharactersContainer,
  CharacterCard,
  CharacterCardContainer,
} from "./styles";

import { MarvelAPIResponse } from "../../../../models/Characters";
import { Caption } from "../../../../components/Caption";
import { useNavigate } from "react-router-dom";

type CharactersProps = {
  characters: MarvelAPIResponse | undefined;
};
export default function Characters({ characters }: CharactersProps) {
  const navigate = useNavigate();
  return (
    <CharactersContainer>
      {characters?.data.results?.map((character, index) => (
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
      ))}
    </CharactersContainer>
  );
}
