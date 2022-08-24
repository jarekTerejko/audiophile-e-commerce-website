import useFetch from "../useFetch";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";
import { useLocation } from "react-router-dom";
import ProductWrapper from "../components/ProductWrapper/ProductWrapper";

const Product = ({ addItem }) => {
  const { data, isLoading, fetchErrorValue, fetchError } =
    useFetch("../data.json");
  const location = useLocation();

  return (
    <>
      {isLoading ? <Loader /> : null}
      {fetchError ? <NotFound fetchErrorValue={fetchErrorValue} /> : null}
      {data.length === 0 ? null : (
        <>
          <ProductWrapper
            addItem={addItem}
            data={data[0]}
            location={location.pathname.slice(1)}
            fetchErrorValue={fetchErrorValue}
          />
        </>
      )}
    </>
  );
};

export default Product;
