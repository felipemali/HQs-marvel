import { useLocation } from "react-router-dom";
import { ComicDetail } from "./components/HqDetail";
import { MarvelComicRarity } from "../../models/comics";

type DetailsProps = {
  comic: MarvelComicRarity;
};
const Details = () => {
  const location = useLocation();
  const { comic }: DetailsProps = location.state || {};
  return <ComicDetail comic={comic} />;
};
export default Details;
