import "../styles/globals.css";
import type { AppProps, AppContext } from "next/app";
import App from "next/app";
import { NextComponentType } from "next";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import React, { useState } from "react";
import { Layout } from "../layout/Layout";
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
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout pages={pages}>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
};

Root.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const pages = await pagesApi.get({});
  return { ...appProps, pages: pages.data };
};

export default Root;
