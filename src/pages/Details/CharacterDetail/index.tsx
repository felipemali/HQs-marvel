import { Button } from "../../../components/Button";
import { Caption } from "../../../components/Caption";
import { MarvelCharacter } from "../../../models/Characters";
import ArrowLeft from "../../../assets/img/arrow_left.png";
import {
  CharacterDetailContainer,
  CharacterCard,
  DescriptionCharacter,
  DetailsContainer,
  CharacterCardContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";
type CharacterDetailProps = {
  character: MarvelCharacter;
};
export const CharacterDetail = ({ character }: CharacterDetailProps) => {
  const navigate = useNavigate();
  return (
    <CharacterDetailContainer>
      <img
        style={{ cursor: "pointer" }}
        src={ArrowLeft}
        alt="Voltar"
        width={35}
        height={35}
        onClick={() => navigate("/")}
      />
      <CharacterCardContainer>
        <CharacterCard
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
        <DetailsContainer>
          <DescriptionCharacter>{character.description}</DescriptionCharacter>
          <Button>Adicionar ao carrinho</Button>
        </DetailsContainer>
      </CharacterCardContainer>
    </CharacterDetailContainer>
  );
};
