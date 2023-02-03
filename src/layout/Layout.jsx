import NavbarComponent from "@/components/navbar/Navbar";
import React from "react";
import { Container } from "react-bootstrap";

export default function Layout({ children }) {
  return (
    <Container>
      <NavbarComponent />
      {children}
    </Container>
  );
}
