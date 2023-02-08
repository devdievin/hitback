// Styles
import { useEffect, useState } from "react";
import { TabMenuRequest } from "../../enums/TabMenuTitles";
import { Styles } from "./styles";

type TabContentProps = {
  menu: string;
};

export default function TabMenuContentRequest({ menu }: TabContentProps) {
  const [menuName, setMenuName] = useState("default");

  useEffect(() => {
    switch (menu) {
      case TabMenuRequest.BODY:
        setMenuName(TabMenuRequest.BODY);
        break;
      case TabMenuRequest.HEADERS:
        setMenuName(TabMenuRequest.HEADERS);
        break;
      case TabMenuRequest.AUTHORIZATION:
        setMenuName(TabMenuRequest.AUTHORIZATION);
        break;
      case TabMenuRequest.QUERY:
        setMenuName(TabMenuRequest.QUERY);
        break;
      default:
        setMenuName("default");
        break;
    }
    console.log(menuName);
  }, [menu]);

  return (
    <Styles.Content>
      <p>{menuName}</p>
    </Styles.Content>
  );
}
