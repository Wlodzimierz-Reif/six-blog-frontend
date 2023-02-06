import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
// import { useQuery, gql, useMutation } from "@apollo/client";
import axios from "axios";
import { appContext } from "@/context/store";

// const LOGIN = gql`
//   mutation signin {
//     login(input: { identifier: "admin@admin.com", password: "admin123" }) {
//       jwt
//     }
//   }
// `;

export default function Login() {
  //   const [doLogIn, { data, loading, error }] = useMutation(LOGIN);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { setIsLoggedIn } = useContext(appContext);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/login", {
        identifier: login,
        password: password,
      })
      .then((response) => {
        if (response.data.loggedIn) {
          setIsLoggedIn(true);
        }
        process.env.SECRET = response.data.jwt;
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };

  const handleSignOut = async () => {
    axios.post("http://localhost:3000/api/logout").then((response) => {
      alert("Logged out");
    });
  };

  return (
    <form action="" onSubmit={(e) => handleSignIn(e)}>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => setLogin(e.target.value)}
        ></input>
        <span className="input-group-text" id="basic-addon1">
          Password
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </div>
    </form>
  );
}
