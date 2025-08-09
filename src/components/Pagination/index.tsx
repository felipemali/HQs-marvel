import { useEffect, useState } from "react";
import { PaginationContainer, PaginationControls, PageButton } from "./style";
import Hqs from "../../pages/Home/components/Hq";
import { HqsContainer } from "../../pages/Home/components/Hq/styles";
import { MarvelAPIResponse, MarvelHq } from "../../models/Hqs";
import { useAppSelector } from "../../hooks";

type PaginationProps = {
  hqs: MarvelAPIResponse | null;
};
export const Pagination = ({ hqs }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filtered, setFiltered] = useState<MarvelHq[]>([]);
  const search = useAppSelector((state) => state.marvel.search);

  const itemsPerPage = 14;

  useEffect(() => {
    if (hqs) {
      const filteredResults = hqs.data.results.filter((row) => {
        if (search) {
          return row.name.toLowerCase().includes(search.toLowerCase());
        }
        return true;
      });

      setFiltered(filteredResults);
    }
  }, [search]);

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
        {search
          ? filtered.map((item) => <Hqs key={item.id} hq={item} />)
          : currentItems.map((item) => <Hqs key={item.id} hq={item} />)}
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
