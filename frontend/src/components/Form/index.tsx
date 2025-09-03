import { useState } from "react";
import { SearchForm, SearchInput, Button, Error } from "./styles";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentPage, setSearch } from "../../redux/store/marvelSlice";
import { Alert } from "../Alert";
import { z } from "zod";

const schema = z.string().max(20, "Máximo de 20 caracteres");

export const Form = () => {
  const [isAlert, setIsAlert] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = schema.safeParse(inputValue);
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    if (inputValue !== "") {
      dispatch(setSearch(inputValue));
      dispatch(setCurrentPage(1));
      setError(null);
    } else {
      setIsAlert(true);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const result = schema.safeParse(value);
    if (!result.success) {
      const errorMessage = result.error.issues[0].message;
      setError(errorMessage);
    } else {
      setError(null);
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
        onChange={handleChange}
        type="text"
        placeholder="Digite o nome de uma HQ"
        onFocus={() => setIsAlert(false)}
      />
      {error && <Error>{error}</Error>}
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
