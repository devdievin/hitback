import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TabMenuRequest } from "../../enums/TabMenuTitles";
import { Wrapper } from "../../styles/global";
import TabMenuContentRequest from "../tabMenuContentRequest";
import TabMenuHeader from "../tabMenuHeader";
import { Styles } from "./styles";

type FormDataRequest = {
  url: string;
};

export default function ManageRequest() {
  const [url, setUrl] = useState("http://localhost:3000/api/posts");
  const { register, handleSubmit } = useForm<FormDataRequest>();

  const onSubmit = async (data: FormDataRequest) => {
    try {
      console.log(data);

      const response = await axios.get(data.url);

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Styles.InputGroup>
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
      </Styles.InputGroup>
      <Styles.TabMenu>
        <TabMenuHeader
          titles={[
            TabMenuRequest.BODY,
            TabMenuRequest.HEADERS,
            TabMenuRequest.AUTHORIZATION,
            TabMenuRequest.QUERY,
          ]}
        />
      </Styles.TabMenu>
      <Styles.Content>
        <TabMenuContentRequest menu={"other"} />
      </Styles.Content>
    </>
  );
}
