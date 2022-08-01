import styled from "styled-components";

export const ProductOthersWrapper = styled.section`
  margin-bottom: 240px;
`;
export const ProductOthersHeading = styled.h2`
  text-transform: uppercase;
  font-size: 32px;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 60px;
`;

export const ProductOthersInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;
export const ProductOthersCol = styled.div`
  text-align: center;
`;
export const ProductOthersImgContainer = styled.div`
  min-height: 318px;
  background-image: ${({ imgDesktop }) =>
    imgDesktop ? `url(${imgDesktop})` : `url('')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 39px;
`;

export const ProductOthersItemName = styled.h3`
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 26px;
`;
