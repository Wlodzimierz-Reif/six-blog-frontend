import { appContext } from "@/context/store";
import axios from "axios";
import React, { useContext } from "react";

const LogoutHandler = async () => {
  axios.post("http://localhost:3000/api/logout").then((response) => {
    alert("Logged out");
  });
};

export default LogoutHandler;
