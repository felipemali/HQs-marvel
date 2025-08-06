import { CharactersContainer, CharacterCard, Caption } from "./styles";

import capa from "../../assets/img/capa.jpg";
export default function Characters() {
  return (
    <CharactersContainer>
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 5, 6, 8, 9, 10, 12, 15, 5, 6,
      ].map((e, index) => (
        <CharacterCard
          key={index}
          className="characterCard"
          style={{
            background: `url(${capa}) no-repeat center`,
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <Caption className="caption">HQ's</Caption>
        </CharacterCard>
      ))}
    </CharactersContainer>
  );
}
