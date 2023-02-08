import { useState } from "react";
import { useForm } from "react-hook-form";
import { colors } from "../../styles/colors";
import Button from "../button";
import Input from "../input";
import { Styles } from "./styles";

export default function Workspace() {
  const [filter, setFilter] = useState("");

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Styles.Row1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            // gap: "1rem",
            padding: "0 1rem",
            height: "100%",
          }}
        >
          <p>
            Environment:{" "}
            <span style={{ color: colors.green, fontWeight: "600" }}>Dev</span>
          </p>
        </div>
      </Styles.Row1>

      <Styles.Row2>
        <Styles.InputGroup>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "0 1rem",
            }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{ display: "flex", width: "100%", gap: "1rem" }}
            >
              <Input
                register={register}
                type={"text"}
                name={"filter"}
                value={filter}
                placeholder="Search"
                onChange={(e) => setFilter(e.target.value)}
              />

              <img
                src="./icons/icon-add-circle.svg"
                alt="add"
                width={36}
                height={36}
              />
            </form>
          </div>
        </Styles.InputGroup>

        <Styles.Workspace>
          <div style={{ padding: "1rem" }}>Workspace</div>
        </Styles.Workspace>
      </Styles.Row2>
    </>
  );
}
