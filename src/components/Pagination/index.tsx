import { useState } from "react";
import { PaginationContainer, PaginationControls, PageButton } from "./style";
import Hqs from "../../pages/Home/components/Hq";
import { HqsContainer } from "../../pages/Home/components/Hq/styles";
import { MarvelAPIResponse } from "../../models/Hqs";

type PaginationProps = {
  hqs: MarvelAPIResponse | null;
};
export const Pagination = ({ hqs }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 14;

  if (!hqs || !hqs.data || !hqs.data.results) {
    return null;
  }

  const totalPages = Math.ceil(hqs?.data?.results?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = hqs.data.results.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <PaginationContainer>
      <HqsContainer>
        {currentItems.map((item) => (
          <Hqs key={item.id} hq={item} />
        ))}
      </HqsContainer>

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
