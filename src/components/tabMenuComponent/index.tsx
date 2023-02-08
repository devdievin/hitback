import { useDispatch, useSelector } from "react-redux";
import { MenuAction } from "../../enums/MenuAction";
import { MenuTitleType } from "../../types";
import {
  changeMenuRequest,
  changeMenuResponse,
} from "../../redux/tabMenu/actionCreators";

//Styles
import { Styles } from "./styles";

type TabMenuComponentProps = {
  menus: MenuTitleType[];
  menuActionIn: string;
  children: JSX.Element;
};

export default function TabMenuComponent({
  menus,
  menuActionIn,
  children,
}: TabMenuComponentProps) {
  const dispatch = useDispatch();
  const { menuRequestSelected, menuResponseSelected } = useSelector(
    (rootReducer: any) => rootReducer.tabMenuReducer
  );

  const toggleMenu = (menu: MenuTitleType) => {
    menuActionIn === MenuAction.REQUEST
      ? dispatch(changeMenuRequest(menu))
      : dispatch(changeMenuResponse(menu));
  };

  return (
    <Styles.Container>
      <Styles.TabMenu>
        {menus.map((menu) =>
          menu.id === menuRequestSelected.id ||
          menu.id === menuResponseSelected.id ? (
            <Styles.ItemActive key={menu.id} onClick={() => toggleMenu(menu)}>
              <span>{menu.text}</span>
            </Styles.ItemActive>
          ) : (
            <Styles.Item key={menu.id} onClick={() => toggleMenu(menu)}>
              <span>{menu.text}</span>
            </Styles.Item>
          )
        )}
      </Styles.TabMenu>
      <Styles.Content>{children}</Styles.Content>
    </Styles.Container>
  );
}
