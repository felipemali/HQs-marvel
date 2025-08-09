import { useLocation } from "react-router-dom";
import { MarvelHq } from "../../models/Hqs";
import { HqDetail } from "./HqDetail";

type DetailsProps = {
  hq: MarvelHq;
};
const Details = () => {
  const location = useLocation();
  const { hq }: DetailsProps = location.state || {};
  return <HqDetail hq={hq} />;
};
export default Details;
