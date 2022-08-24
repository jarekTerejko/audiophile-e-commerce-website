import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerEl } from "../Container/ContainerElement";
import { DescriptionTextEl } from "../DescriptionText/DescriptionTextEl";
import { HeadingSecondaryEl } from "../HeadingSecondary/HeadingSecondaryEl";
import { IntroTextEl } from "../IntroText/IntroTextEl";
import {
  ProductsIntroImgDesktop,
  ProductsIntroImgTablet,
  ProductsIntroImgMobile,
} from "../ProductsIntro/ProductsIntroElements";
import {
  PorductHeroColsWrapper,
  ProductHeroBackBtn,
  ProductHeroBtnsWrapper,
  ProductHeroCartBtn,
  ProductHeroColPhoto,
  ProductHeroColText,
  ProductHeroPrice,
  ProductHeroQuantity,
  ProductHeroWrapper,
} from "./ProductHeroElements";

const ProductHero = ({ data, location, addItem }) => {
  const product = data.filter((item) => item.slug === location);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  useEffect(() => {
    setQuantity(1);
    // return () => {
    // }
  }, [location]);

  const formatter = new Intl.NumberFormat("en-US", {
    // style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const navigateBack = useNavigate();

  return (
    <>
      <ProductHeroWrapper>
        <ContainerEl>
          <ProductHeroBackBtn onClick={() => navigateBack(-1)}>
            Go back
          </ProductHeroBackBtn>
          <PorductHeroColsWrapper>
            <ProductHeroColPhoto>
              <ProductsIntroImgDesktop src={product[0].image.desktop} />
              <ProductsIntroImgTablet src={product[0].image.tablet} />
              <ProductsIntroImgMobile src={product[0].image.mobile} />
            </ProductHeroColPhoto>
            <ProductHeroColText>
              {product[0].new ? (
                <IntroTextEl colorOrange className="product-hero">
                  New product
                </IntroTextEl>
              ) : null}
              <HeadingSecondaryEl className="product-intro product-hero">
                {product[0].name}
              </HeadingSecondaryEl>
              <DescriptionTextEl className="product-intro product-hero">
                {product[0].description}
              </DescriptionTextEl>
              <ProductHeroPrice>
                $ {formatter.format(product[0].price)}
              </ProductHeroPrice>
              <ProductHeroBtnsWrapper>
                <ProductHeroCartBtn
                  onClick={decreaseQuantity}
                  className="quantity-btn"
                >
                  -
                </ProductHeroCartBtn>
                <ProductHeroQuantity>{quantity}</ProductHeroQuantity>
                <ProductHeroCartBtn
                  onClick={increaseQuantity}
                  className="quantity-btn"
                >
                  +
                </ProductHeroCartBtn>
                <ProductHeroCartBtn
                  onClick={() => addItem(product[0], quantity)}
                >
                  Add to cart
                </ProductHeroCartBtn>
              </ProductHeroBtnsWrapper>
            </ProductHeroColText>
          </PorductHeroColsWrapper>
        </ContainerEl>
      </ProductHeroWrapper>
    </>
  );
};

export default ProductHero;
