import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Copy from "../../Copy";
import Guest from "../Guest/Guest"

const Home = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        <>
            {/* {isAuthenticated ? <Copy user={user} /> : <Form />} */}
            {/* {isAuthenticated ? <MainPage user={user} /> : <Guest />} */}

            {/* going to route to them to InvisiblePage --> then to--> Form if the dont exist in DB */}
            {/* not passing Auth0 props here, Invisible page generates its own*/}
            {isAuthenticated ? <Copy user={user}/> : <Guest />}
        </>
    );
};

export default Home;