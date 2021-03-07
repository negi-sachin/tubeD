import React from "react";
import LinkInput from "../components/LinkInput";
import Head from "next/head";
import Logo from "../components/Logo";

function Index() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Logo />
      <LinkInput />
    </div>
  );
}

export default Index;
