import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import { useState } from "react";
// import { FavoriteBorderIcon, FavoriteIcon } from "@mui/icons-material";
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
      // look into downlaoding bootstrap and using that and the
      //  -webkit-text-stroke: 1px; thing from craigslist
      return (
        <Tooltip className="Heart" title="Add to favorites">
          <div>
            <FavoriteBorderIcon
              className="UnHearted"
              onClick={() => setFavorite((item.favorite = true))}
            />
            {/* <FavoriteTwoToneIcon
              className="ShadedHeart"
              onClick={() => setFavorite((item.favorite = true))}
            /> */}
          </div>
        </Tooltip>
        // <div>
        //   <Tooltip className="UnHearted" title="Add to favorites">
        //     <div>
        //       <FavoriteBorderIcon
        //         onClick={() => setFavorite((item.favorite = true))}
        //       />
        //     </div>
        //   </Tooltip>
        //   <Tooltip className="ShadedHeart" title="Add to favorites">
        //     <FavoriteTwoToneIcon
        //       onClick={() => setFavorite((item.favorite = true))}
        //     />
        //   </Tooltip>
        // </div>
      );
    }
  }

  return (
    <div className="ItemCard">
      <img src={item.image} alt={item.description} />
      <h3>{item.name}</h3>
      <h4>
        ${item.price}
        Calories: {item.calories}
      </h4>
      <h4>Type: {item.category}</h4>
      {/* <i class="bi bi-suit-heart-fill"></i> */}
      <p>{item.description}</p>
      {
        // note: add a button to add to cart
        // and a heart to add to favorites
        // maybe have it say add to favorites on hover and just have heart icon
      }
      <div>{favoriteIcon()}</div>
      <button onClick={() => props.addToCart(item.name, item.price)}>
        Add to Cart
      </button>
    </div>
  );
}
