import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { MenuAction } from "../../enums/MenuAction";
import { menuRequestTitles } from "../../utils/tabMenuTitles";

// Components
import TabMenuComponent from "../tabMenuComponent";
import TabMenuContentRequest from "../tabMenuContentRequest";

// Styles
import { Wrapper } from "../../styles/global";
import { Styles } from "./styles";
import { getRequestAction } from "../../redux/request/requestActions";

type FormDataRequest = {
  url: string;
};

export default function ManageRequest() {
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts");
  const { register, handleSubmit } = useForm<FormDataRequest>();
  const { menuRequestSelected } = useSelector(
    (rootReducer: any) => rootReducer.tabMenuReducer
  );
  const dispatch = useDispatch();

  const onSubmit = async (data: FormDataRequest) => {
    try {
      console.log(data);

      const response = await axios.get(data.url);

      dispatch(getRequestAction(response));

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Styles.Row1>
        <Wrapper>
          <Styles.Method>GET</Styles.Method>
          <Styles.Form onSubmit={handleSubmit(onSubmit)}>
            <Styles.InputRequest
              {...register("url")}
              type={"text"}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required={true}
            />
            <Styles.ButtonRequest type="submit">Send</Styles.ButtonRequest>
          </Styles.Form>
        </Wrapper>
      </Styles.Row1>
      <Styles.Row2>
        <TabMenuComponent
          menus={menuRequestTitles}
          menuActionIn={MenuAction.REQUEST}
        >
          <TabMenuContentRequest menu={menuRequestSelected.text} />
        </TabMenuComponent>
      </Styles.Row2>
    </>
  );
}
