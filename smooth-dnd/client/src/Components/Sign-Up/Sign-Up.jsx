import React, { useState } from "react";
import "./Sign-Up.css"
import { Link } from "@reach/router";
import { auth, generateUserDocument } from "../../firebase";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [error, setError] = useState(null);

    const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
        event.preventDefault();
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            generateUserDocument(user, { displayName });
        }
        catch (error) {
            setError('Error Signing up with email and password');
        }

        setEmail("");
        setPassword("");
        setDisplayName("");
    };
    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
        if (name === "userEmail") {
            setEmail(value);
        } else if (name === "userPassword") {
            setPassword(value);
        } else if (name === "displayName") {
            setDisplayName(value);
        }
    };
    return (




        <div class="testbox">
            <h1>Registration</h1>

            <form action="/">
                <hr></hr>
                <label id="icon"><i class="icon-envelope "></i></label>
                <input type="email" value={email} name="userEmail" id="userEmail" placeholder="Email" required onChange={event => onChangeHandler(event)} />
                <label id="icon"><i class="icon-user"></i></label>
                <input value={displayName} type="text" name="displayName" id="displayName" placeholder="Name" required onChange={event => onChangeHandler(event)} />
                <label id="icon"><i class="icon-shield"></i></label>
                <input value={password} type="password" name="userPassword" id="userPassword" placeholder="Password" required onChange={event => onChangeHandler(event)} />
                <p className="">
                    Already have an account?{" "}
                    <Link to="/" className="">
                        Sign in here
          </Link>
                </p>
                <button
                
                class="button" onClick={event => {
                    createUserWithEmailAndPasswordHandler(event, email, password);
                }}>Register</button>
            </form>
        </div>
    );
};
export default SignUp;