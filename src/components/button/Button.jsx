import React from "react";
import { Button } from "react-bootstrap";

export default function Btn({ text, variant, type }) {
  return (
    <Button variant={variant} type={type}>
      {text}
    </Button>
  );
}
