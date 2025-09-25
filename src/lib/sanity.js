import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "8jn0m9nc", // from sanity.json or sanity manage
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-10-10", // latest
});
