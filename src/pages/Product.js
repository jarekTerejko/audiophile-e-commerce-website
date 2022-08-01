import useFetch from "../useFetch";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";
import ProductHero from "../components/ProductHero";
import ProductDetails from "../components/ProductDetails";
import ProductGallery from "../components/ProductGallery";
import { useLocation } from "react-router-dom";
import ProductOthers from "../components/ProductOthers";
import Categories from "../components/Shop";
import StoreDescription from "../components/StoreDescription";

const Product = ({addItem}) => {
  const { data, isLoading, fetchErrorValue, fetchError } =
    useFetch("../data.json");
  console.log(data);
  const location = useLocation();

  return (
    <>
      {isLoading ? <Loader /> : null}
      {fetchError ? <NotFound fetchErrorValue={fetchErrorValue} /> : null}
      {data.length === 0 ? null : (
        <>
          <ProductHero addItem={addItem} data={data[0]} location={location.pathname.slice(1)} />
          <ProductDetails
            data={data[0]}
            location={location.pathname.slice(1)}
          />
          <ProductGallery
            data={data[0]}
            location={location.pathname.slice(1)}
          />
          <ProductOthers data={data[0]} location={location.pathname.slice(1)} />
          <Categories data={data[0][7]} />
          <StoreDescription data={data[0][9]} />
        </>
      )}
    </>
  );
};

export default Product;
