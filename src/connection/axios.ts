import origin from "@/config/origin";
import { handler } from "axios-wizard";

const httpRequest = handler({
  api: origin.api,
  external: origin.external,
});

export default httpRequest;
