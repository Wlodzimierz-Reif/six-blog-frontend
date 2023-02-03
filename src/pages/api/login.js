import axios from "axios";
import Cookies from "cookies";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const response = await handleSignIn(
        req.body.identifier,
        req.body.password,
      );
      //   res.send({ message: `jwt: ${response.data.jwt}` });
      const cookies = new Cookies(req, res);

      cookies.set("Authorization", response.data.jwt, { httpOnly: true });

      res.send({ message: "success@" });
    } catch (e) {
      console.log("error:", e);
      return res.send({ message: "Sent message failed" });
    }
  }
}

const handleSignIn = async (login, password) => {
  const data = await axios.post("http://localhost:1337/api/auth/local", {
    identifier: login,
    password: password,
  });
  return data;
};
