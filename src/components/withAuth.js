import { React } from "react";
import { Redirect } from "react-router";

const withAuth = (Component) => {
    const AuthRoute = () => {
        const isAuth = !!localStorage.getItem("token");
        // To determine if a user is authenticated or not, grab the authentication token that is stored in the browser when the user logs in.
        //  If the user is not authenticated,
        //  redirect the user to the Home page. 
        // The Redirect component from React Router can be used to redirect the user to another path.
        if(isAuth){
            return <Component />
        } else {
            return <Redirect to='/' />
        }
    };
    return AuthRoute;
}

export default withAuth;