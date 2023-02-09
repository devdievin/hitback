import { useEffect, useState } from "react";

// Styles
import { Styles } from "./styles";

type TagHttpCodeProps = {
  code: number;
};

export default function TagHttpCode({ code }: TagHttpCodeProps) {
  const [element, setElement] = useState<JSX.Element | null>(null);

  useEffect(() => {
    switch (true) {
      case code >= 200 && code < 300:
        setElement(<Styles.TagHttpCode200>{code}</Styles.TagHttpCode200>);
        break;
      case code >= 400 && code < 500:
        setElement(<Styles.TagHttpCode400>{code}</Styles.TagHttpCode400>);
        break;
      case code >= 500 && code < 600:
        setElement(<Styles.TagHttpCode500>{code}</Styles.TagHttpCode500>);
        break;
      default:
        setElement(<Styles.TagHttpCode100>{code}</Styles.TagHttpCode100>);
        break;
    }
    console.log("TAG rendered");
  }, [code]);

  return element;
}
