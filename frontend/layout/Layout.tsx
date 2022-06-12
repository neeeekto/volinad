import React, { PropsWithChildren } from "react";
import { Page, usePagesQuery } from "@entities/page";
import { Entity } from "@core/http";
import { Search } from "./Search";

export const Layout: React.FC<PropsWithChildren<{ pages: Entity<Page>[] }>> = (
  props
) => {
  return (
    <div>
      Hello{" "}
      {props.pages.map((x) => (
        <span key={x.id}>
          {x.id} {x.attributes.menu}
        </span>
      ))}
      <Search />
      {props.children}
    </div>
  );
};
