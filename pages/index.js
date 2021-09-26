import React from "react";
import Head from "next/head";
// import Link from "next/link";
// import { Link } from "react-router-dom";

export default function index() {

  return (
    <React.Fragment>
      <Head>
        <title>KidsLoop - Home</title>
      </Head>
        <section className="home">
          <h1>Kids Loop Home page</h1>
          <br />
          <p>By: Richard Quantrill</p>
          <p>Email: ricqua@gmail.com</p>
          <p>Kakao: ricqua</p>
          <p>Cell: 
            <a>
              010-9208-2656
            </a>
          </p>
          <p>Portfolio website: 
            <a>
              https://www.richardquantrill.com/
            </a>
          </p>
          <br />

            <a href="/signin">Go to Sign In page</a>
            {/* <Link to="/signin"> Sign In Page </Link> */}
        </section>
    </React.Fragment>
  );
}

