import { useRef } from "react";
import { MarvelAPIResponse } from "../../models/Characters";
import { SearchForm, SearchInput } from "./styles";
import { marvelCharacters } from "../../api/characters";
import { Button } from "../Button";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

type FormProps = {
  characters: MarvelAPIResponse | null;
  setCharacters: (characters: MarvelAPIResponse) => void;
};
export const Form = ({ characters, setCharacters }: FormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = inputRef.current?.value;
    console.log("Valor do input:", value);

    if (value) {
      const filteredResults = marvelCharacters?.data.results?.filter((row) =>
        row.name.toLowerCase().includes(value.toLowerCase())
      );

      if (characters) {
        const newCharacters: MarvelAPIResponse = {
          ...characters,
          data: {
            ...characters.data,
            results: filteredResults,
          },
        };
        console.log("filteredResults", filteredResults);

        setCharacters(newCharacters);
      }
    } else {
      setCharacters(marvelCharacters);
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
        <Button
          onClick={() =>
            navigate(`/carrinho/${marvelCharacters.data.results[0].name}`, {
              state: { character: marvelCharacters.data.results[0] },
            })
          }
        >
          <ShoppingCart size={15} />
        </Button>
      </div>
    </SearchForm>
  );
};
