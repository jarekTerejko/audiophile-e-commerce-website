import styled from "styled-components";

export const FooterWrapper = styled.footer`
  min-height: 36.5rem;
  background: #101010;
  padding-top: 7.5rem;

  @media screen and (max-width: 768px) {
    padding-top: 6rem;
    padding-bottom: 41px;
  }
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;

  @media screen and (max-width: 768px) {
    display: block;
  }

  &::before {
    content: "";
    position: absolute;
    top: -75px;
    left: 0;
    height: 4px;
    width: 10rem;
    background: var(--color-orange);

    @media screen and (max-width: 768px) {
      top: -60px;
    }
  }
`;

export const FooterContentRowOneColLeft = styled.div`
  @media screen and (max-width: 768px) {
    margin-bottom: 27px;
  }
`;

export const FooterContentRowOneColRight = styled.nav``;

export const FooterContentRowTwo = styled.div`
  grid-column: 1/3;
  padding-top: 3.1rem;
`;

export const FooterContentRowThreeColLeft = styled.div`
  padding-top: 1.4rem;

  @media screen and (max-width: 768px) {
    padding-top: 39px;
  }
`;

export const FooterContentRowThreeColRight = styled.div``;
export const FooterNavItems = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    margin-left: -5px;
  }

  @media screen and (max-width: 580px) {
    flex-direction: column;
  }
`;

export const FooterNavItem = styled.li`
  margin-right: 2.5rem;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const FooterSocialItems = styled.ul`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  margin-top: -7.3rem;

  @media screen and (max-width: 768px) {
    margin-top: -65px;
  }

  @media screen and (max-width: 580px) {
    justify-content: flex-start;
    margin-top: 0;
  }
`;

export const FooterSocialItem = styled.li`
  margin-left: 16px;

  @media screen and (max-width: 580px) {
    margin-left: 0;
    margin-right: 16px;
  }
`;

export const FooterSocialLink = styled.a``;
