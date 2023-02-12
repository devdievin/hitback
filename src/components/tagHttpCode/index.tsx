import { useEffect, useState } from "react";

// Styles
import {
  TagHttpCode100,
  TagHttpCode200,
  TagHttpCode400,
  TagHttpCode500,
} from "./styles";

type TagHttpCodeProps = {
  code: number;
};

export default function TagHttpCode({ code }: TagHttpCodeProps) {
  const [element, setElement] = useState<JSX.Element | null>(null);

  useEffect(() => {
    switch (true) {
      case code >= 200 && code < 300:
        setElement(<TagHttpCode200>{code}</TagHttpCode200>);
        break;
      case code >= 400 && code < 500:
        setElement(<TagHttpCode400>{code}</TagHttpCode400>);
        break;
      case code >= 500 && code < 600:
        setElement(<TagHttpCode500>{code}</TagHttpCode500>);
        break;
      default:
        setElement(<TagHttpCode100>{code}</TagHttpCode100>);
        break;
    }
    // console.log("TAG rendered");
  }, [code]);

  return element;
}
