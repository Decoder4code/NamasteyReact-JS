import React  from "react";
import ReactDOM from "react-dom/client";
    
    const Heading =()=>(
        <h1 id="title" key="h2">Namastey Js</h1>
    );
    const Headercomponent=()=>(
            <div>
                {Heading()}      
                <h1>first</h1>
                <h2>second</h2>
            </div>
    );
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Headercomponent/>);
    