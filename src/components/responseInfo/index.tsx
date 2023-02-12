import { useSelector } from "react-redux";
import { MenuAction } from "../../enums/MenuAction";
import { menuResponseTitles } from "../../utils/tabMenuTitles";

// Components
import TabMenuComponent from "../tabMenuComponent";
import TabMenuContentResponse from "../tabMenuContentResponse";
import TagHttpCode from "../tagHttpCode";
import Loading from "../loading";

// Styles
import { InfoContainer, Row1, Row2 } from "./styles";

export default function ResponseInfo() {
  const { menuResponseSelected } = useSelector(
    (rootReducer: any) => rootReducer.tabMenuReducer
  );

  const { headers, status, isLoading } = useSelector(
    (rootReducer: any) => rootReducer.requestReducer
  );

  return (
    <>
      <Row1>
        <InfoContainer>
          <TagHttpCode code={status} />
          <p>
            {headers["request-duration"] ? headers["request-duration"] : "0ms"}
          </p>
          <p>
            {headers["content-length"]
              ? `${headers["content-length"]} bytes`
              : "0 bytes"}
          </p>
        </InfoContainer>
      </Row1>
      <Row2>
        <TabMenuComponent
          menus={menuResponseTitles}
          menuActionIn={MenuAction.RESPONSE}
        >
          <TabMenuContentResponse menu={menuResponseSelected.text} />
        </TabMenuComponent>
      </Row2>
      {isLoading && <Loading />}
    </>
  );
}
