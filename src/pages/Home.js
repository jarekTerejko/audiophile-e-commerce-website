import useFetch from "../useFetch";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";
import Hero from "../components/Hero";

const Home = () => {
  const { data, isLoading, fetchErrorValue, fetchError } =
    useFetch("../data.json");
  // console.log(data);
  return (
    <>
      {isLoading ? <Loader /> : null}
      {fetchError ? <NotFound fetchErrorValue={fetchErrorValue} /> : null}
      {data.length === 0 ? null : (
        <>
          <Hero data={data[0]} />
        </>
      )}
    </>
  );
};

export default Home;
