# Development

### Link to Deployed Website
https://giantgiraffe123.github.io/development/

### Goal and Value of the Application


### Usability Principles Considered


### Organization of Components
The main parent component is the App component which includes all of the components for the website. Each item on the page is representing by a BakeryItem component which contains information such as the item's image, name, price, calories, category, description, and favorite status. Then in the App component, each of the json items from the bakery data are mapped to BakeryItem components. There are then components for the different filters and sorts that are in the sidebar to help declutter the main App component and separate functionality. These include FilterCategory which renders the category filter options, FilterFavorites which renders the favorite filter items, and SortItems which renders the sort options. The cart component contains most of the logic for adding items to the cart, calculating the total price, and displaying the cart. There is also a component for the Footer which gives attributions. 


### How Data is Passed Down Through Components


### How the User Triggers State Changes
The user triggers a state change by pressing any of the buttons on the screen. Clicking on a sort option will trigger a change of the sortType state to the newly requested sort option, and the bakery items will be sorted accordingly. Clicking on one of the filter category options will trigger a change of the category state, as will clicking on one of the favorite filters will trigger a change of the favorites state, and the items in the bakery will be filtered accordingly. These filters are combined, so the resulting items shown are items that match both filters, or a message if no items match the filters. 

Clicking on the favorite icon on the item cards will trigger a change in the favorite field of an item. Clicking the heart icon will add the item to your favorites, so it is now visible under the favorite filter. 

Clicking on the Add to Cart button will triggger a change in the cartItems which stores information about all the items in the cart, along with the number of items and total price for those items. Adding an item to the cart makes it appear in the sidebar cart. Then there are new buttons that allow the user to add more of that item or decrease the count, which triggers a change in the cartItems by increasing/decreasing the count and recalculating the price, which triggers the new items in the cart and total to be recalculated and displayed. There is also a clear cart button which when pressed triggers a change in cartItems to reset the cart to an empty dictionary.

