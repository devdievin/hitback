import { Container, Tag, Text, Wrapper } from "./styles";

export default function NoneComponent() {
  return (
    <Container>
      <Wrapper>
        <Text>
          Change Environment <Tag>Ctrl + E</Tag>
        </Text>
        <Text>
          Send Request <Tag>Ctrl + Enter</Tag>
        </Text>
        <Text>
          Another Command <Tag>Ctrl + ???</Tag>
        </Text>
      </Wrapper>
    </Container>
  );
}
