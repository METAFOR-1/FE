import httpRequest from "../axios";

const api = httpRequest.external("v1", {
  contentType: "application/octet-stream",
});
interface STT {
  text: string;
}
async function post(file: any) {
  const response = await api.post<any, STT>("/clova", file);
  return response.data;
}

const mediluxApi = {
  post,
};
export default mediluxApi;
