import { useLocation, useParams } from "react-router-dom";
import CategoryHeader from "../components/CategoryHeader";
import ProductsIntro from "../components/ProductsIntro";
import useFetch from "../useFetch";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";

const Headphones = () => {
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
          <ProductsIntro data={data[0]} />
        </>
      )}
    </>
  );
};

export default Headphones;
