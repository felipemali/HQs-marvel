import { ComicCard, ComicCardContainer } from "./styles";

import { Caption } from "../../../../components/Caption";
import { useNavigate } from "react-router-dom";
import { MarvelComicRarity } from "../../../../models/comics";

type ComicsProps = {
  comic: MarvelComicRarity;
};
export default function Comic({ comic }: ComicsProps) {
  const navigate = useNavigate();
  return (
    <ComicCardContainer isRare={comic.isRare}>
      <ComicCard
        data-testid="comic-card"
        onClick={() =>
          navigate(`/detalhes/${comic.title}`, { state: { comic } })
        }
        key={comic.id}
        style={{
          background: `url(${comic.thumbnail.path}) no-repeat center`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Caption>{comic.title}</Caption>
      </ComicCard>
    </ComicCardContainer>
  );
}
