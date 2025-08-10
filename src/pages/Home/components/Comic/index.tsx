import { ComicCard } from "./styles";

import { Caption } from "../../../../components/Caption";
import { useNavigate } from "react-router-dom";
import { MarvelComicRarity } from "../../../../models/comicks";

type ComicsProps = {
  comic: MarvelComicRarity;
};
export default function Comic({ comic }: ComicsProps) {
  const navigate = useNavigate();
  return (
    <ComicCard
      isRare={comic.isRare}
      onClick={() => navigate(`/detalhes/${comic.title}`, { state: { comic } })}
      key={comic.id}
      style={{
        background: `url(${comic.thumbnail.path}) no-repeat center`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Caption>{comic.title}</Caption>
    </ComicCard>
  );
}
