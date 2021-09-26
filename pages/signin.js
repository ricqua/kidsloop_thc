import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
// import Link from "next/link";

import en from "../locales/en/signin.js";
import kr from "../locales/kr/signin.js";

export default function signin( {t} ) {
    const userIDRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {};

    // async function handleSubmit(e) {
    //     e.preventDefault();

    //     setTimeout(() => {
    //     setLoading(false);
    //     }, 1500);
    // }

    return (
        <React.Fragment>
            <Head>
                <title>KidsLoop - SignIn</title>
            </Head>

            <main className="signinPage">
                <section className="signinPage__card">
                    <form>
                        <img src="kidsloop_min_logo.svg" alt="KidsLoop icon" width="80px" />

                        <h1>Sign in</h1>

                        <input 
                            // className="inputField1"
                            ref={userIDRef}
                            placeholder="Email or Phone *"
                            type="text"
                            required
                        />

                        <input
                            // className="inputField1"
                            ref={passwordRef}
                            placeholder="Password *"
                            type="password"
                            required
                        />

                        <div>
                            <label
                            className="signinPage__forgotPassword"
                            onClick={() => {
                                alert("Function still in development");
                            }}
                            >
                                Forgot your password?
                            </label>

                            <button type="submit" className="submitButton">
                                Sign In
                            </button>
                        </div>

                        <label
                        className="signinPage__createAccount"
                        >
                            <a href="/signup">
                                    Create an account
                            </a>
                        </label>
                    

                    </form>
                </section>
            </main>
        </React.Fragment>
    )
}
