import { CharactersContainer, CharacterCard, Caption } from "./styles";

import capa from "../../assets/img/capa.jpg";
import { MarvelAPIResponse } from "../../models/Characters";

type CharactersProps = {
  characters: MarvelAPIResponse;
};
export default function Characters({ characters }: CharactersProps) {
  return (
    <CharactersContainer>
      {characters.data.results.map((character, index) => (
        <CharacterCard
          key={index}
          className="characterCard"
          style={{
            background: `url(${character.thumbnail.path}) no-repeat center`,
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <Caption className="caption">{character.name}</Caption>
        </CharacterCard>
      ))}
    </CharactersContainer>
  );
}
