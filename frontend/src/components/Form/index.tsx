import { useRef, useState } from "react";
import { SearchForm, SearchInput, Button } from "./styles";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/store/marvelSlice";
import { Alert } from "../Alert";

export const Form = () => {
  const [error, setError] = useState({
    text: "",
    state: false,
  });
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
    <SearchForm
      data-testid="search-form"
      className="search"
      onSubmit={handleSubmit}
    >
      <SearchInput
        data-testid="comic-input"
        ref={inputRef}
        type="text"
        placeholder="Digite o nome de uma HQ"
      />

      <div>
        <Button type="submit">Buscar</Button>
        <Button type="reset">Limpar</Button>
        <Button data-testid="add-to-cart" onClick={() => navigate(`/carrinho`)}>
          <ShoppingCart size={15} />
        </Button>
      </div>
    </SearchForm>
  );
};
