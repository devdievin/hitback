import { useState } from "react";
import { useForm } from "react-hook-form";
import { useThemeContext } from "../../hooks/useThemeContext";

// Components
import Input from "../input";
import AddIcon from "../svgIcon/addIcon";

// Styles
import { InputGroup, Row1, Row2, WorkspaceContent } from "./styles";
import { colors } from "../../styles/colors";

export default function Workspace() {
  const { state } = useThemeContext();
  const [filter, setFilter] = useState("");

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Row1>
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
      </Row1>

      <Row2>
        <InputGroup>
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
              <AddIcon
                width={36}
                height={36}
                fill={
                  state.themeName === "dark" ? colors.softWhite : colors.darkTwo
                }
              />
            </form>
          </div>
        </InputGroup>

        <WorkspaceContent>
          <div style={{ padding: "1rem" }}>Workspace</div>
        </WorkspaceContent>
      </Row2>
    </>
  );
}
