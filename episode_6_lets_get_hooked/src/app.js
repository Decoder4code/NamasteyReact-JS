import React  from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {IMG_CDN_URL} from "./constants";
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
    
    
        const config=[

        ];
   
        
    
    
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