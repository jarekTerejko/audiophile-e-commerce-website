import { useLocation } from "react-router-dom";
import CategoryHeader from "../components/CategoryHeader";
import ProductsIntro from "../components/ProductsIntro";
import useFetch from "../useFetch";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";
import Categories from "../components/Shop";
import StoreDescription from "../components/StoreDescription";

const Earphones = () => {
  const location = useLocation();

  const { data, isLoading, fetchErrorValue, fetchError } =
    useFetch("../data.json");

  return (
    <>
      {isLoading ? <Loader /> : null}
      {fetchError ? <NotFound fetchErrorValue={fetchErrorValue} /> : null}
      {data.length === 0 ? null : (
        <>
          <CategoryHeader location={location.pathname} />
          <ProductsIntro data={data[0]} location={location.pathname.slice(1)} />
          <Categories data={data[0][7]} />
          <StoreDescription data={data[0][9]} />
        </>
      )}
    </>
  );
};

export default Earphones;
