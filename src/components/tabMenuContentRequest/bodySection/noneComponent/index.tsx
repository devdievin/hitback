import { Styles } from "./styles";

export default function NoneComponent() {
  return (
    <Styles.Container>
      <Styles.Wrapper>
        <Styles.Text>
          Change Environment <Styles.Tag>Ctrl + E</Styles.Tag>
        </Styles.Text>
        <Styles.Text>
          Send Request <Styles.Tag>Ctrl + Enter</Styles.Tag>
        </Styles.Text>
        <Styles.Text>
          Another Command <Styles.Tag>Ctrl + ???</Styles.Tag>
        </Styles.Text>
      </Styles.Wrapper>
    </Styles.Container>
  );
}
