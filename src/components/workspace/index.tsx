import { useState } from "react";
import { useForm } from "react-hook-form";
import { useThemeContext } from "../../hooks/useThemeContext";

// Components
import Input from "../input";
import AddIcon from "../svgIcon/addIcon";

// Styles
import {
  ButtonAdd,
  EnvGroup,
  EnvStatus,
  InputContainer,
  InputGroup,
  Row1,
  Row2,
  WorkspaceContent,
} from "./styles";
import { colors } from "../../styles/colors";

export default function Workspace() {
  const { state } = useThemeContext();
  const [filter, setFilter] = useState("");

  const { register, handleSubmit } = useForm();

  return (
    <>
      <Row1>
        <EnvGroup>
          Environment:
          <EnvStatus>Dev</EnvStatus>
        </EnvGroup>
      </Row1>

      <Row2>
        <InputContainer>
          <InputGroup>
            <Input
              register={register}
              type={"text"}
              name={"filter"}
              value={filter}
              placeholder="Search"
              onChange={(e) => setFilter(e.target.value)}
              disabled={true}
            />
            <ButtonAdd>
              <AddIcon
                width={36}
                height={36}
                fill={
                  state.themeName === "dark" ? colors.softWhite : colors.darkTwo
                }
              />
            </ButtonAdd>
          </InputGroup>
        </InputContainer>

        <WorkspaceContent>
          Workspace
        </WorkspaceContent>
      </Row2>
    </>
  );
}
