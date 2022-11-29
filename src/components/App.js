import "../css/App.css";
import BakeryItem from "./BakeryItem";
import bakeryData from "../data/bakery-data.json";
import { useState } from "react";
import FilterCategory from "./FilterCategory";
import FilterFavorite from "./FilterFavorite";
import SortItems from "./SortItems";
import Cart from "./Cart";
import Footer from "./Footer";

bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  // filter
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useState("All");

  const matchesCategoryFiltertype = (item) => {
    if (category === "All") {
      return true;
    } else if (category === item.category) {
      return true;
    } else {
      return false;
    }
  };

  const matchesFavFiltertype = (item) => {
    if (favorites === "All") {
      return true;
    } else {
      return item.favorite; // favorite is a boolean already
    }
  };

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

  function renderItems() {
    if (sortedItems.length > 0) {
      return sortedItems.map((item, index) => (
        <BakeryItem key={index} item={item} addToCart={addToCart} />
      ));
    } else if (category === "All" && favorites) {
      return (
        <div>
          <p>There are no items that match these filters.</p>
          <p>Add some items to your favorites!</p>
        </div>
      );
    } else if (favorites) {
      return (
        <div>
          <p>There are no {category} in your favorites.</p>
        </div>
      );
    } else {
      return <p>There are no items that match these filters</p>;
    }
  }

  return (
    <div className="App">
      <div className="Header">
        <img src="images/blueno.png" alt="blueno - blue bear with lamp" />
        <h1>Blueno's Bagel Shop</h1>
      </div>
      <div className="Content">
        <div className="Sidebar">
          <div className="SortFilter">
            <SortItems
              className="SortBy"
              sortType={sortType}
              selectSortType={selectSortType}
            />
            <br />
            <FilterCategory
              className="FilterCategory"
              category={category}
              setCategory={setCategory}
            />
            <br />
            <FilterFavorite
              className="FilterFavorite"
              favorites={favorites}
              setFavorites={setFavorites}
            />
          </div>

          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
            addToCart={addToCart}
          />
        </div>

        <div className="Items">{renderItems()}</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
