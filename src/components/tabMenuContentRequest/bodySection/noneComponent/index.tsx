import { Container, Tag, Text, Wrapper } from "./styles";

export default function NoneComponent() {
  return (
    <Container>
      <Wrapper>
        <Text>
          Another Command <Tag>Ctrl + ???</Tag>
        </Text>
        <Text>
          Another Command <Tag>Ctrl + ???</Tag>
        </Text>
        <Text>
          Another Command <Tag>Ctrl + ???</Tag>
        </Text>
      </Wrapper>
    </Container>
  );
}
