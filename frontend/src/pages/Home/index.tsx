import { useDispatch } from "react-redux";
import { Form } from "../../components/Form";
import { useEffect, useRef, CSSProperties } from "react";
import { Pagination } from "../../components/Pagination";
import { useAppSelector } from "../../hooks";
import { setComics, setIsLoading } from "../../redux/store/marvelSlice";
import { useComics } from "../../hooks/fetchComics";
import { Loading } from "../../components/Loading";

export type setFiltersProps = {
  orderBy: string;
  orientation: string;
};

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Home = () => {
  const dispatch = useDispatch();
  const hasSynced = useRef(false);
  const search = useAppSelector((state) => state.marvel.search);
  const currentPage = useAppSelector((state) => state.marvel.currentPage);
  const { data, isLoading, error } = useComics(currentPage, search);

  useEffect(() => {
    if (data && !hasSynced.current) {
      dispatch(setComics(data));
      dispatch(setIsLoading(isLoading));
      hasSynced.current = true;
    }
  }, [data, dispatch]);

  if (isLoading)
    return (
      <>
        <Loading loading={isLoading} />;
      </>
    );

  if (error) return <p>Erro ao carregar HQs...</p>;

  return (
    <>
      <Form />
      <Pagination comics={data} />
    </>
  );
};

export default Home;
