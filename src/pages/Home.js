import useFetch from "../useFetch";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";
import Hero from "../components/Hero";
import Categories from "../components/Shop";
import FeaturedProducts from "../components/FeaturedProducts";
import StoreDescription from "../components/StoreDescription";

const Home = () => {
  const { data, isLoading, fetchErrorValue, fetchError } =
    useFetch("../data.json");
  // console.log(data[0]);
  return (
    <>
      {isLoading ? <Loader /> : null}
      {fetchError ? <NotFound fetchErrorValue={fetchErrorValue} /> : null}
      {data.length === 0 ? null : (
        <>
          <Hero data={data[0]} />
          <Categories data={data[0][7]} />
          <FeaturedProducts data={data[0][8]} />
          <StoreDescription data={data[0][9]} />
        </>
      )}
    </>
  );
};

export default Home;
