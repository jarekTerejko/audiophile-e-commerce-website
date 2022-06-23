import { ContainerEl } from "../Container/ContainerElement";
import {
  NavbarLinkR,
  NavbarNavLink,
} from "../Navbar/NavbarElements";
import {
  FooterContent,
  FooterNavItems,
  FooterContentRowOneColLeft,
  FooterContentRowOneColRight,
  FooterContentRowThreeColLeft,
  FooterContentRowThreeColRight,
  FooterContentRowTwo,
  FooterWrapper,
  FooterSocialItems,
  FooterSocialItem,
  FooterSocialLink,
  FooterNavItem,
} from "./FooterElements";
import Logo from "../../assets/shared/desktop/logo.svg";
import { ImageEl } from "../Image/ImageElement";
import { DescriptionTextEl } from "../DescriptionText/DescriptionTextEl";
import Facebook from "../../assets/shared/desktop/icon-facebook.svg";
import Twitter from "../../assets/shared/desktop/icon-twitter.svg";
import Instagram from "../../assets/shared/desktop/icon-instagram.svg";

const Footer = () => {
  const paths = [
    { name: "home", path: "/" },
    { name: "headphones", path: "headphones" },
    { name: "speakers", path: "speakers" },
    { name: "earphones", path: "earphones" },
  ];

  const socialImgs = [Facebook, Twitter, Instagram];
  return (
    <>
      <FooterWrapper>
        <ContainerEl>
          <FooterContent>
            <FooterContentRowOneColLeft>
              <NavbarLinkR to="/">
                <ImageEl src={Logo} />
              </NavbarLinkR>
            </FooterContentRowOneColLeft>
            <FooterContentRowOneColRight>
              <FooterNavItems>
                {paths.map((item, i) => {
                  return (
                    <FooterNavItem key={i}>
                      <NavbarNavLink to={item.path}>{item.name}</NavbarNavLink>
                    </FooterNavItem>
                  );
                })}
              </FooterNavItems>
            </FooterContentRowOneColRight>
            <FooterContentRowTwo>
              <DescriptionTextEl className="footer">
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - we’re open 7 days a week.
              </DescriptionTextEl>
            </FooterContentRowTwo>
            <FooterContentRowThreeColLeft>
              <DescriptionTextEl className="copyright">
                Copyright 2021. All Rights Reserved
              </DescriptionTextEl>
            </FooterContentRowThreeColLeft>
            <FooterContentRowThreeColRight>
              <FooterSocialItems>
                {socialImgs.map((item, i) => {
                  return (
                    <FooterSocialItem key={i}>
                      <FooterSocialLink href="#">
                        <ImageEl src={item} />
                      </FooterSocialLink>
                    </FooterSocialItem>
                  );
                })}
              </FooterSocialItems>
            </FooterContentRowThreeColRight>
          </FooterContent>
        </ContainerEl>
      </FooterWrapper>
    </>
  );
};

export default Footer;
