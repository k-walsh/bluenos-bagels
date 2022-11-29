import "../css/App.css";
import BakeryItem from "./BakeryItem";
import bakeryData from "../data/bakery-data.json";
import { useState } from "react";
import FilterCategory from "./FilterCategory";
import FilterFavorite from "./FilterFavorite";
import SortItems from "./SortItems";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useState("All");

  // filter functions to match categories
  const selectCategoryFilterType = (event) => {
    setCategory(event.target.value);
  };

  const matchesCategoryFiltertype = (item) => {
    if (category === "All") {
      return true;
    } else if (category === item.category) {
      return true;
    } else {
      return false;
    }
  };

  // filter functions to match favorites
  const selectFavFilterType = (event) => {
    setFavorites(event.target.value);
  };

  const matchesFavFiltertype = (item) => {
    if (favorites === "All") {
      return true;
    } else {
      return item.favorite; // favorite is a boolean already
    }
  };

  // const reset = () => {
  //   setFavorites("All");
  //   setCategory("All");
  // };

  const filteredData = bakeryData.filter((e) => {
    return matchesCategoryFiltertype(e) && matchesFavFiltertype(e);
  });

  // sort stuff
  const [sortType, setSortType] = useState("All");

  const selectSortType = (event) => {
    console.log(event.target.value);
    setSortType(event.target.value);
  };

  const sortedItems = filteredData.sort((a, b) => {
    return a.sortType - b.sortType;
  });

  // aggregator
  // cartItems is of the form {name: [count, total_price]}
  const [cartItems, setCartItems] = useState({});

  /**
   * Takes in an item and adds one to its count if already in cart, ow adds to cart
   * @param {*} item_name - the item to add to the cart
   * @param {*} item_price - the item's price
   */
  function addToCart(item_name, item_price) {
    if (item_name in cartItems) {
      let count = cartItems[item_name][0];
      let all_price = (count + 1) * item_price;
      cartItems[item_name] = [count + 1, all_price];
      setCartItems({ ...cartItems });
    } else {
      cartItems[item_name] = [1, item_price];
      setCartItems({ ...cartItems });
    }
  }

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

  function addOne(item_name) {
    const count = cartItems[item_name][0];
    cartItems[item_name][0] = count + 1;
    setCartItems({ ...cartItems });
  }

  function removeOne(item_name, item_price) {
    console.log("remove", item_name);
    const count = cartItems[item_name][0];
    const all_price = (count - 1) * item_price;
    cartItems[item_name] = [count - 1, all_price];
    setCartItems({ ...cartItems });
  }

  /**
   *
   * @returns the html to render the cart and total
   */
  function displayCart() {
    console.log(cartItems);
    if (Object.keys(cartItems).length === 0) {
      return <p>Nothing here just yet!</p>;
    } else {
      return (
        <div>
          {Object.keys(cartItems).map((item) => (
            <div className="itemCount">
              {console.log(item, cartItems[item][1])}

              <RemoveCircleOutlineIcon
                onClick={() => removeOne(item, cartItems[item][1])}
              />
              <p>{cartItems[item][0]}</p>
              <AddCircleOutlineIcon
                onClick={() => addToCart(item, cartItems[item][1])}
              />
              <p>{item}</p>
              {
                // todo if 0, remove from cart entirely
                // also price is not updating right now
              }
            </div>
          ))}
          <p>
            <b>Total: ${totalPrice()}</b>
          </p>
        </div>
      );
    }
  }

  function renderItems() {
    if (sortedItems.length > 0) {
      return sortedItems.map((item, index) => (
        <BakeryItem key={index} item={item} addToCart={addToCart} />
      ));
    } else {
      return <p>There are no items that match these filters</p>;
    }
  }

  return (
    <div className="App">
      <div className="Header">
        <h1>Blueno's Bakery</h1>
      </div>
      <div className="Content">
        <div className="Sidebar">
          <SortItems
            className="SortBy"
            sortType={sortType}
            selectSortType={selectSortType}
          />

          <FilterCategory
            className="FilterCategory"
            category={category}
            selectCategoryFilterType={selectCategoryFilterType}
          />

          <FilterFavorite
            className="FilterFavorite"
            favorites={favorites}
            selectFavFilterType={selectFavFilterType}
          />

          {
            //todo - add something that says add to favorites if favorites is empty
            // or like no bagel favorites if choose bagel + favorites
          }
          {/* 
          <Button variant="outlined" onClick={reset}>
            Reset Filters
          </Button> */}

          <div>
            <h2>Cart</h2>
            {displayCart()}
          </div>
        </div>

        <div className="Items">{renderItems()}</div>
      </div>
    </div>
  );
}

export default App;
