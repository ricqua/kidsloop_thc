import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";

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

            <main>
                <section>
                    <form>
                        <img src="" alt="KidsLoop icon" width="80px" />
        
                        <h1>Sign In</h1>

                        <input 
                            className="inputField1"
                            ref={userIDRef}
                            placeholder="Email or Phone *"
                            type="text"
                            required
                        />

                        <input
                            className="inputField1"
                            ref={passwordRef}
                            placeholder="Password *"
                            type="password"
                            required
                        />

                        <div>
                            <p
                            className="label"
                            onClick={() => {
                                alert("Function still in development");
                            }}
                            >
                            Forgot Password?
                            </p>
                            <button type="submit" className="submitButton">
                            Sign In
                            </button>
                        </div>

                    </form>
                </section>
            </main>
        </React.Fragment>
    )
}
