import React from "react";
import Navbar from "./Nevbar";

function Layout(props) {
    return (
        <React.Fragment>
            <Navbar/>
            {props.children}
        </React.Fragment>
    );
}

export default Layout;
