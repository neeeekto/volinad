import { createContext } from "react";
import { Global } from "@entities/global";

export const GlobalContext = createContext<Global>({} as any);
