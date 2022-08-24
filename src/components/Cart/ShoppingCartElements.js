import styled from "styled-components";

export const ShoppingCartOverlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 2;
  display: ${(props) => (props.isCartVisible ? "block" : "none")};
`;

export const ShoppingCartWrapper = styled.div`
  position: absolute;
  top: 130px;
  right: 24px;
  display: ${(props) => (props.isCartVisible ? "block" : "none")};
  background: var(--color-dark-white);
  padding: 30px;
  max-width: 375px;
  z-index: 1;
  border-radius: 1rem;

  @media screen and (max-width: 425px) {
    max-width: 100%;
    right: 0px;
    width: 100%;
  }

  @media screen and (max-width: 375px) {
    padding: 20px;
  }
`;

export const ShoppingCartHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ShoppingCartHeading = styled.h3``;

export const ShoppingCartRemoveBtn = styled.button`
  background: none;
  border: none;
  color: var(--color-dark-grey);
  font-family: var(--font-family);
  text-decoration: underline;
  font-size: 14px;
  cursor: pointer;
`;

export const ShoppingCartItemsWrapper = styled.div`
  margin-bottom: 40px;
`;

export const ShoppingCartItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 90px;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
`;

export const ShoppingCartItemName = styled.h4`
  line-height: 16px;
  font-size: 14px;
  margin-bottom: 4px;
`;

export const ShoppingCartItemPrice = styled.p`
  color: var(--color-dark-grey);
  font-size: 14px;
  font-weight: 700;
`;

export const ShoppingCartQuantityBtn = styled.button`
  background: var(--color-light-grey);
  border: none;
  font-size: 14px;
  font-family: var(--font-family);
  font-weight: 700;
  color: var(--color-dark-grey);
  line-height: 14px;
  width: 30px;
  height: 30x;
  line-height: 30px;
  cursor: pointer;
`;

export const ShoppingCartQuantity = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  width: 30px;
  height: 30px;
  font-weight: 700;
  background: var(--color-light-grey);
`;

export const ShoppingCartItemsColThree = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ShoppingCartItemsColTwo = styled.div``;
