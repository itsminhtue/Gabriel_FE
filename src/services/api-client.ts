import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b4c2e3853af24f519738abf44050b7d6",
  },
});
