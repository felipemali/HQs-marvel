import {
  InfoContainer,
  InfoItem,
  InfoLabel,
  InfoValue,
  PricesList,
  PriceItem,
} from "./styles";

type Price = {
  type: string;
  price: number;
};

type ComicInfoProps = {
  dates: { type: string; date: string }[];
  format: string;
  prices: Price[];
};
export const ComicInfo = ({ dates, format, prices }: ComicInfoProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR");
  };

  const releaseDateObj = dates.find((d) => d.type === "onsaleDate");
  const releaseDate = releaseDateObj ? formatDate(releaseDateObj.date) : "N/A";

  return (
    <InfoContainer>
      <InfoItem>
        <InfoLabel>Data de lançamento:</InfoLabel>
        <InfoValue>{releaseDate}</InfoValue>
      </InfoItem>
      <InfoItem>
        <InfoLabel>Formato:</InfoLabel>
        <InfoValue>{format || "Desconhecido"}</InfoValue>
      </InfoItem>
      <InfoItem>
        <InfoLabel>Preços:</InfoLabel>
        <PricesList>
          {prices.length > 0 ? (
            prices.map((price, i) => (
              <PriceItem key={i}>
                {price.type}: R$ {price.price.toFixed(2)}
              </PriceItem>
            ))
          ) : (
            <PriceItem>Sem preço disponível</PriceItem>
          )}
        </PricesList>
      </InfoItem>
    </InfoContainer>
  );
};
