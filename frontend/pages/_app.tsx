import "../styles/index.scss";
import type { AppProps, AppContext } from "next/app";
import App from "next/app";
import { NextComponentType } from "next";
import React, { useState } from "react";
import { Layout } from "../layout";
import { Page, pagesApi } from "@entities/page";
import { Global, globalApi } from "@entities/global";
import { Seo } from "../components/Seo";
import { SeoContext } from "../contexts/seo.context";

type InitialProps = {
  pages: Array<Page>;
  global: Global;
};

const Root: NextComponentType<
  AppContext,
  InitialProps,
  AppProps & InitialProps
> = ({ Component, pageProps, pages, global }) => {
  return (
    <>
      <Seo seo={global.attributes.seo}></Seo>
      <SeoContext.Provider value={global.attributes.seo}>
        <Layout pages={pages} global={global}>
          <Component {...pageProps} />
        </Layout>
      </SeoContext.Provider>
    </>
  );
};

Root.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const pages = await pagesApi.getList({});
  const global = await globalApi.get();
  return { ...appProps, pages: pages.data, global: global.data };
};

export default Root;
