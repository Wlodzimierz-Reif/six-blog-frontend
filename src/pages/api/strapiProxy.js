import axios from "axios";
import Cookies from "cookies";

export default async function strapiProxy(req, res) {
//   if (req.method === "POST") {
    try {
      const cookies = new Cookies(req, res);

      const cookie = cookies.get("Authorization");

      const data = await fetchFromStrapi(req.body, cookie);
    //   console.log("test: ", data);
      res.send(data);
    } catch (e) {
      console.log("error:", e);
      return res.send({ message: "Sent message failed" });
    }
//   }
}

const fetchFromStrapi = async (options, jwt) => {
//   console.log(options);
  //   axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`; // sets header for all requests
  //   axios.AxiosHeaders.set({ Authorization: `Bearer ${jwt}` });
  //   const data = await axios(options);

  const strapiResponse = await axios({
    url: options.url,
    method: options.method,
    // headers: { Authorization: `Bearer ${jwt}` },
  });
  //   const strapiResponse = await axios.get(options.url, {
  //     headers: { Authorization: `Bearer ${jwt}` },
  //   });
  const test1 = strapiResponse.data;
//   console.log(test1);
  const test2 = strapiResponse.data.data;
  //   console.log(test2);
  return test2;
};
