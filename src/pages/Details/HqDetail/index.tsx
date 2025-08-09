import { Button } from "../../../components/Button";
import { Caption } from "../../../components/Caption";
import { MarvelHq } from "../../../models/Hqs";
import ArrowLeft from "../../../assets/img/arrow_left.png";
import {
  HqDetailContainer,
  HqCard,
  HqDescription,
  DetailsContainer,
  HqCardContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/store/marvelSlice";

type HqDetailProps = {
  hq: MarvelHq;
};
export const HqDetail = ({ hq }: HqDetailProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <HqDetailContainer>
      <img
        style={{ cursor: "pointer" }}
        src={ArrowLeft}
        alt="Voltar"
        width={35}
        height={35}
        onClick={() => navigate("/")}
      />
      <HqCardContainer>
        <HqCard
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
        <DetailsContainer>
          <HqDescription>{hq.description}</HqDescription>
          <Button
            onClick={() => {
              dispatch(addToCart(hq));
              navigate(`/carrinho`);
            }}
          >
            Adicionar ao carrinho
          </Button>
        </DetailsContainer>
      </HqCardContainer>
    </HqDetailContainer>
  );
};
