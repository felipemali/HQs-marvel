import { Button } from "../../../components/Button";
import { Caption } from "../../../components/Caption";
import ArrowLeft from "../../../assets/img/arrow_left.png";
import {
  ComicDetailContainer,
  ComicCard,
  ComicDescription,
  DetailsContainer,
  ComicCardContainer,
  Image,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/store/marvelSlice";
import { MarvelComicRarity } from "../../../models/comics";
import { useAppSelector } from "../../../hooks";
import { Alert } from "../../../components/Alert";
import { useState } from "react";

type ComicDetailProps = {
  comic: MarvelComicRarity;
};
export const ComicDetail = ({ comic }: ComicDetailProps) => {
  const [alert, setAlert] = useState(false);
  const cart = useAppSelector((state) => state.marvel.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (comic: MarvelComicRarity) => {
    const verifiquedCart = cart.find((item) => item.id === comic.id);
    if (!verifiquedCart) {
      dispatch(addToCart(comic));
      navigate(`/carrinho`);
    } else {
      setAlert(true);
      console.log("caiuuuu no else");
      setTimeout(() => setAlert(false), 3000);
    }
  };
  return (
    <ComicDetailContainer>
      <Image
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
          <Caption>{comic.title}</Caption>
        </ComicCard>
        <DetailsContainer>
          <ComicDescription>{comic.description}</ComicDescription>
          <Button onClick={() => handleClick(comic)}>
            Adicionar ao carrinho
          </Button>
          {alert && (
            <Alert type="error">Essa HQ ja foi adicionado ao carrinho.</Alert>
          )}
        </DetailsContainer>
      </ComicCardContainer>
    </ComicDetailContainer>
  );
};
