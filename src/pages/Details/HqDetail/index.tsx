import { Button } from "../../../components/Button";
import { Caption } from "../../../components/Caption";
import ArrowLeft from "../../../assets/img/arrow_left.png";
import {
  ComicDetailContainer,
  ComicCard,
  ComicDescription,
  DetailsContainer,
  ComicCardContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/store/marvelSlice";
import { MarvelComic } from "../../../models/comicks";

type ComicDetailProps = {
  comic: MarvelComic;
};
export const ComicDetail = ({ comic }: ComicDetailProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <ComicDetailContainer>
      <img
        style={{ cursor: "pointer" }}
        src={ArrowLeft}
        alt="Voltar"
        width={35}
        height={35}
        onClick={() => navigate("/")}
      />
      <ComicCardContainer>
        <ComicCard
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
        <DetailsContainer>
          <ComicDescription>{comic.description}</ComicDescription>
          <Button
            onClick={() => {
              dispatch(addToCart(comic));
              navigate(`/carrinho`);
            }}
          >
            Adicionar ao carrinho
          </Button>
        </DetailsContainer>
      </ComicCardContainer>
    </ComicDetailContainer>
  );
};
