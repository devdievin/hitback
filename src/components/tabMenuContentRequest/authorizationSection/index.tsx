import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthorizationTypes } from "../../../enums/AuthorizationTypes";
import {
  setAuthorizationToken,
  setAuthorizationType,
  setHitbackHeaders,
} from "../../../redux/request/requestActions";
import { RootReducer } from "../../../redux/rootReducer";

// Components
import Dropdown from "../../dropdown";

// Styles
import {
  Container,
  DropItemMenu,
  DropMenuAuth,
  DropMenuWrapper,
  Label,
  TokenInput,
  TokenLabel,
  TokenWrapper,
} from "./styles";

export default function AuthorizationSection() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const { authorizationType, authorizationToken, requestHeaders } = useSelector(
    (rootReducer: RootReducer) => rootReducer.requestReducer
  );

  const handleMenuItemSelect = (item: AuthorizationTypes) => {
    dispatch(setAuthorizationType(item));

    dispatch(setAuthorizationToken(""));

    dispatch(
      setHitbackHeaders({
        ...requestHeaders,
        Authorization: null,
      })
    );
    setIsOpen(false);
  };

  const handleToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAuthorizationToken(e.target.value));

    dispatch(
      setHitbackHeaders({
        ...requestHeaders,
        Authorization: `Bearer ${e.target.value}`,
      })
    );
  };

  return (
    <Container>
      <DropMenuWrapper>
        <Label>Type:</Label>
        <Dropdown
          text={authorizationType}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
          <DropMenuAuth>
            <DropItemMenu
              onClick={() => handleMenuItemSelect(AuthorizationTypes.NONE)}
            >
              none
            </DropItemMenu>
            <DropItemMenu
              onClick={() => handleMenuItemSelect(AuthorizationTypes.BEARER)}
            >
              Bearer
            </DropItemMenu>
          </DropMenuAuth>
        </Dropdown>
      </DropMenuWrapper>

      {authorizationType === AuthorizationTypes.BEARER && (
        <TokenWrapper>
          <TokenLabel>Token</TokenLabel>
          <TokenInput
            type="text"
            placeholder="Your token here"
            value={authorizationToken}
            onChange={handleToken}
          />
        </TokenWrapper>
      )}
    </Container>
  );
}
