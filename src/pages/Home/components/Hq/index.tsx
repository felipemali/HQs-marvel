import { HqCard } from "./styles";

import { MarvelHq } from "../../../../models/Hqs";
import { Caption } from "../../../../components/Caption";
import { useNavigate } from "react-router-dom";

type HqsProps = {
  hq: MarvelHq;
};
export default function Hqs({ hq }: HqsProps) {
  const navigate = useNavigate();
  return (
    <HqCard
      onClick={() => navigate(`/detalhes/${hq.name}`, { state: { hq } })}
      key={hq.id}
      style={{
        background: `url(${hq.thumbnail.path}) no-repeat center`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <Star color="yellow" />
          Raro */}
      <Caption>{hq.name}</Caption>
    </HqCard>
  );
}
