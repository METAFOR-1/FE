import httpRequest from "../axios";

const api = httpRequest.api();
export interface Result {
  muscleName: string;
  youtubeTitle: string;
  youtubeLink: string;
  reason: string;
  imageLink: string;
}
async function get() {
  const response = await api.get("/check");
  return response.data;
}
async function post(request: string) {
  const response = await api.post<any, Result>("/check", { script: request });
  return response.data;
}

const serverApi = {
  get,
  post,
};

export default serverApi;
