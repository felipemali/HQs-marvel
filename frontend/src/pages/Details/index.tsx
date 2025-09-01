import { useLocation } from "react-router-dom";
import { ComicDetail } from "./components/HqDetail";
import { MarvelComicRarity } from "../../models/comics";
import { useAppSelector } from "../../hooks";
import { Loading } from "../../components/Loading";

type DetailsProps = {
  comic: MarvelComicRarity;
};
const Details = () => {
  const location = useLocation();
  const { comic }: DetailsProps = location.state || {};
  const isLoading = useAppSelector((state) => state.marvel.isLoading);

  if (isLoading) return <Loading loading={isLoading} />;
  return <ComicDetail comic={comic} />;
};
export default Details;
