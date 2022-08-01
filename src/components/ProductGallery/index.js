import { ContainerEl } from "../Container/ContainerElement";
import {
  ProductGalleryImgOne,
  ProductGalleryImgThree,
  ProductGalleryImgTwo,
  ProductGalleryInnerWrapper,
  ProductGalleryWrapper,
} from "./ProductGalleryElements";

const ProductGallery = ({ data, location }) => {
  const product = data.filter((item) => item.slug === location);
  return (
    <>
      <ProductGalleryWrapper>
        <ContainerEl>
          <ProductGalleryInnerWrapper>
            <ProductGalleryImgOne
              ImgDesktop={product[0].gallery.first.desktop}
            />
            <ProductGalleryImgTwo
              ImgDesktop={product[0].gallery.second.desktop}
            />
            <ProductGalleryImgThree
              ImgDesktop={product[0].gallery.third.desktop}
            />
          </ProductGalleryInnerWrapper>
        </ContainerEl>
      </ProductGalleryWrapper>
    </>
  );
};

export default ProductGallery;
