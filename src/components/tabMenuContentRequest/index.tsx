import { useMemo } from "react";
import { TabMenuContentProps } from "../../types";
import { menuRequestTitles } from "../../utils/tabMenuTitles";

// Components
import BodySection from "./bodySection";

// Styles
import { Styles } from "./styles";

export default function TabMenuContentRequest({ menu }: TabMenuContentProps) {
  const element = useMemo(() => {
    // console.log("render Tab Request");
    switch (menu) {
      case menuRequestTitles[0].text:
        return <BodySection />;
      case menuRequestTitles[1].text:
        return <div>Headers here...</div>;
      case menuRequestTitles[2].text:
        return <div>Authorization here...</div>;
      case menuRequestTitles[3].text:
        return <div>Query here...</div>;
      default:
        return <div>Sorry! Not Found...</div>;
    }
  }, [menu]);

  return <Styles.Content>{element}</Styles.Content>;
}
