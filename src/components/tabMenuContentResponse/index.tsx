import { useMemo } from "react";
import { TabMenuContentProps } from "../../types";
import { menuResponseTitles } from "../../utils/tabMenuTitles";

// Components
import ResponseSection from "./responseSection";

// Styles
import { Styles } from "./styles";

export default function TabMenuContentResponse({ menu }: TabMenuContentProps) {
  const element = useMemo(() => {
    // console.log("render Tab Response");
    switch (menu) {
      case menuResponseTitles[0].text:
        return <ResponseSection />;
      case menuResponseTitles[1].text:
        return <div>Headers here...</div>;
      case menuResponseTitles[2].text:
        return <div>Cookies here...</div>;
      case menuResponseTitles[3].text:
        return <div>History here...</div>;
      default:
        return <div>Sorry! Not Found...</div>;
    }
  }, [menu]);

  return <Styles.Content>{element}</Styles.Content>;
}
