import { ContainerEl } from "../Container/ContainerElement";
import { DescriptionTextEl } from "../DescriptionText/DescriptionTextEl";
import { HeadingSecondaryEl } from "../HeadingSecondary/HeadingSecondaryEl";
import {
  ProductDetailsColLeft,
  ProductDetailsColRight,
  ProductDetailsCols,
  ProductDetailsWrapper,
  ProductDetailsListItem,
  ProductDetailsListItemQuantity,
  ProductDetailsList,
} from "./ProductDetailsElements";

const ProductDetails = ({ data, location }) => {
  const product = data.filter((item) => item.slug === location);

  return (
    <>
      <ProductDetailsWrapper>
        <ContainerEl>
          <ProductDetailsCols>
            <ProductDetailsColLeft>
              <HeadingSecondaryEl className="product-details">
                Features
              </HeadingSecondaryEl>
              {product[0].features.map((item, i) => {
                return (
                  <DescriptionTextEl key={i} className="product-details">
                    {item}
                  </DescriptionTextEl>
                );
              })}
            </ProductDetailsColLeft>
            <ProductDetailsColRight>
              <HeadingSecondaryEl className="product-details">
                In the box
              </HeadingSecondaryEl>
              <ProductDetailsList>
                {product[0].includes.map((item, i) => {
                  return (
                    <ProductDetailsListItem key={i}>
                      <ProductDetailsListItemQuantity>
                        {`${item.quantity}x`}
                      </ProductDetailsListItemQuantity>
                      {item.item}
                    </ProductDetailsListItem>
                  );
                })}
              </ProductDetailsList>
            </ProductDetailsColRight>
          </ProductDetailsCols>
        </ContainerEl>
      </ProductDetailsWrapper>
    </>
  );
};

export default ProductDetails;
