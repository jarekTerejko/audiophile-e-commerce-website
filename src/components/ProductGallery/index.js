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
              ImgTablet={product[0].gallery.first.tablet}
              ImgMobile={product[0].gallery.first.mobile}
            />
            <ProductGalleryImgTwo
              ImgDesktop={product[0].gallery.second.desktop}
              ImgTablet={product[0].gallery.second.tablet}
              ImgMobile={product[0].gallery.second.mobile}
            />
            <ProductGalleryImgThree
              ImgDesktop={product[0].gallery.third.desktop}
              ImgTablet={product[0].gallery.third.tablet}
              ImgMobile={product[0].gallery.third.mobile}
            />
          </ProductGalleryInnerWrapper>
        </ContainerEl>
      </ProductGalleryWrapper>
    </>
  );
};

export default ProductGallery;
