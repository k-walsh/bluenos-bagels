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
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useState("All");
  const [sortType, setSortType] = useState("All");
  // cartItems is of the form {name: [count, total_price]}
  const [cartItems, setCartItems] = useState({});

  // filter
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

  // sort filtered data
  const sortedItems = filteredData.sort((a, b) => {
    return a[sortType] - b[sortType];
  });

  /**
   * Maps the sorted and filtered data to bakery items
   * @returns the items or a message if no items match the filters
   */
  function renderItems() {
    if (sortedItems.length > 0) {
      return sortedItems.map((item, index) => (
        <BakeryItem
          key={index}
          item={item}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ));
    } else if (category === "All" && favorites) {
      return (
        <div>
          <h2 className="NoItems">
            There are no items that match these filters.
          </h2>
          <h2 className="NoItems">Add some items to your favorites!</h2>
        </div>
      );
    } else if (favorites) {
      return (
        <div>
          <h2 className="NoItems">
            There are no {category} in your favorites.
          </h2>
        </div>
      );
    } else {
      return (
        <h2 className="NoItems">There are no items that match these filters</h2>
      );
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
              setSortType={setSortType}
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

          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        </div>

        <div className="Items">{renderItems()}</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
