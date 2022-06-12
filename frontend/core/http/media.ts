import { getStrapiURL } from "./utils";
import { Result, Entity, Media } from "@core/http/types";

export function getStrapiMediaUrl(media?: Media) {
  if (!media) {
    return "";
  }
  const { url } = media.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}
