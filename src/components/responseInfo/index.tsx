// Styles
import TabMenuHeader from "../tabMenuHeader";
import { Styles } from "./styles";

export default function ResponseInfo() {
  return (
    <>
      <Styles.BaseInfo>
        <Styles.InfoContainer>
          <Styles.TagCodeHttp>200</Styles.TagCodeHttp>
          <p>72ms</p>
          <p>29 B</p>
        </Styles.InfoContainer>
      </Styles.BaseInfo>
      <Styles.TabMenu>
        <TabMenuHeader titles={["Response", "Headers", "Cookies", "History"]} />
      </Styles.TabMenu>
      <Styles.Content>
        <div style={{ padding: "1rem" }}>Content</div>
      </Styles.Content>
    </>
  );
}
