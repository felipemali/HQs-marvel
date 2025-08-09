import { hqsMock } from "../../api/hqsMock";
import { useDispatch } from "react-redux";
import { setHqs } from "../../redux/store/marvelSlice";
import { Form } from "../../components/Form";
import { useEffect } from "react";
import { Pagination } from "../../components/Pagination";
import { useAppSelector } from "../../hooks";

export type setFiltersProps = {
  orderBy: string;
  orientation: string;
};

const Home = () => {
  const hqs = useAppSelector((state) => state.marvel.hqs);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHqs(hqsMock));
  }, [dispatch]);

  return (
    <>
      <Form />
      <Pagination hqs={hqs} />
    </>
  );
};

export default Home;
