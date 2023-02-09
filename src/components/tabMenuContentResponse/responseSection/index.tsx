import { useSelector } from "react-redux";

// Styles
import { Styles } from "./styles";

export default function ResponseSection() {
  const { data } = useSelector(
    (rootReducer: any) => rootReducer.requestReducer
  );

  console.log(data);

  return (
    <Styles.Container>
      {/* <p>Response here 2...</p> */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Styles.Container>
  );
}
