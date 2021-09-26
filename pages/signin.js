import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer"
import Loading from "../components/Loading";

import validator from 'validator'

import en from "../locales/en/signin.js";
import kr from "../locales/kr/signin.js";

export default function signin( {t}) {
    const userIDRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        if (validator.isEmail(userIDRef.current.value)) {
        setEmailError('')
        } else {
        setEmailError('Enter valid Email!')
        return
        }

        try {
            setError("");
            setLoading(true);
            await signin(userIDRef.current.value, passwordRef.current.value);
            // history.push("/");
            } catch {
            setError(
                "* Failed to sign in.  Please ensure your sign in credentials are correct."
            );
        }

        setTimeout(() => {
        setLoading(false);
        }, 1500);
    }

    return (
        <React.Fragment>
            <Head>
                <title>KidsLoop - {t.title}</title>
            </Head>

            <main className="signinPage">
                <section className="signinPage__card">
                    <form onSubmit={handleSubmit}>
                        <img src="kidsloop_min_logo.svg" alt="KidsLoop icon" width="90px" />

                        <h1>{t.title}</h1>

                        {emailError && <div className="error">{emailError}</div>}

                        <input 
                            // className="inputField1"
                            ref={userIDRef}
                            placeholder={t.email}
                            type="email"
                            required
                        />

                        <input
                            // className="inputField1"
                            ref={passwordRef}
                            placeholder={t.password}
                            type="password"
                            required
                        />

                        {error && <div className="error">{error}</div>}

                        <div>
                            <Link href="/password">
                                <label
                                className="signinPage__forgotPassword"
                                >
                                    {t.forgotpw} 
                                </label>
                            </Link>
                        

                            {/* <Link href="/passwordrecovery">
                                <label
                                className="signinPage__createAccount"
                                >
                                    Forgot your password?
                                </label>
                            </Link> */}

                            <button type="submit" className="submitButton">
                                {t.button}
                            </button>
                        {loading ? <Loading /> : ""}

                        </div>

                        <Link href="/signup">
                            <label
                            className="signinPage__createAccount"
                            >
                                {t.create}
                            </label>
                        </Link>

                    </form>
                </section>
                <Footer/>
            </main>
        </React.Fragment>
    )
}

export async function getStaticProps({ locale }) {
  const t =
    locale === "en" ? en : locale === "kr" ? kr : null;

  return {
    props: {
      t,
    },
  };
}
