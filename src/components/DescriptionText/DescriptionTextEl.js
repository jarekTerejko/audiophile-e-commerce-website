import styled from "styled-components";

export const DescriptionTextEl = styled.p`
  color: var(--color-light-grey);
  letter-spacing: -0.3px;
  line-height: 2.4rem;
  max-width: 37rem;
  margin-bottom: 4.2rem;
  opacity: 0.8;

  &.featured {
    position: absolute;
    right: 74px;
    top: 273px;
    z-index: 1;

    @media screen and (max-width: 1150px) {
      position: static;
    }
  }

  &.store-description {
    color: var(--color-dark-grey);
    max-width: 44.8rem;
    letter-spacing: -0.4px;
    font-weight: 500;
    line-height: 25px;
    margin-bottom: 0;
  }

  &.footer {
    max-width: 54rem;
    line-height: 25px;
  }

  &.copyright {
    word-spacing: 1px;
    font-weight: 500;
  }
`;