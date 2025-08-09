import { ComicCard } from "./styles";

import { Caption } from "../../../../components/Caption";
import { useNavigate } from "react-router-dom";
import { MarvelComic } from "../../../../models/comicks";

type ComicsProps = {
  comic: MarvelComic;
};
export default function Comic({ comic }: ComicsProps) {
  const navigate = useNavigate();
  return (
    <ComicCard
      onClick={() => navigate(`/detalhes/${comic.title}`, { state: { comic } })}
      key={comic.id}
      style={{
        background: `url(${comic.thumbnail.path}) no-repeat center`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <Star color="yellow" />
          Raro */}
      <Caption>{comic.title}</Caption>
    </ComicCard>
  );
}
