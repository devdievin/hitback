// Styles
import { useEffect, useState } from "react";
import { menuResponseTitles } from "../../utils/tabMenuTitles";
import { Styles } from "./styles";

type TabContentProps = {
  menu: string;
};

export default function TabMenuContentResponse({ menu }: TabContentProps) {
  const [menuName, setMenuName] = useState("default");

  useEffect(() => {
    switch (menu) {
      case menuResponseTitles[0].text:
        setMenuName(menuResponseTitles[0].text);
        break;
      case menuResponseTitles[1].text:
        setMenuName(menuResponseTitles[1].text);
        break;
      case menuResponseTitles[2].text:
        setMenuName(menuResponseTitles[2].text);
        break;
      case menuResponseTitles[3].text:
        setMenuName(menuResponseTitles[3].text);
        break;
      default:
        setMenuName("default");
        break;
    }
    // console.log(menuName);
  }, [menu]);

  return (
    <Styles.Content>
      <p>{menuName}</p>
    </Styles.Content>
  );
}
