import { Styles } from "./styles";

type TabMenuHeaderProps = {
  titles: string[];
};

export default function TabMenuHeader({ titles }: TabMenuHeaderProps) {
  return (
    <Styles.Menu>
      {titles.map((title) => (
        <Styles.Item key={title} onClick={() => console.log("clicou")}>
          <span>{title}</span>
        </Styles.Item>
      ))}
    </Styles.Menu>
  );
}
