import React from "react";
import Head from "next/head";
import Link from "next/link";
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
          <p>Richard Quantrill</p>
          <p>
            <a href="mailto:ricqua@gmail.com"> ricqua@gmail.com</a>
          </p>
          <p>Kakao: 
            <a href=""> ricqua</a>
          </p>
          <p>
            <a> 010-9208-2656</a>
          </p>
          <p>
            <a href="https://www.richardquantrill.com/"> https://www.richardquantrill.com/</a>
          </p>
          <br />

          <Link href="/signin"> Go to Sign in page </Link>
          
        </section>
    </React.Fragment>
  );
}

