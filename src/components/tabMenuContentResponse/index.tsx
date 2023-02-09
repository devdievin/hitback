import { useEffect, useState } from "react";
import { TabMenuContentProps } from "../../types";
import { menuResponseTitles } from "../../utils/tabMenuTitles";

// Components
import ResponseSection from "./responseSection";

// Styles
import { Styles } from "./styles";

export default function TabMenuContentResponse({ menu }: TabMenuContentProps) {
  const [element, setElement] = useState<JSX.Element | null>(null);

  useEffect(() => {
    switch (menu) {
      case menuResponseTitles[0].text:
        setElement(<ResponseSection />);
        break;
      case menuResponseTitles[1].text:
        setElement(<div>Headers here...</div>);
        break;
      case menuResponseTitles[2].text:
        setElement(<div>Cookies here...</div>);
        break;
      case menuResponseTitles[3].text:
        setElement(<div>History here...</div>);
        break;
      default:
        setElement(<div>Sorry! Not Found...</div>);
        break;
    }
    console.log("render 1.1");
  }, [menu]);

  return <Styles.Content>{element}</Styles.Content>;
}
