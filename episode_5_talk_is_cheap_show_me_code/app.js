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
        -Restaurantcard
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
    const Headercomponent=()=>(
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

    const Body=() =>{
        return(
            <h4>Body</h4>
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
    root.render(<Headercomponent/>);
    