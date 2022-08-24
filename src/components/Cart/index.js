import { useRef } from "react";
import { ContainerEl } from "../Container/ContainerElement";
import { ImageEl } from "../Image/ImageElement";
import { LinkRouter } from "../LinkRouter/LinkRouterEl";
import {
  ShoppingCartRemoveBtn,
  ShoppingCartHeader,
  ShoppingCartHeading,
  ShoppingCartWrapper,
  ShoppingCartItemsWrapper,
  ShoppingCartItemWrapper,
  ShoppingCartItemName,
  ShoppingCartItemPrice,
  ShoppingCartQuantityBtn,
  ShoppingCartQuantity,
  ShoppingCartItemsColThree,
  ShoppingCartItemsColTwo,
  ShoppingCartOverlay,
} from "./ShoppingCartElements";

const ShoppingCart = ({
  cartItems,
  addItemFromCart,
  removeItemFromCart,
  isCartVisible,
  removeAllProducts,
  setIsCartVisible,
}) => {
  const formatter = new Intl.NumberFormat("en-US", {
    // style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const total = cartItems.reduce((acc, curr) => {
    acc += curr.price * curr.quantity;
    return acc;
  }, 0);

  const shoppingCartOverlayRef = useRef();
  const closeShoppingCart = (e) => {
    if (shoppingCartOverlayRef.current === e.target) {
      setIsCartVisible(false);
    }
  };

  return (
    <>
      <ShoppingCartOverlay
        isCartVisible={isCartVisible}
        ref={shoppingCartOverlayRef}
        onClick={closeShoppingCart}
      >
        <ContainerEl style={{ position: "relative" }}>
          <ShoppingCartWrapper isCartVisible={isCartVisible}>
            <ShoppingCartHeader>
              <ShoppingCartHeading>
                Cart (
                {cartItems.reduce((acc, curr) => {
                  if (curr) {
                    acc += curr.quantity;
                  }
                  return acc;
                }, 0)}
                )
              </ShoppingCartHeading>

              {cartItems.length !== 0 && (
                <ShoppingCartRemoveBtn onClick={removeAllProducts}>
                  Remove all
                </ShoppingCartRemoveBtn>
              )}
            </ShoppingCartHeader>
            {cartItems.length === 0 && (
              <ShoppingCartHeading>
                Your Cart is Currently Empty!
              </ShoppingCartHeading>
            )}
            <ShoppingCartItemsWrapper>
              {cartItems.map((item, i) => {
                return (
                  <ShoppingCartItemWrapper key={i}>
                    <ImageEl
                      src={item.image.mobile}
                      style={{ width: "60px" }}
                      alt={item.name}
                    />
                    <ShoppingCartItemsColTwo>
                      <ShoppingCartItemName>{item.name}</ShoppingCartItemName>
                      <ShoppingCartItemPrice>
                        $ {formatter.format(item.price)}
                      </ShoppingCartItemPrice>
                    </ShoppingCartItemsColTwo>
                    <ShoppingCartItemsColThree>
                      <ShoppingCartQuantityBtn
                        onClick={() => removeItemFromCart(item)}
                      >
                        -
                      </ShoppingCartQuantityBtn>
                      <ShoppingCartQuantity>
                        {item.quantity}
                      </ShoppingCartQuantity>
                      <ShoppingCartQuantityBtn
                        onClick={() => addItemFromCart(item)}
                      >
                        +
                      </ShoppingCartQuantityBtn>
                    </ShoppingCartItemsColThree>
                  </ShoppingCartItemWrapper>
                );
              })}
            </ShoppingCartItemsWrapper>
            {total > 0 && (
              <ShoppingCartHeader>
                <ShoppingCartItemPrice
                  style={{ fontSize: "16px", textTransform: "uppercase" }}
                >
                  Total
                </ShoppingCartItemPrice>
                <ShoppingCartHeading>
                  $ {formatter.format(total)}
                </ShoppingCartHeading>
              </ShoppingCartHeader>
            )}
            {total > 0 && (
              <LinkRouter
                to="/checkout"
                style={{ width: "100%", textAlign: "center" }}
                onClick={() => setIsCartVisible(false)}
              >
                checkout
              </LinkRouter>
            )}
          </ShoppingCartWrapper>
        </ContainerEl>
      </ShoppingCartOverlay>
    </>
  );
};

export default ShoppingCart;
