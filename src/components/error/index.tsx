import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showErrorAction } from "../../redux/errors/actionCreators";
import { colors } from "../../styles/colors";
import ErrorIcon from "../svgIcon/errorIcon";

// Styles
import { Card, LabelGroup, TextMessage } from "./styles";

type ErrorProps = {
  message: string;
};

export default function Error({ message }: ErrorProps) {
  const dispatch = useDispatch();
  const seconds_display = 7;

  useEffect(() => {
    setTimeout(() => {
      dispatch(showErrorAction({ status: false, message: "" }));
    }, seconds_display * 1000);
  }, []);

  return (
    <Card>
      <LabelGroup>
        <ErrorIcon width={20} height={20} fill={colors.red} />
        Error:
      </LabelGroup>
      <TextMessage>{message}</TextMessage>
    </Card>
  );
}
