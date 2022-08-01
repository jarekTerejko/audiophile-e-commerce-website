import styled from "styled-components";

export const ProductHeroWrapper = styled.header`
  margin-bottom: 156px;
`;
export const PorductHeroColsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  column-gap: 30px;
`;

export const ProductHeroColPhoto = styled.div`
  border-radius: 1rem;
`;
export const ProductHeroColText = styled.div`
  padding-left: 110px;
  padding-left: 95px;
  margin-top: 77px;
`;

export const ProductHeroPrice = styled.h3`
  margin-bottom: 47px;
  letter-spacing: 1px;
`;

export const ProductHeroBtnsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductHeroCartBtn = styled.button`
  background: var(--color-orange);
  color: var(--color-white);
  padding: 1.55rem 3.1rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 1.5px;
  font-weight: 700;
  border: none;
  font-family: var(--font-family);

  &.quantity-btn {
    background: var(--color-light-grey);
    color: var(--color-dark-grey);
    padding: 15.5px 20px;
    letter-spacing: 0;
  }

  &:nth-of-type(2) {
    margin-right: 20px;
  }
`;

export const ProductHeroQuantity = styled.span`
  background: var(--color-light-grey);
  display: inline-block;
  padding: 1.55rem 10px;
  font-size: 12px;
  color: var(--color-black);
  font-weight: 700;
`;

export const ProductHeroBackBtn = styled.button`
  background: none;
  border: none;
  font-family: var(--font-family);
  margin-top: 81px;
  font-size: 15px;
  text-transform: capitalize;
  color: var(--color-dark-grey);
  font-weight: 500;
  margin-bottom: 58px;
`;
