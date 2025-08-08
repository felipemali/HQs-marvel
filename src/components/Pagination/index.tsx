import React, { useState } from "react";
import {
  PaginationContainer,
  ItemPagination,
  PaginationControls,
  PageButton,
} from "./style";
import { marvelCharacters } from "../../api/characters";
import Characters from "../../pages/Home/components/Character";
import { CharactersContainer } from "../../pages/Home/components/Character/styles";
import { MarvelAPIResponse } from "../../models/Characters";

type PaginationProps = {
  characters: MarvelAPIResponse | null;
};
export const Pagination = ({ characters }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 14;

  if (!characters || !characters.data || !characters.data.results) {
    return null;
  }

  const totalPages = Math.ceil(
    characters?.data?.results?.length / itemsPerPage
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = characters.data.results.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <PaginationContainer>
      <CharactersContainer>
        {currentItems.map((item) => (
          <Characters key={item.id} character={item} />
        ))}
      </CharactersContainer>

      <PaginationControls>
        {Array.from({ length: totalPages }, (_, i) => (
          <PageButton
            key={i}
            onClick={() => handlePageChange(i + 1)}
            active={currentPage === i + 1}
          >
            {i + 1}
          </PageButton>
        ))}
      </PaginationControls>
    </PaginationContainer>
  );
};
