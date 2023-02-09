import { useEffect, useState } from "react";
import { TabMenuContentProps } from "../../types";
import { menuRequestTitles } from "../../utils/tabMenuTitles";

// Components
import BodySection from "./bodySection";

// Styles
import { Styles } from "./styles";

export default function TabMenuContentRequest({ menu }: TabMenuContentProps) {
  const [element, setElement] = useState<JSX.Element | null>(null);

  useEffect(() => {
    switch (menu) {
      case menuRequestTitles[0].text:
        setElement(<BodySection />);
        break;
      case menuRequestTitles[1].text:
        setElement(<div>Headers here...</div>);
        break;
      case menuRequestTitles[2].text:
        setElement(<div>Authorization here...</div>);
        break;
      case menuRequestTitles[3].text:
        setElement(<div>Query here...</div>);
        break;
      default:
        setElement(<div>Sorry! Not Found...</div>);
        break;
    }
    console.log("render 1");
  }, [menu]);

  return <Styles.Content>{element}</Styles.Content>;
}
