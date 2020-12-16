import React, { useState } from "react";
import { GoogleLogout } from "react-google-login";
import { useSelector, useDispatch } from "react-redux";
import {
    selectSignedIn,
    //  selectUserData,
    setInput,
    setSignedIn,
    setUserData,
} from "../features/userSlice";
import "../styling/navbar.css";

const Navbar = () => {
    const [inputValue] = useState("tech");
    const isSignedIn = useSelector(selectSignedIn);
    // const userData = useSelector(selectUserData);

    const dispatch = useDispatch();

    const logout = (response) => {
        dispatch(setSignedIn(false));
        dispatch(setUserData(null));
    };
    // const handleClick = (e) => {
    //     e.preventDefault();
    //     dispatch(setInput(inputValue));
    // };
    return (
        <div className="navbar">
            <h1 className="navbar__header">Blogs</h1>
            {/* {isSignedIn && (
                <div className="blog__search">
                    <input
                        className="search"
                        placeholder="Search for a blog"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button className="submit" onClick={handleClick}>
                        Search
                    </button>
                </div>
            )} */}
            {isSignedIn ? (
                <div className="navbar__user__data">
                    <GoogleLogout
                        clientId="712111074107-piffigr7t3lrej5nnb65jl21rptleno4.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <button
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className="logout__button"
                            >
                                Logout 😦
                            </button>
                        )}
                        onLogoutSuccess={logout}
                    />
                </div>
            ) : (
                <h1 className="notSignedIn">User not available 😞</h1>
            )}
        </div>
    );
};
export default Navbar;
