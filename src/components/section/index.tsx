import { ReactNode } from "react";
import { Styles } from "./styles";

type SectionProps = {
  children: ReactNode;
};

export default function Section({ children }: SectionProps) {
  return <Styles.Section>{children}</Styles.Section>;
}
