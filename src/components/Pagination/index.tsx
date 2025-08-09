import { useEffect, useState } from "react";
import { PaginationContainer, PaginationControls, PageButton } from "./style";
import Comic from "../../pages/Home/components/Comic";
import { ComicContainer } from "../../pages/Home/components/Comic/styles";
import { useAppSelector } from "../../hooks";
import { MarvelComic, MarvelComicsAPIResponse } from "../../models/comicks";

type PaginationProps = {
  comics: MarvelComicsAPIResponse | null;
};
export const Pagination = ({ comics }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filtered, setFiltered] = useState<MarvelComic[]>([]);
  const search = useAppSelector((state) => state.marvel.search);

  const itemsPerPage = 14;

  useEffect(() => {
    if (comics) {
      const filteredResults = comics.data.results.filter((comic) => {
        if (search) {
          return comic.title.toLowerCase().includes(search.toLowerCase());
        }
        return true;
      });

      setFiltered(filteredResults);
    }
  }, [search]);

  if (!comics || !comics.data || !comics.data.results) {
    return null;
  }

  const totalPages = Math.ceil(comics?.data?.results?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = comics.data.results.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <PaginationContainer>
      <ComicContainer>
        {search
          ? filtered.map((item) => <Comic key={item.id} comic={item} />)
          : currentItems.map((item) => <Comic key={item.id} comic={item} />)}
      </ComicContainer>

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
