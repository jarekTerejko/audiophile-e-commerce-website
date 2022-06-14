import { ContainerEl } from "../Container/ContainerElement";
import {
  NavbarCartBtn,
  NavbarContent,
  NavbarLinkR,
  NavbarMenutBtn,
  NavbarNavItem,
  NavbarNavItems,
  NavbarNavLink,
  NavbarWrapper,
} from "./NavbarElements";
import { ImageEl } from "../Image/ImageElement";
import Logo from "../../assets/shared/desktop/logo.svg";
import Cart from "../../assets/shared/desktop/icon-cart.svg";
import Bars from "../../assets/shared/tablet/icon-hamburger.svg";

const Navbar = () => {
  const paths = [
    { name: "home", path: "/" },
    { name: "headphones", path: "headphones" },
    { name: "speakers", path: "speakers" },
    { name: "earphones", path: "earphones" },
  ];

  return (
    <>
      <NavbarWrapper>
        <ContainerEl>
          <NavbarContent>
            <NavbarLinkR to="/">
              <ImageEl src={Logo} />
            </NavbarLinkR>
            <NavbarNavItems>
              {paths.map((item, i) => {
                return (
                  <NavbarNavItem key={i}>
                    <NavbarNavLink to={item.path}>{item.name}</NavbarNavLink>
                  </NavbarNavItem>
                );
              })}
            </NavbarNavItems>
            <NavbarCartBtn>
              <ImageEl src={Cart} />
            </NavbarCartBtn>
            <NavbarMenutBtn>
              <ImageEl src={Bars} />
            </NavbarMenutBtn>
          </NavbarContent>
        </ContainerEl>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
