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
        <h1 id="title" key="h2">
            Food Villa
        </h1>
    );
    const Headercomponent=()=>(
            <div>
                <Title />     
                <h2>Namaste React functional component</h2>
                <h2>This is h2 tag</h2>
            </div>
    );

        const AppLayout=() =>(
            {
                
            }
        );







    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Headercomponent/>);
    