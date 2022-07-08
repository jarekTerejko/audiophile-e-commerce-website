import {
  CategoryHeaderWrapper,
  CategoryHeading,
} from "./CategoryHeaderElements";

const CategoryHeader = ({ location }) => {
  return (
    <>
      <CategoryHeaderWrapper>
        <CategoryHeading>{location.slice(1)}</CategoryHeading>
      </CategoryHeaderWrapper>
    </>
  );
};

export default CategoryHeader;
