import { createClient } from "@sanity/client";

// Configuration required to retrieve data from Sanity.io
// We create a new client
export default createClient({
  projectId: "6icrb2vy",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: false,
});
