import { useMemo } from "react";
import { TabMenuContentProps } from "../../types";
import { menuResponseTitles } from "../../utils/tabMenuTitles";

// Components
import ResponseSection from "./responseSection";
import HeadersSection from "./headersSection";
import Unavailable from "../unavailable";

// Styles
import { Content } from "./styles";

export default function TabMenuContentResponse({ menu }: TabMenuContentProps) {
  const element = useMemo(() => {
    // console.log("render Tab Response");
    switch (menu) {
      case menuResponseTitles[0].text:
        return <ResponseSection />;
      case menuResponseTitles[1].text:
        return <HeadersSection />;
      case menuResponseTitles[2].text:
        // return <div>Cookies here...</div>;
        return <Unavailable />;
      case menuResponseTitles[3].text:
        // return <div>History here...</div>;
        return <Unavailable />;
      default:
        return <Unavailable />;
      // return <div>Sorry! Not Found...</div>;
    }
  }, [menu]);

  return <Content>{element}</Content>;
}
