import { Media } from "@core/http";

export interface IHaveDateAt {
  createdAt: string;
  updatedAt: string;
}

export interface IHavePublishedAt {
  publishedAt: string;
}

export interface MetaSocial {
  id: string;
  socialNetwork: "Facebook" | "Twitter";
  title: string;
  description: string;
  image: {
    data: Media;
  };
}

export interface SeoComponent {
  id: string;
  metaTitle: string;
  metaDescription: string;
  metaImage?: {
    data: Media;
  };
  metaSocial?: MetaSocial[];
  keywords?: string;
  metaRobots?: string;
  structuredData?: any; // ?
  metaViewport?: string;
  canonicalURL?: string;
}
