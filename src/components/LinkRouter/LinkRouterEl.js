import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkRouter = styled(Link)`
  background: var(--color-orange);
  color: var(--color-white);
  padding: 1.55rem 3.1rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 1.5px;
  font-weight: 700;

  &.featured {
    background: var(--color-black);
    position: absolute;
    top: 388px;
    right: 283px;
    z-index: 1;

    @media screen and (max-width: 1150px) {
      position: static;
    }
  }

  &.featured--bordered {
    border: solid 1px var(--color-black);
    padding: 1.45rem 3rem;
    background: transparent;
    position: absolute;
    top: 171px;
    left: 97px;
    right: unset;
    color: var(--color-black);

    @media screen and (max-width: 768px) {
      left: 62px;
    }

    @media screen and (max-width: 580px) {
      left: 41px;
    }
  }

  &.featured--row-three {
    @media screen and (max-width: 880px) {
      left: 41px;
    }
  }
`;
