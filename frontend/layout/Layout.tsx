import React, { PropsWithChildren } from "react";
import { Page } from "@entities/page";
import { Global } from "@entities/global";
import css from "./Layout.module.scss";
import Link from "next/link";

const Logo: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Link type="a" href="/">
      <a className={css.logo}>
        <b>{children}</b>
      </a>
    </Link>
  );
};

const MenuLink: React.FC<PropsWithChildren<{ href: string }>> = ({
  href,
  children,
}) => (
  <Link type="a" href={href}>
    <a className="button">{children}</a>
  </Link>
);

export const Layout: React.FC<
  PropsWithChildren<{ pages: Page[]; global: Global }>
> = (props) => {
  return (
    <>
      <header className={css.header}>
        <Logo>{props.global.attributes.logoText}</Logo>
        <MenuLink href="/blog">{props.global.attributes.blogPageMenu}</MenuLink>
        {props.pages.map((page) => (
          <MenuLink href={`/other/${page.attributes.slug}`} key={page.id}>
            {page.attributes.menu}
          </MenuLink>
        ))}
      </header>
      <main className={css.main}>{props.children}</main>
    </>
  );
};
