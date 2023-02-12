import { ReactNode } from "react";
import { SectionContainer } from "./styles";

type SectionProps = {
  children: ReactNode;
};

export default function Section({ children }: SectionProps) {
  return <SectionContainer>{children}</SectionContainer>;
}
