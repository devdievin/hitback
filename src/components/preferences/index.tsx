import { useEffect, useRef } from "react";
import { useThemeContext } from "../../hooks/useThemeContext";

// Components
import CloseIcon from "../svgIcon/closeIcon";
import Unavailable from "../unavailable";

// Styles
import { colors } from "../../styles/colors";
import {
  Container,
  Modal,
  ModalHeader,
  ModalContent,
  ButtonClose,
} from "./styles";

type PreferencesProps = {
  setModalStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Preferences({ setModalStatus }: PreferencesProps) {
  const { state } = useThemeContext();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener("click", handleClick);
    }, 0.5 * 1000);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = (event: any) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      console.log("Close modal");

      setModalStatus(false);
    }
  };

  const handleClose = () => {
    console.log("Close button modal");
    setModalStatus(false);
  };

  return (
    <Container>
      <Modal ref={modalRef}>
        <ModalHeader>
          Preferences
          <ButtonClose onClick={handleClose}>
            <CloseIcon
              width={28}
              height={28}
              fill={
                state.themeName === "dark" ? colors.softWhite : colors.darkTwo
              }
            />
          </ButtonClose>
        </ModalHeader>
        <ModalContent>
          <Unavailable />
        </ModalContent>
      </Modal>
    </Container>
  );
}
