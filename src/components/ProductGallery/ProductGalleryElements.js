import styled from "styled-components";

export const ProductGalleryWrapper = styled.div`
  margin-bottom: 156px;
`;

export const ProductGalleryInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr 1fr;
  min-height: 592px;
  gap: 30px;

  @media screen and (max-width: 768px) {
  min-height: 368px;
  gap: 15px;
  }
`;

export const ProductGalleryImgOne = styled.div`
  grid-row: 1/2;
  grid-column: 1/6;
  background-image: ${({ ImgDesktop }) =>
    ImgDesktop ? `url(${ImgDesktop})` : `url('')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    background-image: ${({ ImgTablet }) =>
      ImgTablet ? `url(${ImgTablet})` : `url('')`};
  }

  @media screen and (max-width: 375px) {
    background-image: ${({ ImgMobile }) =>
      ImgMobile ? `url(${ImgMobile})` : `url('')`};
    grid-column: 1/13;
    grid-row: 1/2;
    min-height: 174px;
  }
`;

export const ProductGalleryImgTwo = styled.div`
  grid-row: 2/3;
  grid-column: 1/6;
  background-image: ${({ ImgDesktop }) =>
    ImgDesktop ? `url(${ImgDesktop})` : `url('')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    background-image: ${({ ImgTablet }) =>
      ImgTablet ? `url(${ImgTablet})` : `url('')`};
  }

  @media screen and (max-width: 375px) {
    background-image: ${({ ImgMobile }) =>
      ImgMobile ? `url(${ImgMobile})` : `url('')`};
    grid-column: 1/13;
    grid-row: 2/3;
    min-height: 174px;
  }
`;

export const ProductGalleryImgThree = styled.div`
  grid-row: 1/3;
  grid-column: 6/13;
  background-image: ${({ ImgDesktop }) =>
    ImgDesktop ? `url(${ImgDesktop})` : `url('')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    background-image: ${({ ImgTablet }) =>
      ImgTablet ? `url(${ImgTablet})` : `url('')`};
  }
  
  @media screen and (max-width: 375px) {
    background-image: ${({ ImgMobile }) =>
      ImgMobile ? `url(${ImgMobile})` : `url('')`};
    grid-column: 1/13;
    grid-row: 3/4;
    min-height: 368px;
  }
`;
