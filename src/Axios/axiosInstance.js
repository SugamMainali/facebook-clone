import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://facebook-clone-68f10.firebaseio.com",
});

export default axiosInstance;
