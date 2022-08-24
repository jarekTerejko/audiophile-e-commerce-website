import styled from "styled-components";

export const ProductsIntroWrapper = styled.section`
  margin-bottom: 20rem;
`;

export const ProductsIntroContent = styled.div``;
export const ProductsIntroColsWrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "col1 col2";
  column-gap: 30px;
  margin-bottom: 16rem;

  @media screen and (max-width: 768px) {
    display: block;
  }

  &:nth-of-type(even) {
    grid-template-areas: "col2 col1";
  }
`;

export const ProductsIntroColPhoto = styled.div`
  grid-area: col1;

  @media screen and (max-width: 768px) {
    margin-bottom: 5rem;
  }
`;

export const ProductsIntroColText = styled.div`
  grid-area: col2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 110px;
  align-items: flex-start;

  @media screen and (max-width: 1150px) {
    padding-left: 0;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }

  &.product-intro {
    padding-left: 0;
  }
`;

export const ProductsIntroImgDesktop = styled.img`
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ProductsIntroImgTablet = styled.img`
  display: none;

  @media screen and (min-width: 376px) and (max-width: 768px) {
    display: block;
    border-radius: 5px;
  }
`;

export const ProductsIntroImgMobile = styled.img`
  border-radius: 5px;
  @media screen and (min-width: 376px) {
    display: none;
  }
`;
