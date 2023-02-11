import { useDispatch } from "react-redux";
import { HttpMethods } from "../../enums/HttpMethods";
import { setHttpMethod } from "../../redux/request/requestActions";
import { toggleDropMenuHttpMethod } from "../../redux/dropdownMenu/actionCreators";

// Styles
import { Container, MenuItem } from "./styles";
import { colors } from "../../styles/colors";

export default function MenuHttpMethod() {
  const dispatch = useDispatch();

  const toggleHttpMethod = (method: string) => {
    switch (method) {
      case HttpMethods.GET:
        dispatch(setHttpMethod(method));
        break;
      case HttpMethods.POST:
        dispatch(setHttpMethod(method));
        break;
      case HttpMethods.PUT:
        dispatch(setHttpMethod(method));
        break;
      case HttpMethods.DEL:
        dispatch(setHttpMethod(method));
        break;
    }
    dispatch(toggleDropMenuHttpMethod(false));
  };

  return (
    <Container>
      <MenuItem
        onClick={() => toggleHttpMethod(HttpMethods.GET)}
        style={{ color: colors.blue }}
      >
        {HttpMethods.GET}
      </MenuItem>
      <MenuItem
        onClick={() => toggleHttpMethod(HttpMethods.POST)}
        style={{ color: colors.green }}
      >
        {HttpMethods.POST}
      </MenuItem>
      <MenuItem
        onClick={() => toggleHttpMethod(HttpMethods.PUT)}
        style={{ color: colors.yellow }}
      >
        {HttpMethods.PUT}
      </MenuItem>
      <MenuItem
        onClick={() => toggleHttpMethod(HttpMethods.DEL)}
        style={{ color: colors.red }}
      >
        {HttpMethods.DEL}
      </MenuItem>
      <MenuItem onClick={() => console.log("Custom click")}>
        Custom Method
      </MenuItem>
    </Container>
  );
}
