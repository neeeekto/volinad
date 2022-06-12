import React, { PropsWithChildren } from "react";
import { Page } from "@entities/page";

export const Layout: React.FC<PropsWithChildren<{ pages: Page[] }>> = (
  props
) => {
  return (
    <>
      <header></header>
      <main>{props.children}</main>
    </>
  );
};
