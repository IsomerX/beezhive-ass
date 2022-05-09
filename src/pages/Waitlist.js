import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firestore";

const Waitlist = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            return navigate("/signin");
        }
    }, [user, navigate]);

    const signoutHandler = () => {
        signOut(auth).then(() => {
            navigate("/");
        });
    };

    return (
        <div>
            <button onClick={signoutHandler}>Sign out</button>
        </div>
    );
};

export default Waitlist;
