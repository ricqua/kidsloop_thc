import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer"
import Loading from "../components/Loading";

import validator from 'validator'

import en from "../locales/en/recoverPassword.js";
import kr from "../locales/kr/recoverPassword.js";

export default function recoverpassword( {t}) {
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
                "* Failed to recover password.  Email does not exsist or connection to server failed."
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

                        {error && <div className="error">{error}</div>}

                        <div>
                            <button type="submit" className="submitButton">
                                {t.button}
                            </button>
                        {loading ? <Loading /> : ""}

                        </div>

                        <Link href="/signup">
                            <label
                            className="signinPage__createAccount"
                            >
                                {t.signin}
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
