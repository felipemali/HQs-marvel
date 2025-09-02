import { useQuery } from "@tanstack/react-query";
import { MarvelComicRarity, MarvelComicsAPIResponse } from "../models/comics";
type ComicsResponse = MarvelComicsAPIResponse<MarvelComicRarity>;

const fetchComics = async (
  page: number,
  search: string | undefined
): Promise<ComicsResponse> => {
  const res = await fetch(
    `https://hqs-marvel.onrender.com/api/comics?page=${page}&limit=14&search=${search}`
  );
  if (!res.ok) throw new Error("Erro ao buscar HQs");
  return res.json();
};

export const useComics = (page: number, search: string | undefined) => {
  const queryOptions = {
    queryKey: ["comics", page, search],
    queryFn: () => fetchComics(page, search),
    keepPreviousData: true,
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 48,
    refetchOnWindowFocus: false,
  };

  return useQuery<ComicsResponse, Error>(queryOptions);
};
