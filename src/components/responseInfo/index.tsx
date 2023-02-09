import { useSelector } from "react-redux";
import { MenuAction } from "../../enums/MenuAction";
import { menuResponseTitles } from "../../utils/tabMenuTitles";

// Components
import TabMenuComponent from "../tabMenuComponent";
import TabMenuContentResponse from "../tabMenuContentResponse";
import TagHttpCode from "../tagHttpCode";

// Styles
import { Styles } from "./styles";

export default function ResponseInfo() {
  const { menuResponseSelected } = useSelector(
    (rootReducer: any) => rootReducer.tabMenuReducer
  );

  const { status } = useSelector(
    (rootReducer: any) => rootReducer.requestReducer
  );

  return (
    <>
      <Styles.Row1>
        <Styles.InfoContainer>
          <TagHttpCode code={status} />
          <p>72ms</p>
          <p>29 B</p>
        </Styles.InfoContainer>
      </Styles.Row1>
      <Styles.Row2>
        <TabMenuComponent
          menus={menuResponseTitles}
          menuActionIn={MenuAction.RESPONSE}
        >
          <TabMenuContentResponse menu={menuResponseSelected.text} />
        </TabMenuComponent>
      </Styles.Row2>
    </>
  );
}
