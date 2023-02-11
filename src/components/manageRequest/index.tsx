import { AxiosResponse } from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { MenuAction } from "../../enums/MenuAction";
import { menuRequestTitles } from "../../utils/tabMenuTitles";
import { getRequestAction } from "../../redux/request/requestActions";
import axiosManager from "../../services/axiosManager";

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
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts");
  const { register, handleSubmit } = useForm<FormDataRequest>();

  const dispatch = useDispatch();

  const { menuRequestSelected } = useSelector(
    (rootReducer: any) => rootReducer.tabMenuReducer
  );

  const { httpMethod, bodyData } = useSelector(
    (rootReducer: any) => rootReducer.requestReducer
  );

  const onSubmit = async (data: FormDataRequest) => {
    try {
      // console.log(data);
      const response = await axiosManager(httpMethod, data.url, bodyData);

      dispatch(getRequestAction(response as AxiosResponse));

      console.log(response);
    } catch (error) {
      dispatch(getRequestAction(error.response));
      console.error(error);
    }
  };

  return (
    <>
      <Row1>
        <Wrapper>
          <Dropdown children={<MenuHttpMethod />} />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputRequest
              {...register("url")}
              type={"text"}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required={true}
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
