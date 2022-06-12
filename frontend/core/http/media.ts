import { getStrapiURL } from "./utils";
import { Result, Entity, Media } from "@core/http/types";

export function getStrapiMediaUrl(media: Result<Entity<Media>>) {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}
