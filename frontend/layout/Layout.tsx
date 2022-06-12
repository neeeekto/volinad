import React, { PropsWithChildren } from "react";
import { Page } from "@entities/page";
import { Entity } from "@core/http";
import { Search } from "./Search";

export const Layout: React.FC<PropsWithChildren<{ pages: Entity<Page>[] }>> = (
  props
) => {
  return (
    <>
      <header></header>
      <main>{props.children}</main>
    </>
  );
};
