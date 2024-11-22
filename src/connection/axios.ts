import origin from "@/config/origin";
import { handler } from "axios-wizard";

const httpRequest = handler({
  api: "https://server.co.kr",
  external: origin.external,
});

export default httpRequest;
