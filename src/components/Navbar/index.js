import { ContainerEl } from "../Container/ContainerElement";
import {
  NavbarCartBtn,
  NavbarCartItemsQuantity,
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
import X from "../../assets/shared/tablet/icon-close.svg";
import { useState } from "react";

const Navbar = ({
  cartItems,
  isCartVisible,
  handleCart
}) => {
  const paths = [
    { name: "home", path: "/" },
    { name: "headphones", path: "headphones" },
    { name: "speakers", path: "speakers" },
    { name: "earphones", path: "earphones" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    if (isOpen) {
      handleMenu();
    } else {
      return;
    }
  };

  return (
    <>
      <NavbarWrapper>
        <ContainerEl>
          <NavbarContent>
            <NavbarMenutBtn onClick={handleMenu}>
              <ImageEl src={isOpen ? X : Bars} style={{ maxWidth: "16px" }} />
            </NavbarMenutBtn>
            <NavbarLinkR to="/" className="navbar-link" onClick={closeMenu}>
              <ImageEl src={Logo} />
            </NavbarLinkR>
            <NavbarNavItems isOpen={isOpen}>
              {paths.map((item, i) => {
                return (
                  <NavbarNavItem key={i}>
                    <NavbarNavLink to={item.path} onClick={closeMenu}>
                      {item.name}
                    </NavbarNavLink>
                  </NavbarNavItem>
                );
              })}
            </NavbarNavItems>
            <NavbarCartBtn isCartVisible={isCartVisible} onClick={handleCart}>
              <ImageEl src={Cart} />
              {cartItems.length > 0 && (
                <NavbarCartItemsQuantity>
                  {cartItems.reduce((acc, curr) => {
                    if (curr) {
                      acc += curr.quantity;
                    }
                    return acc;
                  }, 0)}
                </NavbarCartItemsQuantity>
              )}
            </NavbarCartBtn>
          </NavbarContent>
        </ContainerEl>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
