import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import { useState } from "react";
import { Tooltip } from "@mui/material";

export default function BakeryItem(props) {
  const item = props.item;
  const [favorite, setFavorite] = useState(item.favorite);

  async function unfavorite() {
    setFavorite((item.favorite = false));
    if (props.favorites === "Favorites") {
      // to refilter since filtered data is in the app component
      await props.setFavorites("All");
      props.setFavorites("Favorites");
    }
  }

  function favoriteIcon() {
    if (item.favorite) {
      return (
        <Tooltip className="Heart" title="Remove from favorites">
          <FavoriteIcon onClick={() => unfavorite()} />
        </Tooltip>
      );
    } else {
      return (
        <Tooltip className="Heart" title="Add to favorites">
          <div>
            <FavoriteBorderIcon
              className="UnHearted"
              onClick={() => setFavorite((item.favorite = true))}
            />
          </div>
        </Tooltip>
      );
    }
  }

  /**
   * Takes in an item and adds one to its count if already in cart, ow adds to cart
   * @param {*} item_name - the item to add to the cart
   * @param {*} item_price - the item's price
   */
  function addToCart(item_name, item_price) {
    if (item_name in props.cartItems) {
      let count = props.cartItems[item_name][0];
      let all_price = (count + 1) * item_price;
      props.cartItems[item_name] = [count + 1, all_price];
      props.setCartItems({ ...props.cartItems });
    } else {
      props.cartItems[item_name] = [1, item_price];
      props.setCartItems({ ...props.cartItems });
    }
  }

  return (
    <div className="ItemCard">
      <img src={item.image} alt={item.description} />
      <div className="ItemContent">
        <h2>{item.name}</h2>
        <h3>
          ${item.price} &#183; {item.calories} calories
        </h3>
        <h4>
          <i>Category: {item.category}</i>
        </h4>
        <p>{item.description}</p>
      </div>
      <div className="BottomRow">
        <div className="ItemButtons">
          <Button
            variant="outlined"
            onClick={() => addToCart(item.name, item.price)}
          >
            Add to Cart
          </Button>
          <div>{favoriteIcon()}</div>
        </div>
      </div>
    </div>
  );
}
