import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer.js"
import Loading from "../components/Loading";

import validator from 'validator'

import en from "../locales/en/signup.js";
import kr from "../locales/kr/signup.js";

export default function signup( {t} ) {
    const userIDRef = useRef(); //{current: 0}
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
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

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Passwords do not match");
        }

         if (passwordRef.current.value.length < 6) {
        return setError("Passwords is too short.  Please set a password at least 6 characters long.");
        }

        try {
          setError("");
          setLoading(true);
          await signup(userIDRef.current.value, passwordRef.current.value);
        } catch {
          setError(
            "* Failed to create an account.  No connection to working authenticator service"
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
                            name="userID"
                            ref={userIDRef}
                            placeholder={t.email}
                            type="email"
                            required
                        />
                        <input
                            name="password"
                            ref={passwordRef}
                            placeholder={t.password1}
                            type="password"
                            required
                        />
                        <input
                            name="password-confirm"
                            ref={passwordConfirmRef}
                            placeholder={t.password2}
                            type="password"
                            required
                        />

                        {error && <div className="error">{error}</div>}

                        <div>
                            <button type="submit" className="submitButton">
                                {t.button}
                            </button>
                        </div>

                       <Link href="/signin">
                            <label
                            className="signinPage__createAccount"
                            >
                                {t.signin}
                            </label>
                        </Link>
                        {loading ? <Loading /> : ""}
                        
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