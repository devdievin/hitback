import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { MenuAction } from "../../enums/MenuAction";
import { menuRequestTitles } from "../../utils/tabMenuTitles";
import {
  getRequestAction,
  setIsLoading,
} from "../../redux/request/requestActions";
import { showErrorAction } from "../../redux/errors/actionCreators";
import apiRequest from "../../services/apiRequest";
import checkDataIntegrity from "../../services/checkDataIntegrity";

// Components
import TabMenuComponent from "../tabMenuComponent";
import TabMenuContentRequest from "../tabMenuContentRequest";
import Dropdown from "../dropdown";
import MenuHttpMethod from "../menuHttpMethod";

// Styles
import { Row1, InputRequest, ButtonRequest, Row2, Form } from "./styles";
import { Wrapper } from "../../styles/global";

type FormDataRequest = {
  url: string;
};

export default function ManageRequest() {
  // const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts");
  const [url, setUrl] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { register, handleSubmit } = useForm<FormDataRequest>();
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const { menuRequestSelected } = useSelector(
    (rootReducer: any) => rootReducer.tabMenuReducer
  );

  const { httpMethod, bodyData } = useSelector(
    (rootReducer: any) => rootReducer.requestReducer
  );

  // const { status } = useSelector(
  //   (rootReducer: any) => rootReducer.errorReducer
  // );

  const handleFocus = (e: any) => {
    if (inputRef.current) {
      inputRef.current.selectionEnd = inputRef.current.value.length;
    }
  };

  const onSubmit = async (data: FormDataRequest) => {
    try {
      const { url } = data;
      // console.log(bodyData);

      if (!checkDataIntegrity(httpMethod, bodyData)) {
        dispatch(
          showErrorAction({ status: true, message: "Invalid request body!" })
        );
        return;
      }

      dispatch(setIsLoading(true));

      const response = await apiRequest(httpMethod, url, bodyData);
      dispatch(getRequestAction(response));
    } catch (error) {
      dispatch(setIsLoading(false));
      dispatch(getRequestAction(error.response));
      console.error(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  const checkKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.code === "Enter") e.preventDefault();
  };

  return (
    <>
      <Row1>
        <Wrapper>
          <Dropdown isOpen={isDropdownOpen} setIsOpen={setIsDropdownOpen}>
            <MenuHttpMethod isOpenOnSelect={setIsDropdownOpen} />
          </Dropdown>
          <Form onSubmit={handleSubmit(onSubmit)} onKeyDown={checkKeyDown}>
            <InputRequest
              {...register("url")}
              type={"text"}
              value={url}
              placeholder={"https://api.example.com/v1/products"}
              onChange={(e) => setUrl(e.target.value)}
              autoComplete={"off"}
              required={true}
              onFocus={handleFocus}
              // ref={inputRef}
            />
            <ButtonRequest type="submit">Send</ButtonRequest>
          </Form>
        </Wrapper>
      </Row1>
      <Row2>
        <TabMenuComponent
          menus={menuRequestTitles}
          menuActionIn={MenuAction.REQUEST}
        >
          <TabMenuContentRequest menu={menuRequestSelected.text} />
        </TabMenuComponent>
      </Row2>
    </>
  );
}
