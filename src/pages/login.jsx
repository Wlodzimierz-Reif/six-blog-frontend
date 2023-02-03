import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
// import { useQuery, gql, useMutation } from "@apollo/client";
import axios from "axios";
// import { cookies } from "next/headers";

// const LOGIN = gql`
//   mutation signin {
//     login(input: { identifier: "admin@admin.com", password: "admin123" }) {
//       jwt
//     }
//   }
// `;

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  //   const nextCookies = cookies();

  //   const [doLogIn, { data, loading, error }] = useMutation(LOGIN);

  const handleSignIn = async () => {
    axios
      .post("http://localhost:3000/api/login", {
        identifier: login,
        password: password,
      })
      .then((response) => {
        // console.log(response.headers);
        // console.log("User profile: ", response.data);
        // console.log("User token: ", response.data);
        process.env.SECRET = response.data.jwt;
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };

  return (
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
        @
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Password"
        aria-label="Password"
        aria-describedby="basic-addon1"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <Button variant="info" onClick={handleSignIn}>
        Login
      </Button>
      {/* {nextCookies.getAll().map((cookie) => (
        <div key={cookie.name}>
          <p>Name: {cookie.name}</p>
          <p>Value: {cookie.value}</p>
        </div>
      ))} */}
    </div>
  );
}
