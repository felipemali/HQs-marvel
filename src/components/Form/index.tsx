import { useRef } from "react";
import { SearchForm, SearchInput } from "./styles";
import { Button } from "../Button";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/store/marvelSlice";

export const Form = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = inputRef.current?.value;
    dispatch(setSearch(value));
    console.log("Valor do input:", value);
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
