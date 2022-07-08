import styled from "styled-components";

export const DescriptionTextEl = styled.p`
  color: var(--color-light-grey);
  letter-spacing: -0.3px;
  line-height: 2.4rem;
  max-width: 37rem;
  margin-bottom: 4.2rem;
  opacity: 0.8;

  &.product-intro {
    color: var(--color-dark-grey);
  }

  @media screen and (max-width: 375px) {
    margin-bottom: 29px;
  }

  &.featured {
    position: absolute;
    right: 74px;
    top: 273px;
    z-index: 1;

    @media screen and (max-width: 1150px) {
      position: static;
    }

    @media screen and (max-width: 375px) {
      margin-bottom: 25px;
    }
  }

  &.store-description {
    color: var(--color-dark-grey);
    max-width: 44.8rem;
    letter-spacing: -0.4px;
    font-weight: 500;
    line-height: 25px;
    margin-bottom: 0;

    @media screen and (max-width: 768px) {
      max-width: 58rem;
    }
  }

  &.footer {
    max-width: 54rem;
    line-height: 25px;

    @media screen and (max-width: 768px) {
      max-width: 100%;
    }
  }

  &.copyright {
    word-spacing: 1px;
    font-weight: 500;
  }
`;
