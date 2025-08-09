import { useRef } from "react";
import { MarvelAPIResponse } from "../../models/Hqs";
import { SearchForm, SearchInput } from "./styles";
import { hqsMock } from "../../api/hqsMock";
import { Button } from "../Button";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

type FormProps = {
  hqs: MarvelAPIResponse | null;
  setHqs: (characters: MarvelAPIResponse) => void;
};
export const Form = ({ hqs, setHqs }: FormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = inputRef.current?.value;
    console.log("Valor do input:", value);

    if (value && hqs) {
      const filteredResults = hqs.data.results?.filter((row) =>
        row.name.toLowerCase().includes(value.toLowerCase())
      );

      if (hqs) {
        const newHqs: MarvelAPIResponse = {
          ...hqs,
          data: {
            ...hqs.data,
            results: filteredResults,
          },
        };
        console.log("filteredResults", filteredResults);

        setHqs(newHqs);
      }
    } else {
      setHqs(hqsMock);
    }
  };

  return (
    <SearchForm className="search" onSubmit={handleSubmit}>
      <SearchInput
        ref={inputRef}
        type="text"
        placeholder="Digite o nome de uma HQ"
      />

      <div>
        <Button type="submit">Buscar</Button>
        <Button type="reset">Limpar</Button>
        <Button onClick={() => navigate(`/carrinho`)}>
          <ShoppingCart size={15} />
        </Button>
      </div>
    </SearchForm>
  );
};
