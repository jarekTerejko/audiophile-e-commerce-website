import styled from "styled-components";

export const ProductDetailsWrapper = styled.section`
  margin-bottom: 135px;
`;

export const ProductDetailsCols = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 1030px) {
    column-gap: 40px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 40px;
  }
`;

export const ProductDetailsColLeft = styled.div`
  grid-column: 1/3;

  @media screen and (max-width: 768px) {
    grid-column: 1/2;
  
  }
`;

export const ProductDetailsColRight = styled.div`
  padding-left: 20px;
  @media screen and (max-width: 1030px) {
    padding-left: 0;
  }

  @media screen and (max-width: 768px) {
    grid-column: 1/2;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  
  @media screen and (max-width: 570px) {
    display: block;
  }
`;

export const ProductDetailsList = styled.ul`
  list-style: none;
`;

export const ProductDetailsListItem = styled.li`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: 7px;
  line-height: 26px;
  color: var(--color-dark-grey);
`;

export const ProductDetailsListItemQuantity = styled.span`
  margin-right: 23px;
  color: var(--color-orange);
`;
