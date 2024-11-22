import { result } from "@/asset/mock";
import httpRequest from "../axios";

const api = httpRequest.api("v1");
export interface Result {
  muscleName: string;
  youtubeTitle: string;
  youtubeLink: string;
  reason: string;
  imageLink: string;
}

async function get(request: string): Promise<Result> {
  // const response = await api.get<Result>("/pathname");
  // return response.data;
  return result;
}

const serverApi = {
  get,
};

export default serverApi;
