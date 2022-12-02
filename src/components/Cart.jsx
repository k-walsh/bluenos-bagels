import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Button } from "@mui/material";

export default function Cart(props) {
  const cartItems = props.cartItems;
  const setCartItems = props.setCartItems;
  
  /**
   * Maps every cart item to it's total price and sums the prices of all items
   * @returns the total price of everything in the cart
   */
  function totalPrice() {
    let sum = 0;
    // map every cart item to its total price
    let prices = Object.keys(cartItems).map((item) => cartItems[item][1]);

    for (const p of prices) {
      sum = sum + p;
    }

    return Math.round(sum * 100) / 100;
  }

  function addOne(item_name, item_price) {
    const count = cartItems[item_name][0];
    const all_price = ((count + 1) * item_price) / count;
    cartItems[item_name] = [count + 1, all_price];
    setCartItems({ ...cartItems });
  }

  function removeOne(item_name, item_price) {
    console.log("remove", item_name);
    const count = cartItems[item_name][0];
    if (count > 1) {
      const all_price = ((count - 1) * item_price) / count;
      cartItems[item_name] = [count - 1, all_price];
      setCartItems({ ...cartItems });
    } else {
      delete cartItems[item_name];
      setCartItems({ ...cartItems });
    }
  }

  function plural(item) {
    if (cartItems[item][0] > 1) {
      const last = item.length - 1;
      if (item[last] === "h") {
        return item + "es";
      } else {
        return item + "s";
      }
    } else {
      return item;
    }
  }

  /**
   *
   * @returns the html to render the cart and total
   */
  function displayCart() {
    console.log("cart items", cartItems);
    if (Object.keys(cartItems).length === 0) {
      return <p>Nothing here just yet!</p>;
    } else {
      return (
        <div>
          {Object.keys(cartItems).map((item) => (
            <div className="itemCart">
              <RemoveCircleOutlineIcon className="plusMinus"
                onClick={() => removeOne(item, cartItems[item][1])}
              />
              <p>&nbsp;{cartItems[item][0]}&nbsp;</p>
              <AddCircleOutlineIcon className="plusMinus"
                onClick={() => addOne(item, cartItems[item][1])}
              />
              <p>&nbsp;</p>
              <p>{plural(item)}</p>
            </div>
          ))}
          <h3>
            <b>Total: ${totalPrice()}</b>
          </h3>
          <Button variant="outlined" onClick={() => setCartItems({})}>
            Clear Cart
          </Button>
        </div>
      );
    }
  }

  return (
    <div className="Cart">
      <h2>Cart</h2>
      {displayCart()}
    </div>
  );
}
