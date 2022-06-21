import React, { useContext } from "react";
import formatFn from "date-fns/format";
import ru from "date-fns/locale/ru";
import en from "date-fns/locale/en-US";
import { GlobalContext } from "../contexts/global.context";

export const DateView: React.FC<{ date: string }> = ({ date }) => {
  const global = useContext(GlobalContext);
  return (
    <>
      {formatFn(new Date(date), global.attributes.dateFormat, {
        locale: global.attributes.locale === "en" ? en : ru,
      })}
    </>
  );
};
