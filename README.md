# Blueno's Bagel Shop
## Development - UI/UX Fall 2022

### Link to Deployed Website
https://giantgiraffe123.github.io/development/


### Goal and Value of the Application
The goal of this application is to allow users to see the different foods and beverages Blueno's Bagel Shop offers. It is a simple and easy to navigate interface that allows users to sort and filter by things that are important to them in dining at Blueno's Bagels. Customers can sort by price or calories, and filter the options to look at only certain types of food, as well as add their favorite items to their favorites. This is valuable to customers because they can favorite their most-ordered items and then easily filter to view these favorites and add them to their cart, making the checkout process more efficient. Aside from exploring Blueno's Bagels many options, this application also allows users to add items to their cart to place an order which is valuable for customers who prefer to order online. The easy to find add-to-cart button adds the item to the user's cart, and then they can either press that button mutliple times, or increase the number of the item in the cart or decrease it with the plus/minus buttons. This adds value of allowing users to easily change their mind if they decide they want 3 of the same bagel, or remove the bagel from their cart by decreasing its count to 0. Customers can also get an idea of the total cost of the order since the cart aggregates the total cost of the items in the user's cart. If a user decides they don't want to order today, they can clear the cart and go about their day without a bagel. Overall, this application's goal is to assist Blueno's Bagel customers in viewing the shop's many options based on a customer's preferences and allow customers to add items to their cart.


### Usability Principles Considered
In this application I considered many usability principles including:
- Informative feedback for users
    - The add to cart buttons darken on hover and the mouse becomes a finger pointer to indicate that the button can be clicked, and the label of the button (add to cart) clearly indicates the button's function. 
    - When clicked, the button ripples to indicate it has been successfully clicked, and the user immediately sees an update in the cart. 
    - The heart icon also has a tooltip on hover and the mouse becomes pointy to tell the user that it can be clicked to add/remove an item from favorites. 
    - When an item is favorited, the heart is filled to indicate it has been favorited, and is unfilled when unfavorited. 
    - Furthermore, the plus and minus buttons in the cart provide immediate feedback by updating the count and price in the cart instantly.
- Preventing errors before they can happen
    - Users can only select one sort or filter from each category which prevents mutually exclusive filters from being selected (such as both bagels and drinks) which would result in a screen with no items. This is accomplished by having the sort/filter buttons automatically unselect when a new button is selected.
    - Users can't go below 1 of an item in the cart, and if they attempt to, it is simply removed from the cart so there are no 0s or negative counts of items.
- Simple, efficient user experience 
    - Users can adjust items the cart directly in the cart instead of going back to the item card to add more of an item.
    - The interface is intuitive and its different parts are easy to predict what their functionality is (heart -> favorite, add to cart -> adds an item to the cart, selecting drinks -> shown only drinks...)
- Comfortable and simple interface to interact with
    - Only necessary information is shown with no extra complicated components.
- Visual consistency
    - All filtes/sort look the same and all of the item cards look the same with the same size headings and bodies.
    - All buttons look the same for the same function.
- Hierarchy
    - The main title is large to convey it is a title, and it is clearly distinguished from the main content by it's blue header. 
    - The sidebar contains all the sort/filter options and the cart, each of which are wrapped in their separate boxes to indicate different functionality, and this whole section is clearly distinct from the items.
    - All the filters/sorts have the same format, with headings and spacing between each to indicate different functions.
    - The text and spacing and bold/italics of the item card information conveys the importance of the info in a top-down manner with clear distincitions between sections and their relative importance.
- Matching mental models
    - The cart and filtering/sorting operations matches the mental model users already have of interacting with an ordering interface (such as clicking options to select them and using buttons and plus/minuses to adjust the carts).
- User control and freedom
    - Users have control over how to filter and sort items to control the display of the items.
    - Users have freedom to adjust the cart as they please. No mistake is irreversible. If an item is added by mistake, it can be easily removed or added to if that is desired. Users can also completely clear the cart to start again.
    - The "all" option on the filters allows users to reset the filters to see all the items if they pressed a category or favorites by mistake. 
- Help recognize and understand errors
    - Users are met with informative error messages if no items match their filters. Generally, users are prevented from selecting filters that are mutually exclusive in categories, but if a user tries to see favorites without adding something to their favorites first, or if they try to view bagels and favorites but they only have drinks in their favorites, no items will appear. Rather than having a blank screen, an informative message is displayed telling the user to add items to their favorites or that they have none of this category in their favorites (ex: bagel + favorites but no bagels in favorites yields the customized message: there are no bagels in your favorites).


### Organization of Components
The main parent component is the App component which includes all of the components for the website. Each item on the page is representing by a BakeryItem component which contains information such as the item's image, name, price, calories, category, description, and favorite status. Then in the App component, each of the json items from the bakery data are mapped to BakeryItem components. There are then components for the different filters and sorts that are in the sidebar to help declutter the main App component and separate functionality. These include FilterCategory which renders the category filter options, FilterFavorites which renders the favorite filter items, and SortItems which renders the sort options. The Cart component contains most of the logic for adding items to the cart, calculating the total price, and displaying the cart. There is also a component for the Footer which gives attributions. 


### How Data is Passed Down Through Components
The App component contains the states for the category filter, favorite filter, sort type, and cart items.

The state for sortType and its setter function are passed to the SortItems component which when a sort option is selected, it sets the sortType state to the selected sort type (which lives in App).

The state for the filter category and the filter favorite boolean are passed to their respective FilterCateogy and FilterFavorite components along with their corresponding setters. When a filter option is selected, it sets the corresponding state variable which triggers a change in the list of items.

The list of items are filtered and sorted in the App component since this is where the category and favorite and sort type variables are and where the list is mapped to bakery items. 

The data starts in a json which is read in the App component as a list. The items are first filtered according the the category and favorite filters, and sorted based on the type selected, and this resulting list is called sortedItems in App.

The sorted items are then mapped to BakeryItems in the App component. The item data is passed to the BakeryItem component so the bakery item card can be generated with the item's name, price, and other data. The cart items and function to set the cart's state is also passed to the BakeryItem component so the button to add items to the cart can update the cart state that lives in App.

Then in the Cart component, the cartItems state and the correpsonding set function are passed to the Cart component which contains most of the functions that use these props to update the items, counts, and prices in the cartItems state.


### How the User Triggers State Changes
The user triggers a state change by pressing any of the buttons on the screen. Clicking on a sort option will trigger a change of the sortType state to the newly requested sort option, and the bakery items will be sorted accordingly. Clicking on one of the filter category options will trigger a change of the category state, as will clicking on one of the favorite filters will trigger a change of the favorites state, and the items in the bakery will be filtered accordingly. These filters are combined, so the resulting items shown are items that match both filters, or a message if no items match the filters. 

Clicking on the favorite icon on the item cards will trigger a change in the favorite field of an item. Clicking the heart icon will add the item to your favorites, so it is now visible under the favorite filter. 

Clicking on the Add to Cart button will triggger a change in the cartItems which stores information about all the items in the cart, along with the number of items and total price for those items. Adding an item to the cart makes it appear in the sidebar cart. Then there are new buttons that allow the user to add more of that item or decrease the count, which triggers a change in the cartItems by increasing/decreasing the count and recalculating the price, which triggers the new items in the cart and total to be recalculated and displayed. There is also a clear cart button which when pressed triggers a change in cartItems to reset the cart to an empty dictionary.
