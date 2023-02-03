import React from "react";
import { Button } from "react-bootstrap";

export default function Btn({ text, variant }) {
  return <Button variant={variant}>{text}</Button>;
}
