import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  padding: 3.5rem 0 3.7rem 0;
  background: var(--color-dark);
  position: relative;
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
  }
`;
export const NavbarLinkR = styled(Link)``;

export const NavbarNavItems = styled.ul`
  display: flex;
  list-style: none;
  margin-left: -12rem;
`;

export const NavbarNavItem = styled.li`
  margin: 0 1.3rem;
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
`;

export const NavbarMenutBtn = styled.button`
  display: none;
`;
