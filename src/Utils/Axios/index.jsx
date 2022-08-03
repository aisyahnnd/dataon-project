import axios from "axios";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
const Axios = axios.create({
  baseURL: "https://flaviocopes-cors-example-express.glitch.me/",
});

export default Axios;
