import { useEffect, useState } from "react";
import { menuRequestTitles } from "../../utils/tabMenuTitles";

// Styles
import { Styles } from "./styles";

type TabContentProps = {
  menu: string;
};

export default function TabMenuContentRequest({ menu }: TabContentProps) {
  const [menuName, setMenuName] = useState("default");

  useEffect(() => {
    switch (menu) {
      case menuRequestTitles[0].text:
        setMenuName(menuRequestTitles[0].text);
        break;
      case menuRequestTitles[1].text:
        setMenuName(menuRequestTitles[1].text);
        break;
      case menuRequestTitles[2].text:
        setMenuName(menuRequestTitles[2].text);
        break;
      case menuRequestTitles[3].text:
        setMenuName(menuRequestTitles[3].text);
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
