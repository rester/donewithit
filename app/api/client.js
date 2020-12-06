import { create } from "apisauce";
import { apisAreAvailable } from "expo";

const apiClient = create({
  baseURL: "http://192.168.0.105:9000/api",
});

export default apiClient;
