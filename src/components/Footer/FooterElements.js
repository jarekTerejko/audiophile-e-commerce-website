import styled from "styled-components";

export const FooterWrapper = styled.footer`
  min-height: 36.5rem;
  background: #101010;
  padding-top: 7.5rem;
`;
export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -75px;
    left: 0;
    height: 4px;
    width: 10rem;
    background: var(--color-orange);
  }
`;
export const FooterContentRowOneColLeft = styled.div``;
export const FooterContentRowOneColRight = styled.nav``;
export const FooterContentRowTwo = styled.div`
  grid-column: 1/3;
  padding-top: 3.1rem;
`;
export const FooterContentRowThreeColLeft = styled.div`
  padding-top: 1.4rem;
`;
export const FooterContentRowThreeColRight = styled.div``;
export const FooterNavItems = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
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
`;
export const FooterSocialItem = styled.li`
  margin-left: 16px;
`;

export const FooterSocialLink = styled.a``;
