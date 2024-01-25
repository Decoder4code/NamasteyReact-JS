import {restaurantList} from "../constants";
import RestaurantCard from "./RestaurantCard";
const Body=() =>{
    let searchtext="Behrouz Biryani";
    return(
      <>
      <div className="search-container">
       <input
       type="text"
       className="search-text"
       placeholder="Search"
       value={searchtext}
       />
        <button className="search-btn">Search</button>
      </div>
        <div className="restaurant-list">
          {
            restaurantList.map((restaurant) =>{
              return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
            })
          }
        </div>
        </>
    );
};

export default Body;