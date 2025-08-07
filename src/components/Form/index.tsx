import { useRef } from "react";
import { MarvelAPIResponse } from "../../models/Characters";
import { SearchForm, SearchInput, SearchButton, ResetButton } from "./styles";
import { marvelCharacters } from "../../api/characters";


type FormProps = {
  characters: MarvelAPIResponse | undefined;
  setCharacters: (characters: MarvelAPIResponse) => void;
};
export const Form = ({ characters, setCharacters }: FormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

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
        <SearchButton type="submit">Buscar</SearchButton>
        <ResetButton type="reset">Limpar</ResetButton>
      </div>
    </SearchForm>
  );
};
