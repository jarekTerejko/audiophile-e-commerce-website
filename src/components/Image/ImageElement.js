import styled from "styled-components";

export const ImageEl = styled.img`
  &.categories-img {
    max-width: 22rem;
  }

  &.headphones {
    position: relative;
    top: -80px;

    @media screen and (max-width: 768px) {
      top: -52px;
      max-width: 142px;
    }
  }

  &.speakers {
    position: relative;
    top: -73px;

    @media screen and (max-width: 768px) {
      top: -52px;
      max-width: 15rem;
    }
  }

  &.earphones {
    position: relative;
    top: -59px;

    @media screen and (max-width: 768px) {
      max-width: 180px;
      top: -52px;
    }
  }
`;
