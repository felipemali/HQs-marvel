import { PaginationContainer, PaginationControls, PageButton } from "./style";
import Comic from "../../pages/Home/components/Comic";
import { ComicContainer } from "../../pages/Home/components/Comic/styles";
import { useAppSelector } from "../../hooks";
import {
  MarvelComicRarity,
  MarvelComicsAPIResponse,
} from "../../models/comics";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/store/marvelSlice";

type PaginationProps = {
  comics: MarvelComicsAPIResponse<MarvelComicRarity> | undefined;
};
export const Pagination = ({ comics }: PaginationProps) => {
  const currentPage = useAppSelector((state) => state.marvel.currentPage);

  const dispatch = useDispatch();

  const itemsPerPage = 14;
  const totalPages = Math.ceil((comics?.data.total ?? 0) / itemsPerPage);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <PaginationContainer>
      <ComicContainer>
        {comics?.data.results.map((item) => (
          <Comic key={item.id} comic={item} />
        ))}
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
