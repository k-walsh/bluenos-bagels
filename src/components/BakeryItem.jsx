import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import { useState } from "react";
import { Tooltip } from "@mui/material";

export default function BakeryItem(props) {
  const item = props.item;
  const [favorite, setFavorite] = useState(item.favorite);

  function favoriteIcon() {
    if (item.favorite) {
      return (
        <Tooltip className="Heart" title="Remove from favorites">
          <FavoriteIcon onClick={() => setFavorite((item.favorite = false))} />
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

  return (
    <div className="ItemCard">
      <img src={item.image} alt={item.description} />
      <div className="ItemContent">
        <h2>{item.name}</h2>
        <h3>
          ${item.price} &nbsp; Calories: {item.calories}
        </h3>
        <h4>
          <i>Category: {item.category}</i>
        </h4>
        <p>{item.description}</p>
        <div className="ItemButtons">
          <Button
            variant="outlined"
            onClick={() => props.addToCart(item.name, item.price)}
          >
            Add to Cart
          </Button>
          <div>{favoriteIcon()}</div>
        </div>
      </div>
    </div>
  );
}
