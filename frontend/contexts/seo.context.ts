import { createContext } from "react";
import { SeoComponent } from "@entities/common.types";

export const SeoContext = createContext<SeoComponent>({} as any);
