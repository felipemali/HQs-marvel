import { SearchForm, SearchInput, SearchButton, ResetButton } from "./styles";
export const Form = () => {
  return (
    <SearchForm className="search">
      <SearchInput type="text" placeholder="Digite o nome de uma HQ" />
      <div>
        <SearchButton type="submit">Buscar</SearchButton>
        <ResetButton type="reset">Limpar</ResetButton>
      </div>
    </SearchForm>
  );
};
