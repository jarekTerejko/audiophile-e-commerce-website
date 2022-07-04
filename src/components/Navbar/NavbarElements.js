import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  padding: 3.5rem 0 3.7rem 0;
  background: var(--color-dark);
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 36px 0 33px 0;
    min-height: 90px;
    position: fixed;
    width: 100%;
    z-index: 2;
    top: 0;
  }

  @media screen and (max-width: 375px) {
    padding: 32px 0;
    min-height: 90px;
  }
`;

export const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: -37px;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--color-dark-grey);

    @media screen and (max-width: 768px) {
      bottom: -37px;
      bottom: -33px;
    }

    @media screen and (max-width: 375px) {
      bottom: -33px;
      width: calc(100% + 48px);
      left: -24px;
    }
  }
`;

export const NavbarLinkR = styled(Link)`
  &.navbar-link {
    @media screen and (max-width: 768px) {
      position: absolute;
      left: 57px;
      top: -4px;
    }

    @media screen and (max-width: 768px) {
      position: static;
    }
  }
`;

export const NavbarNavItems = styled.ul`
  display: flex;
  list-style: none;
  margin-left: -12rem;

  @media screen and (max-width: 1000px) {
    margin-left: 0;
  }

  @media screen and (max-width: 768px) {
    transition: var(--transition);
    flex-direction: column;
    background: var(--color-dark);
    height: calc(100vh - 94px);
    position: absolute;
    right: -40px;
    top: 58px;
    z-index: 1;
    width: calc(100% + 8rem);
    justify-content: center;
    align-items: center;
    transform: ${(props) =>
      props.isOpen ? `translateX(0)` : "translateX(100%)"};
  }

  @media screen and (max-width: 375px) {
    width: calc(100% + 48px);
    right: -24px;
    height: calc(100vh - 90px);
  }
`;

export const NavbarNavItem = styled.li`
  margin: 0 1.3rem;

  @media screen and (max-width: 768px) {
    margin: 2rem 4rem;
  }
`;

export const NavbarNavLink = styled(NavLink)`
  text-transform: uppercase;
  font-size: 1.4rem;
  font-size: 1.2rem;
  letter-spacing: 0.25rem;
  color: var(--color-dark-white);
  font-weight: 500;
  padding: 0.4rem 0.5rem;
`;

export const NavbarCartBtn = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  background: none;
  border: none;
  margin-top: -0.3rem;

  @media screen and (max-width: 375px) {
    margin-top: 3px;
  }
`;

export const NavbarMenutBtn = styled.button`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    margin-left: -4.5px;
    background: transparent;
    border: none;
  }
`;
