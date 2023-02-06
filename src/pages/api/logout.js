import Cookies from "cookies";

export default async function logoutHandler(req, res) {
  const cookies = new Cookies(req, res);

  cookies.set("Authorization");

  res.status(200).json({ message: "Succesfully logged out" });
}
