import { useDispatch, useSelector } from "react-redux";
import { MenuAction } from "../../enums/MenuAction";
import { MenuTitleType } from "../../types";
import {
  changeMenuRequest,
  changeMenuResponse,
} from "../../redux/tabMenu/actionCreators";

//Styles
import { Container, Content, Item, ItemActive, TabMenu } from "./styles";

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
    <Container>
      <TabMenu>
        {menus.map((menu) =>
          menu.id === menuRequestSelected.id ||
          menu.id === menuResponseSelected.id ? (
            <ItemActive key={menu.id} onClick={() => toggleMenu(menu)}>
              <span>{menu.text}</span>
            </ItemActive>
          ) : (
            <Item key={menu.id} onClick={() => toggleMenu(menu)}>
              <span>{menu.text}</span>
            </Item>
          )
        )}
      </TabMenu>
      <Content>{children}</Content>
    </Container>
  );
}
