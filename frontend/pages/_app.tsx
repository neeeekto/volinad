import "../styles/globals.css";
import type { AppProps, AppContext } from "next/app";
import App from "next/app";
import { NextComponentType } from "next";
import React, { useState } from "react";
import { Layout } from "../layout";
import { Entity } from "@core/http";
import { Page, pagesApi } from "@entities/page";

type InitialProps = {
  pages: Array<Entity<Page>>;
};

const Root: NextComponentType<
  AppContext,
  InitialProps,
  AppProps & InitialProps
> = ({ Component, pageProps, pages }) => {
  return (
    <Layout pages={pages}>
      <Component {...pageProps} />
    </Layout>
  );
};

Root.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const pages = await pagesApi.get({});
  return { ...appProps, pages: pages.data };
};

export default Root;
