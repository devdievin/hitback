import { useMemo } from "react";
import { TabMenuContentProps } from "../../types";
import { menuRequestTitles } from "../../utils/tabMenuTitles";

// Components
import BodySection from "./bodySection";
import HeadersSection from "./headersSection";
import AuthorizationSection from "./authorizationSection";
import Unavailable from "../unavailable";

// Styles
import { Content } from "./styles";

export default function TabMenuContentRequest({ menu }: TabMenuContentProps) {
  const element = useMemo(() => {
    // console.log("render Tab Request");
    switch (menu) {
      case menuRequestTitles[0].text:
        return <BodySection />;
      case menuRequestTitles[1].text:
        return <HeadersSection />;
      case menuRequestTitles[2].text:
        return <AuthorizationSection />;
      case menuRequestTitles[3].text:
        // return <div>Query here...</div>;
        return <Unavailable />;
      default:
        return <Unavailable />;
      // return <div>Sorry! Not Found...</div>;
    }
  }, [menu]);

  return <Content>{element}</Content>;
}
