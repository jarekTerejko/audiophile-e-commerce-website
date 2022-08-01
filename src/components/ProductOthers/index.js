import { ContainerEl } from "../Container/ContainerElement";
import { LinkRouter } from "../LinkRouter/LinkRouterEl";
import {
  ProductOthersCol,
  ProductOthersHeading,
  ProductOthersImgContainer,
  ProductOthersInnerWrapper,
  ProductOthersItemName,
  ProductOthersWrapper,
} from "./ProductOthersElements";

const ProductOthers = ({ data, location }) => {
  const product = data.filter((item) => item.slug === location);
  return (
    <>
      <ProductOthersWrapper>
        <ContainerEl>
          <ProductOthersHeading>You may also like</ProductOthersHeading>
          <ProductOthersInnerWrapper>
            {product[0].others.map((item, i) => {
              return (
                <ProductOthersCol key={i}>
                  <ProductOthersImgContainer imgDesktop={item.image.desktop} />
                  <ProductOthersItemName>{item.name}</ProductOthersItemName>
                  <LinkRouter to={`/${item.slug}`}>See product</LinkRouter>
                </ProductOthersCol>
              );
            })}
          </ProductOthersInnerWrapper>
        </ContainerEl>
      </ProductOthersWrapper>
    </>
  );
};

export default ProductOthers;
