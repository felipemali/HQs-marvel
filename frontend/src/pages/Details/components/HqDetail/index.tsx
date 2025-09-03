import { Button } from "../../../../components/Button";
import { Caption } from "../../../../components/Caption";
import ArrowLeft from "../../../../assets/img/arrow_left.png";
import {
  ComicDetailContainer,
  ComicCard,
  ComicDescription,
  DetailsContainer,
  ComicCardContainer,
  Image,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { MarvelComicRarity } from "../../../../models/comics";
import { Alert } from "../../../../components/Alert";
import { useState } from "react";
import { ComicInfo } from "../ComicInfo";
import { useCart } from "../../../../hooks/useCart";

type ComicDetailProps = {
  comic: MarvelComicRarity;
};
export const ComicDetail = ({ comic }: ComicDetailProps) => {
  const [alert, setAlert] = useState(false);
  const { cartItems, add } = useCart();
  const navigate = useNavigate();

  const handleClick = (comic: MarvelComicRarity) => {
    const verifiquedCart = cartItems.find((item) => item.id === comic.id);
    if (!verifiquedCart) {
      const resumeComic = {
        id: comic.id,
        title: comic.title,
        prices: comic.prices,
        thumbnail: comic.thumbnail,
      };
      add(resumeComic);
      navigate(`/carrinho`);
    } else {
      setAlert(true);
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
          isRare={comic.isRare}
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
          <ComicInfo
            dates={comic.dates}
            format={comic.format}
            prices={comic.prices}
          />
          <Button onClick={() => handleClick(comic)}>
            Adicionar ao carrinho
          </Button>
          {alert && (
            <Alert type="error">Essa HQ ja foi adicionada ao carrinho.</Alert>
          )}
        </DetailsContainer>
      </ComicCardContainer>
    </ComicDetailContainer>
  );
};
