import { ContainerEl } from "../Container/ContainerElement";
import {
  CategoriesCol,
  CategoriesContent,
  CategoriesLink,
  CategoriesName,
  CategoriesWrapper,
} from "./CategoriesElements";
import { ImageEl } from "../Image/ImageElement";
import ArrowRight from "../../assets/shared/desktop/icon-arrow-right.svg";

const Categories = ({ data }) => {
  // console.log(data);
  return (
    <>
      <CategoriesWrapper>
        <ContainerEl>
          <CategoriesContent>
            {data.categories.map((item, i) => {
              return (
                <CategoriesCol key={i}>
                  <ImageEl src={item.img} className={`${item.className}`} />
                  <CategoriesName>{item.name}</CategoriesName>
                  <CategoriesLink to={`/${item.name}`}>
                    shop
                    <ImageEl src={ArrowRight} />
                  </CategoriesLink>
                </CategoriesCol>
              );
            })}
          </CategoriesContent>
        </ContainerEl>
      </CategoriesWrapper>
    </>
  );
};

export default Categories;
