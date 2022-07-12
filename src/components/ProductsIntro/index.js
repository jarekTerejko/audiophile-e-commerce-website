import { ContainerEl } from "../Container/ContainerElement";
import { DescriptionTextEl } from "../DescriptionText/DescriptionTextEl";
import { HeadingSecondaryEl } from "../HeadingSecondary/HeadingSecondaryEl";
import { IntroTextEl } from "../IntroText/IntroTextEl";
import { LinkRouter } from "../LinkRouter/LinkRouterEl";
import {
  ProductsIntroColPhoto,
  ProductsIntroColText,
  ProductsIntroColsWrapper,
  ProductsIntroWrapper,
  ProductsIntroImgDesktop,
  ProductsIntroImgTablet,
  ProductsIntroImgMobile,
} from "./ProductsIntroElements";

const ProductsIntro = ({ data, location }) => {
  const items = data.filter((item) => item.category === location);
  console.log(location);
  return (
    <>
      <ProductsIntroWrapper>
        <ContainerEl>
          {items
            .sort((a, b) => Number(b.new) - Number(a.new))
            .map((item, i) => {
              return (
                <ProductsIntroColsWrapper key={i}>
                  <ProductsIntroColPhoto>
                    <ProductsIntroImgDesktop src={item.image.desktop} />
                    <ProductsIntroImgTablet src={item.image.tablet} />
                    <ProductsIntroImgMobile src={item.image.mobile} />
                  </ProductsIntroColPhoto>
                  <ProductsIntroColText
                    className={i % 2 ? "product-intro" : ""}
                  >
                    {item.new ? (
                      <IntroTextEl colorOrange>New product</IntroTextEl>
                    ) : null}
                    <HeadingSecondaryEl className="product-intro">
                      {item.name}
                    </HeadingSecondaryEl>
                    <DescriptionTextEl className="product-intro">
                      {item.description}
                    </DescriptionTextEl>
                    <LinkRouter to={item.slug}>see product</LinkRouter>
                  </ProductsIntroColText>
                </ProductsIntroColsWrapper>
              );
            })}
        </ContainerEl>
      </ProductsIntroWrapper>
    </>
  );
};

export default ProductsIntro;
