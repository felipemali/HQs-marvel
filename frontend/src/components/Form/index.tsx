import { useRef, useState } from "react";
import { SearchForm, SearchInput, Button } from "./styles";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentPage, setSearch } from "../../redux/store/marvelSlice";
import { Alert } from "../Alert";

export const Form = () => {
  const [isAlert, setIsAlert] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = inputRef.current?.value;
    if (value !== "" && value !== undefined) {
      dispatch(setSearch(value));
      dispatch(setCurrentPage(1));
    } else {
      setIsAlert(true);
    }
  };
  const handleReset = () => {
    dispatch(setSearch(""));
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
        onFocus={() => setIsAlert(false)}
      />
      <div>
        <Button type="submit">Buscar</Button>
        <Button type="button" onClick={handleReset}>
          Limpar
        </Button>
        <Button data-testid="add-to-cart" onClick={() => navigate(`/carrinho`)}>
          <ShoppingCart size={15} />
        </Button>
      </div>
      {isAlert && <Alert type="error">Digite pelo menos uma letra</Alert>}
    </SearchForm>
  );
};
