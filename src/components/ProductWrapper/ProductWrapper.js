import NotFound from "../NotFound";
import ProductDetails from "../ProductDetails";
import ProductGallery from "../ProductGallery";
import ProductOthers from "../ProductOthers";
import Categories from "../Shop";
import StoreDescription from "../StoreDescription";
import ProductHero from "../ProductHero";

const ProductWrapper = ({ data, location, addItem, fetchErrorValue }) => {
  const product = data.filter((item) => item.slug === location);

  return (
    <>
      {product.length === 0 ? (
        <NotFound fetchErrorValue={fetchErrorValue} />
      ) : (
        <>
          <ProductHero addItem={addItem} data={data} location={location} />
          <ProductDetails data={data} location={location} />
          <ProductGallery data={data} location={location} />
          <ProductOthers data={data} location={location} />
          <Categories data={data[7]} />
          <StoreDescription data={data[9]} />
        </>
      )}
    </>
  );
};

export default ProductWrapper;
