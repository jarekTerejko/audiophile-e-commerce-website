import styled from "styled-components";

export const ProductHeroWrapper = styled.header`
  margin-bottom: 156px;

  @media screen and (max-width: 768px) {
    margin-top: 94px;
  }

  @media screen and (max-width: 375px) {
    margin-top: 90px;
  }
`;

export const PorductHeroColsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductHeroColPhoto = styled.div`
  @media screen and (max-width: 1150px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 5rem;
  }
`;

export const ProductHeroColText = styled.div`
  padding-left: 95px;
  margin-top: 77px;

  @media screen and (max-width: 1150px) {
    padding-left: 0;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
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
  cursor: pointer;

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
