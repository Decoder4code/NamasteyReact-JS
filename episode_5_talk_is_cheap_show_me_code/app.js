import React  from "react";
import ReactDOM from "react-dom/client";
    /*
    header
        -logo
        -nav items
        -cart
    body
        -search bar
        -Restaurantlist
        -Restaurantcard (many cards)
            -image
            -name
            -rating
            -cuisines
    Footer
        -links
        -copyrights
    */
    const Title =()=>(
        <a href="/">
        <img 
            className="logo"
            alt="logo"
            src="https://t3.ftcdn.net/jpg/03/74/73/78/360_F_374737839_VsxlmnN7soqOOOFFzy5kfE9H6PFMCkPX.jpg"
        />
        </a>
    );
    const Header=()=>(
            <div className="header">
                <Title />     
                <div className="nav-items">
                    <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    </ul>
                </div>
            </div>
    );
    const chickenBiryani={
        name:"Chicken Biryani",
        image:"https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg",
        cusines:["Hyderabadi", "Boneless"],
        rating:"4.2",
    };
        const RestaurantCard=()=>{
            return(
                <div className="card">
                    <img
                    
                    alt="card"
                    src={chickenBiryani.image}
                    />
                    <h2>{chickenBiryani.name}</h2>
                    <h3>{chickenBiryani.cusines.join(",")}</h3>
                    <h4>{chickenBiryani.rating} stars</h4>
                </div>
            );
        };
    const Body=() =>{
        return(
            <div className="restuarant-list">
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            </div>
        );
    };
    const Footer=() =>{
        return(
            <h4>Footer</h4>
        );
    };
        const AppLayout=() =>{
            return(
                <>
                <Header/>
                <Body/>
                <Footer/>
                </>
            );
        };
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<AppLayout/>);